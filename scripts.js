// query DOM for form element
const form = document.querySelector('form');
console.log(form);

// add a submit event listener on the form
form.addEventListener('submit', function(e) {
	
	// stop the page from refreshing when the form is submitted
	e.preventDefault();
	
	// query DOM for input element
	const inputElement = document.getElementById('toDoItem');
	
	// Return error if input is empty
	if (inputElement.value === '') {
		alert('Please provide a task to add to your to do list')
		return;
	}
	
	// create list element to which checkbox and task will be appended
	const liElement = document.createElement('li');
	
	// add checkbox icon to list element
	liElement.innerHTML = '<i class="fa-regular fa-square"></i>';
	
	// create textNode containing user supplied value and append to li element
	const capitalizedInputValue = inputElement.value.charAt(0).toUpperCase() + inputElement.value.slice(1);
	toDoTextNode = document.createTextNode(capitalizedInputValue);
	liElement.appendChild(toDoTextNode);

	// append list item to the to-do list
	toDoList.appendChild(liElement);
	
	// clear input
	inputElement.value = '';
	
});

// add the li element to the ul
const toDoList = document.querySelector('ul');
toDoList.addEventListener('click', function(e) {
	console.log(e);
	// clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done)
});


// BONUS LEVEL:
// add a "Reset" button which clears all of the TO DOs
// add an "Edit task" button
// add a "Remove task" button to each task
// add a congratulations alert when all of the existing TO DOs are checked off 
// add a "Take a break" message if 5 or more tasks are completed