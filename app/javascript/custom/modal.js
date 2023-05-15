// Get all links
let modal = document.getElementById("my-modal");
let btn = document.getElementById("open-btn");
let button = document.getElementById("ok-btn");

// Display modal centered vertically and horizontally when click on contact
btn.addEventListener('click', () => {
    modal.style.display = "flex";
    modal.classList.add('justify-center', 'items-center')
})

// Modal hidden when click on ok and anywhere on the page
button.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
 
console.log('Test for modal')