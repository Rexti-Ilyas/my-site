let page = document.querySelector('.page');
let themeButton = document.querySelector('.button-themes');
themeButton.onclick = function () {
    page.classList.toggle('dark-theme');
};