const container =document.querySelector('.container');
const URL = "https://avatars.dicebear.com/api/adventurer/";

function getRandNum(){
     return Math.floor(Math.random()*100)
}

function loadImage(numImages = 12){
    let i = 0;
    while(i < numImages){
        const image = document.createElement('img');
        image.src = `${URL}${getRandNum()}.svg`;
        container.appendChild(image);
        i++;
    }
}

loadImage();


window.addEventListener('scroll',() =>{
   if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200){
    loadImage();
   }
});