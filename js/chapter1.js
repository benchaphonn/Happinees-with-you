const levels = [
  {
    original: "image/level1_original.jpg",
    changed: "image/level1_changed.jpg",
    spots: [
      [33.4, 75.0, 6, "ลูกเทนนิสเล็กด้านล่าง"],
      [39.9, 35.0, 6, "สีผมเข้มขึ้น"],
      [67.4, 70.8, 6, "ด้ามไม้เทนนิส"],
      [49.0, 16.7, 6, "รอยบนเสา"],
      [74.0, 16.3, 6, "เมฆเล็ก"]
    ]
  },
  {
    original: "image/level2_original.jpg",
    changed: "image/level2_changed.jpg",
    spots: [
      [48.1, 82.3, 6, "ป้ายทะเบียน"],
      [15.9, 29.8, 6, "ป้ายเล็กด้านซ้าย"],
      [39.8, 44.6, 6, "โลโก้เสื้อ"],
      [72.9, 11.7, 6, "ต้นปาล์ม"],
      [49.9, 63.9, 6, "บริเวณมือ"]
    ]
  },
  {
    original: "image/level3_original.jpg",
    changed: "image/level3_changed.jpg",
    spots: [
      [81.3, 53.6, 6, "ลูกบอลด้านขวา"],
      [91.8, 22.0, 6, "รูปปั้น/ของตกแต่งด้านขวาบน"],
      [43.9, 50.5, 6, "จุดสีบนกีตาร์"],
      [12.5, 12.8, 6, "โคมไฟด้านซ้ายบน"],
      [45.8, 75.6, 6, "ลายพรมด้านล่าง"]
    ]
  },
  {
    original: "image/level4_original.jpg",
    changed: "image/level4_changed.jpg",
    spots: [
      [16.0, 15.6, 7, "สี่เหลี่ยมด้านซ้ายบน"],
      [13.8, 84.7, 7, "ดอกไม้สีเหลืองด้านล่างซ้าย"],
      [38.8, 58.4, 7, "เสารั้วตรงกลาง"],
      [90.4, 30.1, 7, "นกด้านขวาบน"],
      [84.0, 55.6, 7, "หลังคาด้านขวา"]
    ]
  },
  {
    original: "image/level5_original.jpg",
    changed: "image/level5_changed.jpg",
    spots: [
      [81.2, 26.4, 9, "จอทีวี"],
      [94.0, 13.5, 9, "ใบไม้ด้านขวาบน"],
      [10.6, 35.7, 9, "โซฟาด้านซ้าย"],
      [43.7, 31.5, 9, "สีผม"],
      [33.9, 83.5, 9, "รองเท้า"]
    ]
  }
];

let currentLevel = 0;
let found = [];
let score = 0;
let timeLeft = 120;
let timer = null;
let gameOver = false;

const levelNo = document.getElementById("levelNo");
const foundText = document.getElementById("foundText");
const timeText = document.getElementById("timeText");
const scoreText = document.getElementById("scoreText");
const timeBar = document.getElementById("timeBar");

const originalImg = document.getElementById("originalImg");
const changedImg = document.getElementById("changedImg");
const clickArea = document.getElementById("clickArea");
const markerLayer = document.getElementById("markerLayer");

const hintBtn = document.getElementById("hintBtn");
const answerBtn = document.getElementById("answerBtn");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const popupBtn = document.getElementById("popupBtn");
const toastBox = document.getElementById("toast");

function loadLevel() {
  const level = levels[currentLevel];

  found = [];
  timeLeft = 120;
  gameOver = false;

  clearInterval(timer);

  levelNo.textContent = currentLevel + 1;
  foundText.textContent = "0/5";
  timeText.textContent = "02:00";
  scoreText.textContent = score;
  timeBar.style.width = "100%";

  originalImg.src = level.original;
  changedImg.src = level.changed;

  markerLayer.innerHTML = "";

  startTimer();
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (gameOver) return;

    timeLeft--;
    updateTime();

    if (timeLeft <= 0) {
      loseGame();
    }
  }, 1000);
}

function updateTime() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const sec = String(timeLeft % 60).padStart(2, "0");

  timeText.textContent = `${min}:${sec}`;
  timeBar.style.width = `${(timeLeft / 120) * 100}%`;
}

function getClickPercent(e) {
  const rect = changedImg.getBoundingClientRect();

  return {
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100
  };
}

clickArea.addEventListener("click", (e) => {
  if (gameOver) return;

  const { x, y } = getClickPercent(e);
  const level = levels[currentLevel];

  let hitIndex = -1;

  level.spots.forEach((spot, index) => {
    if (found.includes(index)) return;

    const distance = Math.hypot(x - spot[0], y - spot[1]);

    if (distance <= spot[2]) {
      hitIndex = index;
    }
  });

  if (hitIndex !== -1) {
    found.push(hitIndex);

    const spot = level.spots[hitIndex];
    addMarker("mark", spot[0], spot[1]);

    score += 100;
    foundText.textContent = `${found.length}/5`;
    scoreText.textContent = score;

    showToast("ถูกต้อง!");

    if (found.length === 5) {
      winGame();
    }
  } else {
    addMarker("miss", x, y);
    showToast("ยังไม่ใช่จุดนี้");
  }
});

function addMarker(type, x, y) {
  const marker = document.createElement("div");
  marker.className = type;
  marker.style.left = `${x}%`;
  marker.style.top = `${y}%`;
  markerLayer.appendChild(marker);

  if (type === "miss") {
    setTimeout(() => marker.remove(), 600);
  }
}

hintBtn.addEventListener("click", () => {
  if (gameOver) return;

  const level = levels[currentLevel];

  const notFound = level.spots
    .map((spot, index) => ({ spot, index }))
    .filter(item => !found.includes(item.index));

  if (notFound.length === 0) {
    showToast("เจอครบแล้ว");
    return;
  }

  const item = notFound[0];

  const marker = document.createElement("div");
  marker.className = "hint-mark";
  marker.style.left = `${item.spot[0]}%`;
  marker.style.top = `${item.spot[1]}%`;

  markerLayer.appendChild(marker);
  showToast("คำใบ้: " + item.spot[3]);

  setTimeout(() => marker.remove(), 2200);
});

answerBtn.addEventListener("click", () => {
  if (gameOver) return;

  const level = levels[currentLevel];

  level.spots.forEach((spot, index) => {
    if (!found.includes(index)) {
      addMarker("answer-mark", spot[0], spot[1]);
    }
  });

  showToast("เฉลยจุดที่เหลือแล้ว");
});

function winGame() {
  gameOver = true;
  clearInterval(timer);

  popupTitle.textContent = "ผ่านด่านแล้ว 💖";
  popupText.textContent = "เจอครบทั้ง 5 จุดแล้ว";
  popup.classList.remove("hidden");
}

function loseGame() {
  gameOver = true;
  clearInterval(timer);

  popupTitle.textContent = "หมดเวลา 😭";
  popupText.textContent = "ลองใหม่อีกครั้งนะ";
  popup.classList.remove("hidden");
}

popupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");

  if (found.length === 5) {
    nextLevel();
  } else {
    loadLevel();
  }
});

function nextLevel() {
  if (currentLevel < levels.length - 1) {
    currentLevel++;
    loadLevel();
  } else {
    window.location.href = "chapter2.html";
  }
}

function showToast(text) {
  toastBox.textContent = text;
  toastBox.classList.add("show");

  setTimeout(() => {
    toastBox.classList.remove("show");
  }, 1200);
}

loadLevel();