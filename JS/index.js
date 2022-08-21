let firstPopUp = document.getElementById('take-quiz')
let takeQuizBtn = document.getElementById('quiz-btn')
let quiz = document.getElementById('quiz')


takeQuizBtn.addEventListener('click', () => {
  // firstPopUp.style.display = "none"
  // quiz.style.visibility = "visible"
   takeQuizBtn.innerHTML=`
   <h4>How are you</h4>
   <div>Hey!</div>
   
   `})
   let myClass = document.querySelector(".intro-header")

   let myDiv = document.createElement("div")
   myClass.appendChild(myDiv)
   myDiv.style.width = "50px"
   myDiv.style.height = "50px"
   myDiv.style.backgroundColor = "yellow"



 