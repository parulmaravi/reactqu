var btn = document.querySelector("button");

const arr = [
    'https://images.unsplash.com/photo-1644801659708-976bbab232b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
]

function randomPos(){
    var posX=Math.random() *80
    var posY=Math.random() *80
    var rotate=Math.random() *360
    var randomImg =Math.floor(Math.random()* arr.length)

    return {Image : arr[randomImg],posX,posY,rotate}
}
btn.addEventListener('click',()=>{
    var {posX,posY,rotate,Image} = randomPos();
    var img = document.createElement('img');
    img.src=Image;
     img.style.height='100px'
    img.style.position='absolute'
    img.style.left=posX +'%'
    img.style.top=posY + '%'
    img.style.rotate=rotate + 'deg'

   document.body.appendChild(img)

}) 