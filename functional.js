let next = document.querySelector('.next-btn')
let favBtn = document.querySelector('.fav-btn')
let i = 0;
let speed = 30;
let qIndex = Math.floor(Math.random()*quotes.length)
var crntQuote = quotes[qIndex];
function writeQuote() {
let author = document.querySelector('.qtnist')
author.innerHTML = `<img src="data:image/${crntQuote.qA}">`
  if (i < crntQuote.q.length) {
    document.getElementById("quote").innerHTML += crntQuote.q.charAt(i);
    i++;
    setTimeout(writeQuote, speed);
  }
}
writeQuote()

next.addEventListener('click', writeNext)
function writeNext(){
  let j = Math.floor((Math.random())*quotes.length)
    qIndex = j;
    crntQuote = quotes[qIndex]
    document.getElementById("quote").innerHTML = "";
    i = 0;
    writeQuote()
    console.log(qIndex)
    if(crntQuote.isFav == 'no'){
      favBtn.querySelector('i').style.color = 'white'
    }else{
      favBtn.querySelector('i').style.color = 'var(--text)'
    
    }

}

favBtn.addEventListener('click', faved)
function faved(){
  if(localStorage.getItem(`q${qIndex}isFav`) == 'yes'){
    localStorage.setItem(`q${qIndex}isFav`, 'no')
    favBtn.querySelector('i').style.color = '#fff'
    crntQuote.isFav = 'no'
  }else{
      localStorage.setItem(`q${qIndex}isFav`, 'yes')
      favBtn.querySelector('i').style.color = 'var(--text)'
    crntQuote.isFav = 'yes'

    }
}


if(crntQuote.isFav == 'yes'){
  favBtn.querySelector('i').style.color = 'var(--text)'
}else{
  favBtn.querySelector('i').style.color = 'white'

}