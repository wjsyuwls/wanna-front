let table1 = [
  {
    id: 0,
    num: 1,
    title: '낙조마을',
    writer: '우영우',
    grade: '4.6',
    Lv: 'Lv.7',
    date: '22.07.11',
  },
  {
    id: 1,
    num: 2,
    title: '램지버거',
    writer: '고든램지',
    grade: '4.8',
    Lv: 'Lv.12',
    date: '22.07.13',
  },
  {
    id: 2,
    num: 3,
    title: '밤 제주도',
    writer: '하르방',
    grade: '4.7',
    Lv: 'Lv.19',
    date: '22.07.15',
  },
  {
    id: 3,
    num: 4,
    title: '홍대 맛집',
    writer: '홍익인간',
    grade: '4.9',
    Lv: 'Lv.22',
    date: '22.07.17',
  },
  {
    id: 4,
    num: 5,
    title: '서초맛집',
    writer: '룽지',
    grade: '4.8',
    Lv: 'Lv.30',
    date: '22.07.22',
  },
];

let table2 = [
  {
    id: 0,
    num: 1,
    title: '서울고기',
    writer: '정육왕',
    grade: '4.2',
    participants: '3/11',
    time: '03:56',
  },
  {
    id: 1,
    num: 2,
    title: '샌드위치',
    writer: '서브웨이',
    grade: '4.1',
    participants: '5/11',
    time: '07:23',
  },
  {
    id: 2,
    num: 3,
    title: '여수맛집',
    writer: '게장',
    grade: '3.9',
    participants: '7/11',
    time: '08:19',
  },
  {
    id: 3,
    num: 4,
    title: '타코맛집',
    writer: '멕시카나',
    grade: '4.9',
    participants: '9/11',
    time: '09:02',
  },
  {
    id: 4,
    num: 5,
    title: '디저트맛집',
    writer: '룽지',
    grade: '4.8',
    participants: '10/11',
    time: '15:22',
  },
];

let modal1 = [
  {
    id: 0,
    img: 'https:/img.insight.co.kr/static/2022/07/08/700/img_20220708160411_55hs1883.webp',
    title: '낙조마을 후기',
    text: '넓은 뷰가 마음에 들었으며, 매우 깨끗하게 관리된 점이 좋았습니다. 재방문의사 있습니다.',
    writer: '작성자 : 우영우',
    Lv: 'Lv.7',
  },
  {
    id: 1,
    img: 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-22.jpg?w=1600&cbr=1&q=90&fit=max',
    title: '램지버거 후기',
    text: '가격대에 비해 맛은 좋았는가? 3만원으로 햄버거가 아닌 레스토랑 메인메뉴를 먹었다고 생각하자.',
    writer: '작성자 : 고든램지',
    Lv: 'Lv.12',
  },
  {
    id: 2,
    img: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDJfMTY1/MDAxNTk5MDQ3NjI4MjEz.jKX_F0dpG-7b_BEDyiIyLfGRg7kRVn_nEkYuJ0ohTrIg.OgHadqbewCFt-EYEG95ayMYahOXPOvb3BPoVu8nX3kgg.JPEG.1986jyh/IMG_6744.jpg?type=w800',
    title: '밤 제주도 해변앞 맛집',
    text: '제주횟집 성산 바다풍경 제주 인스타 감성횟집의 이름값을 톡톡히 한다. 물론 회가격에 감성값+자리값이 포함되어있는것 주의',
    writer: '작성자 : 하르방',
    Lv: 'Lv.19',
  },
  {
    id: 3,
    img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_img/card_1453115968891.jpg',
    title: '홍대맛집',
    text: `홍대에서 핫한 떡볶이
                맛 : 4.5점/ 분위기 :3.7점 / 가격 : 4.2점
                재방문의사 : 없음`,
    writer: '작성자 : 홍익인간',
    Lv: 'Lv.22',
  },
  {
    id: 4,
    img: 'https://lh3.googleusercontent.com/p/AF1QipMcz_pGhWRaQMQAC0Oh2Q40HA8dBgQ-6Nswa9Pn=w768-h768-n-o-v1',
    title: '서초맛집 회떠유',
    text: `예약안하면 먹기힘든 서초구 맛집
                맛 : 4.9점/ 분위기 : 4.7점 / 가격 : 4.5점
                콜키지 2만원 / 가격대비 미친구성 재방문 무조건`,
    writer: '작성자 : 룽지',
    Lv: 'Lv.30',
  },
];

let modal2 = [
  {
    id: 0,
    img: 'https:/img.insight.co.kr/static/2022/07/08/700/img_20220708160411_55hs1883.webp',
    title: '낙조마을 후기',
    text: '넓은 뷰가 마음에 들었으며, 매우 깨끗하게 관리된 점이 좋았습니다. 재방문의사 있습니다.',
    writer: '작성자 : 우영우',
    Lv: 'Lv.7',
  },
  {
    id: 1,
    img: 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-22.jpg?w=1600&cbr=1&q=90&fit=max',
    title: '램지버거 후기',
    text: '가격대에 비해 맛은 좋았는가? 3만원으로 햄버거가 아닌 레스토랑 메인메뉴를 먹었다고 생각하자.',
    writer: '작성자 : 고든램지',
    Lv: 'Lv.12',
  },
  {
    id: 2,
    img: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDJfMTY1/MDAxNTk5MDQ3NjI4MjEz.jKX_F0dpG-7b_BEDyiIyLfGRg7kRVn_nEkYuJ0ohTrIg.OgHadqbewCFt-EYEG95ayMYahOXPOvb3BPoVu8nX3kgg.JPEG.1986jyh/IMG_6744.jpg?type=w800',
    title: '밤 제주도 해변앞 맛집',
    text: '제주횟집 성산 바다풍경 제주 인스타 감성횟집의 이름값을 톡톡히 한다. 물론 회가격에 감성값+자리값이 포함되어있는것 주의',
    writer: '작성자 : 하르방',
    Lv: 'Lv.19',
  },
  {
    id: 3,
    img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_img/card_1453115968891.jpg',
    title: '홍대맛집',
    text: `홍대에서 핫한 떡볶이
                맛 : 4.5점/ 분위기 :3.7점 / 가격 : 4.2점
                재방문의사 : 없음`,
    writer: '작성자 : 홍익인간',
    Lv: 'Lv.22',
  },
  {
    id: 4,
    img: 'https://lh3.googleusercontent.com/p/AF1QipMcz_pGhWRaQMQAC0Oh2Q40HA8dBgQ-6Nswa9Pn=w768-h768-n-o-v1',
    title: '서초맛집 회떠유',
    text: `예약안하면 먹기힘든 서초구 맛집
                맛 : 4.9점/ 분위기 : 4.7점 / 가격 : 4.5점
                콜키지 2만원 / 가격대비 미친구성 재방문 무조건`,
    writer: '작성자 : 룽지',
    Lv: 'Lv.30',
  },
];

export { table1, table2, modal1, modal2 };
