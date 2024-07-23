'use strict';

// coding challenge 1

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let reply = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\nWrite option number`
      )
    );
    if (
      reply < this.answers.length &&
      reply >= 0 &&
      typeof reply === 'number'
    ) {
      this.answers[reply] += 1;
      this.displayResults(this.answers.join(', '));
    } else {
      alert('Invalid Number');
    }
  },
  displayResults(type) {
    console.log(`Poll results are ${type}`);
  },
};

document
  .querySelector('.answer-poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
