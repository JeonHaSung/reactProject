import getRandomMenu from "../data/getRandomMenu";
import ramenData from "../data/ramenData";
import toppingData from "../data/toppingData";

// 1. 액션 객체 생성
const CHANGE_INPUT = "reviews/CHANGE_INPUT"; // 인풋 값을 변경
const UPSERT = "reviews/UPSERT"; // 새로운 review를 등록함
const TOGGLE = "reviews/TOGGLE"; // review를 체크/체크 헤제 함
const REMOVE = "reviews/REMOVE"; // review를 제거함
const GENERATE_RANDOM_MENU = "reviews/GENERATE_RANDOM_MENU"; // 랜덤 메뉴 생성
const REMOVE_RANDOMPREVIEW = "reviews/REMOVE_RANDOMPREVIEW";

// 2. 액션 생성 함수
let id = 107; // upsert가 호출 될 때 마다 1씩 더해진다.
export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
export const upsert = (review) => ({
  type: UPSERT,
  review: { ...review, id: review.id === "" ? id++ : review.id },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });
export const generateRandomMenu = () => {
  const randomMenu = getRandomMenu();
  return { type: GENERATE_RANDOM_MENU, randomMenu };
};
export const removeRandomPreview = () => ({ type: REMOVE_RANDOMPREVIEW });

const generateInitialReviews = () => {
  //더미데이터
  const dummy = [];
  for (let i = 1; i <= 100; i++) {
    const randomMenu = getRandomMenu(); // 랜덤 라면 + 토핑 + 이미지
    dummy.push({
      ...randomMenu,
      id: i, // ID 1~100
      text: "이 라면과 토핑의 조합은 최고예요!",
    });
  }
  return dummy;
};

const MyCostomReview = [
  {
    ramen: { ...ramenData[8] },
    toppings: [
      { ...toppingData[22] },
      { ...toppingData[28] },
      { ...toppingData[31] },
    ],
    id: 101,
    text: "또 나만 괴식이지 응??",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  },
  {
    ramen: { ...ramenData[6] },
    toppings: [{ ...toppingData[27] }, { ...toppingData[37] }],
    id: 102,
    text: "오 기대되는 조합이다. 생각보다 괜찮을지도..? ",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  },
  {
    ramen: { ...ramenData[3] },
    toppings: [{ ...toppingData[8] }, { ...toppingData[7] }],
    id: 103,
    text: "이런 사이트도 있네 ㅋㅋㅋㅋ 점심고르기 귀찮았는데  너로 결정했다.",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  },
  {
    ramen: { ...ramenData[4] },
    toppings: [{ ...toppingData[34] }, { ...toppingData[30] }],
    id: 104,
    text: "아 점심고르기 귀찮았는데 여기서 라면조합 결정해서 한끼해결했네요 ",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  },
  {
    ramen: { ...ramenData[10] },
    toppings: [
      { ...toppingData[31] },
      { ...toppingData[33] },
      { ...toppingData[37] },
    ],
    id: 105,
    text: "와 내기져서 조합 그대로 토핑해서 먹었는데 망했어요 다음 조합은 성공하겠지?",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  },
  {
    ramen: { ...ramenData[7] },
    toppings: [{ ...toppingData[0] }, { ...toppingData[4] }],
    id: 106,
    text: "친구들이랑 라면 토핑 조합한대로 먹기 챌린지하는데 너무 재밌네요",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  },
];

// 3. 리듀서
// 초기 상태 정의
const initialState = {
  input: "",
  randomPreview: null, // 미리 생성된 랜덤 메뉴 임시 저장용
  reviews: generateInitialReviews().concat(MyCostomReview), //더미데이터로 초기값
};

// 리듀서 함수 만들기
function reviews(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input };
    case GENERATE_RANDOM_MENU:
      return { ...state, randomPreview: action.randomMenu };
    case REMOVE_RANDOMPREVIEW:
      return { ...state, randomPreview: null };
    case UPSERT:
      const exists = state.reviews.find(
        (review) => review.id === action.review.id
      );
      return {
        ...state,
        reviews: exists
          ? state.reviews.map((review) =>
              review.id === action.review.id
                ? { ...review, ...action.review }
                : review
            )
          : state.reviews.concat(action.review),
        input: "",
        randomPreview: null, // upsert 후 랜덤 미리보기 초기화
      };
    case TOGGLE:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.id
            ? { ...review, isFavorite: !review.isFavorite }
            : review
        ),
      };
    case REMOVE:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id),
      };
    default:
      return state;
  }
}
export default reviews;
