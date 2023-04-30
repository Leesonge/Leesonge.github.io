const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
const TimeBar = document.getElementById("rTime");
const timer = TimeBar.querySelector("p");
const boxHours = document.querySelector(".rTimeBox:first-child");
const boxMinutes = document.querySelector(".rTimeBox:last-child");

function getTime(params) {
  const now = new Date();
  const year = now.getFullYear(); // 년도
  const month = now.getMonth() + 1; // 월
  const date = now.getDate(); // 날짜
  const day = now.getDay(); // 요일
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const week = WEEKDAY[day];
  timer.innerText = `${year}.${month}.${date}.${week}`;
  boxHours.innerHTML = hours;
  boxMinutes.innerText = minutes;
}
getTime();
setInterval(getTime, 60000);

// console.log(now);
