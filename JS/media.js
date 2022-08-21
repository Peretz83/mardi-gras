let myVideoWrap = document.getElementById("video-wrap")



let myVideoArr = [
  {

  header:"Check out Mardi Gras 2022",
  video:"https://www.youtube.com/embed/CaHsvjCZUJs" ,
  },
  {

  header:"Check out Mardi Gras 2022",
  video:"https://www.youtube.com/embed/7J3ZKkmQxEE",
  },
  {

  header:"Mardi Gras for Children of all ages",
  video:"https://www.youtube.com/embed/pBFSY4RM0p4",
  },
  {

  header:"Mardi Gras 2020",
  video:"https://www.youtube.com/embed/a8l3u8GJLr8",
  }

]

let newVideoArr = [];

class TheVideos {
constructor(header,video){
this.header = header
this.video = video
}

renderVideo(){
myVideoWrap.innerHTML +=`
<div class="inner-divs">
<h1 class="all-headers">${this.header}</h1>
 <iframe width="300" height="200" src="${this.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
`

}
}

for(let card of myVideoArr ){
  let tempArr = new TheVideos(card.header,card.video)
  newVideoArr.push(tempArr)
}

newVideoArr.map((item)=>{
  item.renderVideo()
})