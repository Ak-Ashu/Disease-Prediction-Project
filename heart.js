document.getElementById("predictionForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    const age = document.getElementById("age").value;
    const sex = document.getElementById("sex").value;
    const trestbps = document.getElementById("trestbps").value;

    // Collect data
    const inputData = {
        age: age,
        sex: sex,
        trestbps: trestbps,
        // Add other features here
    };

    // Send data to backend (server.py) for prediction
    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
    });

    const result = await response.json();

    // Display result
    const outputDiv = document.getElementById("result");
    if (result.prediction === 0) {
        outputDiv.textContent = "Prediction: No Heart Disease (0)";
    } else {
        outputDiv.textContent = "Prediction: Heart Disease (1)";
    }
});