let next = document.querySelector(".next-btn");
let favBtn = document.querySelector(".fav-btn");
let i = 0;
let speed = 30;
let qIndex = Math.floor(Math.random() * quotes.length);
var crntQuote = quotes[qIndex];
let author = document.querySelector(".qtnist");

function writeQuote() {
  author.innerHTML = `<img src="data:image/${crntQuote.qA}">`;
  if (i < crntQuote.q.length) {
    document.getElementById("quote").innerHTML += crntQuote.q.charAt(i);
    i++;
    setTimeout(writeQuote, speed);
  }
}
writeQuote();

next.addEventListener("click", writeNext);
function writeNext() {
  let j = Math.floor(Math.random() * quotes.length);
  qIndex = j;
  crntQuote = quotes[qIndex];
  document.getElementById("quote").innerHTML = "";
  i = 0;
  writeQuote();
  if (crntQuote.isFav == "no") {
    favBtn.querySelector("i").style.color = "white";
  } else {
    favBtn.querySelector("i").style.color = "var(--text)";
  }
}

favBtn.addEventListener("click", faved);
function faved() {
  if (localStorage.getItem(`q${qIndex}isFav`) == "yes") {
    localStorage.setItem(`q${qIndex}isFav`, "no");
    favBtn.querySelector("i").style.color = "#fff";
    crntQuote.isFav = "no";
  } else {
    localStorage.setItem(`q${qIndex}isFav`, "yes");
    favBtn.querySelector("i").style.color = "var(--text)";
    crntQuote.isFav = "yes";
  }
}

if (crntQuote.isFav == "yes") {
  favBtn.querySelector("i").style.color = "var(--text)";
} else {
  favBtn.querySelector("i").style.color = "white";
}

// -------------theme----------------
let quoteBox = document.querySelector(".quote-box");

let nightBtn = document.querySelector(".night-btn");
nightBtn.addEventListener("click", onNightBtn);

let isNight = localStorage.getItem("isNight") || "true";
onNightBtn();
function onNightBtn() {
  if (isNight == "true") {
    setTimeout(() => {
      document.body.style.backgroundColor = "var(--primary)";
      document.querySelector("nav").style.borderColor = "var(--border)";
      nightBtn.innerHTML = '<i class="bx bx-moon"></i>Night';
      document.querySelector("#quote").style.color = "var(--text)";
      nightBtn.style.color = "black";
    }, 500);
    isNight = "false";
    localStorage.setItem("isNight", "true");
  } else if (isNight == "slight") {
    quoteBox.style.animation = "none";
    nightBtn.innerHTML = '<i class="bx bx-moon"></i>light';
    document.querySelector(".controls").style.animation = "none";
    nightBtn
      .querySelector("i")
      .animate({ transform: "rotate(740deg)" }, { duration: 2000 });
    document.querySelector("nav").style.borderColor = "transparent";
    document.body.style.backgroundColor = "#000";
    nightBtn.style.color = "white";
    setTimeout(() => {
      document.querySelector("#quote").style.color = "rgba(255,255,255,.8)";
      author.style.display = "block";
      document
        .querySelector(".controls")
        .querySelectorAll("i")
        .forEach((element) => (element.style.animation = "none"));
    }, 1500);
    isNight = "true";
    localStorage.setItem("isNight", "slight");
  } else {
    quoteBox.style.animation = "main-reconstract 1.5s ease-out forwards";
    if (document.body.getBoundingClientRect().width < 640) {
      quoteBox.style.animation = "main-reconstract-640 1.5s ease-out forwards";
    }
    author.style.display = "none";
    document.querySelector(".controls").style.animation =
      "con-reconstract 2s forwards";
    setTimeout(() => {
      document
        .querySelector(".controls")
        .querySelectorAll("i")
        .forEach(
          (element) =>
            (element.style.animation = "con-i-reconstract 2s forwards")
        );
      document.querySelector("#quote").style.color = "rgba(255,255,255,.8)";
      nightBtn.style.zIndex = "11";
      nightBtn.style.color = "white";
      nightBtn.innerHTML = '<i class="bx bx-moon"></i>Slight';
      nightBtn
        .querySelector("i")
        .animate({ transform: "rotate(740deg)" }, { duration: 2500 });
      document.body.style.backgroundColor = "#000";
      document.querySelector("nav").style.borderColor = "transparent";
    }, 1500);
    isNight = "slight";
    localStorage.setItem("isNight", "false");
  }
}
