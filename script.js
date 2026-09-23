const CONTACT_ENABLED = false;

const translations = {
  pl: {
    "nav.historia": "Historia",
    "nav.detale": "Detale",
    "nav.galeria": "Galeria",
    "nav.wideo": "Wideo",
    "nav.kontakt": "Kontakt",
    "hero.eyebrow": "Nie kolejne ogłoszenie motoryzacyjne",
    "hero.h1": "Nie każdy Stinger<br>ma <em>historię</em> do opowiedzenia.",
    "hero.sub": "Białe GT z salonu, które pewnego dnia zniknęło pod matową czerwono-czarną folią. To, co zostało, przeczytasz poniżej — zdjęcia, wideo i wszystko, co warto wiedzieć.",
    "hero.cta1": "Poznaj historię",
    "hero.cta2": "Zobacz zdjęcia",
    "story.label": "01 — Historia",
    "story.h2": "Kupiłem je białe.<br>Zostawiłem coś więcej.",
    "story.p1": "Stinger od pierwszego dnia nie był dla mnie „samochodem do przemieszczania się”. To był projekt. Odebrany prosto z salonu, w perłowej bieli, z czerwoną nappą w środku i panoramicznym dachem — wyglądał świetnie. Ale czułem, że stać go na więcej charakteru.",
    "story.p2": "Stąd decyzja o oklejeniu na matową, przechodzącą w gradiencie folię czerwono-czarną. Efekt? Samochód, który na parkingu robi się głośny, mimo że silnik akurat milczy. To nie jest „naprawiony wypadek” ani „tuning na szybko” — to przemyślana metamorfoza auta, które i tak miało już wszystko, czego potrzeba.",
    "story.quote": "„Kupując Stingera nie szukałem kolejnego SUV-a. Szukałem auta, które ma charakter zanim jeszcze ruszy z miejsca.”",
    "story.badgeFrom": "Białe",
    "story.badgeTo": "Folia",
    "specs.label": "02 — Detale",
    "specs.h2": "To, co warto wiedzieć na pierwszy rzut oka",
    "specs.note": "Poniżej podstawowe informacje widoczne „po aucie”. Pełne dane (rok, przebieg, historia serwisowa, dokładna wersja silnika) chętnie opowiem osobiście — bez tego trudno oddać, jak to auto naprawdę jeździ.",
    "specs.c1.h": "Kia Stinger GT",
    "specs.c1.p": "Wersja liftingowana (nowe logo Kia na grillu i klapie) — najbardziej dopracowana odsłona Stingera.",
    "specs.c2.h": "Silnik V6 Twin-Turbo",
    "specs.c2.p": "Poczwórny wydech i odznaka GT to podpis mocniejszej, sześciocylindrowej jednostki 3.3 biturbo.",
    "specs.c3.h": "Folia matowa fade",
    "specs.c3.p": "Przejście z czerni w czerwień na masce i błotnikach — wykonane na bazie fabrycznej bieli.",
    "specs.c4.h": "Czerwona nappa",
    "specs.c4.p": "Skórzane fotele w kolorze dopasowanym do charakteru oklejenia nadwozia.",
    "specs.c5.h": "Dach panoramiczny",
    "specs.c5.p": "Przeszklony, elektrycznie sterowany dach na całej długości kabiny.",
    "specs.c6.h": "Felgi wielosprychowe",
    "specs.c6.p": "Czarno-polerowane koła w stylu GT, dopełniające sylwetkę liftbacka.",
    "specs.c7.h": "Analogowe zegary, minimum elektroniki",
    "specs.c7.p": "To prawdopodobnie jedno z ostatnich Kia z klasycznymi, analogowymi wskaźnikami zamiast cyfrowego ekranu — i z zaskakująco małą ingerencją systemów elektronicznych w samo prowadzenie. Auto reaguje tak, jak powinno reagować auto, a nie komputer za kierownicą.",
    "gallery.label": "03 — Galeria",
    "gallery.h2": "Zobacz je z każdej strony",
    "gallery.note": "Kliknij zdjęcie, aby powiększyć.",
    "video.label": "04 — Wideo",
    "video.h2": "Detale w ruchu",
    "video.note": "Krótkie ujęcia — bo niektórych rzeczy nie da się pokazać na zdjęciu.",
    "cta.h2": "Zainteresowany? Porozmawiajmy.",
    "cta.p": "Chętnie opowiem więcej — o folii, o wnętrzu, o tym, jak się tym jeździ. Cenę i szczegóły ustalamy w rozmowie.",
    "contact.label": "05 — Kontakt",
    "contact.h2": "Napisz do mnie",
    "contact.p": "Zostaw wiadomość — kontakt wkrótce wracam do pełnej funkcjonalności.",
    "contact.nameLabel": "Imię",
    "contact.namePh": "Jak mam się zwracać?",
    "contact.emailLabel": "E-mail lub telefon",
    "contact.emailPh": "Twój kontakt zwrotny",
    "contact.messageLabel": "Wiadomość",
    "contact.messagePh": "O co chciałbyś zapytać?",
    "contact.submit": "Wyślij wiadomość",
    "contact.note": "Formularz kontaktowy jest chwilowo wyłączony — wróć tu za jakiś czas.",
    "contact.statusMsg": "Kontakt jest chwilowo niedostępny — spróbuj ponownie później.",
    "footer.p": "Strona-hobby, nie ogłoszenie z automatu. Zdjęcia i wideo — własne.",
    "meta.title": "Kia Stinger GT — historia jednej pasji",
    "meta.description": "Nie ogłoszenie. Historia białego Kia Stingera GT, który zamienił się w matowo-czerwoną bestię. Zdjęcia, wideo, detale i kontakt.",
    "mail.subject": (name) => `Kia Stinger GT — zapytanie od ${name}`,
    "mail.body": (name, contact, message) => `Imię: ${name}\nKontakt zwrotny: ${contact}\n\nWiadomość:\n${message}`,
    "langSwitchLabel": "EN",
  },
  en: {
    "nav.historia": "Story",
    "nav.detale": "Details",
    "nav.galeria": "Gallery",
    "nav.wideo": "Video",
    "nav.kontakt": "Contact",
    "hero.eyebrow": "Not another car ad",
    "hero.h1": "Not every Stinger<br>has a <em>story</em> to tell.",
    "hero.sub": "A white GT from the dealership that one day disappeared under a matte red-to-black wrap. What's left, you'll find below — photos, video, and everything worth knowing.",
    "hero.cta1": "Read the story",
    "hero.cta2": "See the photos",
    "story.label": "01 — Story",
    "story.h2": "I bought it white.<br>I left something more.",
    "story.p1": "From day one, the Stinger was never just \"a car to get around in\" for me. It was a project. Picked up straight from the dealership in pearl white, with red nappa leather inside and a panoramic roof — it already looked great. But I felt it could carry more character.",
    "story.p2": "Hence the decision to wrap it in a matte red-to-black fade. The result? A car that turns heads in a parking lot even with the engine off. This isn't a \"fixed-up wreck\" or a rushed tuning job — it's a deliberate transformation of a car that already had everything it needed.",
    "story.quote": "\"When I bought the Stinger, I wasn't looking for another SUV. I was looking for a car with character before it even moves.\"",
    "story.badgeFrom": "White",
    "story.badgeTo": "Wrap",
    "specs.label": "02 — Details",
    "specs.h2": "What's worth knowing at a glance",
    "specs.note": "Below are the basics visible from the photos. Full details (year, mileage, service history, exact engine spec) I'm happy to share in person — it's hard to capture how this car actually drives without that.",
    "specs.c1.h": "Kia Stinger GT",
    "specs.c1.p": "Facelift version (new Kia logo on the grille and trunk) — the most refined take on the Stinger.",
    "specs.c2.h": "Twin-Turbo V6",
    "specs.c2.p": "Quad exhaust tips and the GT badge are the signature of the stronger six-cylinder 3.3 biturbo unit.",
    "specs.c3.h": "Matte fade wrap",
    "specs.c3.p": "A black-to-red gradient across the hood and fenders — applied over the factory white paint.",
    "specs.c4.h": "Red nappa leather",
    "specs.c4.p": "Leather seats in a color matched to the wrap's character.",
    "specs.c5.h": "Panoramic roof",
    "specs.c5.p": "Glazed, power-operated roof spanning the full length of the cabin.",
    "specs.c6.h": "Multi-spoke wheels",
    "specs.c6.p": "Black machined-finish GT-style wheels rounding out the liftback silhouette.",
    "specs.c7.h": "Analog gauges, minimal electronics",
    "specs.c7.p": "This is likely one of the last Kias with classic analog gauges instead of a digital screen — and with surprisingly little electronic intervention in the actual driving. The car responds the way a car should, not the way a computer behind the wheel does.",
    "gallery.label": "03 — Gallery",
    "gallery.h2": "See it from every angle",
    "gallery.note": "Click a photo to enlarge.",
    "video.label": "04 — Video",
    "video.h2": "Details in motion",
    "video.note": "Short clips — because some things just can't be shown in a photo.",
    "cta.h2": "Interested? Let's talk.",
    "cta.p": "I'm happy to tell you more — about the wrap, the interior, what it's like to drive. Price and details we work out in conversation.",
    "contact.label": "05 — Contact",
    "contact.h2": "Get in touch",
    "contact.p": "Leave a message — I'll be back to full contact functionality soon.",
    "contact.nameLabel": "Name",
    "contact.namePh": "What should I call you?",
    "contact.emailLabel": "Email or phone",
    "contact.emailPh": "Your contact info",
    "contact.messageLabel": "Message",
    "contact.messagePh": "What would you like to ask?",
    "contact.submit": "Send message",
    "contact.note": "The contact form is temporarily disabled — check back soon.",
    "contact.statusMsg": "Contact is temporarily unavailable — please try again later.",
    "footer.p": "A hobby page, not an auto-generated listing. Photos and video — all my own.",
    "meta.title": "Kia Stinger GT — a passion project story",
    "meta.description": "Not a listing. The story of a white Kia Stinger GT that became a matte red-and-black beast. Photos, video, details and contact.",
    "mail.subject": (name) => `Kia Stinger GT — inquiry from ${name}`,
    "mail.body": (name, contact, message) => `Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`,
    "langSwitchLabel": "PL",
  },
};

let currentLang = "pl";
try {
  const saved = localStorage.getItem("stingerLang");
  if (saved === "pl" || saved === "en") currentLang = saved;
  else if (navigator.language && navigator.language.toLowerCase().startsWith("en")) currentLang = "en";
} catch (e) {}

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  document.getElementById("pageTitle").textContent = dict["meta.title"];
  document.getElementById("pageDescription").setAttribute("content", dict["meta.description"]);
  document.getElementById("htmlRoot").setAttribute("lang", lang);
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = dict["langSwitchLabel"];
  currentLang = lang;
  try { localStorage.setItem("stingerLang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});
if (document.readyState !== "loading") applyTranslations(currentLang);

document.getElementById("langToggle").addEventListener("click", () => {
  applyTranslations(currentLang === "pl" ? "en" : "pl");
});

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
  if (!CONTACT_ENABLED) {
    const status = document.getElementById("formStatus");
    if (status) status.hidden = false;
    return;
  }
  const name = document.getElementById("name").value;
  const contact = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const dict = translations[currentLang];
  const subject = encodeURIComponent(dict["mail.subject"](name));
  const body = encodeURIComponent(dict["mail.body"](name, contact, message));
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

const navSections = ["historia", "detale", "galeria", "wideo", "kontakt"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinkMap = {};
document.querySelectorAll(".nav-links a[href^='#']").forEach((a) => {
  navLinkMap[a.getAttribute("href").slice(1)] = a;
});
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = navLinkMap[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.values(navLinkMap).forEach((a) => a.classList.remove("active-link"));
        link.classList.add("active-link");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
navSections.forEach((s) => sectionObserver.observe(s));
