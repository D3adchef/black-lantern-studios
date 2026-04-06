const yearEl = document.getElementById("year");
const toastEl = document.getElementById("toast");
const toggleMotionBtn = document.getElementById("toggleMotion");

yearEl.textContent = new Date().getFullYear();

let toastTimer = null;

function showToast(message){
  if (!message) return;

  toastEl.textContent = message;
  toastEl.classList.add("is-on");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("is-on");
  }, 1600);
}

// Buttons with data-toast
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-toast]");
  if (!btn) return;

  showToast(btn.getAttribute("data-toast"));
});

// Reduced motion toggle (persists)
const STORAGE_KEY = "bls_reduce_motion";

function applyMotionSetting(){
  const reduce = localStorage.getItem(STORAGE_KEY) === "1";
  document.body.classList.toggle("reduce-motion", reduce);
}

applyMotionSetting();

toggleMotionBtn.addEventListener("click", () => {
  const currently = localStorage.getItem(STORAGE_KEY) === "1";
  localStorage.setItem(STORAGE_KEY, currently ? "0" : "1");
  applyMotionSetting();
  showToast(document.body.classList.contains("reduce-motion") ? "Motion: Off" : "Motion: On");
});
