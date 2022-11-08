const themeToggler  = () => {
    const element = document.body;
    element.classList.toggle("light");
}

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('scroll', () => {
    const buttonScrollUp = document.getElementById('go_up_button');

    buttonScrollUp.style.display = (window.scrollY >= 100) ? 'flex' : 'none';
});