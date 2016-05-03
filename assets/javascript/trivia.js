var questionnaire = [
  {
    "question" : "The sky is blue.",
    "response" : "The sky is blue!",  
    "correct"  : 1
  },
  {
    "question" : "Campus has great internet",
    "response" : "That shiz be laggin",
    "correct"  : 0
  },
  {
    "question" : "Tom Brady is guilty",
    "response" : "Yeah right; free Touchdown Tommy!",
    "correct"  : 0
  },
    {
    "question" : "",
    "response" : "The Earth is round!",  
    "correct"  : 1 
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
  } 
  {
    "question" : "The Earth is round.",
    "response" : "The Earth is round!",  
    "correct"  : 1
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
  },
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
  } 

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
    var idx = $answer.index(this);
    QandA( idx );
    $rDIV.fadeTo(600,1);
    $qDIV.hide();
    console.log( JSON.stringify(questionnaire, null, 1) ); 
});

$('#prev, #next').click(function(){
    c = this.id=='next' ? ++c : c ; 
    QandA();
    $('#next').toggle(c<tot-1);
    $('#score').toggle(c>=tot-1);
});

$('#score').click(function(){
  c = 0;   
  $('pre').text( JSON.stringify(questionnaire, null, 2) ); 
  QandA();
});
