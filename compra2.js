document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity-input');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const cartBtn = document.getElementById('cart-btn');
    const totalPriceElement = document.getElementById('total-price');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItemsList = document.getElementById('cart-items-list');
    const compareBtn = document.getElementById('compare-btn'); 

    let totalQuantity = 1;
    const productPrice = 99.00; 
    let cart = [];

    function updateTotalPrice() {
        const totalPrice = (totalQuantity * productPrice).toFixed(2);
        totalPriceElement.textContent = totalPrice;
    }

    function updateCartDropdown() {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.quantity} x Curso de JavaScript - $${(item.quantity * item.price).toFixed(2)}`;
            cartItemsList.appendChild(li);
        });
    }

    function comprar() {
     
        alert('¡Compra exitosa!');
      
        cart = [];
        updateCartDropdown();
        
        totalPriceElement.textContent = "0.00";
    }

    increaseBtn.addEventListener('click', () => {
        totalQuantity++;
        quantityInput.value = totalQuantity;
        updateTotalPrice();
    });

    decreaseBtn.addEventListener('click', () => {
        if (totalQuantity > 1) {
            totalQuantity--;
            quantityInput.value = totalQuantity;
            updateTotalPrice();
        }
    });

    addToCartBtn.addEventListener('click', () => {
        const item = {
            name: 'Curso de JavaScript',
            price: productPrice,
            quantity: totalQuantity
        };
        cart.push(item);
        updateCartDropdown();
        alert(`Añadido ${totalQuantity} curso(s) al carrito. Precio total: $${(totalQuantity * productPrice).toFixed(2)}`);
    });

    quantityInput.addEventListener('change', () => {
        const value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            quantityInput.value = totalQuantity;
        } else {
            totalQuantity = value;
            updateTotalPrice();
        }
    });

    cartBtn.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
    });

    compareBtn.addEventListener('click', comprar); 
});
