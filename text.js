    var a = "hello";
    var b = 5;

    //doudle negative
    if (! isNaN(a)){

          console.log("meaning of life is " + (a * b));
   
    } 

var Car = function(maxSpeed, driver){

      this.maxSpeed = maxSpeed; 
      this.driver = driver;
      this.drive = function(speed, time){
            console.log(speed * time);
      };
      this.logDriver = function(){
            console.log("driver name is " +  this.driver);
      };
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Johnnysky");
var myCar4 = new Car(90, "Oluwaseyi");

myCar.drive(30,5);
myCar3.logDriver();