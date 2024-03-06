// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById("dm-hours").value;
  let dmPayrate = +document.getElementById("dm-payrate").value;
  let soHours = +document.getElementById("so-hours").value;
  let soPayrate = +document.getElementById("so-payrate").value;
  let kyHours = +document.getElementById("ky-hours").value;
  let kyPayrate = +document.getElementById("ky-payrate").value;
  let pay = 0;

  // Calculate & Output Pay
  function calcPay(hours, overtime, payrate, wage) {
    if (hours > 40) {
      overtime = hours - 40;
      hours = 40;
      pay = hours * payrate + overtime * 1.5 * payrate;
      document.getElementById(wage).innerHTML = pay.toFixed(2);
    }
  }

  // Darcy Maddox
  let dmOvertime = 0;
  calcPay(dmHours, dmOvertime, dmPayrate, "dm-wage");
  console.log(pay);
  // Sofie Orenstein
  let soOvertime = 0;
  calcPay(soHours, soOvertime, soPayrate, "so-wage");
  console.log(pay);
  // Karl Yoon
  let kyOvertime = 0;
  calcPay(kyHours, kyOvertime, kyPayrate, "ky-wage");
  console.log(pay);
}
