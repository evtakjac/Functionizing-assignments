// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // Calculate & Output Letter Grades
  function letterGrade(percent, subLetter) {
    if (percent >= 80) {
      Letter = "A";
    } else if (percent >= 65) {
      Letter = "B";
    } else if (percent >= 55) {
      Letter = "C";
    } else if (percent >= 50) {
      Letter = "D";
    } else {
      Letter = "F";
    }
    document.getElementById(subLetter).innerHTML = Letter;
  }
  // English
  letterGrade(engPercent, "eng-letter");
  // Social Studies
  letterGrade(socPercent, "soc-letter");
  // Mathematics
  letterGrade(mathPercent, "math-letter");
  // Science
  letterGrade(sciPercent, "sci-letter");
}
