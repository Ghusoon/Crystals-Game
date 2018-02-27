

 $(document).ready(function() {

computerNum = Math.floor(Math.random()*100)+19;
var win =0;
var lose = 0;
var score = 0;
var crystalNum = 0;
counter =0;
firstGame =false;

//---------------------------------
function resetNUm(){
    counter=0;
computerNum =Math.floor(Math.random()*100)+19;
   
$("#randnum").text(computerNum);


}
//--------------------------
function reset(){
 

    var imageCrystal = $(".crystals")

    crystalNum =Math.floor(Math.random()*12);

    imageCrystal.attr("data-crystalvalue", crystalNum);
 console.log(imageCrystal);
    score = 0;
    firstGame =true;
}

//--------------------------

$(".crystals").on("click" ,function(){

    reset();
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log(crystalValue);
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    
    console.log(counter);
    $("#result").text(counter);
   
if (firstGame){
    if (counter === computerNum) {
       
       win++;
       $("#wins").text(win);

      score = counter;
      $("#scoreNum").text(score)

      resetNUm();
      
      }
  
      else if (counter >= computerNum) {
       lose++;
        score = counter;
        $("#scoreNum").text(score)
        $("#lose").text(lose);
        resetNUm(); 
      }
    }
  });

 
  $("#randnum").text(computerNum);
  $("#result").text(counter);
 });



