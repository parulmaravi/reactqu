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

 /* // 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.
   var arr = [5,10,15,20];
         var [a,,c] = arr
         console.log(a,c)
 
 //2. Swap the values of a and b using array destructuring.
        var a =20;
         var b=10;
         [a,b]= [b,a]
         console.log(a, b)
         
 //3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.
    var obj = {
     name:"parul",
     age:34,
     city:"Bhopal"
 }
 var {name, city} = obj
 console.log(name, city)
  
// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.
  var obj={
      id:101
  }
  var {user="guest"} = obj;
  console.log(user)
 
 
// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.
     var obj = {
     person:{
         first:"Alice",
         last:"Johnson"
     }
  }
 
 // var {person} = {...obj}
  var {person:{first,last}} = obj
  //var {first, last} = person;
  console.log(first, last)
 
 
// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.
   var arr = [100,200,300]
   var [a,,b] = arr;
   var arr2 = [a,b]
   console.log(arr2)
 
// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.
    function allnum([a,b,c,d]){
        return a+b+c+d;
    }
    console.log(allnum([1,2,3,4]))
 
// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.
   
      var obj = {
         name:"parul",
         age:30,
         job:"Developer"
      }
      obj.job = "profession";
      console.log(obj);
 
// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.
  var arr =[
     [1,2],[3,4]
  ]
 var[[a],[,d]] = arr;
 console.log(a,d)
 
 
 //10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.
   var arr = [10,20]
   if(arr[0]<arr[1]){
       arr[0],arr[1] = arr[1],arr[0]
   }
   console.log(arr)
 
 //11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.
var obj = {user: 
     {id: 5, info: {name: "Sam", city: "Paris"}}}
 
 var{user:{info:{name,city}}} = obj;
 console.log(name,city)
 
 
// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.
       var arr = [10, [20, 30], 40]
       var[first,[,d],last]= arr
        console.log(first,d ,last)
 
 
// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.
   
   var arr = [[1, "one"], [2, "two"], [3, "three"]];
 
    for(var i=0; i<arr.length; i++){
      var [key,value] = arr[i]
      console.log(`key:${key},value:${value}`)
    }
 //14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.
     function sumall(){
     var obj ={a: 5, b: 10, c: 15}
     var {a,c} = obj
     return a+c
    }
    console.log(sumall())
 //15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.
        var obj={data: {user: {id: 3, details: {age: 25, country: "India"}}}} ;
 
   var {data:{user:{id,details:{country}}}} =obj;
   console.log(id, country)
 
 //16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.
     const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}};
 
    var {a:[,,{b}],c:{e:[,f]}} = obj;
    console.log(b,f)
 
// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.
      var object=  {items: [{price: 100}, {price: 200}], discount: 0.1}
    var{items:[{price:p1,price:p2}],discount} = object;
    var totalavlue = (p1+p2)*(1-discount);
    console.log(totalavlue)
    
// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.
      function avrag(){
     var obj={name: "Alice", scores: [80, 90, 100]};
     var {scores:[a,b,c]} =obj;
     return a+b+c/3
   }
  console.log( avrag())
 
 //19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.
        const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}]
          users.map(({id,name})=>console.log(id,name));
 
 //20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.
  var array =  [["x", 1], ["y", 2], ["z", 3]];
    array.forEach((key,value)=>{
        console.log(key,value)
    }) */
          
   

   