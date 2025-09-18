<template>
  <div class="portfolio-slideshow-container">
    <Transition name="fade" mode="out-in">
      <NuxtImg
        :key="currentImage"
        :src="currentImage"
        alt="Portfolio image"
        class="portfolio-image"
        format="webp"
        quality="80"
        placeholder
        loading="lazy"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// portfolioImages 데이터 파일을 가져옵니다.
import { portfolioImages } from '~/data/portfoliolist';

const images = ref(portfolioImages);

const currentImageIndex = ref(0);
const currentImage = ref(images.value[currentImageIndex.value]);

let timer = null;
const transitionDuration = 5000; // 5초마다 이미지 전환

const startSlideshow = () => {
  timer = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
    currentImage.value = images.value[currentImageIndex.value];
  }, transitionDuration);
};

onMounted(() => {
  if (images.value.length > 1) {
    startSlideshow();
  } else if (images.value.length === 1) {
    currentImage.value = images.value[0];
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
}

/* Vue Transition CSS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>