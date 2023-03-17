let index=0;
const images=[
'images/pic-1.jpg',
'images/pic-2.jpg',
'images/pic-3.jpg',
'images/pic-4.jpg',
'images/pic-5.jpg',
'images/pic-6.jpg',
'images/pic-7.jpg',
'images/pic-8.jpg',
'images/pic-9.jpg'
]

const imgel=document.getElementById('slider');
setInterval(()=>{
if(index===images.length){
  index=0;
}
const url=images[index]
imgel.setAttribute("src",url);
index++;
},1000)

const imgelement=document.getElementById('slider1');
setInterval(()=>{
 
  if(index===images.length){
    index=0;
  }
  const imgUrl=images[index];
  imgelement.setAttribute("src",imgUrl)
   index++;
  // console.log(index++);
},3000)