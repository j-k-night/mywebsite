function ValidateForm(){
	 var validUsername = false;
	 var validUserPassword = false;
	 var validFirstName = false;
	 var letters = /^[A-Za-z]+$/;
     var numbers = /^[0-9]+$/;
     var validPhone = false;
     var addressGiven = false;
     var cityGiven = false;
     var zipcodeGiven = false;
	 var errorMessages ="";  // All the error messages are going to stay in this variable
	 /*********** VALIDATES USERNAME ******** */
	 //Required field
	//This syntax is using name-of-form.name-of-field.value
	// You can also use document.getElementById("id-of-field").value

	/*********** VALIDATES USERNAME ******** */
	// required. max of 12 characters.
	 if (myContact.username.value.length > 12 || myContact.username.value === null || myContact.username.value === "")
	 	errorMessages += "<p>The username must be less than 12 characters and it is required.</p>";
	 else 
	 	validUsername = true;
	 // console.log(validUsername);  
	 /*********** VALIDATES PASSWORD ******** */
	 if (myContact.password.value===null ||
	 myContact.password.value=== "" ||
	 myContact.password.value.length > 7)
	 	errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
	 else
	 	validUserPassword = true;

	  
	 /*********** VALIDATES FIRSTNAME ******** */
	 if (myContact.firstname.value===null ||
	 myContact.firstname.value=== "" ||
	 myContact.firstname.value.length > 7 || !myContact.firstname.value.match(letters))
	 	errorMessages += "<p>The first name must be less than 20 characters and it is required</p>";
	 else
	 	validFirstName = true;

      /*********** VALIDATES PHONE NUMBER ******** */
	 if (myContact.phone.value===null ||
	 myContact.phone.value=== "" ||
	 myContact.phone.value.length > 15 || !myContact.phone.value.match(numbers))
	 	errorMessages += "<p>The phone number must be less than 15 characters. Only numbers are accepted.</p>";
	 else
	 	validPhone = true;

    if (myContact.address.value === null || myContact.address.value === "")
      errorMessages += "<p>Address is required.</p>";
    else
      addressGiven = true;
    if (myContact.city.value === null || myContact.city.value === "")
      errorMessages += "<p>City is required.</p>";
    else
      cityGiven = true;
    if (myContact.countries.value === "United States" && 
        (myContact.zipcode.value === null || myContact.zipcode.value === ""))
      errorMessages += "<p>Zip code is required for USA addresses.</p>";
    else
      zipcodeGiven = true;
	 document.getElementById("errorMessages").innerHTML = errorMessages;
	// Make sure you return all the boolean variables that are checking each field
	 return (validUsername && validUserPassword && validPhone && addressGiven && cityGiven && zipcodeGiven);
}
