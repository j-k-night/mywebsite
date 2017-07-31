var myImages =["https://www.imms.org/images/dolphin_presentation/dolphin1.jpg", "http://cdn3.theeventchronicle.com/wp-content/uploads/2014/09/dolphin-intelligence.jpg","http://www.liveanimalslist.com/mammals/images/dolphin-in-water.jpg"];

var captionImages =["Laugh","Love","Lunch"]; 

var index=0; 

 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
 
 
//} does this belong here?
function next(){
 if (myImages.length == index+1)
    index=0;
 else
    index++;
 updateImage();
} 
nextButton.addEventListener("click",next,false); 
>//Back 
var previousButton = document.getElementById("previous"); 
function back(){
 if (index===0)
    index=myImages.length-1;
 else
    index--;
 updateImage();
} 
previousButton.addEventListener("click",back,false);

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
var nextButton = document.getElementById("next"); 
 function updateImage(){
