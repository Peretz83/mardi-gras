
let form = document.getElementById('my-form')
let formErrors = document.getElementById('errors');
let errors = [];
let newClients = new Array

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
    subject,
    message
  } = form.elements;
  let tempName = name.value.trim();
  if (tempName.length < 2) {
    let msg = "Name is too short"
    errors.push(msg)
    evt.preventDefault();
  }

  if (!email.value.includes("@")) {
    let msg = "Incorrect email or password"
    errors.push(msg)
    evt.preventDefault();
  }

  if (subject.value.length < 2) {
    let msg = "Min of 3 characters needed"
    errors.push(msg)
    evt.preventDefault();
  }
  if (message.value.length < 2) {
    let msg = "Min of 3 characters needed"
    errors.push(msg)
    evt.preventDefault();
  }

  if (errors.length > 0) {
    errors.map((err) => {
      formErrors.innerHTML += `
      <div class="errMsg">
      There is a problem: ${err}
      </div>
      `
    })
  }


  evt.preventDefault();
  console.log("You are good to go");
  document.getElementById('name').value = ""
  document.getElementById('email').value = ""
  document.getElementById('subject').value = ""
  document.getElementById('message').value = ""
})