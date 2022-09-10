let myCardWrap = document.getElementById("card-wrap")



let myCardArr = [{

  name:"Ritz Carlton New Orleans",
  text:"Ritz Carlton 5 star Hotel",
  logo:"https://seeklogo.com/images/T/The_Ritz-Carlton-logo-77B2B1A7A0-seeklogo.com.png",
image:"	https://www.remotelands.com/remotenew1/dist/images/hotel/hotelgroup/17061604/b171103006.jpg",
link:"https://www.ritzcarlton.com/en/hotels/new-orleans?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
},

{
name:"Walk-Ons",
  text:"Best resturant in its class!",
  logo:"https://walk-ons.com/assets/uploads/images/WO_profile.jpg",
  image:"https://go.walk-ons.com/wp-content/uploads/2021/11/walkons-59.png",
  link:"https://walk-ons.com/"
},
{
name:"Sharaton New Orleans",
  text:"Sharaton 5 star Hotel",
  logo:"https://encore-venues.s3.amazonaws.com/4112/logo/logo.jpg",
  image:"https://media-cdn.tripadvisor.com/media/photo-s/24/40/84/52/hotel-exterior.jpg",
  link:"https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/rooms/"
},
{
name:"Parking P-402",
  text:"Parking 24/7",
  logo:"https://www.pcforecaster.com/wp-content/uploads/2021/03/premium-parking2451226.png",
  image:"https://www.megaron.gr/wp-content/uploads/2019/09/parkingpagemay2015.jpg",
  link:"https://www.premiumparking.com/P0402"
},
{
name:"LCM",
  text:"Best Childrens Museum in Town",
  logo:"https://www.lobservateur.com/wp-content/uploads/sites/21/2021/09/LCM.jpg",
  image:"https://cloudfront-us-east-1.images.arcpublishing.com/gray/7VFWJHF36VNNLKOE33OFZW4RSQ.jpg",
  link:"https://lcm.org/"
},
{
name:"Haunted Museum",
  text:"2021 Award Winning Museum",
  logo:"https://images8.webydo.com/95/9552445/3958%2F7F7A4EE8-509E-A675-8DCC-BD63E07D32CA.png",
  image:"https://gonola.com/images/pharmacy-museum-1100x733.jpg",
  link:"https://www.bloodymarystours.com/?y_source=1_MjU0MDYxNzItNzE1LWxvY2F0aW9uLndlYnNpdGU="
},
{
name:"Museum of Death",
  text:"Trip Advisors #1 Choice",
  logo:"https://assets.bigcartel.com/product_images/291663489/IMG_6964.jpg",
  image:"https://cdn1.matadornetwork.com/blogs/1/2022/03/Museum-of-Death-New-Orleans.jpg",
  link:"http://www.museumofdeath.net/"
},
{
name:"Ace Hotel",
  text:"4 Star Hotel",
  logo:"https://www.kindpng.com/picc/m/246-2468820_ace-hotel-nola-logo-hd-png-download.png",
  image:"https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v12699089-1440.jpg",
  link:"https://acehotel.com/new-orleans/"
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
    <div class="back-side-wrap"> 
    <h1 id="text-backside">${myCardArr[index].text}</h1>
    <img id="hotel-img" src="${myCardArr[index].image}">
<a href="${myCardArr[index].link}" target="_blank"><button id="reservation-btn">Make a reservation!</button></a>
    </div>
     
      `
    })

  })


//   let backSide =document.querySelectorAll(".back-side-wrap")

//   backSide.forEach((allBackers)=>{

//  allBackers.addEventListener('click', ()=>{

//     console.log('does it work?');
//   })
//   })
 








 