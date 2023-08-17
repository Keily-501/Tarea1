// script.js
const questions = [
    "¿Satielite natural de la tierra?",
    "¿Qué hace print() en Python?",
    "¿cual es el  Planeta Rojo?",
    "¿Fecha de Finalizacion de la segunda guerra mundial?",
    "¿Qué es el debugging en programación?"
  ];
  
  const correctAnswers = [
    "Luna",
    "Muestra",
    "Marte",
    "1945",
    "Correcion"
  ];
  
  const quizForm = document.getElementById("quizForm");
  const questionsDiv = document.getElementById("questions");
  const countdownDiv = document.getElementById("countdown");
  const startButton = document.getElementById("startButton");
  const submitButton = document.getElementById("submitButton");
  let countdown = 30;
  let countdownInterval;
  
  function updateCountdown() {
    countdownDiv.textContent = countdown;
  }
  
  function startCountdown() {
    countdownInterval = setInterval(() => {
      countdown--;
      updateCountdown();
      if (countdown === 0) {
        clearInterval(countdownInterval);
        submitButton.disabled = true;
        alert("El tiempo se ha terminado.");
      }
    }, 1000);
  }
  
  startButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    countdown = 30;
    updateCountdown();
    submitButton.disabled = false;
    questionsDiv.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
      const questionDiv = document.createElement("div");
      questionDiv.textContent = questions[i];
      const answerInput = document.createElement("input");
      answerInput.type = "text";
      answerInput.placeholder = "Respuesta...";
      questionDiv.appendChild(answerInput);
      questionsDiv.appendChild(questionDiv);
    }
    startCountdown();
  });
  
  submitButton.addEventListener("click", event => {
    event.preventDefault();
    clearInterval(countdownInterval);
  
    let answers = document.querySelectorAll("input[type='text']");
    let correctCount = 0;
  
    for (let i = 0; i < answers.length; i++) {
      const userAnswer = answers[i].value.trim().toLowerCase();
      if (userAnswer === correctAnswers[i].toLowerCase()) {
        correctCount++;
      }
    }
  
    alert(`Has respondido correctamente ${correctCount} preguntas.`);
    submitButton.disabled = true;
  });
  