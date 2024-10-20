'use strict';

const items = [
    {
        img: './product-1.jpeg',
        name: 'queen panel bed',
        price: 10.99,
        id: 1
    },
    {
        img: './product-2.jpeg',
        name: 'king panel bed',
        price: 12.99,
        id: 2
    },
    {
        img: './product-3.jpeg',
        name: 'single panel bed',
        price: 12.99,
        id: 3
    },
    {
        img: './product-4.jpeg',
        name: 'twin panel bed',
        price: 22.99,
        id: 4
    },
    {
        img: './product-5.jpeg',
        name: 'fridge',
        price: 88.99,
        id: 5
    },
    {
        img: './product-6.jpeg',
        name: 'dresser',
        price: 32.99,
        id: 6
    },
    {
        img: './product-7.jpeg',
        name: 'couch',
        price: 45.99,
        id: 7
    },
    {
        img: './product-8.jpeg',
        name: 'table',
        price: 33.99,
        id: 8
    }
]

const cartArr = []

const container = document.querySelector('.product_container')
const cartOverlay = document.querySelector('.cart_overlay')
const cartContainer = document.querySelector('.cart_container')
const cartContent = document.querySelector('.cart_content')
const closebtn = document.querySelector('.close-btn')
const cartBtn = document.querySelector('.cart-btn')
const cartTotal = document.querySelector('.cart-total')
const cartItems = document.querySelector('.cart-items')
const clearCartBtn = document.querySelector('.clear-cart')


document.addEventListener('DOMContentLoaded', () => {
    const savedCart = getItem()
    if (savedCart.length > 0) {
        savedCart.forEach(item => {
            cartArr.push(item)
            addToCart(item)
        })
        calcTotal(cartArr)
        cart(cartArr)
        restoreButtonState(savedCart)
    }
})

function displayItems() {
    items.forEach(item => {
        const html = `
            <div class="image-details">
                <img src=${item.img} alt="image" class="img">
                <p class="name">${item.name}</p>
                <h3 class="price">$${item.price}</h3>
                <button class="add" data-id=${item.id}>
                    <i class="fa-solid fa-cart-shopping"></i><span class="text">ADD TO CART</span>
                </button>
            </div>
        `
        return container.insertAdjacentHTML('beforeend', html)
    }
    )
}

displayItems()
function restoreButtonState(savedCart) {
    savedCart.forEach(item => {
        const addBtn = document.querySelector(`.add[data-id='${item.id}']`);
        const btnText = addBtn.querySelector('.text');

        if (addBtn) {
            btnText.innerText = 'IN CART'; 
            addBtn.disabled = true; 
        }

        const cartItem = document.querySelector(`.cart_details[data-id='${item.id}']`);
        if (cartItem) {
            const amountEl = cartItem.querySelector('.item-amount');
            amountEl.innerText = item.quantity; 
        }
    });
}
const addBtns = document.querySelectorAll('.add')

function displayCart() {
    cartOverlay.classList.add('transparentBcg')
    cartContainer.classList.add('showcart')
}

function hideCart() {
    cartOverlay.classList.remove('transparentBcg')
    cartContainer.classList.remove('showcart')
}

closebtn.addEventListener('click', hideCart)
cartBtn.addEventListener('click', displayCart)

addBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {

        const addBtn = e.target.closest('button')
        const id = addBtn.dataset.id

        displayCart()
        const item = items.find(item => item.id == id)
        item.quantity = 1

        cartArr.push(item)


        const btnText = addBtn.querySelector('.text')
        btnText.innerText = 'IN CART'
        addBtn.disabled = true
        addToCart(item)
        addCount()
        calcTotal(cartArr)
        cart(cartArr)

        setItem(cartArr)
    })
})

function addToCart(item) {
    const html = `
               <div class="cart_details" data-id=${item.id}>
                    <img src=${item.img} alt="image">
                    <div class="item_details">
                        <h4 class="name">${item.name}</h4>
                        <h5 class="price">$${item.price}</h5>
                        <button class="remove-btn" data-id=${item.id}>remove</button>
                    </div>
                    <div class="icon">
                        <i class="fas fa-chevron-up" ></i>
                        <p class="item-amount">
                            1
                        </p>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
    `
    cartContent.insertAdjacentHTML('beforeend', html);
    addCount()
}


function addCount() {
    const iconTabs = document.querySelectorAll('.icon'); // Select all icons

    iconTabs.forEach(icon => {
        icon.removeEventListener('click', handleIconClick);

        icon.addEventListener('click', handleIconClick);
    });
}

function handleIconClick(e) {
    const itemContainer = e.target.closest('.cart_details');
    const amountEl = itemContainer.querySelector('.item-amount');
    const itemId = itemContainer.dataset.id
    const itemInCart = cartArr.find(item => item.id == itemId);

    if (!itemInCart) {
        console.error('Item not found in cart');
        return;
    }

    if (e.target.classList.contains('fa-chevron-up')) {
        const newAmount = parseInt(amountEl.innerText) + 1;
        amountEl.innerText = newAmount;
        itemInCart.quantity = newAmount;

    } else if (e.target.classList.contains('fa-chevron-down')) {
        const currentAmount = parseInt(amountEl.innerText);
        if (currentAmount > 1) {
            const newAmount = currentAmount - 1;
            amountEl.innerText = newAmount;
            itemInCart.quantity = newAmount;
        }
    }

    calcTotal(cartArr);
    cart(cartArr)
    setItem(cartArr)
}


function calcTotal(arr) {
    const total = arr.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `${total.toFixed(2)}`; // 
}

function cart(arr) {
    const total = arr.map(item => item.quantity).reduce((a, b) => a + b, 0)
    cartItems.textContent = total
}

cartContent.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        const cartdetails = e.target.closest('.cart_details')
        const itemId = cartdetails.dataset.id
        const index = cartArr.findIndex(item => item.id == itemId);
        if (index !== -1) {
            cartArr.splice(index, 1);
            cartdetails.remove();
            calcTotal(cartArr);
            cart(cartArr);
            setItem(cartArr);
        }
    }
})


function setItem(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

function clearCart() {
    const savedCart = getItem()
    savedCart.forEach(item => cartContent.remove(item))
    cartTotal.textContent = 0
    cartItems.textContent = 0
    localStorage.clear()
}

clearCartBtn.addEventListener('click', clearCart)