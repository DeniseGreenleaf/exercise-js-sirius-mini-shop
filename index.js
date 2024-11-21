
// 1. Byt namn på första hoodien från Ash till Potato.
const nameElement = document.querySelector(" .art-1 h3");

nameElement.textContent = "Potato";

console.log(nameElement.textContent);

// 2.  Byt namn på Home till Start.

const homeLink = document.querySelector("a");

// Ändra textinnehållet till "Start"
homeLink.textContent = "Start";

// Kontrollera resultatet (valfritt)
console.log(homeLink.textContent);

// 3. Byt namn på Contact till Mail Us.

const links = document.querySelectorAll("a"); 

for (let link of links) {
    if (link.textContent === "Contact") {
        link.textContent = "Mail us"; 
        break;
    }
}


console.log(links);

//4. Byt ut informationen om Sinus Hoodie - Fire.

const article = document.querySelector(".art-2");

const descriptionElement = article.querySelector("p");
descriptionElement.textContent = "A fresh new hoodie with vibrant fiery-red colors and premium comfort.";

// 5. Byt bakgrundsfärg och text på en knapp.

const button = document.querySelector(" .art-3 button"); 

button.style.backgroundColor = "#4CAF50"; 
button.textContent = "Add to cart";


//6. Byt bakgrundsfärg på någon av produkterna.

const figure = document.querySelector(" .art-2");

figure.style.backgroundColor = "#4CAF50";

//7. Byt ut adressen på sidan. 


//8. Byt färg på samtliga <p>.

const paragraphs = document.querySelectorAll("p"); 

paragraphs.forEach(paragraph => { 
    paragraph.style.color = "red"; 
});

// 9. Ändra text på samtliga knappar till add to cart.

const buttons = document.querySelectorAll("button"); 

buttons.forEach(button => {
    button.textContent = "Add to cart"; 
});

// 10. Lägg till classen active på menyalternativet home.

const homeLink2 = document.querySelector('nav a:first-child');

homeLink2.classList.add("active");

// 11. Ta bort classen logo på logotypen.

// const logoImage = document.querySelector(" .logo"); 

// logoImage.classList.remove("logo"); 

// 12. Lägg till ett nytt menyalternativ.

const linksContainer = document.querySelector(" .links"); 

const newLink = document.createElement("a"); 

newLink.href = "#"; 
newLink.textContent = "Blog"; 

linksContainer.appendChild(newLink);

// 13. Lägg till en ny produkt med följande info. img	hoodie-forrest.png h2	Sinus Hoodie h3	Forrest p lorem..

const mainContainer = document.querySelector('main');


mainContainer.insertAdjacentHTML('beforeend', `
    <article class="art-4">
        <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forrest</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>buy</button>
    </article>
`);

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";

const logo = document.querySelector('.logo'); 

logo.addEventListener('click', function() {
    console.log('found you!');
});


// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

