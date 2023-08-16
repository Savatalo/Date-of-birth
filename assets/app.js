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
  if (month < monthInp.value) {
    calculatedYear = year - yeraInp.value - 1;
  }
  if (month <= monthInp.value && day < dayInp.value) {
    calculatedYear = year - yeraInp.value - 1;
  } else if (
    yeraInp.value > year ||
    dayInp.value > 31 ||
    yeraInp.value <= 0 ||
    monthInp.value > 12 ||
    monthInp.value < 0 ||
    dayInp.value < 0 ||
    yeraInp.value == "" ||
    monthInp.value == "" ||
    dayInp.value == ""
  ) {
    calculatedYear = "ERROR";
  }

  para.innerHTML = calculatedYear;
});
