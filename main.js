const lerp = (min, max, inp) => min * (1 - inp) + max * inp;
//https://www.trysmudford.com/blog/linear-interpolation-functions/
var x = 0;
var y = 0;

  document.addEventListener('mousemove', event => {
    console.log("raw cursor pos: " + event.clientX + "," + event.clientY)
    
    var view_width = document.documentElement.clientWidth
var view_height = document.documentElement.clientHeight

    x = event.clientX / view_width;
    y = event.clientY / view_height;
console.log("x,y (%): " + x + "," + y);

x = lerp(-30,30,x); //max move limit
y = lerp(-30,30,y);


})





 
 setInterval(() => {
    
   

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
ctx.beginPath();
ctx.arc(100, 50, 50, 0, 2 * Math.PI);
ctx.stroke();



var ctxin = c.getContext("2d");
ctxin.beginPath();
ctxin.arc(100 + x, 50 + y, 20, 0, 2 * Math.PI);
ctxin.stroke();
ctxin.fill()


var c = document.getElementById("myCanvas");
var ctx2 = c.getContext("2d");

ctx2.beginPath();
ctx2.arc(220, 50, 50, 0, 2 * Math.PI);
ctx2.stroke();



var ctxin2 = c.getContext("2d");
ctxin2.beginPath();
ctxin2.arc(220 + x, 50 + y, 20, 0, 2 * Math.PI);
ctxin2.stroke();
ctxin2.fill()

   //x += 1;



   
   


    },
    10 // execute the above code every 10ms
  )



