var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){
     
     links[i].className = "links-" + i;
}

function myFunction() {
     document.getElementById("demo").innerHTML = "Paragraph changed.";
   }

   document.getElementById("demo1").innerHTML = 5 + 6;

   document.write(5 + 6);

   alert(5 + 6);

   console.log(5 + 6);

   document.getElementById("demo2").innerHTML = "Hello Dolly.";

   let a, b, c;
    a = 5;
    b = 6;
    c = a + b;
    document.getElementById("demo3").innerHTML = c;

    a = 5; b = 6; c = a + b;
    document.getElementById("demo4").innerHTML = c;

    document.getElementById("demo5").innerHTML =
    "Hello Dolly!";

    function myFunction() {
     document.getElementById("memo1").innerHTML = "Hello Dolly!";
     document.getElementById("memo2").innerHTML = "How are you?";
   }

    let x;
    x = 6;
    document.getElementById("memo").innerHTML = x;

    document.getElementById("memo3").innerHTML = (5 + 6) * 10;

    let xx, y;
    x = 5;
    y = 6;
    document.getElementById("memo4").innerHTML = x + y;

    document.getElementById("memo5").innerHTML = 5 * 10;

    var x2;
    x = 5;
    document.getElementById("memo6").innerHTML = x * 10;

    let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";
    document.getElementById("demo6").innerHTML = lastName;

    var average = 0;

    function getAverage (a,b){
       
         average = (a + b) / 2; //local variable
         console.log(average);
         return average;

    }

    var myResult = getAverage(7,11); //gobal variable

    function logResult(){

           console.log("the average is " + myResult + "inside the function");

    }

    logResult();