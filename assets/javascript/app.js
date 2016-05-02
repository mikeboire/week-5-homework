var questionnaire = [
  {
    "question" : "The Earth is round.",
    "response" : "The Earth is round!",  
    "correct"  : 1    // 0=False, 1=True
  },
  {
    "question" : "The 'cravat' is originally from France.",
    "response" : "The 'cravat' is from Croatia!",
    "correct"  : 0
  },
  {
    "question" : "Is Java == JavaScript?",
    "response" : "It's a different language.",
    "correct"  : 0
  } // Add comma and more objects.
];

var $qDIV     = $('#qDIV'),
    $rDIV     = $('#response'),
    $qH2      = $("h2",     $qDIV),
    $answer   = $("button", $qDIV),
    $response = $("p",      $rDIV),
    tot       = questionnaire.length,
    c         = 0; // Current Q array counter 

function QandA( idx ){  
   $qDIV.fadeTo(600,1); 
   $rDIV.hide();  
   var currQ = questionnaire[c];   // The Object literal from Array
   var isCorrect = currQ.correct;  // 0 or 1?
   var answerIsCorrect = idx==isCorrect; // (compare values) Returns boolean 
   var resp = answerIsCorrect ? "Great!" : "Wrong!";
   currQ.answer = idx;             // Put user answer into object (0 or 1)
   $qH2.text( (c+1) +'. '+ currQ.question );
   $response.text( resp +' '+ currQ.response );
}
QandA();

$answer.click(function(){   
    var idx = $answer.index(this); // 0 or 1  (get button index)
    QandA( idx );
    $rDIV.fadeTo(600,1);
    $qDIV.hide();
    console.log( JSON.stringify(questionnaire, null, 1) ); // TEST ONLY
});

$('#prev, #next').click(function(){
    c = this.id=='next' ? ++c : c ; // advance or repeat Question
    QandA();
    $('#next').toggle(c<tot-1);
    $('#score').toggle(c>=tot-1);
});

$('#score').click(function(){
  c = 0;   // reset questionnary to first question
  $('pre').text( JSON.stringify(questionnaire, null, 2) ); 
  QandA(); // Restart
});
