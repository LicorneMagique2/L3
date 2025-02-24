/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/no-unreadable-iife */
/* eslint-disable no-unused-vars */

/*
    LIFWEB 2024 -- CC2 TP notÃ©
    SUJET A - 09:45

    ComplÃ©ter les exercices demandÃ©s en 60 minutes (hors tiers-temps).
    DÃ©poser dans la cellule correspondante de Tomuss le fichier JS complÃ©tÃ© et UNIQUEMENT ce fichier.

    Les rendus par mail ne seront PAS pris en compte, sauf si vous Ãªtes tiers-temps, auquel cas vous devez envoyer votre fichier Ã  romuald.thion@univ-lyon1.fr.
    Un fichier qui ne se charge pas correctement ne sera PAS pris en compte.

    Tous les documents et l'accÃ¨s Ã  internet sont autorisÃ©s : votre code, les corrections, MDN, stack-overflow, etc.
    Vous pouvez utiliser votre ordinateur personnel ou les ordinateurs de la salle de TP.

    Toute communication entre humains est INTERDITE.
    Les IAs/LLMs (ChatGPT, GitHub Copilot, etc.) sont INTERDITS.
    Si vous utilisez Copilot ou un outil similaire dans votre IDE, DÃ‰SACTIVEZ-LE.
*/

// On donne la "base de donnÃ©es" suivante

const database = [
    { url: "https://cdn2.thecatapi.com/images/51t.jpg", width: 1500, height: 1500 },
    { url: "https://cdn2.thecatapi.com/images/ba4.jpg", width: 500, height: 333 },
    { url: "https://cdn2.thecatapi.com/images/c6c.jpg", width: 500, height: 328 },
    { url: "https://cdn2.thecatapi.com/images/d7u.jpg", width: 632, height: 960 },
    { url: "https://cdn2.thecatapi.com/images/dsa.jpg", width: 640, height: 418 },
    { url: "https://cdn2.thecatapi.com/images/MTUwMDU4MA.jpg", width: 500, height: 333 },
    { url: "https://cdn2.thecatapi.com/images/wLFWzKgkf.jpg", width: 819, height: 1024 },
  ];
  
  // Exercice 1
  //
  // ComplÃ©ter la fonction suivante qui renvoie les urls en majuscule
  // des images dont la surface est supÃ©rieure Ã  500_000 pixels.
  //
  // Pour avoir la totalitÃ© des points, l'Ã©crire de la faÃ§on la plus
  // concise et fonctionnelle possible.
  //
  // La moitiÃ© des points est attribuÃ©e pour une solution correcte mais
  // qui utilise des variables mutables ou des boucles.
  
  const imagesLargerThan500k = (data) => {
  data.map(lien => lien.width*lien.height >500_000? lien.url  : "");
  data.map(image => image.url.toUpperCase());}
  
  console.log(imagesLargerThan500k(database)); ////////////////////////////////
  
  // on attend
  // [
  //   'HTTPS://CDN2.THECATAPI.COM/IMAGES/51T.JPG',
  //   'HTTPS://CDN2.THECATAPI.COM/IMAGES/D7U.JPG',
  //   'HTTPS://CDN2.THECATAPI.COM/IMAGES/WLFWZKGKF.JPG'
  // ]
  
  // Exercice 2
  //
  // ComplÃ©ter la fonction suivante pour qu'elle gÃ©nÃ¨re des Ã©lements <li>
  // chacune avec un Ã©lÃ©ment <a> ayant comme texte et comme href l'url de l'image.
  //
  // La fonction doit retourner un DocumentFragment qui sera ajoutÃ© au <ul> dans le DOM dans l'exercice 4.
  /*
  const etats = database.map(state => database.state);
  const tableau = [...etats];
const frag = document.createDocumentFragment();
*/


  function generateLis(data) {
    const $ul = document.createElement("ul");
    for(const dat of data){
        const $li = document.createElement("li"); 
        const $a = document.createElement("a"); 
        $a.href = dat.url;
        $a.textContent = dat.url;

        $li.append($a);
        $ul.append($li);
    }
    return $ul;
  }
  
  // pour tester
  const testDiv = document.createElement("div");
  testDiv.append(generateLis(database));
  console.log(testDiv.innerHTML); ////////////////////////
  // doit afficher quelque chose comme suit, modulo indentation
  
  // <ul id="cats">
  // <li>
  //   <a href="https://cdn2.thecatapi.com/images/51t.jpg"
  //     >https://cdn2.thecatapi.com/images/51t.jpg</a
  //   >
  // </li>
  
  //   ...
  
  // <li>
  //   <a href="https://cdn2.thecatapi.com/images/wLFWzKgkf.jpg"
  //     >https://cdn2.thecatapi.com/images/wLFWzKgkf.jpg</a
  //   >
  // </li>
  // </ul>
  
  // Exercice 3
  //
  // Le contenu de la base de donnÃ©es est disponible dans le fichier suivant :
  // http://lifweb.pages.univ-lyon1.fr/CC/CC2-a-xah7ahMigai8ohRe/lifweb-2024-cc2-sujet-a.json
  //
  // Une base de page web est disponible dans le fichier suivant :
  // http://lifweb.pages.univ-lyon1.fr/CC/CC2-a-xah7ahMigai8ohRe/lifweb-2024-cc2-sujet-a.html
  //
  // Ajouter la balise <script> au <head> de la page pour inclure le JS
  // dans le fichier HTML.
  //
  // Ajouter ci-aprÃ¨s le code nÃ©cessaire pour qu'aussitÃ´t que le DOM est chargÃ©,
  //
  // 1. On tÃ©lÃ©charge le fichier JSON.
  // 2. On le parse en tant que JSON.
  // 3. On remplit <ul id="cats"> avec les liens du fichier JSON.
  // 4. On ajoute un Ã©couteur d'Ã©vÃ©nement sur chaque lien pour que quand on clique dessus,
  //    l'image correspondante s'affiche dans <img id="selected-cat"> SANS redirection
  //
  // Utiliser un style async/await
  //
  // Pour la moitiÃ© des points, utiliser la constante `database` pour une version statique.
  // Vous pourrez avoir besoin d'une IIFE async.
  
  const uri =
    "http://lifweb.pages.univ-lyon1.fr/CC/CC2-a-xah7ahMigai8ohRe/lifweb-2024-cc2-sujet-a.json";
const $paragraphe = document.querySelector("ul#cats");

async function fetchimage()
{
    try{
        const reponse = await fetch(uri);
        if (!reponse.ok)
            throw new Error("erreur fetch");
        const repjson = await reponse.json();
        return repjson.map(imcat => ({id : imcat.id, url : imcat.url}));
    }
    catch(error)
    {
        console.log("erreur recuperation");
        throw error;
    }
}


function aff(cats){
    for(const cat of cats){
        const $image = document.createElement("img");
        $image.id = cat.id;
        $image.url = cat.url;
        $paragraphe.append($image);
    }
}



(async function(){
    try{
        const cats = await fetchimage();
        aff(data);
    }
    catch(error){
        console.log("erreur");
        throw error;
    }
})


function clickimage(cats){
    for(const cat of cats){
        const $lien = document.querySelector(`${cats.$li}`);
        $lien.addEventListener("click", (event) =>{
            event.preventDefault();
            $paragraphe.append($lien);
        })
    }
        
    };

  
  /* TODO #3 */
  
  // Exercice 4
  //
  // - Donner des noms significatifs aux variables
  // - Expliquer le code en commentaires (idÃ©alement, JSDoc)
  // - Donner un exemple d'utilisation de la fonction
  // - Donner de quoi vÃ©rifier le nombre d'appels au paramÃ¨tre f avec un exemple
  
  /* TODO #4 */
  const ex4a = (y) => (x) => (z) => x <= 0 ? z : y(ex4a(y)(x - 1)(z));


  //la fonction prend en parametre une fonction, qui prend en parametre une valeur x et une valuer z
  //si x <= 0, alors on retourne la valeur de z, sinon on calcule la valeur retournée par la fonction y
  // qui prend en parametre la fonction ex4a. C'est donc une fonction recursive qui va calculer la valeur retouré par y x fois