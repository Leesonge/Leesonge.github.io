const bgList = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
const bg = document.getElementById("bg");
const image = bgList[Math.floor(Math.random() * bgList.length)];

bg.style.background = `url('img/${image}')`;
bg.style.height = "200px";
bg.style.backgroundSize = "cover";
bg.style.backgroundPosition = "center";

// console.log(image);
