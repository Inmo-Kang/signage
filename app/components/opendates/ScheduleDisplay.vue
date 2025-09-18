<template>
  <div class="schedule-section" :style="{ backgroundColor: theme.bgColor }">
    <div class="section-title">
      <h1 :style="{ color: theme.textColor }">{{ title }}</h1>
    </div>
    <div class="schedule-list-container">
      <ul class="schedule-list">
        <li v-for="course in filteredSchedules" :key="course.courseId" class="course-item">
          <div class="course-info-box">
            <div class="course-status-badge" :class="course.status" :style="badgeStyle(course.status)">
              {{ course.status }}
            </div>
            <div class="course-details">
              <div class="course-id">{{ getCourseName(course.courseId) }}</div>
              <ul class="display-items">
                <li v-for="item in course.displayItems" :key="item.label" class="display-item">
                  <div class="label">{{ item.label }}</div>
                  <div class="value" :class="{ 'is-price': item.isPrice }" :style="priceStyle(item.isPrice)">{{ item.value }}</div>
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
  // 컴포넌트로 전달될 데이터 props 정의
  title: { type: String, required: true },
  schedules: { type: Array, required: true },
  courseNameMap: { type: Object, required: true },
  theme: { type: Object, required: true },
});

// '모집중'인 데이터만 필터링
const filteredSchedules = computed(() => {
  return props.schedules.filter(course => course.status === '모집중');
});

// courseId에 따라 한글 이름 반환
const getCourseName = (courseId) => {
  return props.courseNameMap[courseId] || '과정명 없음';
};

// 동적 스타일링을 위한 computed 속성
const badgeStyle = (status) => {
  if (status === '모집중') {
    return { backgroundColor: props.theme.accentColor };
  }
  return {}; // 다른 상태는 기존 CSS 클래스에 맡김
};

const priceStyle = (isPrice) => {
  if (isPrice) {
    return { color: props.theme.accentColor };
  }
  return {};
};
</script>

<style scoped>
/* 기존 Professional.vue, Hobby.vue 등에서 사용하던 CSS를 그대로 가져옵니다. */
/* 테마색 관련 부분은 동적 스타일로 처리되므로 일부 수정됩니다. */
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
}

.section-title h1 {
  font-size: 3rem;
  font-weight: 800;
}

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

/* '모집중' 상태는 이제 동적 스타일로 처리됩니다. */
.course-status-badge.모집예정 {
  background-color: var(--color-secondary-neutral-medium-gray-1);
}
.course-status-badge.모집마감 {
  background-color: var(--color-primary-neutral-dark-gray);
}
.course-status-badge.마감임박 {
  background-color: #e53e3e;
}

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
}
</style>