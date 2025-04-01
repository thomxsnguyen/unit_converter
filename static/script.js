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

    let convertData = {
      length: length,
      from: from,
      to: to,
    };

    console.log("Sending data to Flask:", convertData);

    fetch("http://127.0.0.1:5000/convert", {
      // Sends request to backend
      method: "POST", // request method
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(convertData),
    })
      .then((response) => response.json()) // recieves response from backend
      .then((data) => {
        console
          .log("Server Response:", data)
          .catch((err) => console.error("Fetech failed", err));
      });
  });
