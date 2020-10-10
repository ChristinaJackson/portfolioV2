const self = document.getElementById('self');
const cakeStore = document.getElementById('cake-about-project');
const projectUL = document.getElementsByClassName("project-links");
const reviews = document.getElementById('reviews');

window.addEventListener('DOMContentLoaded', (e) => {
    self.classList.toggle('closed');
});

//display and close reviews modal
reviews.addEventListener('click', (e) => {
    if (e.target.textContent === 'Reviews') {
        const reviewModal = document.getElementById('about-modal');
        reviewModal.style.display = 'block';
        reviewModal.addEventListener('click', (e) => {
            if (e.target.textContent === '×') {
                reviewModal.style.display = 'none';
            }
        })
    }
});
//add event listeners on project ul
for (let i = 0; i < projectUL.length; i++) {
    projectUL[i].addEventListener('click', (e) => {
        if (e.target.textContent === 'About') {
            showModalById(e.target.id);
        }
    })
};

//add event listener once correct modal is displayed 
function showModalById(id) {
    if (id === 'cake-about') {
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
    } else if (id === 'healingwaters-about') {
        const healingModal = document.getElementById('healing-modal');
        const healingClose = document.getElementById('healing-close');
        healingModal.style.display = 'block';
        healingClose.addEventListener('click', (e) => {
            if (e.target.textContent === '×') {
                healingModal.style.display = 'none';
            }
        })
    }
};