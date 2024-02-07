export const languages = [
  {
    name: "JavaScript",
    icon: "icons/javascript.svg"
  },
  {
    name: "Html",
    icon: "icons/html.svg"
  },
  {
    name: "Css",
    icon: "icons/css.svg"
  },
  {
    name: "Java",
    icon: "icons/java.svg"
  },
  {
    name: "Json",
    icon: "icons/json.svg"
  },
  {
    name: "Python",
    icon: "icons/python.svg"
  },
  {
    name: "TypeScript",
    icon: "icons/typescript.svg"
  },
]


export const themes = ["monokai", "solarized_dark", "twilight", "terminal", "kuroir"]

export const backgrounds = [
  "linear-gradient(354deg,#ff75b5,#ffb86c)",
  "linear-gradient(315deg, #e8bce8 0%, #9eeef9 50%, #f9dada 100%)",
  "linear-gradient(315deg, #53D4FA, #01BAFB)",
  "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  "linear-gradient(90deg,#93f9b9,#1d976c)",
  "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  "linear-gradient(337deg,#654ea3,#da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg,#fc6767,#ec008c)",
  "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  "linear-gradient(270deg,#514a9d,#24c6dc)",

]

export const initialCode = `// Función para calcular la secuencia de Fibonacci
function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Calcular los primeros 10 números de Fibonacci
var fibNumbers = fibonacci(10);

// Imprimir los números de Fibonacci en la consola
console.log('Secuencia de Fibonacci:', fibNumbers);`;