
    const addToCartButtons = document.querySelectorAll('.menu__button');
    const cartCountElement = document.querySelector('.cart-count');
    
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment the cart count when an item is added
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

