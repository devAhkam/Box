// Get all boxes
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    // Add click event to the main box to toggle expansion
    box.addEventListener('click', (event) => {
        // Check if the box is already expanded
        const isExpanded = box.classList.contains('expanded');

        // Remove expanded class from all boxes
        boxes.forEach(b => b.classList.remove('expanded'));

        // Toggle expanded class on the clicked box
        if (!isExpanded) {
            box.classList.add('expanded');
        }

        // Stop event from bubbling up to the document
        event.stopPropagation();
    });

    // Prevent clicks on the options area from collapsing the box
    const options = box.querySelector('.options');
    options.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from bubbling up to the box
    });

    // Get references to the color and size selectors and the selected-info element
    const colorSelector = box.querySelector('select[id^="color"]');
    const sizeSelector = box.querySelector('select[id^="size"]');
    const selectedInfo = box.querySelector('.selected-info');

    // Update selected-info text when color or size changes
    function updateSelectedInfo() {
        const color = colorSelector.value;
        const size = sizeSelector.value;
        selectedInfo.innerHTML = `Selected: <br> Color - ${color} <br> Size - ${size}`;
    }

    // Add event listeners to update the selected-info text on change
    colorSelector.addEventListener('change', updateSelectedInfo);
    sizeSelector.addEventListener('change', updateSelectedInfo);
});

// Add an event listener on the document to detect clicks outside of boxes
document.addEventListener('click', () => {
    // Close all expanded boxes when clicking outside
    boxes.forEach(box => box.classList.remove('expanded'));
});
