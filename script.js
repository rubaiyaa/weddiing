const openButton = document.getElementById("openInvitation");
const invitationContent = document.getElementById("invitationContent");

openButton.addEventListener("click", () => {
  invitationContent.classList.add("is-open");
  openButton.innerHTML = "<span>Invitation opened</span><span aria-hidden='true'>♥</span>";
  openButton.disabled = true;
  invitationContent.scrollIntoView({ behavior: "smooth", block: "start" });
});

const events = [
  { id: "mehendiCountdown", date: new Date("2026-12-30T12:00:00+06:00") },
  { id: "akhdCountdown", date: new Date("2027-01-01T12:00:00+06:00") }
];

function updateCountdown(event) {
  const target = document.getElementById(event.id);
  const remaining = event.date.getTime() - Date.now();
  if (remaining <= 0) {
    target.innerHTML = '<p class="countdown-finished">The day is here — let’s celebrate!</p>';
    target.style.display = "block";
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const mins = Math.floor((remaining % 3600000) / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  const values = [days, hours, mins, secs];
  const labels = ["Days", "Hours", "Mins", "Secs"];
  target.innerHTML = values.map((value, i) =>
    `<div><strong>${String(value).padStart(2, "0")}</strong><span>${labels[i]}</span></div>`
  ).join("");
}
function tick() { events.forEach(updateCountdown); }
tick();
setInterval(tick, 1000);

function setupVenue(prefix, address, customMapUrl) {
  const addressElement = document.getElementById(`${prefix}Address`);
  const mapButton = document.getElementById(`${prefix}Map`);
  const cleanAddress = (address || "").trim();
  if (!cleanAddress) {
    addressElement.textContent = "Address to be shared";
    mapButton.hidden = true;
    return;
  }
  addressElement.textContent = cleanAddress;
  const mapUrl = (customMapUrl || "").trim() ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanAddress)}`;
  mapButton.href = mapUrl;
  mapButton.hidden = false;
}
setupVenue("mehendi", WEDDING_CONFIG.mehendiAddress, WEDDING_CONFIG.mehendiMapUrl);
setupVenue("akhd", WEDDING_CONFIG.akhdAddress, WEDDING_CONFIG.akhdMapUrl);
