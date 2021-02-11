class question {
  constructor() {
    this.title = createElement("h1");
    this.input1 = createInput("").attribute(
      "placeholder",
      "Enter Your Name Here...."
    );
    this.input2 = createInput("").attribute(
      "placeholder",
      "Enter Correct Option No.."
    );
    this.button = createButton("Submit");
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.reset = createButton("Reset");
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display() {
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html(
      "Question:- who is the current indian cricket team captain? "
    );
    this.question.position(150, 80);
    this.option1.html("1: M.S.DHONI ");
    this.option1.position(150, 130);
    this.option2.html("2: K.L.RAHUL");
    this.option2.position(150, 150);
    this.option3.html("3: VIRAT KOHLI ");
    this.option3.position(150, 170);
    this.option4.html("4: ROHIT SHARMA");
    this.option4.position(150, 190);

    this.input1.position(250, 230);
    this.input2.position(450, 230);
    this.button.position(400, 300);

    this.button.mousePressed(() => {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.reset.position(20, 20);
    this.reset.mousePressed(() => {
      contestant.updateCount(0);
      quiz.update(0);
      database.ref("/").update({
        contestants: null,
      });
    });
  }
}
