import ramens from "./ramenData";

import toppings from "./toppingData";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getRandomMenu() {
  const ramen = ramens[getRandomInt(0, ramens.length - 1)];

  // 토핑 1~3개 랜덤 선택
  const shuffledToppings = toppings.slice().sort(() => 0.5 - Math.random());
  const selectedToppings = shuffledToppings.slice(0, getRandomInt(1, 3));

  // 총 가격 계산
  const totalPrice =
    ramen.price + selectedToppings.reduce((sum, t) => sum + t.price, 0);

  return {
    id: "",
    ramen: ramen,
    toppings: selectedToppings,
    totalPrice,
    text: "",
    isFavorite: false,
    isMyReview: false,
    showImage: true,
  };
}
