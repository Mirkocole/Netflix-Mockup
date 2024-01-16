// Funzione Carosello
function Carousel(id){
    let items = document.querySelectorAll(id+'.carousel .carousel-item');


items.forEach((el) => {
    const minPerSlide = 8;
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
}

let carousels =  document.querySelectorAll('.carousel.slide');

for (const carousel of carousels) {
    let id = '#'+carousel.id;
    Carousel(id);
}

// Funzione Fadein EXTRA

let containers = document.querySelectorAll('.container-fluid');
let maxView = window.innerHeight - (window.innerHeight /5) ;
for (const container of containers) {
    
    FadeIn(container);
}

document.addEventListener('scroll',()=>{
    let containers = document.querySelectorAll('.container-fluid');
    for (const container of containers) {
        FadeIn(container);
    }
})




function FadeIn(div){
    let maxView = window.innerHeight - (window.innerHeight /5) ;
    if(div.getBoundingClientRect().top > maxView){
        div.style.animation = 'FadeOut 0.5s ease-in forwards';
    }else{
        // div.style.opacity = '1';
        div.style.animation = 'FadeIn 1s linear forwards';
    }
}