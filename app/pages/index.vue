<template>
  <div class="digital-signage">
    <Transition name="fade" mode="out-in">
      <component
        v-if="activeComponent"
        :is="activeComponent"
        :schedulesData="
          activeComponent.type === Professional ||
          activeComponent.type === SappaPlus ||
          activeComponent.type === Hobby
            ? schedulesData
            : null
        "
        :portfolioImages="
          activeComponent.type === Portfolio ? portfolioImages : null
        "
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';

// 개강일정 데이터 파일
import { schedulesData } from '~/data/schedules';
// 포트폴리오 이미지 목록 데이터 파일
import { portfolioImages } from '~/data/portfoliolist';

// 각 콘텐츠에 해당하는 컴포넌트들을 가져옵니다.
import Professional from '~/components/opendates/Professional.vue';
import SappaPlus from '~/components/opendates/SappaPlus.vue';
import Hobby from '~/components/opendates/Hobby.vue';
import Portfolio from '~/components/Portfolio.vue';
import Youtube from '~/components/Youtube.vue';

// 보여줄 컴포넌트 목록과 각 컴포넌트의 노출 시간을 정의합니다.
const components = [
  shallowRef(Professional), // 20초 노출
  shallowRef(SappaPlus),    // 20초 노출
  shallowRef(Hobby),        // 20초 노출
  shallowRef(Portfolio),    // 30초 노출 (이미지 슬라이드쇼)
  shallowRef(Youtube)       // 60초 노출 (동영상 재생)
];

const exposureDurations = [
  20000, // Professional.vue
  20000, // SappaPlus.vue
  20000, // Hobby.vue
  30000, // Portfolio.vue
  60000, // Youtube.vue
];

const activeComponent = ref(components[0]);
let componentIndex = 0;
let timer = null;

// 타이머를 시작하고 컴포넌트를 순차적으로 전환하는 함수
const startSignage = () => {
  timer = setTimeout(() => {
    componentIndex = (componentIndex + 1) % components.length;
    activeComponent.value = components[componentIndex];
    startSignage(); // 재귀 호출로 다음 전환 예약
  }, exposureDurations[componentIndex]);
};

// 페이지가 마운트되면 타이머를 시작하고, 언마운트되면 타이머를 정리합니다.
onMounted(() => {
  startSignage();
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<style scoped>
/*
  전체 페이지 레이아웃 및 스타일 정의
  전체 화면을 채우고, 텍스트가 중앙에 오도록 설정합니다.
*/
.digital-signage {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 스크롤바가 생기지 않도록 설정 */
  font-family: 'Pretendard', sans-serif;
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