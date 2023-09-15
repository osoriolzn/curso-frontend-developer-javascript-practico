const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHanIcon = document.querySelector('.menu')
const productDetailIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const porductDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')
const productList = []

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductAside()
    mobileMenu.classList.toggle('inactive')
}

function openProductAside() {
    shoppingCartContainer.classList.add('inactive')
    porductDetailContainer.classList.remove('inactive')
}

function closeProductAside() {
    porductDetailContainer.classList.add('inactive')
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = porductDetailContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    else if (!isProductDetailClosed) {
        porductDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function renderProduct(object) {
    for (product of object) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const addProduct = document.createElement('img')
        addProduct.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(addProduct)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHanIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarAside)
productDetailIcon.addEventListener('click', closeProductAside)

productList.push({
    name: 'Bike',
    price: 2299,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Glasses',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Amazon Echo',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

renderProduct(productList)