"use strict";

class Carousel {
  container = null;

  constructor(images, wrapper) {
    if (images.length < 5)
      return console.error("There must be at least five images.");
    wrapper.classList.add("carousel");
    let count = 0;
    images.forEach((each) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      div.appendChild(img);
      img.src = each;
      wrapper.appendChild(div);
      count = count + 1;
      if (count > 5) {
        div.style.display = "none";
      }
    });
    this.container = wrapper;
    this.reset();
  }

  prev() {
    this.container.children[0].style.display = "none";
    this.container.appendChild(this.container.children[0]);
    this.container.insertBefore(
      this.container.children[0],
      this.container.children[1]
    );
    this.container.children[4].style.display = "block";
    this.reset();

    this.container.children[4].classList.add("prev-anime");
    setTimeout(() => {
      this.container.children[4].classList.add("prev-anime-slide-in");
    }, 0);
  }

  next() {
    this.container.children[4].style.display = "none";
    this.container.appendChild(this.container.children[4]);
    this.container.insertBefore(
      this.container.children[5],
      this.container.children[0]
    );
    this.container.children[0].style.display = "block";
    this.reset();

    this.container.children[0].classList.add("invisible");
    setTimeout(() => {
      this.container.children[0].classList.add("visible");
    }, 0);
  }

  // helper function
  reset() {
    for (let i = 0; i < 5; i++) {
      this.container.children[i].className = "";
    }

    this.container.children[0].classList.add("small");
    this.container.children[1].classList.add("medium");
    this.container.children[2].classList.add("big");
    this.container.children[3].classList.add("medium");
    this.container.children[4].classList.add("small");
  }
}
