document.getElementById("tickerForm").onsubmit = function (e) {
  const input = document.querySelector('input[name="tickers"]').value;
  document.getElementById("status").textContent = `✅ Sent: ${input}`;
};
