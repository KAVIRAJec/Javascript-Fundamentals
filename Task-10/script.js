const container = document.querySelector('.content');
var productContainer;
var homeContainer;
var productButton;

async function loadContent() {
    const path = window.location.hash.slice(1) || 'home';

    try {
        const response = await fetch(`pages/${path}.html`)
        if (!response.ok) {
            throw new Error(`Failed to fetch ${path}.html`);
        }
        const HTMLcontent = await response.text()
        container.innerHTML = HTMLcontent

        if (path === 'home')initializeHome();
        if (path === 'product')initializeProducts();
        if (path === 'cart')initializeCart();
        if (path === 'order')initializeOrder();
    } catch (error) {
        console.error(error);
        document.title = "Error";
        container.innerHTML = "<h1>Page not found</h1>";
    }
}
//Products
async function displayProducts(productData) {
    try {
        productContainer = document.querySelector('.product-container');
        productContainer.innerHTML = '';
        let products;
        if(!productData)products = await getProducts();
        else products = productData;
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-item');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p class='price'>$${product.price}</p>
                <p class='rating'><img src='https://img.icons8.com/?size=100&id=s2LPDFaS0y6C&format=png&color=000000' alt='rating' />${product.rating.rate} </p>
                <button onClick='addToCart(${product.id})' class='button'>Add to Cart</button>
            `;
            productContainer.appendChild(productCard);
        })
    } catch (error) {
        console.error("Error displaying products:", error);
    }    
}
async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error(`Failed to fetch products`);
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function displayFilter() {
    try {
        const filter = document.querySelector('.product-filter');
        const products = await getProducts();
        const categories = ['All']
        products.forEach(product => {
            categories.find(category => category === product.category) ? null : categories.push(product.category);
        })
    
        const dropdown = document.querySelector('.drop-down');
        dropdown.innerHTML = '';
        dropdown.classList.add('show');
        
        categories.forEach(category => {
            const element = document.createElement('div');
            element.classList.add('drop-down-item');
            element.setAttribute('onClick', `filterProducts(${JSON.stringify(category)})`);
            element.textContent = category;
            dropdown.appendChild(element);
        });
    
        document.addEventListener('click', (event) => {
            if (!filter.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    } catch (error) {
        console.error("Error displaying filter:", error);
    }
}
async function filterProducts(category) {
    const products = await getProducts()
    if(category === 'All') return displayProducts();
    const newProducts = products.filter(product => product.category === category);
    displayProducts(newProducts);
}
async function addToCart(productId) {
    try {
        const products = await getProducts();
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.find(p => p.id === product.id) ? cart.find(p => p.id === product.id).quantity += 1 :
            cart.push({ ...product, quantity: 1 });
            
            sessionStorage.setItem('cart', JSON.stringify(cart));

            let toast = document.querySelector('.toast')
            toast.classList.add('show');
            toast.innerHTML = `Item added to cart with quantity ${cart.find(p => p.id ===product.id).quantity}!`
            setTimeout(() => {
                document.querySelector('.toast').classList.remove('show');
            }, 1000);
        } else {
            console.error('Product not found');
        }
    } catch (error) {
        console.error('Error adding product to cart:', error);
    }
}
//Cart
async function displayCart() {
    const cartTitle = document.querySelector('.cart-title');
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cartTitle.textContent = `Your Cart (${cart.length})`;

    const cartData = document.querySelector('.cart-data');
    cartData.innerHTML = '';

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src='${product.image}' alt=${product.title}>
            <h2>${product.title}</h2>
            <div class='quantity'>
                <button class='minus' onClick='handleCart(${product.id}, "minus")'>-</button>
                ${product.quantity}
                <button class='plus' onClick='handleCart(${product.id}, "add")'>+</button>
            </div>
            <p class='price'>$${product.price}</p>`
        cartData.appendChild(cartItem);
    })

    const total = document.createElement('div');
    total.classList.add('total');
    let totalPrice = 0;
    if(cart.length === 0) {
        document.getElementById('remove-all').style.display = 'none';
        document.querySelector('.order').style.display = 'none';
        total.innerHTML = "Your cart is empty"
        total.classList.add('empty');
        cartData.appendChild(total);
    } else {
        cart.forEach(product => {
            totalPrice += product.price * product.quantity;
        })
        total.innerHTML = `<p>Total: </p>
        <h2>$${totalPrice}</h2>`;
        cartData.appendChild(total);

        const order = document.querySelector('.order')
        order.addEventListener('click', () => {
            window.confirm('Are you sure you want to place the order?') ?
            (() => {
                let toast = document.querySelector('.toast');
                toast.classList.add('show');
                toast.innerHTML = `Purchase Successful!`;
                setTimeout(() => {
                    document.querySelector('.toast').classList.remove('show');
                }, 1000);
                AddToOrder();
            })() 
            : null
        })
    }  
}
async function handleCart(productId, operation) {
    try {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        if (operation === 'add') {
            cart.find(p => p.id === productId).quantity += 1
        }
        else {
            cart.find(p => p.id === productId).quantity <= 1 
            ? cart.splice(cart.findIndex(p => p.id === productId), 1)
            : cart.find(p => p.id === productId).quantity -= 1
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));
        displayCart()
    } catch (error) {
        console.error('Error handling the cart:', error);
    }
}
function clearCart() {
    sessionStorage.removeItem('cart');
    displayCart()
}
async function AddToOrder() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.forEach(product => {
        product.orderDate = new Date().toLocaleDateString();
    });
    const order = JSON.parse(sessionStorage.getItem('order')) || [];
    order.push(...cart);
    sessionStorage.setItem('order', JSON.stringify(order));
    sessionStorage.removeItem('cart');
    displayCart()
}
//Order
async function displayOrder() {
    const order = JSON.parse(sessionStorage.getItem('order')) || [];

    const orderContainer = document.querySelector('.order-container');
    orderContainer.innerHTML = '';

    order.forEach(product => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <img src='${product.image}' alt=${product.title}>
            <h2 class=>${product.title}</h2>
            <p class='price'>$${product.price}</p>
            <p class='price'>${product.orderDate}</p>`
        orderContainer.appendChild(orderItem);
    })
}


function initializeHome() {
    const features = document.querySelectorAll('.home-feature');
    features.forEach(feature => {
        feature.addEventListener('click', () => {
            window.location.hash = 'product';
        });
    });
}
function initializeProducts() {
    displayProducts();
    const filter = document.querySelector('.product-filter');
    filter.addEventListener('click', () => {
        displayFilter()
    })
}
function initializeCart() {
    displayCart()
}
function initializeOrder() {
    displayOrder()
}

window.addEventListener('hashchange', loadContent)
window.addEventListener("DOMContentLoaded", loadContent);