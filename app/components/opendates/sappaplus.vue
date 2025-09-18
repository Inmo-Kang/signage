<template>
  <div class="schedule-section sappa-plus">
    <div class="section-title">
      <h1>{{ scheduleData.title }}</h1>
    </div>
    <div class="schedule-list-container">
      <ul class="schedule-list">
        <li v-for="course in filteredSchedules" :key="course.courseId" class="course-item">
          <div class="course-info-box">
            <div class="course-status-badge" :class="course.status">
              {{ course.status }}
            </div>
            <div class="course-details">
              <div class="course-id">{{ getCourseName(course.courseId) }}</div>
              <ul class="display-items">
                <li v-for="item in course.displayItems" :key="item.label" class="display-item">
                  <div class="label">{{ item.label }}</div>
                  <div class="value" :class="{ 'is-price': item.isPrice }">{{ item.value }}</div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  schedulesData: {
    type: Object,
    required: false,
  }
});
//
const scheduleData = computed(() => {
  return (props.schedulesData && props.schedulesData.sappaPlus)
    ? props.schedulesData.sappaPlus
    : { title: '', schedules: [] };
});

const filteredSchedules = computed(() => {
  return scheduleData.value.schedules.filter(course => course.status === '모집중');
});

const getCourseName = (courseId) => {
  const courseNames = {
    'sappa-plus-film-darkroom-intro': '필름 암실 기초',
    'sappa-plus-film-darkroom-intermediate': '필름 암실 중급',
    'sappa-plus-wedding': '웨딩 스튜디오 및 본식 촬영',
    'sappa-plus-exhibition-planning': '사진전시 기획',
    'sappa-plus-lightroom-basic': '라이트룸 기초',
    'sappa-plus-lightroom-intermediate': '라이트룸 중급 (Classic)',
    'sappa-plus-portfolio-production': '포트폴리오 제작',
    'sappa-plus-technician-certificate-theory': '사진기능사 자격증 대비반 (이론)',
    'sappa-plus-technician-certificate-practical': '사진기능사 자격증 대비반 (실기)',
    'sappa-plus-ai-product-photo': 'AI를 활용한 쇼핑몰 제품 촬영',
    'sappa-plus-product-photo': '스마트스토어 & 인스타그램 제품사진',
    'sappa-plus-photo-essay': '감성 가득, 나만의 포토 에세이 만들기',
    'sappa-plus-contemporary-photo-intro': '현대 미술 사진 맛보기',
    'sappa-plus-cyanotype': '아날로그 블루 프린트: Cyanotype',
    'sappa-plus-sappa-sapiens': 'SAPPA신잡: 테마로 보는 현대 미술과 사진',
    'sappa-plus-travel-photo': '여행사진 촬영부터 보정까지',
  };
  return courseNames[courseId] || '과정명 없음';
};
</script>

<style scoped>
/* 섹션 공통 스타일 */
.schedule-section {
  width: 100%;
  height: 100%;
  padding: 5rem 6rem;
  color: var(--color-primary-neutral-dark-gray);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background-color: var(--color-subtle-accent-light-orange);
}

.section-title h1 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-primary-accent-brand-orange);
}

/* 리스트 컨테이너 스타일 */
.schedule-list-container {
  width: 100%;
  overflow-y: auto;
  padding-right: 1rem;
}

.schedule-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.course-item {
  width: 100%;
}

/* 코스 정보 박스 스타일 */
.course-info-box {
  background-color: var(--color-primary-neutral-white);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 상태 배지 스타일 */
.course-status-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary-neutral-white);
  border-radius: 20px;
  transform: rotate(5deg);
}

.course-status-badge.모집중 {
  background-color: var(--color-primary-accent-brand-orange);
}

.course-status-badge.모집예정 {
  background-color: var(--color-secondary-neutral-medium-gray-1);
}

.course-status-badge.모집마감 {
  background-color: var(--color-primary-neutral-dark-gray);
}

.course-status-badge.마감임박 {
  background-color: #e53e3e; /* Red color */
}

/* 코스 상세 정보 스타일 */
.course-id {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary-neutral-dark-gray);
}

.display-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.display-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
}

.label {
  font-weight: 500;
  color: var(--color-secondary-neutral-medium-gray-1);
}

.value {
  font-weight: 600;
  color: var(--color-primary-neutral-dark-gray);
}

.value.is-price {
  font-weight: 700;
  color: var(--color-primary-accent-brand-orange);
}
</style>