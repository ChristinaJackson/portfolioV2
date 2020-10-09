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

//add event listener once modal is displayed 
function showModalById(id) {
    if (id === 'cake-about') {
        console.log("cake")
        const cakeModal = document.getElementById('cake-modal');
        const cakeClose = document.getElementById('cake-close');
        cakeModal.style.display = 'block';
        cakeClose.addEventListener('click', (e) => {
            if (e.target.textContent === '×') {
                cakeModal.style.display = 'none';
            }
        })
    } else if (id === 'water-about') {
        const waterModal = document.getElementById('water-modal');
        const waterClose = document.getElementById('water-close');
        waterModal.style.display = 'block';
        waterClose.addEventListener('click', (e) => {
            if (e.target.textContent === '×') {
                waterModal.style.display = 'none';
            }
        })
    } else if (id = 'healingwaters-about') {
        const healingModal = document.getElementById('healing-modal');
        const healingClose = document.getElementById('healing-close');
        healingModal.style.display = 'block';
        healingClose.addEventListener('click', (e) => {
            if (e.target.textContent === '×') {
                healingModal.style.display = 'none';
            }
        })
    }
}

