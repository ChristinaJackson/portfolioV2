//modal event listeners will need to be more specific 
//look into how event bubbling is working on the project ULs
//dont like the loop through everything
//
const self = document.getElementById('self');
const cakeStore = document.getElementById('cake-about-project');
const projectUL = document.getElementsByClassName("project-links");


window.addEventListener('DOMContentLoaded', (e) => {
    self.classList.toggle('closed')
})

for (let i = 0; i < projectUL.length; i++) {
    projectUL[i].addEventListener('click', (e) => {
        if (e.target.textContent === 'About') {
            showModalById(e.target.id);
        }
    })
}

function showModalById(id) {
    if (id === 'cake-about') {
        console.log("cake")
        const cakeModal = document.getElementById('cake-modal');
        cakeModal.style.display = 'block'
    } else if (id === 'water-about') {
        console.log("water")
    } else if (id = 'healingwaters-about') {
        console.log('healing')
    }
}
//make more specific
window.addEventListener('click', (e) => {
    console.log(e.target.className)
    if (e.target.className === 'close') {
        const cakeModal = document.getElementById('cake-modal');
        cakeModal.style.display = 'none';
    }
})
