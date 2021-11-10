// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "Vem är Jesus?",
      a: "1: En profet",
      b: "X: Guds son",
      c: "2: En evangelist",
      answer: "B"
    },
  {
      question: "Vilken blomma är inte gul?",
      a: "1: Solros",
      b: "X: Smörblomma",
      c: "2: Förgätmigej",
      answer: "C"
    },
  {
      question: "Hur många spelkort finns det i en kortlek?",
      a: "1: 52",
      b: "X: 60",
      c: "2: 62",
      answer: "A"
    },
  {
      question: "Vilka färgen behöver man blanda för att få färgen grön?",
      a: "1: Blå + gul",
      b: "X: Gul + röd",
      c: "2: Röd + blå",
      answer: "A"
    },
    {
        question: "Vilket djur är långben?",
        a: "1: Ko",
        b: "X: Hund",
        c: "2: Mus",
        answer: "B"
      },
      {
        question: "Vilka var Adam och Eva?",
        a: "1: Jesus lärjungar",
        b: "X: Sara och Abrahams barn",
        c: "2: De första människorna på jorden",
        answer: "C"
      },
      {
        question: "Vilket träslag tillverkas glasspinnar av?",
        a: "1: Bok",
        b: "X: Björk",
        c: "2: Al",
        answer: "A"
      },
      {
        question: "Arendal är namnet på vad för något?",
        a: "1: Modiga Meridas pilbåge",
        b: "X: Ariels mamma ",
        c: "2: Elsa och Annas rike",
        answer: "C"
      },
      {
        question: "Vilken typ av fisk är Nemo från hitta Nemo?",
        a: "1: Bläckfisk",
        b: "X: Clownfisk",
        c: "2: Guldfisk",
        answer: "B"
      },
      {
        question: "Vem var Michael Jackson?",
        a: "1: En skådespelare",
        b: "X: En sångare",
        c: "2: En modell",
        answer: "B"
      },
      {
        question: "Vem var Goliat i bibelberättelsen om David och Goliat?",
        a: "1: En hemsk jätte",
        b: "X: En liten pojke",
        c: "2: En kung",
        answer: "A"
      },
      {
        question: "Vad heter Grisens barn?",
        a: "1: Lamm",
        b: "X: Föl",
        c: "2: Kulting",
        answer: "C"
      },
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<div class ='nes-container with-title is-centered' <p class='title'> Du fick "+correct+" av "+questions.length+"";
    get("test_status").innerHTML = "<div class ='nes-container with-title is-centered' <p class='title'> Quiz klar, Bra jobbat";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "<div class ='nes-container with-title is-centered' <p class='title'> Frågor</p> <p> "+(pos+1)+" av "+questions.length;"</p></h1>";
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<div>"+question+"";
  // display the answer options
  // the += appends to the data we started on the line above
 
  test.innerHTML += "<label> <input type='radio' id=radio1 name='choices' value='A' class='nes-radio' checked /><span>"+chA+"</span></label><br>"
  test.innerHTML += "<label> <input type='radio' id=radio2 name='choices' value='B' class='nes-radio' checked /><span>"+chB+"</span></label><br>"
  test.innerHTML += "<label> <input type='radio' id=radio3 name='choices' value='C' class='nes-radio' checked /><span>"+chC+"</span></label><br>"
  test.innerHTML += "<input onclick='checkAnswer()' type = 'button' value='Svara' class='nes-btn'> </input>";


  /* Grund Funktionen på radio knapparna
"<label> <input type='radio' id=radio2 name='choices' value='B' class='nes-radio' checked /><span>"+chB+"</span></label><br>"
*/

/* Gammla radio knapp funktionen
  "<label> <input type='radio' id=radio1 name='choices' value='A'> "+chA+"</label><br>";
  "<label> <input type='radio' id=radio2 name='choices' value='B'> "+chB+"</label><br>";
  "<label> <input type='radio' id=radio3 name='choices' value='C'> "+chC+"</label><br><br>";
  "<input onclick='checkAnswer()' type = 'button' value = 'Svara'class='nes-btn'> </input>";
  */
}

function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);


// font size

var radio, yPos;
function yScroll(){
radio = document.getElementById('radio1');
yPos = window.pageYOffset;
if(yPos > 120){
    header.style.height = "36px";
    header.style.paddingTop = "0px";
    header.style.background = "#005A31";
} else {
    header.style.height = "120px";
    header.style.paddingTop = "10px";
    header.style.background = "#A8CD1B";
}
}