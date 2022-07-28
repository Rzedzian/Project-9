const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLink = document.querySelectorAll('.nav__link');
const footer = document.querySelector('.footer')


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    footer.classList.toggle('remove-footer');
}

const removeNav = () => {
    navLink.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.remove('is-active')
            navMobile.classList.remove('nav-mobile--active');
        })
    })
}

navBtn.addEventListener('click', handleNav);

const handleCorrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCorrentYear();
removeNav();