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
    "question" : "Google chrome is awesome",
    "response" : "As if! Chrome is so slow",  
    "correct"  : 0 
  },
  {
    "question" : "My wife is gorgeous",
    "response" : "Yeah, I definitely married up",
    "correct"  : 1
  },
  {
    "question" : "I need to practice Javascript",
    "response" : "Cause practice makes perfect!!",
    "correct"  : 1
  } 

];

var $qDIV     = $('#qDIV'),
    $rDIV     = $('#response'),
    $qH2      = $("h2",     $qDIV),
    $answer   = $("button", $qDIV),
    $response = $("p",      $rDIV),
    tot       = questionnaire.length,
    c         = 0;

function QandA( idx ){  
   $qDIV.fadeTo(600,1); 
   $rDIV.hide();  
   var currQ = questionnaire[c];  
   var isCorrect = currQ.correct;  
   var answerIsCorrect = idx==isCorrect; 
   var resp = answerIsCorrect ? "Great!" : "Wrong!";
   currQ.answer = idx;  
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
