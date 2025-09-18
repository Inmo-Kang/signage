<template>
  <div class="schedule-section professional">
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
    required: false, // 이제 필수가 아닙니다.
  }
});
//
// props.schedulesData가 null이거나 schedulesData.professional이 null일 경우
// 빈 객체를 반환하여 오류를 원천적으로 방지합니다.
const scheduleData = computed(() => {
  return (props.schedulesData && props.schedulesData.professional)
    ? props.schedulesData.professional
    : { title: '', schedules: [] };
});

// '모집중'인 데이터만 필터링하는 computed 속성
const filteredSchedules = computed(() => {
  return scheduleData.value.schedules.filter(course => course.status === '모집중');
});

// courseId에 따라 한글 이름을 반환하는 헬퍼 함수
const getCourseName = (courseId) => {
  const courseNames = {
    'pro-ad-photo-am': '광고사진 (오전반)',
    'pro-ad-photo-pm': '광고사진 (저녁반)',
    'pro-ad-photo-transfer-am': '광고사진 편입반 (오전반)',
    'pro-ad-photo-transfer-pm': '광고사진 편입반 (저녁반)',
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