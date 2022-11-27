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

const toggleMobileMenu = () => {
    const container = document.getElementById('mobile_dropdown');
    const containerClose = document.getElementById('close_mobile_dropdown');
    const buttonHamburguer = document.getElementById('hamburguer_menu');

    if (!container.classList.contains('active')) {
    	container.classList.add('active');
    	containerClose.classList.add('active');
        buttonHamburguer.classList.add('fa-xmark');
        buttonHamburguer.classList.remove('fa-bars');
        container.style.height = "auto";
        
    	let height = container.clientHeight + "px";
        container.style.height = "0px";

        setTimeout(() => {
            container.style.height = height;
        }, 0);
    } else {
    	container.style.height = "0px";
        buttonHamburguer.classList.add('fa-bars');
        buttonHamburguer.classList.remove('fa-xmark');
        
    	container.addEventListener('transitionend', () => {
        	container.classList.remove('active');
        	containerClose.classList.remove('active');
        }, {once: true})
    }
}

// Event Listeners
document.addEventListener('scroll', () => {
    const buttonScrollUp = document.getElementById('go_up_button');

    buttonScrollUp.style.display = (window.scrollY >= 150) ? 'flex' : 'none';
});