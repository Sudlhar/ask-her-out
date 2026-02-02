const flowers = ["🌸", "🌷", "🌼", "💮", "🌺"];
const hearts = ["❤", "💖", "💕", "💗"];

/* ================= FLOATING BACKGROUND ================= */

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 22 + "px";
  h.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}

function spawnFlower() {
  const f = document.createElement("div");
  f.className = "flower";
  f.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
  f.style.left = Math.random() * 100 + "vw";
  f.style.fontSize = 18 + Math.random() * 24 + "px";
  f.style.animationDuration = 7 + Math.random() * 5 + "s";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 12000);
}

function spawnSparkle() {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * 100 + "vw";
  s.style.background = `hsl(${Math.random() * 360},80%,75%)`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 3000);
}

setInterval(spawnHeart, 280);
setInterval(spawnFlower, 650);
setInterval(spawnSparkle, 220);

/* ================= YES GROWS WHEN NO CLICKED ================= */

const yesBtn = document.querySelector('.btn a[href="yes.html"]');
const noBtn = document.querySelector('.btn a[href^="no"]');

if (yesBtn && noBtn) {
  let scale = 1;

  noBtn.addEventListener("click", () => {
    scale += 0.45;
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.style.transition = "0.25s cubic-bezier(.34,1.56,.64,1)";
  });
}

/* ================= RUNAWAY NO (for no3.html) ================= */

const runaway = document.getElementById("move-random");

if (runaway) {
  runaway.addEventListener("mouseover", jump);
  runaway.addEventListener("click", jump);

  function jump() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    runaway.style.position = "fixed";
    runaway.style.left = x + "px";
    runaway.style.top = y + "px";
  }
}

/* ================= YES PAGE CELEBRATION ================= */

if (window.location.pathname.includes("yes.html")) {
  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.innerHTML = "💖";
      h.style.position = "fixed";
      h.style.left = Math.random() * 100 + "vw";
      h.style.top = Math.random() * 100 + "vh";
      h.style.fontSize = 16 + Math.random() * 26 + "px";
      h.style.animation = "floatUp 3s linear forwards";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 3000);
    }, i * 12);
  }
}
