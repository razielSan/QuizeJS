import { questions } from "../constants/questions.js";

class Quize {
  constructor() {
    this.questionContainer = document.querySelector("#header");
    this.answersContainer = document.querySelector("#list");
    this.buttonSubmit = document.querySelector("#submit");
    this.score = 0;
    this.currentIndex = 0;
  }

  init() {
    this.clearPage();
    this.showQuestion();
    this.showAnswers();

    // навешиваем события
    this.bindEvents();
  }

  bindEvents() {
    this.buttonSubmit.addEventListener("click", this.chekAnswer);
  }

  clearPage() {
    this.questionContainer.innerHTML = "";
    this.answersContainer.innerHTML = "";
  }

  showQuestion() {
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace(
      "%title%",
      questions[this.currentIndex].question
    );
    this.questionContainer.innerHTML = title;
  }

  showAnswers() {
    for (const [index, element] of questions[this.currentIndex][
      "answers"
    ].entries()) {
      const answerTemplate = `<li>
            <label>
                <input type="radio" value="${
                  index + 1
                }" class="answer" name="answer" />
                <span>${element}</span>
            </label>
        </li>`;
      this.answersContainer.innerHTML += answerTemplate;
    }
  }

  chekAnswer = (event) => {
    // Находим выбранную кнопку
    const chekAnswer = this.answersContainer.querySelector(
      "input[type='radio']:checked"
    );

    // Проверям был ли выбран ответ
    if (!chekAnswer) {
      this.buttonSubmit.blur();
      return;
    }

    // Проверяем выбранный ответ на правильность
    const value = parseInt(chekAnswer.value, 10);
    if (value == questions[this.currentIndex].correct) {
      this.score++;
    }

    // Проверяем на последний вопрос
    if (this.currentIndex + 1 !== questions.length) {
      this.currentIndex++;
      this.clearPage();
      this.showQuestion();
      this.showAnswers();
    } else {
      this.clearPage();
      this.showResults();
    }
  };

  showResults() {
    //  Текст финального сообщения
    const resultText = `<h2 class="title">%title%</h2>
    <h3 class="summary">%message%</h3>
    <p class="result">%result% из ${questions.length}</p>`;

    let title, message; // Формируем заголовок, сообщение
    if (this.score == questions.length) {
      title = "Превосходный результат!!! 🎇 🎆";
      message = "Вы ответили правильно на все вопросы 👌";
    } else if (this.score > 0) {
      title = "Не плохо, не плохо 😎";
      message = `Количество правильных ответов 💪`;
    } else {
      title = "Стоит поднажать 😒";
      message = "Вы не ответили правильно ни на один вопрос 👇";
    }

    // Формируем финальный HTML
    const resultHtml = resultText
      .replace("%title%", title)
      .replace("%message%", message)
      .replace("%result%", this.score);
    this.questionContainer.innerHTML = resultHtml;

    this.score = 0;
    this.currentIndex = 0;

    // Меняем кнопку на играть снова
    this.buttonSubmit.blur()
    this.buttonSubmit.innerText = "Начать заново"
    this.buttonSubmit.onclick = () => history.go()
  }

}

export { Quize };
