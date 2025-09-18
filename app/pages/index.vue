<template>
  <div class="digital-signage">
    <Transition name="fade" mode="out-in">
      <component
        :is="activePage.component"
        v-bind="activePage.props"
        :key="activePageIndex"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';

// 데이터 파일 import
import { schedulesData } from '~/data/schedules';
import { portfolioImages } from '~/data/portfoliolist';

// 컴포넌트 import (하나로 통합!)
import ScheduleDisplay from '~/components/opendates/ScheduleDisplay.vue'; 
import Portfolio from '~/components/Portfolio.vue';
import Youtube from '~/components/Youtube.vue';

// 각 화면에 대한 정보를 객체로 묶어서 관리합니다.
const signagePages = [
  {
    component: ScheduleDisplay, // shallowRef() 제거
    duration: 20000,
    props: {
      title: schedulesData.professional.title,
      schedules: schedulesData.professional.schedules,
      courseNameMap: {
        'pro-ad-photo-am': '광고사진 (오전반)',
        'pro-ad-photo-pm': '광고사진 (저녁반)',
        'pro-ad-photo-transfer-am': '광고사진 편입반 (오전반)',
        'pro-ad-photo-transfer-pm': '광고사진 편입반 (저녁반)',
      },
      theme: {
        bgColor: 'var(--color-subtle-accent-light-orange)',
        textColor: 'var(--color-primary-accent-brand-orange)',
        accentColor: 'var(--color-primary-accent-brand-orange)',
      }
    }
  },
  {
    component: ScheduleDisplay, // shallowRef() 제거
    duration: 20000,
    props: {
      title: schedulesData.sappaPlus.title,
      schedules: schedulesData.sappaPlus.schedules,
      courseNameMap: {
        'sappa-plus-film-darkroom-intro': '필름 암실 기초',
        'sappa-plus-lightroom-basic': '라이트룸 기초',
        'sappa-plus-lightroom-intermediate': '라이트룸 중급 (Classic)',
        'sappa-plus-technician-certificate-practical': '사진기능사 자격증 대비반 (실기)',
        'sappa-plus-cyanotype': '아날로그 블루 프린트: Cyanotype',
      },
      theme: {
        bgColor: 'var(--color-subtle-accent-light-orange)',
        textColor: 'var(--color-primary-accent-brand-orange)',
        accentColor: 'var(--color-primary-accent-brand-orange)',
      }
    }
  },
  {
    component: ScheduleDisplay, // shallowRef() 제거
    duration: 20000,
    props: {
      title: schedulesData.hobby.title,
      schedules: schedulesData.hobby.schedules,
      courseNameMap: {
        'hobby-intro': '취미사진 입문반',
        'hobby-intermediate': '취미사진 중급반',
        'hobby-day-shooting': '주간실전 촬영반',
        'hobby-night-shooting': '야경사진 촬영반',
      },
      theme: {
        bgColor: 'var(--color-subtle-accent-light-blue)',
        textColor: 'var(--color-secondary-accent-brand-blue)',
        accentColor: 'var(--color-secondary-accent-brand-blue)',
      }
    }
  },
  {
    component: Portfolio, // shallowRef() 제거
    duration: 30000,
    props: {
      portfolioImages: portfolioImages,
    }
  },
  {
    component: Youtube, // shallowRef() 제거
    duration: 60000,
    props: {}
  },
];

const activePageIndex = ref(0);
const activePage = computed(() => signagePages[activePageIndex.value]);
let timer = null;

const startSignage = () => {
  timer = setTimeout(() => {
    activePageIndex.value = (activePageIndex.value + 1) % signagePages.length;
    startSignage();
  }, signagePages[activePageIndex.value].duration);
};

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