let nextBtn = document.querySelector(".next-btn");
let favBtn = document.querySelector(".fav-btn");
let i = 0;
let speed = 30;
let qIndex = Math.floor(Math.random() * quotes.length);
var crntQuote = quotes[qIndex];
let author = document.querySelector(".qtnist");

function writeQuote() {
  author.innerHTML = `<img src="data:image/${crntQuote.qA}">`;
  document.styleSheets[0].insertRule(
    `.qtnist::before { content: '${crntQuote.aDetails}'; }`,
    document.styleSheets[0].cssRules.length
  );
  if (i < crntQuote.q.length) {
    document.getElementById("quote").innerHTML += crntQuote.q.charAt(i);
    i++;
    setTimeout(writeQuote, speed);
  }
}
writeQuote();

nextBtn.addEventListener("click", writeNext);
function writeNext() {
  nextBtn.style.color = "red";
  setTimeout(() => {
    nextBtn.style.color = "#fff";
  }, 1000);
  let j = Math.floor(Math.random() * quotes.length);
  qIndex = j;
  crntQuote = quotes[qIndex];
  document.getElementById("quote").innerHTML = "";
  i = 0;
  writeQuote();
  if (crntQuote.isFav == "no") {
    favBtn.querySelector("i").style.color = "white";
  } else {
    favBtn.querySelector("i").style.color = "red";
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
    favBtn.querySelector("i").style.color = "red";
    crntQuote.isFav = "yes";
  }
}

if (crntQuote.isFav == "yes") {
  favBtn.querySelector("i").style.color = "red";
} else {
  favBtn.querySelector("i").style.color = "#fff";
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
      nightBtn.querySelector("i").style.color = "white";
      nightBtn.querySelector("i").style.textShadow =
        "1px 1px 10px white, -1px -1px 10px white";
      document.querySelector("#quote").style.color = "var(--text)";
      nightBtn.style.color = "#fff";
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
    document
      .querySelector(".controls")
      .querySelectorAll("i")
      .forEach((element) => (element.style.animation = "none"));
    setTimeout(() => {
      document.querySelector("#quote").style.color = "rgba(255,255,255,.8)";
      nightBtn.querySelector("i").style.color = "#f7e6da";
      nightBtn.querySelector("i").style.textShadow =
        "2px 2px 8px var(--primary), -2px -2px 8px var(--primary)";
      author.style.display = "block";
    }, 1000);
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
      nightBtn.innerHTML = '<i class="bx bx-moon"></i>Slight';
      nightBtn
        .querySelector("i")
        .animate({ transform: "rotate(740deg)" }, { duration: 2000 });
      document.body.style.backgroundColor = "#000";
      document.querySelector("nav").style.borderColor = "transparent";
    }, 500);
    isNight = "slight";
    localStorage.setItem("isNight", "false");
  }
}
