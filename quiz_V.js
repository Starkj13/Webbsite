// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "Vem döptes i Husaby källa?",
      a: "1: Magnus Ladulås",
      b: "X: Olof skötkonung",
      c: "2: Erik Eriksson",
      answer: "B"
    },
  
  {
      question: "Vad var S:ta Brigida skyddshelgon över?",
      a: "1: Barn, sjuka, djur och smeder",
      b: "X: Äldre, sjuka, djur och bönder",
      c: "2: Äldre, sjuka, djur och smeder",
      answer: "A"
    },    
    {
    
    question: "Hur länge bodde Lasse i Berget i grottan?",
    a: "1: 35 år",
    b: "X: 32 år",
    c: "2: 30 år",
    answer: "C"

  },
  {
      question: "Vilka upptäckte Flyhovs hällristningar?",
      a: "1: Barn med förälder",
      b: "X: Två pojkar",
      c: "2: Två flickor",
      answer: "B"
    },
    {
        question: "Vem var byggnadsherre för biskopsborgen?",
        a: "1: Brynolf Gerlaksson",
        b: "X: Adam av Bremen",
        c: "2: Stefan av Alvastra",
        answer: "A"
      },
      {
        question: "Vad hette Olof Skötkonungs dotter?",
        a: "1: Ingegerd",
        b: "X: Ingbritt",
        c: "2: Ingmarie",
        answer: "A"
      },
      {
        question: "Hur många församlingar deltog med stenar till tusenårsaltaret?",
        a: "1: 100 st",
        b: "X: 200 st",
        c: "2: 300 st",
        answer: "C"
      },
      {
        question: "Vad kallades Ingegerd som nunna?",
        a: "1: Heliga Birgitta",
        b: "X: Heliga Anna av Novgorod",
        c: "2: Heliga Ragnhild av Tälje",
        answer: "B"
      },
      {
        question: "Vad har det tidigare varit i Pilgrimsgården och Hembygdsgården?",
        a: "1: Skola",
        b: "X: Fritids",
        c: "2: Lekis",
        answer: "A"
      },
      {
        question: "Vad heter den kortaste vandringsleden i Husaby?",
        a: "1: Prinsstigen",
        b: "X: Drottningsstigen",
        c: "2: Kungsstigen",
        answer: "C"
      },
      {
        question: "Vad heter den nya kyrkogården?",
        a: "1: Sankta Anna",
        b: "X: Sankta Helena",
        c: "2: Sankta Brigida",
        answer: "A"
      },
      {
        question: "Vilken kunglighet har inte besökt Husaby källa?",
        a: "1: Kronprinsessan Victoria",
        b: "X: Gustaf VI Adolf",
        c: "2: Oscar II",
        answer: "B"
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
    test.innerHTML = "<h2><span class ='Text_Modifer'> Du fick "+correct+" av "+questions.length+" frågor rätt</span></h2>"
    get("test_status").innerHTML = "<h2><span class ='Text_Modifer'>Tipspromenad klar, Bra jobbat</span></h2>";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "<h1><span class ='Text_Modifer'> "+(pos+1)+" av "+questions.length;" </span></h1>";
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3><span class ='nes-text is-primary'>"+question+"</span></h3>";
  // display the answer options
  // the += appends to the data we started on the line above
 
  test.innerHTML += "<label> <input type='radio' id=radio1 name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' id=radio2 name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' id=radio3 name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<input onclick='checkAnswer()' type = 'button' value = 'Svara'class='nes-btn'> </input>";
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


