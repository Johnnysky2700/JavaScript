    var a = "hello";
    var b = 5;

    //doudle negative
    if (! isNaN(a)){

          console.log("meaning of life is " + (a * b));
   
    } 

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxspeed = 50;
myCar.driver = "johnnysky";
myCar.drive = function(){ console.log("now driving");};

myCar.drive();

var myCar2 = {
      maxSpeed: 70, 
      driver: "net ninja",
      drive: function(speed, time){
            console.log(speed * time);
      } 
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);