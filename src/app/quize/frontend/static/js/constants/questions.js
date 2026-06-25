const questions = [
  {
    question:
      "Сколько дней потребовалось Брендану Айку на создание JavaScript в 1995 году?",
    answers: ["1 день", "10 дней", "30 дней", "1 год"],
    correct: 2,
  },
  {
    question: "Как создать неизменяемый объект в JavaScript?",
    answers: [
      "Object.freeze(OBJ)",
      "Object.seal(OBJ)",
      "Object.preventExtensions(OBJ)",
      "Object.immutable(OBJ)",
    ],
    correct: 1,
  },
  {
    question:
      "Какой из следующих вариантов не является допустимым способом создания нового массива?",
    answers: ["new Array()", "Array.of()", "Array.create()", "[]"],
    correct: 3,
  },
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что определяет значение undefined?",
    answers: [
      "Переменная объявлена, но значение ей не присвоено",
      "Ошибка выполнения кода",
      "Пустой объект",
      "Переменная не существует",
    ],
    correct: 1,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Похожи ли языки Java и JavaScript?",
    answers: [
      "Да, это один и тот же язык",
      "Нет, это совершенно разные языки, у них только похожие названия",
      "JavaScript — это версия Java для браузеров",
      "Java создана на базе JavaScript",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  },
  {
    question: "Что делает метод уменьшения?",
    answers: [
      "Итерация по массиву и возвращает новый массив",
      "Итерация по массиву и возвращает одно значение",
      "Итерация по объекту и возвращает массив",
      "Итерация по массиву и возвращает булевый результат",
    ],
    correct: 2,
  },
  {
    question: "Что выдаст следующий код?<br><br>console.log([1, 2, 3] + [4, 5, 6]);",
    answers: ["1,2,34,5,6", "1,2,3,4,5,6", "[1, 2, 3, 4, 5, 6]", "[1, 2, 34, 5, 6]"],
    correct: 1,
  },
  {
    question: "Какой из следующих типов данных JavaScript является доступным?",
    answers: ["integer", "float", "number", "double"],
    correct: 3,
  },
  {
    question: "Каков результат выполнения следующего кода?<br><br>console.log(typeof null);",
    answers: ["object", "null", "undefined", "boolean"],
    correct: 1,
  },
];

export { questions };
