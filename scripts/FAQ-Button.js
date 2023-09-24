document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("FAQ-button-1")
    .addEventListener("click", function () {
      var answer = document.getElementById("answer-1");
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  document
    .getElementById("FAQ-button-2")
    .addEventListener("click", function () {
      var answer = document.getElementById("answer-2");
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  document
    .getElementById("FAQ-button-3")
    .addEventListener("click", function () {
      var answer = document.getElementById("answer-3");
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  document
    .getElementById("FAQ-button-4")
    .addEventListener("click", function () {
      var answer = document.getElementById("answer-4");
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
});
