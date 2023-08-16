const calculateBtn = document.getElementById("calculate-btn");
let inp = document.getElementById("year-input");
const para = document.getElementById("para");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

calculateBtn.addEventListener("click", () => {
  let kurac = inp.value.split("-");
  let yearInp = parseInt(kurac[0]);
  let monthInp = parseInt(kurac[1]);
  let dayInp = parseInt(kurac[2]);
  let calculatedYears = year - yearInp;
  if (monthInp > month || (monthInp == month && dayInp > day)) {
    calculatedYears = year - yearInp - 1;
  } else if (yearInp > year || (yearInp == year && monthInp > month)) {
    calculatedYears = 'retard :)';
  }
  para.innerHTML = `Your are ${calculatedYears}`;
});
