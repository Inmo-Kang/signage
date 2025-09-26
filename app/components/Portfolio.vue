<template>
  <div class="portfolio-slideshow-container">
      <img
        :key="currentImage"
        :src="currentImage"
        alt="Portfolio image"
        class="portfolio-image"
      />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { portfolioImages } from '~/data/portfoliolist';

const images = ref(portfolioImages);
const currentImageIndex = ref(0);
const currentImage = ref(images.value[currentImageIndex.value]);

let timer = null;
const transitionDuration = 5000; // 5초마다 이미지 전환

// 다음 이미지를 미리 로드하고 '디코딩'까지 완료하는 비동기 함수
const preloadAndDecodeNextImage = async () => {
  const nextImageIndex = (currentImageIndex.value + 1) % images.value.length;
  const imageUrl = images.value[nextImageIndex];

  const img = new Image();
  img.src = imageUrl;
  try {
    // 이 부분이 핵심! 이미지를 화면에 보이지 않는 상태에서 미리 디코딩합니다.
    await img.decode(); 
  } catch (error) {
    console.error('Image decoding failed:', error);
  }
};

const startSlideshow = () => {
  timer = setInterval(() => {
    // 다음 이미지로 인덱스를 업데이트하고
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
    currentImage.value = images.value[currentImageIndex.value];
    
    // 화면이 전환되자마자, 그 다음 이미지를 배경에서 준비시킵니다.
    preloadAndDecodeNextImage();
  }, transitionDuration);
};

onMounted(async () => {
  if (images.value.length > 1) {
    // 슬라이드쇼를 시작하기 전에, 첫 번째로 보일 '다음' 이미지를 미리 준비합니다.
    await preloadAndDecodeNextImage();
    startSlideshow();
  }
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
/* 슬라이드쇼 컨테이너: 전체 화면을 꽉 채움 */
.portfolio-slideshow-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: var(--color-primary-neutral-dark-gray);
}

/* 이미지 스타일: 컨테이너에 맞춰 크기 조절 */
.portfolio-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지 비율 유지하며 컨테이너에 맞춤 */
  /* 이 이미지는 독립된 레이어에서 처리하도록 GPU에 힌트 제공 */
  transform: translateZ(0); 
  /* 앞으로 opacity 속성이 변경될 것이라고 미리 알려주어 최적화 유도 */
  will-change: opacity;
}
</style>