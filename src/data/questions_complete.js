const data = [
  {
    category: "História",
    questions: [
      {
        question: "Qual cientista decifrou a criptografia do enigma?",
            options: ["Alan Turing", "Albert Einstein", "Stephen Hawking", "Marie Curie"],
            answer: "Alan Turing",
        tip: "Conhecido como o pai da computação",
      },
      {
          question: "Ano em que foi criada a linguagem de programação FORTRAN?",
        options: ["1968", "1965", "1955", "1972"],
          answer: "1955",
        tip: "FORTRAN foi uma das primeiras linguagens modernas de programação",
      },
      {
          question: "Qual o significado da sigla COBOL?",
          options: ["Computer Based Oriented Language", "Computer Business Oriented Language", "Common Basic Oriented Language", "Common Business Oriented Language"],
          answer: "Common Business Oriented Language",
      },
      {
        question: "Qual é o nome do primeiro computador eletrônico?",
          options: ["Eniac ", "Mark 1", "Windows", "Notebook"],
          answer: "Eniac ",
      },
      {
        question: "Qual dessas linguagens não é uma linguagem orientada a objetos?",
        options: ["Ruby", "Scala", "Jade", "Pascal"],
        answer: "Pascal",
      },
    ],
  },
  {
    category: "Matemática",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "Biologia",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
