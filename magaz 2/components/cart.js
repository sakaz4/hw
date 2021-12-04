import { CONTAINER } from "../script";
import defaultExp, {$, setCookie, getCookie} from '../utils';

const getTotalPrice = (products) => {
    const cart = getCookie('cart');
    let total = 0;
    cart.map(item => {
        const currentProduct = products.find(product => product.id === item.id);
        total+=currentProduct.price*item.count
    })
    return total.toFixed(2);
}

const cart = (data) => {
    CONTAINER.innerHTML = '';
    CONTAINER.insertAdjacentHTML('afterbegin', `
        <h1> Cart </h1>
    `)
    const totalPrice = $('strong');
    const products = JSON.parse(localStorage.getItem('products'));

    const cartList = getCookie('cart') || [];
    console.log(data.cartList)
    cartList.map(cartItem => {
        const currentProduct = products.find(item => item.id === cartItem.id);
        console.log(currentProduct)
        const title = $('h2');
        title.innerHTML = currentProduct.title;
        const img = new Image(50);
        img.src = currentProduct.image;
        const counterBlock = $('div');
        const price = $('strong');
        price.innerText = cartItem.count*currentProduct.price;
        //пересчет стоимости товара в зависимости от количества
        counterBlock.classList.add('counter-block');
        const countMinus = $('span');
        countMinus.innerText = '—';
        const countPlus = $('span');
        countPlus.innerText = '+';
        const countText = $('strong');
        countText.innerText = cartItem.count;
        countMinus.addEventListener('click', () => {
            if (cartItem.count > 1) {
                cartItem.count--;
                countText.innerText = cartItem.count;
                price.innerText = (cartItem.count*currentProduct.price).toFixed(2);
                setCookie('cart', cartList);
                totalPrice.innerText = getTotalPrice(products);
            }
        });
        countPlus.addEventListener('click', () => {
            cartItem.count++;
            countText.innerText = cartItem.count;
            // localStorage.setItem('cart', JSON.stringify(cartList))
            price.innerText = (cartItem.count*currentProduct.price).toFixed(2);
            setCookie('cart', cartList)
            totalPrice.innerText = getTotalPrice(products);
        })
        counterBlock.appendChild(countMinus);
        counterBlock.appendChild(countText);
        counterBlock.appendChild(countPlus);

        CONTAINER.appendChild(title);
        CONTAINER.appendChild(counterBlock);
        CONTAINER.appendChild(img);
        CONTAINER.appendChild(price);

        const btnRemove = $('button');
        btnRemove.innerText = 'Remove this item';
        btnRemove.addEventListener('click', () => {
            const filteredCartList = cartList.filter(item => item.id !== cartItem.id);
            // localStorage.setItem('cart', JSON.stringify(filteredCartList));
            setCookie('cart', filteredCartList)
            cart(data);
        })

        CONTAINER.appendChild(btnRemove);
    })

 
    totalPrice.innerText = getTotalPrice(products);
    CONTAINER.appendChild(totalPrice);
}

export const cartPage = cart;
// export default cart;