"use strict";

function initialize(images) {
  let count = 0;
  images.forEach((each) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.appendChild(img);
    img.src = each;
    document.querySelector(".container").appendChild(div);
    count = count + 1;
    if (count > 5) {
      div.style.display = "none";
    }
  });
  reset();
}

const container = document.querySelector(".container");
console.log(container);

function swapImgPrev() {
  container.appendChild(container.children[0]);
  reset();
}

function swapImgNext() {
  container.children[4].style.display = "none";
  container.appendChild(container.children[4]);
  container.insertBefore(container.children[5], container.children[0]);
  container.children[0].style.display = "block";
  console.log(container);
  reset();

  container.children[0].classList.add("invisible");
  setTimeout(() => {
    container.children[0].classList.add("visible");
  }, 0);
}

// helper function
function reset() {
  const container = document.querySelector(".container");

  for (let i = 0; i < 5; i++) {
    container.children[i].className = "";
  }

  container.children[0].classList.add("small");
  container.children[1].classList.add("medium");
  container.children[2].classList.add("big");
  container.children[3].classList.add("medium");
  container.children[4].classList.add("small");
}
