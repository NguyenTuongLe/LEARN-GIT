//toan tu + - * /
function nextQuestion() { 
    let operate= ["+", "-", "*", "/"]; 
    let number1 = parseInt( Math.random()*1000 ) ; // 0 -> 1, 0,65456 =>6 %4 =>2 
    let number2 = parseInt( Math.random()*1000 ); 

    let position0perate = parseInt( number1 * 10 % 4 ); 

    let positionRightAnswer = parseInt( number1 * 10 % 4 ); 
     // a:7 b:8 c:9 d:10 
     // a: 57 b:67 c:77 d:87 
     let question = number1 + operate[position0perate] + number2 
     let isAnswer = eval(question) 
     answers= [0,0,0,0] 
     answers [positionRightAnswer] = isAnswer 
      // 4
    console.log (positionRightAnswer)
    console.log(answers) 
    for (let i =0; i<4; i++){ 
        if(i != positionRightAnswer ){
             answers[i] = isAnswer - positionRightAnswer + i 
             // 2 
             // 0 1 2 3 
             // 8 9 10 11 =10 
            }
         } 
        console.log(answers)

        console.log(isAnswer) 

        document.getElementById ("question").innerHTML = question
        document.getElementById ("buttonClickA").innerHTML = answers [0] 
        document.getElementById ("buttonClickB").innerHTML = answers [1] 
        document.getElementById ("buttonClickC").innerHTML = answers [2] 
        document.getElementById ("buttonClickD").innerHTML = answers [3] 
}
nextQuestion()