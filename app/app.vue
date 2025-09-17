<template>
  <div class="digital-signage-app">
    <NuxtPage />
  </div>
</template>

<style>
/*
  전역 스타일링
  :root 변수는 global.css에서 이미 정의되어 있으므로 사용 가능
*/
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 스크롤바가 생기지 않도록 설정 */
}

.digital-signage-app {
  width: 100vw;
  height: 100vh;
  /* global.css가 적용되지 않았다면 폰트 설정을 여기에 추가 */
  /* font-family: 'Pretendard', sans-serif; */
}
</style>