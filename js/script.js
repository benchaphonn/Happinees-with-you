const correctPassword = "260226";
let input = "";

const passBoxSlots = document.querySelectorAll("#passBox span");
const numberButtons = document.querySelectorAll(".keypad button");
const enterBtn = document.getElementById("enterBtn");
const wrongText = document.getElementById("wrongText");
const emojiArea = document.getElementById("emojiArea");

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (input.length < 6) {
      input += button.dataset.num;
      updateDisplay();
      wrongText.textContent = "";
    }
  });
});

enterBtn.addEventListener("click", checkPassword);

function updateDisplay() {
  for (let i = 0; i < 6; i++) {
    passBoxSlots[i].textContent = input[i] || "*";
  }
}

function checkPassword() {
  if (input === correctPassword) {
    window.location.href = "howtoplay.html";
  } else {
    wrongText.textContent = "รหัสผิดนะไอ้ดื้อ";
    input = "";
    updateDisplay();
  }
}

function createEmoji() {
  const emojis = ["🌸", "🦈"];
  const emoji = document.createElement("div");

  emoji.className = "fall-emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 95 + "%";
  emoji.style.fontSize = Math.random() * 18 + 24 + "px";
  emoji.style.animationDuration = Math.random() * 5 + 7 + "s";

  emojiArea.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 12000);
}

setInterval(createEmoji, 700);