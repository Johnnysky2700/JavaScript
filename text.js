var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){
     
     links[i].className = "links-" + i;
}

function myFunction() {
     document.getElementById("demo").innerHTML = "Paragraph changed.";
   }

   document.getElementById("demo1").innerHTML = 5 + 6;