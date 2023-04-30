const time = document.getElementById("time");
const dateText = document.querySelector("#time span:first-child");
const h = document.querySelector("#time span:nth-child(2)");
const timecen = document.querySelector("#time span:nth-child(3)");
const m = document.querySelector("#time span:last-child");

function getClock(params) {
  const now = new Date();
  const year = now.getFullYear(); // 년도
  const month = now.getMonth() + 1; // 월
  const date = now.getDate(); // 날짜
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  dateText.innerText = `${year}.${month}.${date}`;
  h.innerHTML = hours;
  timecen.innerText = ":";
  m.innerText = minutes;
}
getClock();
setInterval(getClock, 60000);
