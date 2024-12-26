function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthdate").value;
  const birthdateParts = birthdateInput.split("-");
  const birthDay = birthdateParts[0];
  const birthdMonth = birthdateParts[1] - 1; //Javascript use 0-11 for 12 months
  const birthYear = birthdateParts[2];
  const birthDate = new Date(birthYear, birthdMonth, birthDay);

  console.log("f1 " + today);
  console.log("f2 " + birthdateInput);
  console.log(birthdateParts);
  console.log("Day: " + birthDay);
  console.log("Month: " + birthdMonth);
  console.log("Year: " + birthYear);

  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
  };

  if (!isValidDate(birthDate)) {
    alert(
      "Invalid date format: Please enter a valid date in DD-MM-YYYY format."
    );
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30.436875); //some months has 30 and some months has 31
  const ageInYears = Math.floor(ageInDays / 365.25);

  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");

  result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears}  years ${ageInMonths % 12} months ${
    ageInDays % 30
  } days</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageInMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
        </div>
    `;

  resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
