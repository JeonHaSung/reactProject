const toppingData = [
  {
    id: 1,
    name: "플레인스트링치즈",
    price: 1700,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/030900010991.JPG",
  },
  {
    id: 2,
    name: "CJ)맥스봉치즈",
    price: 2200,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007021652.JPG",
  },
  {
    id: 3,
    name: "CJ)햇반작은공기",
    price: 1700,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007002989.JPG",
  },
  {
    id: 4,
    name: "CJ)맛밤",
    price: 3900,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007022635.JPG",
  },
  {
    id: 5,
    name: "CJ)백설햄숯불갈비후랑크",
    price: 3700,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007034980.JPG",
  },
  {
    id: 6,
    name: "CJ)비비고썰은배추김치",
    price: 1200,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007280417.JPG",
  },
  {
    id: 7,
    name: "CJ)맥스봉숯불구이맛핫바",
    price: 2700,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801007280417.JPG",
  },
  {
    id: 8,
    name: "해태)샤오롱용기만두",
    price: 3500,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801019505225.JPG",
  },
  {
    id: 9,
    name: "동원)양반더바삭한김5g",
    price: 1000,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801047224259.JPG",
  },
  {
    id: 10,
    name: "사조)로얄크랩50g",
    price: 2700,
    imgUrl:
      "https://msave.emart24.co.kr/cmsbo/upload/nHq/plu_image/500x500/8801066062979.JPG",
  },
  {
    id: 11,
    name: "빙그레)뿌려먹는모짜렐라치즈25G",
    price: 1000,
    imgUrl:
      "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801104665506_002.jpg",
  },
  {
    id: 12,
    name: "마루카네)감동란",
    price: 1900,
    imgUrl:
      "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220225152621_e72489032b1a494d915fa9da64e2d318.jpg",
  },
  {
    id: 13,
    name: "BICK)비엔나득템",
    price: 2200,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8802266500285.png",
  },
  {
    id: 14,
    name: "동원)슬라이스치즈",
    price: 2000,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJo2wTORhm7w_UqCQfzubdjWT-sRU8klatQ&s",
  },
  {
    id: 15,
    name: "오뚜기)스위트콘340G",
    price: 3500,
    imgUrl: "https://image.woodongs.com/imgsvr/item/GD_8801045363479_480.jpg",
  },
  {
    id: 16,
    name: "CJ)구이한판그릴스모크60G",
    price: 3900,
    imgUrl: "https://image.woodongs.com/imgsvr/item/GD_8801007918310_002.jpg",
  },
  {
    id: 17,
    name: "CJ)아삭안심콩나물180g",
    price: 1600,
    imgUrl:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fshop-phinf.pstatic.net%2F20250211_109%2F1739204603190KpORP_JPEG%2F52672102698029897_1927146566.jpg&type=sc960_832",
  },
  {
    id: 18,
    name: "주)브롤3XL참치슬라이스",
    price: 1600,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801771035169.png",
  },
  {
    id: 19,
    name: "주)브롤3XL참치슬라이스",
    price: 1600,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801771035169.png",
  },
  {
    id: 20,
    name: "햄)한돈모짜바베큐버거",
    price: 3800,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801068936230.jpg",
  },
  {
    id: 21,
    name: "김)캘리포니아롤크랩",
    price: 3700,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8800271903237.png",
  },
  {
    id: 22,
    name: "PBICK)콘샐러드",
    price: 2500,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8805684005608.png",
  },
  {
    id: 23,
    name: "PBICK)김부각득템",
    price: 2500,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8802241901298.png",
  },
  {
    id: 24,
    name: "정화)맥반석굿찡어45g",
    price: 5900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801308490089.jpg",
  },
  {
    id: 25,
    name: "PBICK)닭백숙득템닭가슴살",
    price: 1900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8809977010539.jpg",
  },
  {
    id: 26,
    name: "머거본)블랙페퍼육포40g",
    price: 4000,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8802456000151.jpg",
  },
  {
    id: 27,
    name: "오뚜기)마일드참치135g",
    price: 3900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801045501895.jpg",
  },
  {
    id: 28,
    name: "제니코)본가드체다스틱",
    price: 1700,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/0071078700000.jpg",
  },
  {
    id: 29,
    name: "팜스)바나나2입",
    price: 2000,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8809021920883.png",
  },
  {
    id: 30,
    name: "롯데)미니비엔나70g",
    price: 1700,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801123309481.jpg",
  },
  {
    id: 31,
    name: "풍림)야채치즈계란구이125",
    price: 2500,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8809036814764.jpg",
  },
  {
    id: 32,
    name: "만인애)미니오이3입",
    price: 2300,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801448284920.jpg",
  },
  {
    id: 33,
    name: "CJ)맥스봉직화꼬치바70g",
    price: 1900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801007899923.jpg",
  },
  {
    id: 34,
    name: "PBICK)쿠스쿠스샐러드",
    price: 2500,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8805684012125.jpg",
  },
  {
    id: 35,
    name: "PBICK)순대득템떡볶이맛",
    price: 2900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8804985433509.jpg",
  },
  {
    id: 36,
    name: "PBICK)순대득템떡볶이맛",
    price: 2900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8804985433509.jpg",
  },
  {
    id: 37,
    name: "PBICK)순대득템떡볶이맛",
    price: 2900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8804985433509.jpg",
  },
  {
    id: 38,
    name: "CJ)하루낫또2입",
    price: 3900,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8801392136122.jpg",
  },
  {
    id: 39,
    name: "한양)숏바디슬라이스20g",
    price: 2700,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8803622100071.jpg",
  },
  {
    id: 40,
    name: "PBICK)닭백숙득템통닭다리",
    price: 3500,
    imgUrl:
      "https://tqklhszfkvzk6518638.edge.naverncp.com/product/8809977010546.png",
  },
];

export default toppingData;
