document.getElementById("tickerForm").onsubmit = async function (e) {
  e.preventDefault(); // Prevent page reload

  const input = document.querySelector('input[name="tickers"]').value.trim();
  const status = document.getElementById("status");

  if (!input) {
    status.textContent = "⚠️ Please enter a ticker.";
    return;
  }

  status.textContent = "⏳ Sending...";

  try {
    const response = await fetch("https://your-backend-url.com/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ticker: input })
    });

    if (response.ok) {
      status.textContent = `✅ Sent: ${input}`;
    } else {
      status.textContent = `❌ Failed to send (${response.status})`;
    }
  } catch (err) {
    status.textContent = `❌ Error: ${err.message}`;
  }
};
