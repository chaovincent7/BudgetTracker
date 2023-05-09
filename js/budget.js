function calculate() {
	// Get user input value
	var income = parseInt(document.getElementById("income").value);

	// Calculate budget allocations
	var needsBudget = income * 0.5;
	var wantsBudget = income * 0.3;
	var savingsBudget = income * 0.2;

	// Update budget display
	document.getElementById("needs").innerHTML = needsBudget;
	document.getElementById("wants").innerHTML = wantsBudget;
	document.getElementById("savings").innerHTML = savingsBudget;
}
