$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

ScrollReveal().reveal(
  "nav li,nav img,#home .btn, #experts h1, .about img, #about-home h2, .post h3, .post p, .post a, .course-img",
  {
    origin: "left",
    distance: "400px",
    delay: 200,
  }
);
ScrollReveal().reveal(
  "#home h2, #home p,#about-container,#course h1, .about-text p,.about-text h2, .post img",
  {
    origin: "right",
    distance: "400px",
    delay: 200,
  }
);
ScrollReveal().reveal("#registration,.profile", {
  origin: "top",
  distance: "400px",
  delay: 200,
});
ScrollReveal().reveal("footer, #about-home h2", {
  origin: "bottom",
  distance: "400px",
  delay: 200,
});

// Home Featured Artist
ScrollReveal().reveal(".ta", {
  origin: "right",
  distance: "400px",
  delay: 300,
});
ScrollReveal().reveal(".tb", {
  origin: "right",
  distance: "400px",
  delay: 400,
});
ScrollReveal().reveal(".tc", {
  origin: "right",
  distance: "400px",
  delay: 500,
});
ScrollReveal().reveal(".td", {
  origin: "right",
  distance: "400px",
  delay: 600,
});

// Home Albums
ScrollReveal().reveal(".ca", {
  origin: "left",
  distance: "400px",
  delay: 500,
});
ScrollReveal().reveal(".cb", {
  origin: "left",
  distance: "400px",
  delay: 400,
});
ScrollReveal().reveal(".cc", {
  origin: "left",
  distance: "400px",
  delay: 300,
});

// Albums right
ScrollReveal().reveal(".ad", {
  origin: "right",
  distance: "400px",
  delay: 300,
});
ScrollReveal().reveal(".ae", {
  origin: "right",
  distance: "400px",
  delay: 400,
});
ScrollReveal().reveal(".af", {
  origin: "right",
  distance: "400px",
  delay: 500,
});

// Albums left
ScrollReveal().reveal(".aa", {
  origin: "left",
  distance: "400px",
  delay: 500,
});
ScrollReveal().reveal(".ab", {
  origin: "left",
  distance: "400px",
  delay: 400,
});
ScrollReveal().reveal(".ac", {
  origin: "left",
  distance: "400px",
  delay: 300,
});

// inner album
ScrollReveal().reveal(".c-name", {
  origin: "left",
  distance: "400px",
  delay: 350,
});
// enroll
ScrollReveal().reveal(".enroll h3", {
  origin: "right",
  distance: "400px",
  delay: 200,
});
ScrollReveal().reveal(".enroll p", {
  origin: "right",
  distance: "400px",
  delay: 350,
});

//contact
ScrollReveal().reveal(".getin h2, .getin h3", {
  origin: "left",
  distance: "400px",
  delay: 200,
});
ScrollReveal().reveal(".getin p, .pro-links", {
  origin: "left",
  distance: "400px",
  delay: 350,
});
// form
ScrollReveal().reveal(".form", {
  origin: "right",
  distance: "400px",
  delay: 450,
});
ScrollReveal().reveal(".form-col, .form-row", {
  origin: "right",
  distance: "400px",
  delay: 500,
});
ScrollReveal().reveal(".form-col button", {
  origin: "right",
  distance: "400px",
  delay: 700,
});
ScrollReveal().reveal(".about-text-p p, .about-text-p h2, .about-img-p ", {
  origin: "left",
  distance: "400px",
  delay: 200,
});
