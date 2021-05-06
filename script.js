// slideshow
let y = 0;
let x = 0;

const cube = document.querySelector('.cube');
document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x = x + 20}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x = x - 20}deg)`
})

const playPause = () => {
    setInterval(() => {
        cube.style.transform = `rotateY(${y++}deg)`
    }, 100)
}

playPause();

const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg`

        i == 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div')

let a = 1;

const slideshow = () => {
    setInterval(() => {

        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length){
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }

    }, 20000)
}

slideshow();