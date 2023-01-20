console.log('yayyyyyyyy');
let mainDiv = document.getElementById("mayor-main-wrap")
let myCardArr = [{

  name:"Latoya Cantrell",
  text:"Cantrell was inaugurated as mayor on May 7, 2018, the first woman to hold the position in the city's history. Once in office, she established a new Office of Youth and Families, with the goal of creating a strategic plan to address families in crisis in the city. Cantrell also founded a Gun Violence Reduction Council, tasked with finding solutions to violent crime. Starting with a push to rededicate hotel taxes collected within the city for city use, Cantrell has focused on her #fairshar",
  img:"./imgs/Mayor+LaToya.webp",
  img2:""
}]

let newCardArr = [];


class TheMayor{

  constructor(name,text,img,wiki){
    this.name = name,
    this.text = text,
    this.img = img
    this.wiki = wiki


  }
  renderData(){
    mainDiv.innerHTML += `
    
    
    <h1 id="h1">${this.name}</h1>
    <p id="p">${this.text}</p>
     <img id="mayor-img" src="${this.img}">
     <a href="https://en.wikipedia.org/wiki/LaToya_Cantrell" target="_blank"> <button id="wiki-btn">click to
     wiki</button></a>
    
    
     `
    }
}
for(let card of myCardArr ){
  let tempArr = new TheMayor(card.name,card.text,card.img,card.wiki)

  newCardArr.push(tempArr)
  console.log(tempArr);
  
  }

  newCardArr.map((item)=>{
    item.renderData()
 })

  

  let mayorPic = document.getElementById("mayor-img")
  let inner = document.getElementById("test")
  let wikiBtn = document.getElementById("wiki-btn")

  mayorPic.addEventListener("click",()=>{
    mayorPic.style.display = "none"
inner.style.visibility = "visible"
wikiBtn.style.display = "none"


    
})

  