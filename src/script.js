let menuLis = document.querySelectorAll('.menu li');
let imgMenu = document.querySelector('.black-square img');
let blackSquare = document.querySelector('.black-square');
let sectionTitleLeftChange = document.querySelector('.section-title-flex .section-title-left');
let footerText = document.querySelector(".footer-text");
const pageWidth = document.documentElement.scrollWidth;
let counter = false;

blackSquare.addEventListener("click", () => {
    console.log(counter);
    if (!counter) {
        menuLis.forEach(el => el.style.display = 'block');
        imgMenu.src = "./dist/img/cross.png";
        counter = true;
        for(let j = 0; j < menuLis.length; j++){
            menuLis[j].addEventListener("mouseon", () => menuLis[j].style.color = '#4E4E4E')
        }
    }
    else{
        menuLis.forEach(el => el.style.display = 'none');
        imgMenu.src = "./dist/img/button.png";
        counter = false;
    }
});

if(pageWidth < 321){
    sectionTitleLeftChange.textContent = '- Last Instagram Shot';
    footerText.textContent = "Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio.";
}
else {
    sectionTitleLeftChange.textContent = '- Latest Instagram Shots';
    footerText.textContent = "Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio. Curabitur blandit tempus porttitor vollisky inceptos mollisestor.";
}



