function validateForm() {
	
	var validUserName = false;
	var validUserPassword = false;
	var errorMessages = "1234";


	// Validates Username
	var un = myContact.username.value;
	if (un.length > 12 || un == null || un == "") {
		
		errorMessages += "<p>The username must be less than 12 characters</p>";
	} else {
		validUsername = true;
	}

	// Validates password
	var pw = myContact.password.value;
	if (pw == null || pw.length > 7) {
		errorMessages += "<p>The password must be less than 7 characters and it is required.</p>";
	} else {
		validUserPassword = true;
	}

	return validUsername && validUserPassword;
}
