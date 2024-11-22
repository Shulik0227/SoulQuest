let bannerSlide = document.querySelectorAll('.banner .banner-content .banner-slide')
let prev_button = document.querySelector('.prev-banner-slide')
let next_button = document.querySelector('.next-banner-slide')

let n = 0
let maxIndex = 2
function changeBannerslide(){
    for(let i = 0; i< bannerSlide.length; i++){
        bannerSlide[i].style.display = 'none'
    }
    bannerSlide[n].style.display = 'block'
}
prev_button.addEventListener( 'click' , function(){
    n = (n - 1 + maxIndex + 1) % (maxIndex + 1);
    changeBannerslide();
})
next_button.addEventListener( 'click' , function(){
    n = (n + 1) % (maxIndex + 1);
    changeBannerslide();
})
changeBannerslide()

function openLink() {
    const select = document.getElementById("chapters-list");
    const url = select.value;

    // Перевіряємо, чи обрано значення, щоб уникнути помилок
    if (url) {
        window.open(url, "_blank");  // відкриває посилання у новій вкладці
    }
}