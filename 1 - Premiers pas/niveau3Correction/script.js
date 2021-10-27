// Nous utilisons 'titre' car dans index.html, notre h1 a pour id 'titre'.
const monTitre = document.getElementById('titre');

monTitre.style.color = 'blue';
monTitre.style.background = 'green';
// font-size (css) => fontSize (js)


const monBouton = document.getElementById("changeMeButton");
console.log(monBouton);
monBouton.innerHTML = "Ce qu'on veut";
// monBouton.innerHTML = "<a href='https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_style'>Haha</a>";

