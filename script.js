document.getElementById("submit_button").addEventListener("click", function (event) {
  event.preventDefault();
  
  const length = document.getElementById("length").ariaValueMax;
  const from  = document.getElementById("from").ariaValueMax;
  const to = document.getElementById("to").ariaValueMax;

  const convertData = {length, from, to};

  fetch("http://127.0.0.1:5000/convert", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(convertData);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Server Response:", data);
  })
  .catch((err) => {console.error("Fetch failed:", err);
  });
});