const flowers = ["🌸","🌷","🌼","💮","🌺"];

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 22 + "px";
  h.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}

function spawnFlower() {
  const f = document.createElement("div");
  f.className = "flower";
  f.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];
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
  s.style.background = `hsl(${Math.random()*360},80%,75%)`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 3000);
}

setInterval(spawnHeart, 300);
setInterval(spawnFlower, 700);
setInterval(spawnSparkle, 250);
