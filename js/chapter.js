let lastScrollTop = 0;
const header = document.querySelector("header"); // Замініть на ваш селектор

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Прокручування вниз - приховуємо хедер
        header.style.top = "-100px";
    } else {
        // Прокручування вгору - показуємо хедер
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
// const header = document.querySelector("header"); // Ваш хедер
// let isHeaderVisible = true;

// document.addEventListener("click", function() {
//     if (isHeaderVisible) {
//         // Ховаємо хедер при кліку
//         header.style.top = "-100px";
//     } else {
//         // Показуємо хедер при кліку
//         header.style.top = "0";
//     }
//     isHeaderVisible = !isHeaderVisible; // Змінюємо стан видимості
// });
