let cart = []; //Skapar cart Array
let totalPrice = 0; //Sätter totala priset till 0 i början

function addItemtoCart(itemName, itemPrice) { //button funktionen

    const findExistingItem = cart.find(item => item.name === itemName); //Letar efter i cart Array om det finns samma item namn

    if (findExistingItem) { //if funktion för när samma item namn hittas ska det gå upp på quantity nummer istället för att skapa mer li elements

        findExistingItem.quantity += 1; 
    } else {
        cart.push({name: itemName, price: itemPrice, quantity: 1});
    }

    totalPrice += itemPrice; //Plusar ihop allt itemPrice tillsammans

    updateCartDisplayer(); //Skickar signal till updateCartDisplayer funktionen attden ska köra
}

function removeFromCart(itemName, itemPrice) { //Ta bort item funktion

    const findExistingItem = cart.find(item => item.name === itemName); //Letar efter i cart Array om det finns samma item namn

    if (findExistingItem) { //Letar efter i cart Array och tar bort 1 quantity av item, om item quantity = 0 går item helt bort
        findExistingItem.quantity -= 1;

        if (findExistingItem.quantity === 0) {

            cart = cart.filter(item => item.name !== itemName);
        }

        totalPrice -= itemPrice; //Tar bort item pris
        if (totalPrice < 0) totalPrice = 0; //Stoppar total pris till 0 så att numret inte går negativt
    }

    updateCartDisplayer(); //Skickar signal till updateCartDisplayer funktionen attden ska köra
}

function updateCartDisplayer() { //kundvagns funktionen, här visas item namn och dess quantity samt item priset
    const cartItemNameContainer = document.getElementById('cart-items'); 
    const totalItemPrice = document.getElementById('total-price'); //hämtar in id från html filen

    cartItemNameContainer.innerHTML = ''; //Rensar allt i kundvagnens display varje refresh

    cart.forEach(item => { //Lägger till item till kundvagnen
        const listitem = document.createElement('li');
        listitem.textContent = `x${item.quantity} ${item.name} ${item.price.toFixed(2)}kr`;

        const removeButton = document.createElement('button'); //skapar ta bort button
        removeButton.textContent = 'X';
        removeButton.style.marginLeft = '5px';
        removeButton.style.padding = '2px 4px';
        removeButton.style.backgroundColor = '#f80606';
        removeButton.style.color = '#FFFFFF';
        removeButton.style.border = '#000000 solid 2px';
        removeButton.onclick = () => removeFromCart(item.name, item.price); //sätter in removeFromCart funktionen

        listitem.appendChild(removeButton); //lägger till removeButton till listitem
        cartItemNameContainer.appendChild(listitem); //lägger till listitem till cartItemNameContainer, kundvagnen
    });

    totalItemPrice.textContent = totalPrice.toFixed(2); //uppdaterar total priset på display
}