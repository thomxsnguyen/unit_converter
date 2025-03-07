document
  .getElementById("submit_button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let button = document.getElementById("submit_button").valueOf;
    if (!button) {
      console.error("Button id not found");
    }
    let length = document.getElementById("length").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    console.log(from);

    console.log(`Length: ${length}, From: ${from}, To: ${to}`);
  });
