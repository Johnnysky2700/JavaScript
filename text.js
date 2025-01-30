    var a = "hello";
    var b = 5;

    //doudle negative
    if (! isNaN(a)){

          console.log("meaning of life is " + (a * b));
   
    } 


var myCar2 = {
      maxSpeed: 70, 
      driver: "net ninja",
      drive: function(speed, time){
            console.log(speed * time);
      }, 
      test: function(){
            console.log(this);
      }
};

var myCar3 = {
      maxSpeed: 70, 
      driver: "johnnysky",
      drive: function(speed, time){
            console.log(speed * time);
      }, 
      logDriver: function(){
            console.log("driver name is " +  this.driver)
      }
};

myCar2.test();
myCar3.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);