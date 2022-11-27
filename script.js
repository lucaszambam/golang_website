const themeToggler  = () => {
    const element = document.body;
    const goLogo = document.getElementById("logo_golang");
    let goLogoSource = goLogo.data;

    element.classList.toggle("light");
    if (element.classList.contains('light')) {
        goLogo.data = goLogoSource.replace('Go_Logo_White.svg', 'Go_Logo_Blue.svg');
    } else {
        goLogo.data = goLogoSource.replace('Go_Logo_Blue.svg', 'Go_Logo_White.svg');
    }
}

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const submitForm = () => {
    console.log('Backend not implemented yet. Maybe sometime soon.')
}

document.addEventListener('scroll', () => {
    const buttonScrollUp = document.getElementById('go_up_button');

    buttonScrollUp.style.display = (window.scrollY >= 150) ? 'flex' : 'none';
});