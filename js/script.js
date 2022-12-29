"use strict";

//Events
//Logo Animation
const rect1 = document.getElementById("Vector");
const rect3 = document.getElementById("third-icon");
//Smooth Scroll
const btnScrollTo = document.querySelector(".button-scroll");
const section1 = document.querySelector(".section");
//Tabbed Section
const tabs = document.querySelectorAll(".portfolio-tab");
const tabsContainer = document.querySelector(".portfolio-tab-container");
const tabsContent = document.querySelectorAll(".portfolio-content");
//Navigation items
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
const sectionTop = document.querySelector(".section-header");
//Reaveal section
const allSections = document.querySelectorAll(".section");
//Header slider
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider-btn-right");
const btnLeft = document.querySelector(".slider-btn-left");
const dotContainer = document.querySelector(".dots");
/////////////////////////////////////////

//Logo Animation
rect1.addEventListener("mouseover", function () {
  rect1.style.transform = `translate(${-8}px, ${-4}px)`;
});
rect1.addEventListener("mouseout", function () {
  rect1.style.transform = `translate(${0})`;
});
rect1.addEventListener("mouseover", function () {
  rect3.style.transform = `translate(${6}px, ${6}px)`;
});
rect1.addEventListener("mouseout", function () {
  rect3.style.transform = `translate(${0})`;
});

//Header slider
const sliderF = function () {
  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    //Slide: -100%, 0%, 100%, 200%
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") prevSlide();
    e.key == "ArrowRight" && nextSlide();
  });

  const createDots = function () {
    slides.forEach(function (s, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot-active"));

    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot-active");
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
};

sliderF();

//Smooth Scroll
btnScrollTo.addEventListener("click", function () {
  sectionTop.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }
});

//Tabbed
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".portfolio-tab");

  //Guard clause
  if (!clicked) return;

  //Remove active clases
  tabs.forEach((t) => t.classList.remove("portfolio-tab-active"));
  tabsContent.forEach((c) => c.classList.remove("portfolio-content-active"));

  //Activate tab
  clicked.classList.add("portfolio-tab-active");

  //Activate content
  document
    .querySelector(`.portfolio-content-${clicked.dataset.tab}`)
    .classList.add("portfolio-content-active");
});

//Navigation effect
const navHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.color = this;
    });
  }
};

nav.addEventListener("mouseover", navHover.bind("#45a29e"));
nav.addEventListener("mouseout", navHover.bind("#66fcf1"));

//Sticky Navbar
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);

//Reveal section
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

/*
document.querySelectorAll(".nav-items").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    scrollFunction(section1);
  });
});



btnScrollTo.addEventListener("click", function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(btnScrollTo.textContent);

  console.log(e.target.getBoundingClientRect());

  section1.scrollIntoView({ behavior: "smooth" });
});*/
