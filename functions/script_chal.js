'use strict';

// coding challenge 1

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let reply = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\nWrite option number`
      )
    );
    this.answers[reply] += 1;
  },
};

document.querySelector('.answer-poll').addEventListener('click', poll.registerNewAnswer);
