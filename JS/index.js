let firstPopUp = document.getElementById('take-quiz')
let takeQuizBtn = document.getElementById('quiz-btn')
let quiz = document.getElementById('quiz')
let submitQuiz = document.getElementById("submit-quiz-btn")


let myCorrectAnswer = []



firstPopUp.addEventListener('click', () => {
 firstPopUp.style.display = "none"
   quiz.style.visibility = "visible"
   quiz.style.display = "block"
  
  })

  submitQuiz.addEventListener("click",()=>{
    if(document.getElementById("true1").checked){
      myCorrectAnswer.push(document.getElementById("true1").value)
      document.getElementById("question1-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question1-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true2").checked){
      myCorrectAnswer.push(document.getElementById("true2").value)
      document.getElementById("question2-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question2-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true3").checked){
      myCorrectAnswer.push(document.getElementById("true3").value)
      document.getElementById("question3-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question3-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true4").checked){
      myCorrectAnswer.push(document.getElementById("true4").value)
      document.getElementById("question4-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question4-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true5").checked){
      myCorrectAnswer.push(document.getElementById("true5").value)
      document.getElementById("question5-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question5-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true6").checked){
      myCorrectAnswer.push(document.getElementById("true6").value)
      document.getElementById("question6-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question6-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true7").checked){
      myCorrectAnswer.push(document.getElementById("true7").value)
      document.getElementById("question7-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question7-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true8").checked){
      myCorrectAnswer.push(document.getElementById("true8").value)
      document.getElementById("question8-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question8-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true9").checked){
      myCorrectAnswer.push(document.getElementById("true9").value)
      document.getElementById("question9-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question9-wrap").style.backgroundColor = "red"
      
    }
    if(document.getElementById("true10").checked){
      myCorrectAnswer.push(document.getElementById("true10").value)
      document.getElementById("question10-wrap").style.backgroundColor = "green"

    }else{
       document.getElementById("question10-wrap").style.backgroundColor = "red"
      
    }

    quiz.innerHTML+=`
<div> Your Final Score ${myCorrectAnswer.length}</div>


`
let closeBtn = document.getElementById("close-quiz-btn")
closeBtn.addEventListener("click",()=>{
  quiz.style.display = "none"
   
})

})












   



 