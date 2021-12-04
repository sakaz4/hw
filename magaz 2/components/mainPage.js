// import { CONTAINER } from "../script.js"; //DOM object

export default (CONTAINER) => {
    // const CONTAINER = document.querySelector('main')
    CONTAINER.innerHTML = '';
    CONTAINER.insertAdjacentHTML('afterbegin', `
    
        <div class='div1'>
            <h1> Dear Human </h1>
            <p class='welcome'> Batman Petrovich welcomes you to his store </p>
            <img id='logo' src='https://w7.pngwing.com/pngs/494/499/png-transparent-batman-drawing-logo-batman-logo.png' alt=logo />
        </div>
    `)
}