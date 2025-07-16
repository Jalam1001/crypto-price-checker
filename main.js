const priceBtn = document.getElementById("fetchPrice");
const priceDisplay = document.getElementById("btcPrice");

priceBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const data = await response.json();
    const price = data.bitcoin.usd;
    priceDisplay.innerText = `🟢 1 BTC = $${price}`;
  } catch (error) {
    console.error("Error fetching BTC price:", error);
    priceDisplay.innerText = "❌ Failed to fetch price.";
  }
});




