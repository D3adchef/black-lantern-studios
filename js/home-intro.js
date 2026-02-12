const light = document.querySelector(".lantern-light");
const darkness = document.querySelector(".darkness");
const scene = document.querySelector(".scene");
const sprayTitle = document.querySelector(".spray-title");
const hotspotsLayer = document.querySelector(".hotspots");

let flickers = 0;
let done = false;
let intervalId = null;

/* =========================
   COORDINATE TRACKER
   ========================= */

(function setupCoordinateTracker(){
  document.addEventListener("click", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    console.log(`coords: --x: ${x.toFixed(2)}%; --y: ${y.toFixed(2)}%;`);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "d") {
      document.body.classList.toggle("debug-hotspots");
      console.log("debug-hotspots:", document.body.classList.contains("debug-hotspots"));
    }
  });
})();

/* =========================
   INTRO FLICKER SEQUENCE
   ========================= */

function flickerPulse(){
  flickers++;

  darkness.classList.add("is-flicker");
  light.classList.add("is-on");

  setTimeout(() => light.classList.add("is-off"), 140);
  setTimeout(() => light.classList.remove("is-off"), 260);
  setTimeout(() => light.classList.add("is-off"), 380);
  setTimeout(() => light.classList.remove("is-off"), 520);
  setTimeout(() => light.classList.add("is-off"), 680);

  setTimeout(() => {
    darkness.classList.remove("is-flicker");
    light.classList.remove("is-on");
  }, 820);

  if (flickers === 3) {
    setTimeout(() => {
      scene.classList.add("has-words");
      if (sprayTitle) sprayTitle.classList.add("is-visible");
    }, 120);
  }

  if (flickers >= 3) {
    setTimeout(reveal, 1200);
  }
}

function reveal(){
  if (done) return;
  done = true;

  darkness.classList.remove("is-flicker");
  darkness.classList.add("is-revealed");

  light.classList.remove("is-off");
  light.classList.add("is-on", "is-revealed");

  clearInterval(intervalId);

  if (hotspotsLayer) hotspotsLayer.style.pointerEvents = "auto";

  setTimeout(startRandomLanternFlicker, 5000);
}

setTimeout(() => {
  intervalId = setInterval(flickerPulse, 2000);
}, 800);

/* =========================
   RANDOM LANTERN FLICKER
   ========================= */

function rand(min, max){
  return Math.random() * (max - min) + min;
}
function randInt(min, max){
  return Math.floor(rand(min, max + 1));
}

let flickerTimeout = null;

function doFlickerBurst(){
  if (!done) return;

  light.classList.add("is-flicker");

  const pulses = randInt(2, 5);
  let t = 0;

  for (let i = 0; i < pulses; i++){
    const offMs = randInt(60, 160);
    const onMs  = randInt(70, 220);

    setTimeout(() => light.classList.add("is-off"), t);
    t += offMs;

    setTimeout(() => light.classList.remove("is-off"), t);
    t += onMs;
  }

  setTimeout(() => {
    light.classList.remove("is-off");
    light.classList.remove("is-flicker");
  }, t + 30);
}

function scheduleNextFlicker(){
  if (!done) return;

  const wait = randInt(15000, 35000);

  flickerTimeout = setTimeout(() => {
    doFlickerBurst();
    scheduleNextFlicker();
  }, wait);
}

function startRandomLanternFlicker(){
  if (flickerTimeout) clearTimeout(flickerTimeout);
  scheduleNextFlicker();
}
