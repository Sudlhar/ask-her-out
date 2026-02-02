const flowers = ["🌸", "🌷", "🌼", "💮", "🌺"];
const hearts = ["❤", "💖", "💕", "💗"];

/* ================= FLOATING BACKGROUND ================= */

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 40 + Math.random() * 60 + "px";
  h.style.animationDuration = 7 + Math.random() * 4 + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}

function spawnFlower() {
  const f = document.createElement("div");
  f.className = "flower";
  f.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
  f.style.left = Math.random() * 100 + "vw";
  f.style.fontSize = 50 + Math.random() * 70 + "px";
  f.style.animationDuration = 8 + Math.random() * 5 + "s";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 14000);
}

function spawnSparkle() {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * 100 + "vw";
  s.style.background = `hsl(${Math.random() * 360},80%,75%)`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 3000);
}

setInterval(spawnHeart, 350);
setInterval(spawnFlower, 800);
setInterval(spawnSparkle, 250);

/* ================= YES SIZE (PERSISTENT ACROSS PAGES) ================= */

const yesBtn = document.querySelector('.btn a[href="yes.html"]');
const noBtn = document.querySelector('.btn a[href^="no"]');
const runawayBtn = document.getElementById("move-random");

// load or start big
let scale = localStorage.getItem("yesScale")
  ? parseFloat(localStorage.getItem("yesScale"))
  : 2.5;

if (yesBtn) {
  yesBtn.style.transform = `scale(${scale})`;
  yesBtn.style.transition = "0.25s cubic-bezier(.34,1.56,.64,1)";
}

function growYes() {
  scale += 0.5;
  localStorage.setItem("yesScale", scale);
  if (yesBtn) yesBtn.style.transform = `scale(${scale})`;
}

// grow when NO clicked
if (noBtn) {
  noBtn.addEventListener("click", growYes);
}

// grow when runaway NO hovered (no3.html)
if (runawayBtn) {
  runawayBtn.addEventListener("mouseenter", growYes);
}

/* ================= RUNAWAY NO BUTTON ================= */

if (runawayBtn) {
  runawayBtn.addEventListener("mouseover", jump);
  runawayBtn.addEventListener("click", jump);

  function jump() {
    const x = Math.random() * (window.innerWidth - 140);
    const y = Math.random() * (window.innerHeight - 140);

    runawayBtn.style.position = "fixed";
    runawayBtn.style.left = x + "px";
    runawayBtn.style.top = y + "px";
  }
}

/* ================= YES PAGE CELEBRATION ================= */

if (window.location.pathname.includes("yes.html")) {
  for (let i = 0; i < 160; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.innerHTML = "💖";
      h.style.position = "fixed";
      h.style.left = Math.random() * 100 + "vw";
      h.style.top = Math.random() * 100 + "vh";
      h.style.fontSize = 20 + Math.random() * 30 + "px";
      h.style.animation = "floatUp 3s linear forwards";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 3000);
    }, i * 12);
  }
}
