document
  .getElementById("submit_button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let button = document.getElementById("submit_button").valueOf;
    const resultDiv = document.getElementById("result");
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
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(convertData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server Response:", data);
        document.getElementById("result").innerText = "hello";
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  });
