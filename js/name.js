const Input = document.getElementById("nameInput");
const popup = document.getElementById("modalBG");

const title = document.querySelector("h1");

function getName(e) {
  if (e.key === "Enter") {
    // Do work
    e.preventDefault();
    popup.classList.add("hide");
    setTimeout(() => {
      popup.classList.add("none");
    }, 1000);

    const userName = Input.value;
    title.innerText = `${userName}'s home`;
    console.log(Input.value);
  }
}

Input.addEventListener("keypress", getName);
