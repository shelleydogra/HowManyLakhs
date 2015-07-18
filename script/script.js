
function calculaterupees(frm) {
	var calculatedValue = 0
	var currencyInput = frm.dollarAmount.value
	var outputString = ""

	calculatedValue = currencyInput * 63.37
	
	frm.rupeeAmount.value = calculatedValue.toFixed(2) + ' ' + "Lakhs"
	
/*
	outputString = calculatedValue.toFixed(2)
	
	frm.rupeeAmount.value = outputString.toString() + ' ' + "Lakhs"
*/

}
