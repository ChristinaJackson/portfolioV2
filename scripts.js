const self = document.getElementById('self');
const cakeStore = document.getElementById('cake-about-project');
const projectUL = document.getElementsByClassName("project-links");
const reviews = document.getElementById('reviews');

window.addEventListener('DOMContentLoaded', (e) => {
    self.classList.toggle('closed');
})

for (let i = 0; i < projectUL.length; i++) {
    projectUL[i].addEventListener('click', (e) => {
        if (e.target.textContent === 'About') {
            showModalById(e.target.id);
        }
    })
};

//add event listener once modal is displayed 
function showModalById(id) {
    if (id === 'cake-about') {
        console.log("cake")
        console.log('hello')

        const cakeModal = document.getElementById('cake-modal');
        const cakeClose = document.getElementById('cake-close');
        console.log(cakeClose)
        console.log('hello')
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
}

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