//Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

document.getElementById('btn').onclick = function() { 
	var food = document.getElementById('enterFood').value;
	if (food !== '') {
		var newEl = document.createElement('li');

		// Create a text node and store it in a variable.
		var newText = document.createTextNode(food);

		// Attach the new text node to the new element.
		newEl.appendChild(newText);

		// Find the position where the new element should be added.
		var position = document.getElementsByTagName('ul')[0];

		// Insert the new element into its position.
		position.appendChild(newEl);
	}
	// clear text field
	document.getElementById('enterFood').value = '';
	return false;
}
