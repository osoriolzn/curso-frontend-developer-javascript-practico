const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHanIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHanIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}