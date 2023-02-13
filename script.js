const images = [
  "images/img.webp",
  "images/img2.webp",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.webp",
  "https://picsum.photos/id/23/300/300",
  "https://picsum.photos/id/24/300/300",
  "https://picsum.photos/id/25/300/300",
];

let wrapper = document.querySelector(".container");
let wrapper2 = document.querySelector(".container2");

let carousel1 = new Carousel(images, wrapper);
