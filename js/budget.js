function calculate() {
    // Get user's input
    const incomeInput = document.getElementById("income");
    const income = parseFloat(incomeInput.value);
  
    // Calculate budget
    const needs = (income * 0.5).toFixed(2);
    const wants = (income * 0.3).toFixed(2);
    const savings = (income * 0.2).toFixed(2);
  
    // Display results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <table>
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>Needs</td>
          <td>$${needs}</td>
        </tr>
        <tr>
          <td>Wants</td>
          <td>$${wants}</td>
        </tr>
        <tr>
          <td>Savings</td>
          <td>$${savings}</td>
        </tr>
      </table>
    `;
  }
  