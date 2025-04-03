document
  .getElementById("submit_button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const result = document.getElementById("result");
    const length = document.getElementById("length").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const convertData = { length, from, to };

    fetch("http://127.0.0.1:5000/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(convertData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server Response:", data);
        console.log(data);
        result.innerText = data.response;
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  });
