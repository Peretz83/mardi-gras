let form = document.getElementById('my-form')
let errors = [];
let nameErr = []
let emailErr = []
let subjectErr = []
let textareaErr = []



let newClients = []

class Clients {
  constructor(name, email, subject, message) {
    this.name = name,
      this.email = email,
      this.subject = subject,
      this.message = message

  }

}

form.addEventListener("submit", (evt) => {

  let clients = new Clients(document.getElementById('name').value, document.getElementById('email').value, document.getElementById('subject').value, document.getElementById('message').value)
  newClients.push(clients)

  let jsArr = JSON.stringify(newClients)
  window.localStorage.setItem("clients", jsArr)


  let {
    name,
    email,
  
   
  } = form.elements;

  let tempName = name.value.trim();

  if (tempName.length < 3) {
    let msg = "Name is too short"
    // errors.push(msg)
    nameErr.push(msg)
    evt.preventDefault();

    let nameErrDiv = document.getElementById('name-err-msg')
    nameErr.map((err) => {
      nameErrDiv.innerHTML += `
      <div class="errMsg">
      There is a problem: ${err}
      </div>
      `
    })
  }

  if (!email.value.includes("@")) {
    let msg = "Incorrect email or password"
    errors.push(msg)
    emailErr.push(msg)
    evt.preventDefault();

    let emailErrDiv = document.getElementById('email-err-msg')
    emailErr.map((err) => {
      emailErrDiv.innerHTML += `
      <div class="errMsg">
      There is a problem: ${err}
      </div>
      `
    })
  }


  

  if (errors.length > 0) {


  } else {
    evt.preventDefault();

    let submitMsg = "Your message has been received."
    let displayMsg = document.getElementById("submitMsg")
    displayMsg.style.visibility = "visible"
    displayMsg.style.backgroundColor = "beige"
    displayMsg.innerHTML = "Thank you, " + `${newClients[0].name}` + "!" + " " + submitMsg
    let xBtn = document.createElement("button")
    displayMsg.appendChild(xBtn)
    xBtn.innerHTML = "&times;"
    xBtn.className = "x-btn"
    xBtn.style.width = "30px"
    xBtn.style.height = "20px"
    xBtn.style.padding = "5px"
    xBtn.style.display = "flex"
    xBtn.style.alignItems = "center"

    let deleteMsg = document.getElementById("submitMsg")
    deleteMsg.addEventListener('click', () => {

      deleteMsg.style.display = "none"
    })

  }

  evt.preventDefault();
  console.log("You are good to go");
  document.getElementById('name').value = ""
  document.getElementById('email').value = ""
  document.getElementById('subject').value = ""
  document.getElementById('message').value = ""

})