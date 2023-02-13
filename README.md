# Carousel

Why make your website look boring when it can be made look really cool !!
This is a simple yet beautifully animated horizontal carousel built from HTML, CSS and Javascript.

## Demo

## Installation

- Download library.js file [https://github.com/gayatribudha/carousel/blob/master/library.js] and style.css file [https://github.com/gayatribudha/carousel/blob/master/style.css] and include them in your project directory (wherever, depending on your project structure)
- Add library.js file in your body section of index.html page
  `<script src="library.js"></script>`
- Add style.css file in your index.html page
  `<link rel="stylesheet" href="style.css" />`

## Usage

- Create a div element in html file and give it a class name
  `<div class="container"></div>`
- Then add following javascript code either in script.js file (in this case, script.js file must be included in html body after library.js) or simply write inside script tag in html body after library.js.
- Create an array of images
  ` const images = ["images/img22.jpg", "images/img1.jpg", "images/img33.jpg", "images/img2.webp", "images/img44.webp", "images/img77.webp","images/img00.jpg"]`
- Get the wrapper div for carousel
  `let  wrapper = document.querySelector(".container")`
- Create a new object from Carousel class passing images and wrapper as parameters
  `let  carousel1 = new  Carousel(images, wrapper)`
- Now to move the carousel, call prev() and next() method on the object created from Carousel class.
  - For example, here I've created preview and next button and called carousel1.prev() and carousel1.next() on onclick.
    `<button onclick="carousel1.prev()">Prev</button>`
    `<button onclick="carousel1.next()">Next</button>`

## Custom Style

- You can give your own style to each image of carousel. Simple give styles to `.carousel > div` in css
  `.carousel > div { border-radius: 5px; overflow: hidden; .........}`
