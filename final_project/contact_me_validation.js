

function ValidateForm() {
	var errors = "";

	var name = document.myContact.name.value;
	var subj = document.myContact.subject.value;
	var email = document.myContact.email.value;
	var msg = document.myContact.message.value;

	var validName = (name !== null && name !== "");
	var validSubj = (subj !== null && subj !== "");
	var validEmail = (email !== null && email !== "");
	var validMsg = (msg !== null && msg !== "");

	if (!validName) {
		errors += "Please enter name.<br>";
	}
	if (!validSubj) {
		errors += "Please enter subject.<br>";
	}
	if(!validEmail) {
		errors += "PLease enter an email address.<br>";
	}
	if (!validMsg) {
		errors += "Please enter a message.<br>";
	}

	document.getElementById('error_msg').innerHTML = errors;
	return validName && validSubj && validMsg;
};
