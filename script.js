const CONTACT_EMAIL = "gompciu@gmail.com";

const galleryImages = [
  { src: "assets/img/1.jpg", alt: "Kia Stinger GT oklejona matową folią czerwono-czarną, przód" },
  { src: "assets/img/2.jpg", alt: "Kia Stinger GT biała, przód 3/4 u dealera" },
  { src: "assets/img/3.jpg", alt: "Kia Stinger GT biała, przód u dealera, inny kąt" },
  { src: "assets/img/4.jpg", alt: "Kia Stinger GT biała, profil boczny" },
  { src: "assets/img/5.jpg", alt: "Kia Stinger GT biała, tył 3/4, lampa ST" },
  { src: "assets/img/6.jpg", alt: "Kia Stinger GT biała, tył wprost" },
  { src: "assets/img/7.jpg", alt: "Kia Stinger GT biała, tył 3/4" },
  { src: "assets/img/8.jpg", alt: "Kia Stinger GT biała, przód wprost, parking" },
  { src: "assets/img/9.jpg", alt: "Kia Stinger GT biała, tył 3/4, napis Stinger" },
  { src: "assets/img/10.jpg", alt: "Kia Stinger GT biała, przód wprost, trawnik" },
  { src: "assets/img/11.jpg", alt: "Kia Stinger GT biała, bok, słoneczny dzień" },
  { src: "assets/img/12.jpg", alt: "Kia Stinger GT biała, tył 3/4, flara słoneczna" },
  { src: "assets/img/13.jpg", alt: "Kia Stinger GT biała, tył 3/4, inny parking" },
  { src: "assets/img/14.jpg", alt: "Kia Stinger GT biała, tył 3/4, panorama dachu" },
];

const galleryGrid = document.getElementById("galleryGrid");
galleryImages.forEach((img, i) => {
  const el = document.createElement("img");
  el.src = img.src;
  el.alt = img.alt;
  el.loading = "lazy";
  if (i === 0 || i === 8) el.classList.add("tall");
  el.addEventListener("click", () => openLightbox(img.src, img.alt));
  galleryGrid.appendChild(el);
});

const videoFiles = [
  { src: "assets/video/IMG_4782.mp4", poster: "assets/img/posters/IMG_4782.jpg" },
  { src: "assets/video/IMG_4783.mp4", poster: "assets/img/posters/IMG_4783.jpg" },
  { src: "assets/video/IMG_4784.mp4", poster: "assets/img/posters/IMG_4784.jpg" },
  { src: "assets/video/IMG_4785.mp4", poster: "assets/img/posters/IMG_4785.jpg" },
  { src: "assets/video/IMG_4786.mp4", poster: "assets/img/posters/IMG_4786.jpg" },
];

const videoGrid = document.getElementById("videoGrid");
videoFiles.forEach(({ src, poster }) => {
  const v = document.createElement("video");
  v.src = src;
  v.poster = poster;
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  v.preload = "metadata";
  v.addEventListener("mouseenter", () => v.play());
  v.addEventListener("mouseleave", () => v.pause());
  v.addEventListener("click", () => (v.paused ? v.play() : v.pause()));
  videoGrid.appendChild(v);
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("active");
}
document.getElementById("lightboxClose").addEventListener("click", () => {
  lightbox.classList.remove("active");
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.remove("active");
});

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const contact = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent(`Kia Stinger GT — zapytanie od ${name}`);
  const body = encodeURIComponent(
    `Imię: ${name}\nKontakt zwrotny: ${contact}\n\nWiadomość:\n${message}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

const revealEls = document.querySelectorAll(
  ".story-inner, .specs-grid, .gallery-inner, .video-inner, .cta-strip-inner, .contact-inner"
);
revealEls.forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  const current = window.scrollY;
  nav.style.borderBottomColor = current > 20 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)";
  lastScroll = current;
});
