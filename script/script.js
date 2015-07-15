
function calculaterupees(frm) {
	var calculatedValue = 0
	var currencyInput = frm.dollarAmount.value

	calculatedValue = currencyInput * 63.37
	frm.rupeeAmount.value = calculatedValue.toFixed(2)

}
