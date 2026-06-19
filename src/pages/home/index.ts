import "./styles.css";

const qs = <T extends Element>(selector: string) => document.querySelector<T>(selector);
const qsa = <T extends Element>(selector: string) => [...document.querySelectorAll<T>(selector)];

function createBars(target: HTMLElement | null, count: number, min: number, max: number, className = "wave-bar"): void {
  if (!target) return;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) {
    const bar = document.createElement("i");
    const wave = Math.sin((index / Math.max(1, count - 1)) * Math.PI * 3.2);
    const height = min + Math.abs(wave) * (max - min) * 0.7 + ((index * 17) % 11);
    bar.className = className;
    bar.style.height = `${Math.min(max, height)}px`;
    bar.style.setProperty("--delay", `${-((index % 9) * 0.08)}s`);
    fragment.appendChild(bar);
  }
  target.appendChild(fragment);
}

createBars(qs("#hero-waveform"), 74, 5, 45);
createBars(qs("#tiny-wave"), 24, 3, 19, "");
createBars(qs("#library-wave"), 34, 3, 22, "");
createBars(qs("#final-wave"), 120, 8, 125, "");

qsa<HTMLElement>(".feature-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });
});

const nav = qs("#site-nav");
const onScroll = (): void => {
  nav?.classList.toggle("scrolled", window.scrollY > 24);

  const heroCopy = qs<HTMLElement>("#hero-copy");
  const heroStage = qs<HTMLElement>("#hero-stage");
  if (heroCopy && heroStage && window.scrollY < 700) {
    heroCopy.style.transform = `translateY(${window.scrollY * -0.17}px)`;
    heroCopy.style.opacity = `${Math.max(0, 1 - window.scrollY / 620)}`;
    heroStage.style.marginTop = `${window.scrollY * -0.09}px`;
  }

  const quote = qs("#quote-text");
  if (quote) {
    const rect = quote.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.9)));
    const words = qsa<HTMLSpanElement>("#quote-text span");
    words.forEach((word, index) => {
      word.classList.toggle("visible", index / words.length < progress);
    });
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const quote = qs("#quote-text");
if (quote) {
  const words = (quote.textContent || "").trim().split(/\s+/);
  quote.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");
}

const menuButton = qs<HTMLButtonElement>("#menu-button");
const mobileMenu = qs("#mobile-menu");
menuButton?.addEventListener("click", () => {
  const open = menuButton.classList.toggle("open");
  mobileMenu?.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});
qsa<HTMLAnchorElement>("#mobile-menu a").forEach((link) => link.addEventListener("click", () => {
  menuButton?.classList.remove("open");
  mobileMenu?.classList.remove("open");
}));

const animatedItems = qsa<HTMLElement>(".animate-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
animatedItems.forEach((item) => observer.observe(item));

let playing = true;
let elapsed = 0;
let playbackTimer: number | undefined;
const playButton = qs<HTMLButtonElement>("#hero-play");
const waveform = qs("#hero-waveform");
const progress = qs<HTMLElement>("#hero-progress");
const time = qs("#hero-time");
const duration = 192;

function renderPlayback(): void {
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  if (time) time.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  if (progress) progress.style.width = `${(elapsed / duration) * 100}%`;
  const bars = qsa<HTMLElement>("#hero-waveform .wave-bar");
  const litBars = Math.floor((elapsed / duration) * bars.length);
  bars.forEach((bar, index) => bar.classList.toggle("lit", index <= litBars));
}

playButton?.addEventListener("click", () => {
  playing = !playing;
  playButton.textContent = playing ? "❚❚" : "▶";
  waveform?.classList.toggle("playing", playing);
  if (playing) {
    playbackTimer = window.setInterval(() => {
      elapsed = elapsed >= duration ? 0 : elapsed + 1;
      renderPlayback();
    }, 1000);
  } else if (playbackTimer !== undefined) {
    window.clearInterval(playbackTimer);
  }
});

if (playButton && waveform) {
  playButton.textContent = "❚❚";
  waveform.classList.add("playing");
  playbackTimer = window.setInterval(() => {
    elapsed = elapsed >= duration ? 0 : elapsed + 1;
    renderPlayback();
  }, 1000);
}

const studioContent = {
  compose: {
    step: "01 / COMPOSE",
    title: "Start with words,<br>not waveforms.",
    description: "Tell Echo Echo what you feel. The engine translates emotion and intent into a complete musical direction.",
    stats: "<span><b>28 sec</b> average generation</span><span><b>20+</b> music genres</span>",
    hue: "0deg",
  },
  arrange: {
    step: "02 / ARRANGE",
    title: "Shape every layer<br>of the track.",
    description: "Adjust energy, instrumentation, tempo, and structure while keeping the original feeling intact.",
    stats: "<span><b>8</b> creative controls</span><span><b>∞</b> possible versions</span>",
    hue: "52deg",
  },
  export: {
    step: "03 / EXPORT",
    title: "Ready wherever<br>your story goes.",
    description: "Download a polished master in MP3 or WAV and use it in your next video, stream, podcast, or game.",
    stats: "<span><b>WAV</b> studio quality</span><span><b>100%</b> royalty free</span>",
    hue: "105deg",
  },
} as const;

qsa<HTMLButtonElement>("[data-studio-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.studioTab as keyof typeof studioContent;
    const content = studioContent[key];
    if (!content) return;
    qsa("[data-studio-tab]").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    const step = qs("#preview-step");
    const title = qs("#preview-title");
    const description = qs("#preview-description");
    const stats = qs("#preview-stats");
    const orb = qs<HTMLElement>("#preview-orb");
    const copy = qs(".preview-copy");
    const visual = qs(".preview-visual");
    copy?.classList.remove("switching");
    visual?.classList.remove("switching");
    void (copy as HTMLElement | null)?.offsetWidth;
    copy?.classList.add("switching");
    visual?.classList.add("switching");
    window.setTimeout(() => {
      if (step) step.textContent = content.step;
      if (title) title.innerHTML = content.title;
      if (description) description.textContent = content.description;
      if (stats) stats.innerHTML = content.stats;
      if (orb) orb.style.filter = `hue-rotate(${content.hue})`;
    }, 230);
  });
});

qsa<HTMLButtonElement>("[data-billing]").forEach((button) => {
  button.addEventListener("click", () => {
    qsa("[data-billing]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const yearly = button.dataset.billing === "yearly";
    const price = qs("#price-value");
    const period = price?.nextElementSibling;
    if (price) price.textContent = yearly ? "$4.99" : "$9.99";
    if (period) period.innerHTML = yearly ? "/ month<br>billed yearly" : "/ month<br>billed monthly";
  });
});

qsa<HTMLButtonElement>(".faq-item > button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item?.classList.contains("open");
    qsa(".faq-item").forEach((faq) => faq.classList.remove("open"));
    if (!wasOpen) item?.classList.add("open");
  });
});

qsa<HTMLButtonElement>("[data-cta]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = localStorage.getItem("echo_auth_token") ? "/dashboard" : "/login?mode=signup";
  });
});
