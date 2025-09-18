<template>
  <div class="youtube-player-container">
    <div ref="playerDiv" class="video-wrapper-placeholder"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

// 보여줄 영상 목록
const videos = [
  { id: 'YrdEvUv2tNg', type: 'video' }, // 일반 동영상
  { id: 'zzowgRvlIbQ', type: 'short' },  // 쇼츠
  { id: '2lCOaKnO9JY', type: 'video' },
  { id: '8jUyqNpnDQA', type: 'video' },
  { id: '6gee3WMrOxQ', type: 'video' },
  { id: 'vyT-kACS9nI', type: 'short' }
];

const playerDiv = ref(null); // template의 div를 참조하기 위한 ref
let player = null; // YT.Player 인스턴스를 저장할 변수
let currentVideoIndex = 0;

// 다음 비디오를 재생하는 함수
const playNextVideo = () => {
  if (!player || videos.length === 0) return;
  
  // 인덱스를 순환시킵니다.
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  const nextVideoId = videos[currentVideoIndex].id;
  
  // 다음 비디오를 로드하고 재생합니다.
  player.loadVideoById(nextVideoId);
};


// YouTube 플레이어 API의 이벤트 핸들러
const onPlayerStateChange = (event) => {
  // event.data가 0이면 영상 재생이 끝났다는 의미입니다.
  if (event.data === window.YT.PlayerState.ENDED) {
    playNextVideo();
  }
};

// YouTube 플레이어를 생성하는 함수
const createPlayer = () => {
  const video = videos[currentVideoIndex];
  
  // 영상 타입에 따라 플레이어 크기를 동적으로 결정합니다.
  const isShort = video.type === 'short';
  const playerWidth = isShort ? window.innerHeight * 9 / 16 : window.innerWidth * 0.9;
  const playerHeight = isShort ? window.innerHeight : window.innerWidth * 0.9 * 9 / 16;
  
  player = new window.YT.Player(playerDiv.value, {
    height: playerHeight,
    width: playerWidth,
    videoId: video.id,
    playerVars: {
      'autoplay': 1,
      'mute': 1,
      'controls': 0,
      'rel': 0,
      'showinfo': 0,
      'loop': 0, // 루프는 직접 제어하므로 0으로 설정
      'playsinline': 1
    },
    events: {
      'onReady': (event) => event.target.playVideo(),
      'onStateChange': onPlayerStateChange
    }
  });
};


// 컴포넌트가 마운트되었을 때 실행됩니다.
onMounted(() => {
  // YouTube API 스크립트가 이미 로드되었는지 확인합니다.
  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    // 스크립트가 없다면 동적으로 추가합니다.
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // API가 로드되면 onYouTubeIframeAPIReady 함수가 자동으로 호출됩니다.
    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };
  }
});

// 컴포넌트가 언마운트될 때 플레이어를 정리합니다.
onUnmounted(() => {
  if (player && typeof player.destroy === 'function') {
    player.destroy();
  }
});
</script>

<style scoped>
.youtube-player-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary-neutral-dark-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 플레이어가 삽입될 div의 기본 스타일 */
.video-wrapper-placeholder {
  /* 크기는 스크립트에서 동적으로 설정됩니다. */
}
</style>