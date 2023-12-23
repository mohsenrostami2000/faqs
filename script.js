// select items
const questions = document.querySelectorAll('.question');
const img = document.querySelectorAll('.question-img');
const answer = document.querySelectorAll('.hide-answer');
// add event 
// console.log(questions)
for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', () => {
        // console.log('clicked')
        if(!answer[i].classList.contains('show-answer')){
            answer[i].classList.add('show-answer');
            img[i].innerHTML = `<img src="./assets/images/icon-minus.svg" alt="minus img">`;

        } else if(answer[i].classList.contains('show-answer')){
            answer[i].classList.remove('show-answer');
            img[i].innerHTML = `<img src="./assets/images/icon-plus.svg" alt="plus img">`;
        }
    })
}
