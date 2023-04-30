const say = document.getElementById("say");
const saytext = document.querySelector("#say span:last-child");

const sayList = [
  "불명확한 미래에 투자하는 순간, 미래는 명확해진다",
  "나태함을 슬럼프라 착각하지 마라",
  "끝까지 해보기 전까지는 늘 불가능해 보인다",
  "나를 죽이지 않는 역경은 나를 키운다",
  "실패와 좌절을 새로운 성취와 다음 단계의 성공으로 향하는 도약대로 여겨라",
];
const text = sayList[Math.round(Math.random() * sayList.length)];
console.log(Math.round(Math.random() * 10));

saytext.innerText = text;
