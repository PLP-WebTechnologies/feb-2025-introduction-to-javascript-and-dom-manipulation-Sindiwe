document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements we'll be manipulating
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');

    // Function to change the text content
    function changeText(newText) {
        dynamicTextElement.textContent = newText;
    }

    // Function to modify CSS styles
    function changeStyles() {
        dynamicTextElement.style.color = 'green';
        dynamicTextElement.style.backgroundColor = 'lightyellow';
        dynamicTextElement.style.padding = '10px';
        dynamicTextElement.style.borderRadius = '5px';
    }

    // Function to add a new element
    function addElement() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'New Item Added!';
        newParagraph.classList.add('item'); // You can add classes dynamically too
        elementContainer.appendChild(newParagraph);
    }

    // Function to remove the last element
    function removeElement() {
        const lastItem = elementContainer.lastElementChild;
        if (lastItem) {
            elementContainer.removeChild(lastItem);
        } else {
            alert('No more items to remove!');
        }
    }

    // Event listeners to trigger the functions
    styleButton.addEventListener('click', changeStyles);
    addButton.addEventListener('click', addElement);
    removeButton.addEventListener('click', removeElement);

    // Let's change the initial text when the page loads
    changeText('The text has been dynamically updated!');
});