let addButton = document.querySelector('button')
let addText = document.querySelector('input')
addText.focus();
let heading = document.querySelector('h1')
let instructions = document.createElement('h3')
let container = document.querySelector('.container')

// Instructions
instructions.innerText = "Enter a task, and click 'Add' to put it on the list. Click the item to remove it."
instructions.style.borderTop = '1px solid blue'
container.append(instructions)

// Counter for background border
let counter = 0

addButton.addEventListener('click',() => {

    // Create and format new thing, click to remove
    let newItem = document.createElement('h2')
    newItem.style.borderRadius = '10px'
    newItem.innerText = addText.value
    newItem.style.width = '100%'
    newItem.addEventListener('click',() => {
        newItem.remove();
        addText.focus();
    })

    // Increment counter, apply background colour
    counter++;
    if (counter % 2 == 0) {
        newItem.style.backgroundColor = 'lightgrey'
    } else {
        newItem.style.backgroundColor = 'lightyellow'
    }

    // Add it to the list
    heading.append(newItem)
    addText.value = ''
    addText.focus();

    // Remove instructions
    instructions.remove();
}
)