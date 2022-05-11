// query DOM for form element
const form = document.querySelector('form');
const toDoList = document.querySelector('ul');
const clearButton = document.querySelector('button');

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

toDoList.addEventListener('click', function(e) {	
	// if we click on the icon, toggle between checked and unchecked
	if (e.target.localName === 'i') {
		e.target.classList.toggle('fa-square');
		e.target.classList.toggle('fa-square-check');

		// Traverse the DOM Tree to the icon's PARENT NODE (the list element) so that we can adjust its classes, too!
		e.target.parentNode.classList.toggle('text-muted');
	}
});

// We queried the DOM for our newly created 'Clear checked items' button. Let's add a click event listener to it.
clearButton.addEventListener('click', function(e) {
	// Find all of the checked items. Conveniently they all have the 'text-muted' class applied to them.
	const checkedItems = document.querySelectorAll('.text-muted');

	// Use a for loop to loop through our 'checkedItems' and make them each self-destruct.
	for (let i = 0; i < checkedItems.length; i += 1) {
		checkedItems[i].remove();
	}
})


// BONUS LEVEL: 
// add an "Edit task" button ✅
// add a "Remove task" button to each task
// add a congratulations alert when all of the existing TO DOs are checked off 
// add a "Take a break" message if 5 or more tasks are completed