// JavaScript code for Currency Converter App

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');
  
    // Check if amount is provided
    if (!amount) {
      resultDiv.innerText = "Please enter an amount.";
      return;
    }
  
    try {
      // Fetching real-time exchange rate data
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      
      // Getting exchange rate for selected currencies
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
  
      // Displaying the result
      resultDiv.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      resultDiv.innerText = "Error fetching exchange rates. Please try again.";
    }
  }
  