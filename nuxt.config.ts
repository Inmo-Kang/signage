// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  ssr: false,
  css: [ 
    '~/styles/global.css'
  ],
    // 👇 @nuxt/fonts 설정 추가
  fonts: {
    families: [
      // Pretendard 폰트 설정
      { 
        name: 'Pretendard', 
        provider: 'local',
        src: '/fonts/Pretendard-*.subset.woff' // 와일드카드를 사용해 여러 웨이트를 한 번에 등록
      },
      // Material Icons 폰트 설정
      { 
        name: 'Material Icons Outlined', 
        provider: 'local',
        src: '/fonts/MaterialIconsOutlined-Regular.otf'
      }
    ]
  },
})