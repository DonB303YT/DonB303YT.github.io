
const visitEl = document.getElementById("visit-count");
if (visitEl) {
  const key = "1p100i_visits";
  const current = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(current));
  visitEl.textContent = String(current).padStart(4, "0");
}


const clockEl = document.getElementById("clock");
function updateClock() {
  if (!clockEl) return;
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString("de-DE");
}
updateClock();
setInterval(updateClock, 1000);
