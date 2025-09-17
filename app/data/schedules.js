// sappa-photo-academy/data/schedules.js

export const schedulesData = {
  // 'professional' 과정은 고유 ID 'professional'을 사용합니다.
  /* 작성 샘플
        {
        courseId: 'pro-ad-photo-am', // 광고사진 (오전반)
        status: '모집중', '모집예정', '모집마감', '마감임박',
        displayItems: [
          { label: '개강일', value: '2025년 9월 1일 월요일' },
          { label: '수업요일', value: '월, 화, 목' },
          { label: '수업시간', value: '오전 10:00 - 오후 1:00' },
          { label: '수강기간', value: '8개월 과정' },
          { label: '정원', value: '12명' },
          { label: '수강료', value: '600,000원/월', isPrice: true },
        ],
      },
  */
  professional: {
    title: '취창업 과정 개강',
    schedules: [
      {
        courseId: 'pro-ad-photo-am', // 광고사진 (오전반)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 11월 3일 월요일' },
          { label: '수업요일', value: '월, 화, 목' },
          { label: '수업시간', value: '오전 10:00 - 오후 1:00' },
          { label: '수강기간', value: '8개월 과정' },
          { label: '정원', value: '12명' },
          { label: '수강료', value: '600,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'pro-ad-photo-pm', // 광고사진 (저녁반)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 9월 29일 월요일' },
          { label: '수업요일', value: '월, 화, 목' },
          { label: '수업시간', value: '오후 7:00 - 오후 10:00' },
          { label: '수강기간', value: '8개월 과정' },
          { label: '정원', value: '12명' },
          { label: '수강료', value: '600,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'pro-ad-photo-transfer-am', // 편입반
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 11월 4일 화요일' },
          { label: '수업요일', value: '화, 수, 금' },
          { label: '수업시간', value: '오전 10:00 - 오후 1:00' },
          { label: '수강기간', value: '6개월 과정' },
          { label: '정원', value: '12명' },
          { label: '수강료', value: '600,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'pro-ad-photo-transfer-pm', // 편입반
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 9월 30일 화요일' },
          { label: '수업요일', value: '화, 수, 금' },
          { label: '수업시간', value: '오후 7:00 - 오후 10:00' },
          { label: '수강기간', value: '6개월 과정' },
          { label: '정원', value: '12명' },
          { label: '수강료', value: '600,000원/월', isPrice: true },
        ],
      }
    ]
  },
  
  // SAPPA+ 과정
  sappaPlus: {
    title: 'SAPPA+ 과정',
    schedules: [
      {
        courseId: 'sappa-plus-film-darkroom-intro', // 필름 암실 기초
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 15일 수요일' },
          { label: '수업요일', value: '수요일' },
          { label: '수업시간', value: '오후 2:00 - 오후 5:00' },
          { label: '수강기간', value: '2개월 과정' }, // classDatum 참조
          { label: '정원', value: '5명' },
          { label: '수강료', value: '250,000원/월', isPrice: true }, // classDatum 참조
        ],
      },
      {
        courseId: 'sappa-plus-film-darkroom-intermediate', // 필름 암실 중급
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도 공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '2개월 과정' },
          { label: '정원', value: '5명' },
          { label: '수강료', value: '250,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-wedding', // 웨딩 스튜디오 및 본식 촬영
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도 공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '2개월 과정' }, // classDatum 참조
          { label: '정원', value: '10명' },
          { label: '수강료', value: '250,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-exhibition-planning', // 사진전시 기획
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도 공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '6주 과정' },
          { label: '정원', value: '8명' },
          { label: '수강료', value: '480,000원/6회', isPrice: true }, // 6회 과정에 맞춰 추정
        ],
      },
      {
        courseId: 'sappa-plus-lightroom-basic', // 라이트룸 기초
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 11일 토요일' },
          { label: '수업요일', value: '토요일' },
          { label: '수업시간', value: '오전 10:00 - 오후 1:00' },
          { label: '수강기간', value: '1개월 과정' },
          { label: '정원', value: '8명' },
          { label: '수강료', value: '250,000원', isPrice: true }, // classDatum 참조
        ],
      },
      {
        courseId: 'sappa-plus-lightroom-intermediate', // 라이트룸 중급 (Classic)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 11일 토요일' },
          { label: '수업요일', value: '토요일' },
          { label: '수업시간', value: '오후 2:00 - 오후 5:00' },
          { label: '수강기간', value: '2개월 과정' },
          { label: '정원', value: '8명' },
          { label: '수강료', value: '250,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-portfolio-production', // 포트폴리오 제작
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도 공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '1개월 과정' },
          { label: '정원', value: '6명' },
          { label: '수강료', value: '250,000원', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-technician-certificate-theory', // 사진기능사 자격증 대비반
        status: '모집중', // 시험 일정에 맞춰 '모집예정'
        displayItems: [
          { label: '개강일', value: '별도 공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '원데이클래스 (2시간)' },
          { label: '정원', value: '15명' },
          { label: '수강료', value: '10,000원 + 23,400원(교재비)', isPrice: true }, // classDatum 참조
        ],
      },
      {
        courseId: 'sappa-plus-technician-certificate-practical', // 사진기능사 자격증 대비반
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '2025년 11월 일요일' },
          { label: '수업요일', value: '일요일' },
          { label: '수업시간', value: '오전 10:00 - 오후 7:00' },
          { label: '수강기간', value: '원데이클래스 (2시간)' },
          { label: '정원', value: '6명' },
          { label: '수강료', value: '250,000원', isPrice: true }, // classDatum 참조
        ],
      },
      {
        courseId: 'sappa-plus-ai-product-photo', // AI를 활용한 쇼핑몰 제품 촬영
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도 공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '6주 과정' },
          { label: '정원', value: '8명' },
          { label: '수강료', value: '150,000원/3회', isPrice: true }, // 6회 과정에 맞춰 추정
        ],
      },
      {
        courseId: 'sappa-plus-product-photo', // 스마트스토어 & 인스타그램 제품사진 (원데이)
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '원데이클래스 (3시간)' },
          { label: '정원', value: '10명' },
          { label: '수강료', value: '35,000원', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-photo-essay', // 감성 가득, 나만의 포토 에세이 만들기 (원데이)
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '원데이클래스 (3시간)' },
          { label: '정원', value: '10명' },
          { label: '수강료', value: '40,000원', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-contemporary-photo-intro', // 현대 미술 사진 맛보기 (원데이)
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '원데이클래스 (3시간)' },
          { label: '정원', value: '10명' },
          { label: '수강료', value: '40,000원', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-cyanotype', // 아날로그 블루 프린트: Cyanotype (원데이)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 9월 19일 금요일' }, // 원데이 클래스, 가까운 날짜로 설정
          { label: '수업요일', value: '금요일' },
          { label: '수업시간', value: '오후 2:00 - 오후 5:00' },
          { label: '수강기간', value: '원데이클래스 (3시간)' },
          { label: '정원', value: '5명' },
          { label: '수강료', value: '30,000원', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-sappa-sapiens', // SAPPA신잡: 테마로 보는 현대 미술과 사진 (원데이)
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '원데이클래스 (3시간)' },
          { label: '정원', value: '10명' },
          { label: '수강료', value: '30,000원', isPrice: true },
        ],
      },
      {
        courseId: 'sappa-plus-travel-photo', // 여행사진 촬영부터 보정까지 (원데이)
        status: '모집예정',
        displayItems: [
          { label: '개강일', value: '별도공지' },
          { label: '수업요일', value: '별도 공지' },
          { label: '수업시간', value: '별도 공지' },
          { label: '수강기간', value: '원데이클래스 (3시간)' },
          { label: '정원', value: '10명' },
          { label: '수강료', value: '30,000원', isPrice: true },
        ],
      }
    ]
  },

  // 취미 사진 과정
  hobby: {
    title: '취미 사진 과정',
    schedules: [
      {
        courseId: 'hobby-intro', // 취미사진 입문반 (화요반)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 14일 화요일' },
          { label: '수업요일', value: '화요일' },
          { label: '수업시간', value: '오후 6:30 - 오후 8:30' }, // classDatum 참조
          { label: '수강기간', value: '1개월 과정' }, // classDatum 참조
          { label: '정원', value: '10명' },
          { label: '수강료', value: '200,000원', isPrice: true },
        ],
      },
      {
        courseId: 'hobby-intermediate', // 취미사진 중급반 (수요반)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 15일 수요일' },
          { label: '수업요일', value: '수요일' },
          { label: '수업시간', value: '오후 6:30 - 오후 8:30' }, // classDatum 참조
          { label: '수강기간', value: '2개월 과정' }, // classDatum 참조
          { label: '정원', value: '10명' },
          { label: '수강료', value: '250,000원/월', isPrice: true }, // 월 기준
        ],
      },
      {
        courseId: 'hobby-day-shooting', // 주간실전 촬영반 (토요반)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 18일 토요일' },
          { label: '수업요일', value: '토요일' },
          { label: '수업시간', value: '오전 10:00 - 오후 12:00' }, // classDatum 참조
          { label: '수강기간', value: '∞' }, // classDatum 참조
          { label: '정원', value: '10명' },
          { label: '수강료', value: '250,000원/월', isPrice: true },
        ],
      },
      {
        courseId: 'hobby-night-shooting', // 야경사진 촬영반 (목요반)
        status: '모집중',
        displayItems: [
          { label: '개강일', value: '2025년 10월 16일 목요일' },
          { label: '수업요일', value: '목요일' },
          { label: '수업시간', value: '오후 7:00 - 오후 9:00' }, // classDatum 참조
          { label: '수강기간', value: '∞' }, // classDatum 참조
          { label: '정원', value: '10명' },
          { label: '수강료', value: '250,000원/월', isPrice: true },
        ],
      },
    ]
  }
};