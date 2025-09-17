<template>
  <div class="youtube-player-container">
    <div
      v-if="currentVideo"
      class="video-wrapper"
      :class="{'is-short': currentVideo.type === 'short'}"
    >
      <iframe
        :src="videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// 여기에 보여줄 영상 목록을 직접 정의합니다.
// 학원 유튜브 채널의 영상 ID와 타입을 추가하세요.
const videos = [
  { id: 'YrdEvUv2tNg', type: 'video' }, // 일반 동영상
  { id: 'zzowgRvlIbQ', type: 'short' },  // 쇼츠
  { id: '2lCOaKnO9JY', type: 'video' },
  { id: '8jUyqNpnDQA', type: 'video' },
  { id: '6gee3WMrOxQ', type: 'video' },
  { id: 'vyT-kACS9nI', type: 'short' }
];

const currentVideoIndex = ref(0);
const currentVideo = computed(() => videos[currentVideoIndex.value]);

// 현재 비디오의 임베드 URL을 계산합니다.
const videoUrl = computed(() => {
  const video = currentVideo.value;
  if (!video) return '';

  let baseUrl = 'https://www.youtube.com/embed/';
  let params = 'autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1';

  if (video.type === 'short') {
    // 쇼츠는 일반 동영상 임베딩 방식과 동일하게 작동합니다.
    baseUrl = `https://www.youtube.com/embed/${video.id}`;
  } else {
    baseUrl = `https://www.youtube.com/embed/${video.id}`;
  }

  return `${baseUrl}?${params}`;
});

let timer = null;

// 다음 비디오로 넘어가는 함수
const playNextVideo = () => {
  // 현재 비디오의 예상 재생 시간 (예시)
  const duration = currentVideo.value.type === 'short' ? 15000 : 90000; // 쇼츠: 15초, 일반 동영상: 1분 30초
  
  timer = setTimeout(() => {
    currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length;
    playNextVideo(); // 재귀 호출로 다음 영상 전환 예약
  }, duration);
};

// 컴포넌트 마운트 시 자동 재생 시작
onMounted(() => {
  playNextVideo();
});

// 컴포넌트 언마운트 시 타이머 정리
onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<style scoped>
/* 전체 컨테이너: 화면을 꽉 채우고 중앙 정렬 */
.youtube-player-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary-neutral-dark-gray);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 영상 컨테이너 기본 스타일 */
.video-wrapper {
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 50.625%; /* 16:9 비율 (9 / 16 * 90%) */
  overflow: hidden;
}

/* 쇼츠를 위한 세로 비율 스타일 */
.video-wrapper.is-short {
  width: 40%; /* 화면 너비의 40%로 조정 */
  padding-bottom: 71.11%; /* 16:9 비율 (16 / 9 * 40%) */
}

/* iframe을 부모 컨테이너에 꽉 채우기 */
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 코드 설명 📄

* **영상 데이터:** 스크립트 상단 `videos` 배열에 학원 유튜브 영상 ID와 타입을 직접 정의했습니다. **'VIDEO\_ID\_1' 부분을 실제 영상 ID로 바꾸고, 'video' 또는 'short' 타입을 명시**하면 됩니다.
* **컴퓨티드(Computed) 속성:** `videoUrl`은 `currentVideo`의 ID를 기반으로 임베드 URL을 동적으로 생성합니다. `autoplay=1&mute=1&controls=0` 옵션을 넣어 소리 없이 자동 재생되고 제어바가 보이지 않게 했습니다.
* **자동 전환:** `playNextVideo` 함수는 `setTimeout`을 이용해 다음 영상을 예약합니다. 쇼츠는 짧은 만큼 15초 뒤, 일반 영상은 1분 30초 뒤에 다음 영상으로 넘어가도록 예시 시간을 설정했습니다.
* **반응형 레이아웃:** CSS의 **`padding-bottom` 꼼수**를 사용해 영상의 가로세로 비율을 유지했습니다. `.is-short` 클래스가 붙으면 `width`와 `padding-bottom` 값을 조정하여 쇼츠 영상이 세로 비율로 잘 보이게 됩니다. `v-if`를 사용해 영상이 전환될 때 `<iframe>`을 다시 렌더링함으로써 깨끗한 화면을 보장합니다.

이 파일을 `nuxt4-signage/components/Youtube.vue` 경로에 저장하고, `index.vue`에 추가하면 바로 동작합니다.
*/
</style>
