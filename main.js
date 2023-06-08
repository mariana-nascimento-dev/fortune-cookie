const cookieOne = document.querySelector("#cookieOne")
const button = document.querySelector("button")
const phrases = [
  "Stop trying to calm the storm, calm yourself the storm will pass.",
  "The words you speak become the house you live in.",
  "Remember: If you avoid failure, you also avoid success.",
  "You can try again.",
  "Don't believe everything you think.",
  "It's just a bad day not a bad life.",
  "Just because it's taking time doesn't mean it's not happening.",
  "The little progress you have made today still matters.",
  "It's okay if it's taking more time than you thought.",
  "Go where you feel the most alive.",
]

cookieOne.addEventListener('click', openCookie)
button.addEventListener('click', returnToHomePage)
document.addEventListener('keydown', useEnter)

function openCookie(event) {

  switchScreen()
  pickPhrase()
}

function returnToHomePage() {

  switchScreen()
}

function switchScreen() {
  document.querySelector(".screen1").classList.toggle('hide')
  document.querySelector(".screen2").classList.toggle('hide')
}

function useEnter (e) {
  if(e.key == 'Enter' && document.querySelector(".screen1").classList.contains('hide')) {
    returnToHomePage()
  } else if(e.key == 'Enter' && document.querySelector(".screen2").classList.contains('hide')) {
    openCookie(event)
  }
}

function pickPhrase() {
  let allPhrases = phrases.length
  let randomNumber = Math.floor(Math.random() * allPhrases)  
  document.querySelector(".screen2").querySelector(".message").innerText = `${phrases[randomNumber]}`
}
//Math.floor() arredonda o número para baixo