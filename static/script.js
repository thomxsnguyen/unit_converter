document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("submit_button");
  const resetBtn = document.getElementById("reset_button");

  convertBtn.addEventListener("click", function (event) {
    event.preventDefault();

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
        document.getElementById("converted-result").innerText = data.converted;
        document.getElementById("form-view").style.display = "none";
        document.getElementById("result-view").style.display = "block";
        convertBtn.style.display = "none";
        resetBtn.style.display = "inline-block";
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  });

  resetBtn.addEventListener("click", function () {
    document.getElementById("length").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("converted-result").innerText = "";

    document.getElementById("form-view").style.display = "block";
    document.getElementById("result-view").style.display = "none";
    convertBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
  });
});
