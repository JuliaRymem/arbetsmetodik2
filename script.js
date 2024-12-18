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

// Hämta element från HTML
const kontaktLink = document.getElementById("kontaktLink");
const omOssLink = document.getElementById("omOssLink");
const hittaHitLink = document.getElementById("hittaHitLink");

const kontaktPopup = document.getElementById("kontaktPopup");
const omOssPopup = document.getElementById("omOssPopup");
const closeKontakt = document.getElementById("closeKontakt");
const closeOmOss = document.getElementById("closeOmOss");

// Öppna kontakt-popup
kontaktLink.addEventListener("click", (e) => {
  e.preventDefault();
  kontaktPopup.style.display = "block";
});

// Öppna Om oss-popup
omOssLink.addEventListener("click", (e) => {
  e.preventDefault();
  omOssPopup.style.display = "block";
});

// Stäng kontakt-popup
closeKontakt.addEventListener("click", () => {
  kontaktPopup.style.display = "none";
});

// Stäng Om oss-popup
closeOmOss.addEventListener("click", () => {
  omOssPopup.style.display = "none";
});

// Stäng pop-up om användaren klickar utanför popup-fönstret
window.addEventListener("click", (e) => {
  if (e.target === kontaktPopup) {
    kontaktPopup.style.display = "none";
  }
  if (e.target === omOssPopup) {
    omOssPopup.style.display = "none";
  }
});

// Funktion för knapp för att stänga Gör-så-här-rutan
const instructionsPopup = document.getElementById('instructions');
const instructionsClose = document.getElementById('instructions-close');

instructionsClose.addEventListener('click', function() {
    instructionsPopup.style.display = 'none';
});

// Funktion för "HJÄLP"-knapp i menyraden som öppnar Gör-så-här-rutan
const instruktionLink = document.getElementById("instructionLink");

 instruktionLink.addEventListener('click', function() {
     instructionsPopup.style.display = 'flex';
 });

 // Funktion för att hantera stjärnornas interaktivitet
const stars = document.querySelectorAll('.feedback-stars .star');
stars.forEach(star => {
  star.addEventListener('click', () => {
    let rating = star.getAttribute('data-value');
    highlightStars(rating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

//Feedback Pop-up 
function feedbackPopUp() {
    const feedbackDisplay = document.getElementById('feedback-container');

    feedbackDisplay.style.display = 'inline-block';
}

// Funktion för att skicka feedback
function submitFeedback() {
  // Hämta feedback-text och stjärnbetyg
  const feedback = document.querySelector('.feedback-textarea').value;
  const rating = document.querySelectorAll('.feedback-stars .star.active').length;

  // Kontrollera att minst en stjärna är vald
  if (rating === 0) {
    alert("Vänligen ge ett betyg innan du skickar!");
    return;
  }

  // Visa bekräftelse till användaren
  alert(`Tack för din feedback!\nBetyg: ${rating} stjärnor\nKommentar: ${feedback}`);

  // Dölj feedback-container
  const feedbackContainer = document.querySelector('.feedback-container');
  feedbackContainer.style.display = 'none'; // Dölj rutan
}