
const imageAdd = document.querySelectorAll('.gallery-image');

imageAdd.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.add('image-open');
  })
})

let carousel = document.querySelector('.carousel')
let scrollContainer = document.querySelector('.gallery-carousel');
let backBtn = document.querySelector('.backward-button');
let fowardBtn = document.querySelector('.foward-button');
let exitBtn = document.querySelector('.exit-button');

const galleryimg1 = document.querySelector('.gallery-image1');
const galleryimg2 = document.querySelector('.gallery-image2');
const galleryimg3 = document.querySelector('.gallery-image3');
const galleryimg4 = document.querySelector('.gallery-image4');
const galleryimg5 = document.querySelector('.gallery-image5');
const galleryimg6 = document.querySelector('.gallery-image6');

const carouselimg1 = document.getElementById("gallery-carousel-image1");
const carouselimg2 = document.getElementById("gallery-carousel-image2");
const carouselimg3 = document.getElementById("gallery-carousel-image3");
const carouselimg4 = document.getElementById("gallery-carousel-image4");
const carouselimg5 = document.getElementById("gallery-carousel-image5");
const carouselimg6 = document.getElementById("gallery-carousel-image6");
const body = document.querySelector('body');

galleryimg1.addEventListener('click', () => {
  carousel.style.display = 'flex'
  carouselimg1.scrollIntoView(true);
  body.style.overflow = 'hidden';
})

galleryimg2.addEventListener('click', () => {
  carousel.style.display = 'flex'
  // scrollContainer.scrollLeft += 900;
  carouselimg2.scrollIntoView(true);
  body.style.overflow = 'hidden';
})

galleryimg3.addEventListener('click', () => {
  carousel.style.display = 'flex'
  // scrollContainer.scrollLeft += 1800;
  carouselimg3.scrollIntoView(true);
  body.style.overflow = 'hidden';
})

galleryimg4.addEventListener('click', () => {
  carousel.style.display = 'flex'
  // scrollContainer.scrollLeft += 2700;
  carouselimg4.scrollIntoView(true);
  body.style.overflow = 'hidden';
})

galleryimg5.addEventListener('click', () => {
  carousel.style.display = 'flex'
  // scrollContainer.scrollLeft += 3600;
  carouselimg5.scrollIntoView(true);
  body.style.overflow = 'hidden';
})

galleryimg6.addEventListener('click', () => {
  carousel.style.display = 'flex'
  // scrollContainer.scrollLeft += 4500;
  carouselimg6.scrollIntoView(true);
  body.style.overflow = 'hidden';
})

/* scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = 'auto';
})
  */

exitBtn.addEventListener('click', () => {
  carousel.style.display = 'none';
  body.style.overflow = 'auto';
})

fowardBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  if (window.innerWidth >= 750 && window.innerWidth <= 1000) {
    scrollContainer.scrollLeft += 700;
  } else {
    scrollContainer.scrollLeft += 900;
  }

})

backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
   if (window.innerWidth >= 750 && window.innerWidth <= 1000) {
    scrollContainer.scrollLeft -= 700;
  } else {
    scrollContainer.scrollLeft -= 900;
  }
})




