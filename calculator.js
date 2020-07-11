

//The most important variable for the content
let answer = ''


// function that writes answer to the input
function writeAnswer() {
    $('#answerInput').val(answer)
}



$(document).ready(function () {

    //Firstly write answer to the input(default value is empty)
    writeAnswer()

    let lastElement;
    //Then add elements to the variable that you clicked on
    $(document).on('click', '.count', function (e) {

        //Check if the last element is not operator, if operator write the new oprator that is clicked

        if (lastElement == '+' || lastElement == '-' || lastElement == '*' || lastElement == '/') {
            if (e.target.classList.contains('operator')) {
                answer = answer.slice(0, -1)
                answer += $(this).text()
                writeAnswer()
                //We use return to get back to the first step again
                return
            }
        }

        lastElement = $(this).text()
        answer += lastElement
        writeAnswer()


    })

    //Clear answer, make it equal to empty string
    $('#clear',).click(function () {
        answer = ''
        writeAnswer()
    })

    //Calculate value function uses eval which turns the answer into Number,
    //so it continues like this

    $('#calculateValue').click(function () {
        answer = eval(answer)
        writeAnswer();
    })


    // clear the last element of the string

    $('#deleteLastNumber').click(function () {
        answer = answer.slice(0, -1)
        writeAnswer()
    })
})

