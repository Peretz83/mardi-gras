let myVideoWrap = document.getElementById("video-wrap")



let myVideoArr = [
  {

  header:"Check out Mardi Gras 2022",
  video:"https://www.youtube.com/embed/OmnTodQlEaw" ,
  },
  {

  header:"Check out Mardi Gras 2022",
  video:"https://www.youtube.com/watch?v=OmnTodQlEaw",
  },
  {

  header:"Check out Mardi Gras 2022",
  video:"https://www.youtube.com/watch?v=OmnTodQlEaw",
  },
  {

  header:"Check out Mardi Gras 2022",
  video:"https://www.youtube.com/watch?v=OmnTodQlEaw",
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
<h1>${this.header}</h1>
 <iframe width="560" height="315" src="${this.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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