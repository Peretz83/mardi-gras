let myCardWrap = document.getElementById("card-wrap")



let myCardArr = [{

  name:"Ritz Carlton New Orleans",
  text:"Ritz Carlton 5 star Hotel",
  logo:"https://seeklogo.com/images/T/The_Ritz-Carlton-logo-77B2B1A7A0-seeklogo.com.png",
image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png"
},

{
name:"Walk-Ons",
  text:"Best in its class!",
  logo:"https://walk-ons.com/assets/uploads/images/WO_profile.jpg",
  image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png"
},
{
name:"Sharaton New Orleans",
  text:"Sharaton 5 star Hotel",
  logo:"https://seeklogo.com/images/T/The_Ritz-Carlton-logo-77B2B1A7A0-seeklogo.com.png",
  image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png"
},
{
name:"ritz number 3",
  text:"bla bla bla",
  logo:"https://seeklogo.com/images/T/The_Ritz-Carlton-logo-77B2B1A7A0-seeklogo.com.png",
  image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png"
},
{
name:"ritz number 3",
  text:"bla bla bla",
  logo:"https://seeklogo.com/images/T/The_Ritz-Carlton-logo-77B2B1A7A0-seeklogo.com.png",
  image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png"
},
{
name:"ritz number 3",
  text:"bla bla bla",
  logo:"https://seeklogo.com/images/T/The_Ritz-Carlton-logo-77B2B1A7A0-seeklogo.com.png",
  image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png"
}
]

let newCardArr = [];

class TheSponsors{

  constructor(name,text,logo){
    this.name = name
    this.text = text
    this.logo = logo


  }

  renderData(){
    myCardWrap.innerHTML += `
    
    <div class="inner-divs"> 
    <h1 id="h1">${this.name}</h1>
    <p id="p">${this.text}</p>
    <img id="hotel-logo" src="${this.logo}">
    </div>
    
     `
    }
}
 
for(let card of myCardArr ){
  let tempArr = new TheSponsors(card.name,card.text,card.logo)

  newCardArr.push(tempArr)
  
  }





  newCardArr.map((item)=>{
    item.renderData()

  })

  let myInners = document.querySelectorAll(".inner-divs")

  myInners.forEach((allInners,index)=>{

    allInners.addEventListener("click",()=>{
      allInners.innerHTML= '';
      allInners.innerHTML +=`
    <div> 
    <h1>${myCardArr[index].text}</h1>
    <img id="hotel-img" src="${myCardArr[index].image}">

    </div>
     
      
      `

    })

  })






 