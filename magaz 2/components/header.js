export const header = (menu) => {
    const menuDOM = document.createElement('menu');
    document.body.appendChild(menuDOM);
    menu.map((item) => {
        const listItem = item.element; //DOM element
        // console.dir(item)
        listItem.addEventListener('click', () => {
            location.hash = '#' + item.name.toLowerCase();
        });
        listItem.innerText = item.name;
        menuDOM.appendChild(listItem);
    })
}

// { поля для item 
//     name: 'Main',
//     element: document.createElement('li'),
//     action: main,
// },