const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const bodyEl = document.body;

const imageUrls = [
  "https://source.unsplash.com/random/1920x1080?nature,water",
  "https://source.unsplash.com/random/1920x1080?nature,forest",
  "https://source.unsplash.com/random/1920x1080?nature,mountain",
  "https://source.unsplash.com/random/1920x1080?nature,beach",
  "https://source.unsplash.com/random/1920x1080?nature,desert",
];

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  } else if (h === 0) {
    h = 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateEl.innerText = now.toLocaleDateString(undefined, options);

  setTimeout(updateClock, 1000);
}

function updateBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  bodyEl.style.backgroundImage = `url('${imageUrls[randomIndex]}')`;
}

updateClock();
updateBackgroundImage();
setInterval(updateBackgroundImage, 3600000);
