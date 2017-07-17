var person = prompt("Please enter your name", "Lily Potter");

if (person == null || person == "") {
   	txt = "User cancelled the prompt.";
} else {
   	txt =  person + "!";
}
alert("Hello " + txt);
document.getElementById("welcome_message").innerHTML = "Welcome " + txt;
