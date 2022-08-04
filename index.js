var readlineSync = require("readline-sync");
score = 0;

var userName = readlineSync.question(" Please enter your name. ");
console.log(" Welcome "+userName+"!");
console.log(" This is fun quiz to see true fan of 'The Avengers series'" );

console.log(" Let's start! ");

console.log("-----------------------------------------------------")

function play(question,answer) {
     var userAnswer = readlineSync.question(question)
if (userAnswer===answer) {
     console.log(" You were right! ");
     score=score+1;
} else {
     console.log(" You were wrong! ");
     score=score-1;
     console.log(" Your current score is "+score)
  }
     console.log("-------------------------------------------------")
}

 play (" How many infinity stones are there? ","six");

 play (" What type of doctor is Doctor Stranger? ","Neurosurgeon");

 play (" Where is Captain America from? ","Brooklyn" );

 play (" Who was able to pick up Thor's hammer in Endgame?","Captain America");

 play (" Who is the Winter Soldier?","Bucky");

 play (" Black Panther is set in which fictional country? ","Wakanda");

 play (" What kind of rays give Hulk his power? ","Gamma rays");

 play (" What is the name of the glowing blue cube which Loki uses as  weapon?",
       "Tesseract");

 play (" Who killed the parents of Tony Stark?","Winter Soldier");

 play (" What is the real name of Black Widow?","Natasha Romanoff");

console.log(" Your final score is "+score);

