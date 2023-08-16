const calculateBtn = document.getElementById("calculate-btn");
let yeraInp = document.getElementById("year-input");
let monthInp = document.getElementById("month-input");
let dayInp = document.getElementById("day-input");
const para = document.getElementById("para");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

calculateBtn.addEventListener("click", () => {
  let calculatedYear = year - yeraInp.value;
  if (
    ((month <= monthInp.value && day < dayInp.value) ||
      month < monthInp.value) &&
    monthInp.value < 13 &&
    dayInp.value < 32
  ) {
    calculatedYear = year - yeraInp.value - 1;
  } else if (
    yeraInp.value >= year ||
    yeraInp.value >= year ||
    yeraInp.value <= 0 ||
    monthInp.value <= 0 ||
    dayInp.value > 31 ||
    dayInp.value <= 0 ||
    monthInp.value > 12
  ) {
    calculatedYear = "ERROR";
  }

  para.innerHTML = calculatedYear;
});
