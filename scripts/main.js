let typeButtons = document.querySelectorAll('.type-list-button');
let playButtons = document.querySelectorAll('.play');
let body = document.querySelector('body')
let videoPlayers = document.querySelectorAll('.video-player')
let slick = document.querySelectorAll('.slick-active');
let activeMssage = document.querySelector('.btn-active');
let message = document.querySelector('.message');
let formData = document.querySelector('.form-data');
let counter = document.querySelector('.count');
let minutCount = document.querySelector('.minus-count');
let plusCount = document.querySelector('.plus-count')
let count = 0;
let orderOpener = document.querySelectorAll('.order-open');
let orderCard = document.querySelector('.order-card')
let closeOrder = document.querySelectorAll('.close-order');
let shadow = document.querySelector('.shadow')
let submitOrder = document.getElementById('submit-order');
let activePart = document.querySelector('.active-card');
let messagePart = document.querySelector('.message-part');
let burgerButton = document.querySelector('.burger-btn');
let burgerButtonImages = document.querySelectorAll('.burger-btn-img')
let mobileMenu = document.querySelector('.mobile-menu');
let toTopButton = document.querySelector('.to-top');





window.addEventListener('load', function (e) {
    e.preventDefault();
    this.pageYOffset = 0;

    fetch('http://localhost:4500/products')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
})

function createProdict() {
    let products = document.createElement('div');
    let leftBox = document.createElement('div');
    let rightBox = document.createElement('div');
    let image = document.createElement('img');
    products.setAttribute('class', 'card')
    leftBox.setAttribute('class', 'img-section')
    rightBox.setAttribute('class', 'info-section');
    image.setAttribute('src', imgLink);
    products.appendChild(leftBox, rightBox)
    leftBox.appendChild(image);
}

window.addEventListener('scroll', function (e) {
    e.preventDefault();
    if (this.pageYOffset > 900) {
        toTopButton.classList.add('active')
    } else {
        toTopButton.classList.remove('active')
    }
})

burgerButton.addEventListener('click', function (e) {
    e.preventDefault();
    imageChanger()
    mobileMenu.classList.toggle('active')
})


function imageChanger() {
    burgerButtonImages.forEach(image => {
        if (image.classList.contains('active')) {
            image.classList.remove('active')
        } else {
            image.classList.add('active')
        }
    })
}

submitOrder.addEventListener('click', function (e) {
    e.preventDefault();
    activePart.classList.add('hidden');
    messagePart.classList.add('active')
})

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        orderCard.classList.remove('active');
        shadow.classList.remove('active')
        activePart.classList.remove('hidden')
        messagePart.classList.remove('active')
    }
});

orderOpener.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        orderCard.classList.add('active');
        shadow.classList.add('active')
    })
})

closeOrder.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        orderCard.classList.remove('active');
        shadow.classList.remove('active')
        activePart.classList.remove('hidden')
        messagePart.classList.remove('active')
    })
})

minutCount.addEventListener('click', function (e) {
    e.preventDefault();
    if (count == 0) {
        minutCount.setAttribute('disabled', 'true')
    } else {
        count--
    }
    counter.innerHTML = count
})

plusCount.addEventListener('click', function (e) {
    e.preventDefault();
    if (count > 0) {
        minutCount.removeAttribute('disabled', 'true');
    } else {
        count++
    }
    counter.innerHTML = count
})


activeMssage.addEventListener('click', function (e) {
    e.preventDefault();
    message.classList.add('active')
    formData.classList.add('hidden')
    setTimeout(() => {
        activeMessage()
    }, 5000);
})

function activeMessage() {
    message.classList.remove('active');
    formData.classList.remove('hidden')
}



playButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        videoSwitcher(button.dataset.btnOrder);
    })
})


function videoSwitcher(btnOrder) {
    videoPlayers.forEach(video => {
        if (btnOrder != video.dataset.videoOrder) {
            video.removeAttribute('controls', 'true')
            video.pause()
        } else {
            video.setAttribute('controls', 'true')
            video.play()
        }
    })
    playButtons.forEach(button => {
        if (btnOrder != button.dataset.btnOrder) {
            button.setAttribute('class', 'play')
        } else {
            button.setAttribute('class', 'play hidden')
        }
    })
}

typeButtons.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        tabSwitcher(item.dataset.btnOrder);
    })
})



function tabSwitcher(btnOrder) {
    typeButtons.forEach(item => {
        if (btnOrder != item.dataset.btnOrder) {
            item.classList.remove('active');
        } else {
            item.classList.add('active')
        }
    })
}