// Get all links
const modal = document.querySelector("#my-modal");
const project_modals = document.querySelectorAll('.modal-project');
const contact = document.querySelector("#contact-btn");
const ok_btns = document.querySelectorAll(".ok-btn");
const ok_btn = document.querySelector("#ok-btn");
const project_btns = document.querySelectorAll(".project-btn")

// Display modal centered vertically and horizontally when click on contact
contact.addEventListener('click', () => {
    modal.style.display = "flex";
    modal.classList.add('justify-center', 'items-center')
    console.log('Test for button-modal')
})

// Display modal centered vertically and horizontally when click on project button
project_btns.forEach(project => project.addEventListener('click', (e) => {
    const project_modal = document.querySelector('.modal-project');
    const button = document.querySelector(".ok-btn");
    project_modal.style.display = "flex";
    project_modal.classList.add('justify-center', 'items-center')
    console.log('Test for button-modal')
} ))

// Modal hidden when click on ok and anywhere on the page
ok_btn.addEventListener('click', () => {
    modal.style.display = "none";
})
ok_btns.forEach(ok_btn => ok_btn.addEventListener('click', (e) => {
    const project_modal = document.querySelector('.modal-project');
    project_modal.style.display = "none";
} ))

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
 
console.log('Test for modal')

