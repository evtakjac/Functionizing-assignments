// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById("d1-speed").value;
  let d1Limit = +document.getElementById("d1-limit").value;
  let d2Speed = +document.getElementById("d2-speed").value;
  let d2Limit = +document.getElementById("d2-limit").value;
  let d3Speed = +document.getElementById("d3-speed").value;
  let d3Limit = +document.getElementById("d3-limit").value;

  // Calculate & Output Ticket Types
  let dTicket = 0;
  function ticket(dSpeed, dLimit, issTick) {
    if (dSpeed > dLimit + 40) {
      dTicket = "Really Big Ticket";
    } else if (dSpeed > dLimit + 20) {
      dTicket = "Big Ticket";
    } else if (dSpeed > dLimit) {
      dTicket = "Small Ticket";
    } else {
      dTicket = "No Ticket";
    }
    document.getElementById(issTick).innerHTML = dTicket;
  }
  // Driver 1
  ticket(d1Speed, d1Limit, "d1-ticket");
  // Driver 2
  ticket(d2Speed, d2Limit, "d2-ticket");
  // Driver 3
  ticket(d3Speed, d3Limit, "d3-ticket");
}
