

export function openModal(htmlElement) {
    // modalWindow.style.display = 'flex';
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-wrapper">
        <div class="modal-box">
            <span class="close">x</span>
            <h1>Select product</h1>
            
        </div>
    </div>
    `)
    const modalBox = document.querySelector('.modal-box');
    modalBox.appendChild(htmlElement);
    const close = document.querySelector('.close');
    close.addEventListener('click', closeModal);
}

function closeModal() {
    // modalWindow.style.display = 'none';
    const modalWindow = document.querySelector('.modal-wrapper');
    modalWindow.remove();
    location.hash = `#products`
}
