# Journal de bord 

## Jour 1

### Exercices accomplis
- Créer une calculatrice (100%)
- Créer un système d'héritage dans une tribu d'Orcs (50%)

### Ce qu'il faut retenir

L'utilisation de `import` et de `export` transforment 
le fichier en module. 
Pour les charger depuis l'HTML, il faut donc préciser 
qu'il s'agit bien d'un module 
```html
<script type="module" src="./script.js"></script>
```
---

Lorsque l'on utilise `addEventListener`, l'HTML envoie 
l'événement produit en paramètre à la fonction par défaut.

Si nous voulons utiliser `this` dans la fonction, il 
faut bien veiller à le forcer à ne pas envoyer de paramètre.

:warning: Problème
```js
class Calculatrice {
    constructor() {
        this.firstQuantity = 5;
        addButton.addEventListener("click", this.add);
    }
   
    add() {
      console.log(this.firstQuantity);
    }
}
```

:heavy_check_mark: Pas de problème
```js
class Calculatrice {
    constructor() {
        this.firstQuantity = 5;
        addButton.addEventListener("click", () => this.add());
    }
   
    add() {
      console.log(this.firstQuantity);
    }
}
```

---

Pour déterminer la composition d'une classe, il faut répondre à deux questions : 

- Qu'est-ce qu'elle peut faire ? Cela correspond à ses `méthodes`.

**Exemple**: Un chat peut miauler, manger, dormir, griffer, ce sont des méthodes. 

- Qu'est-ce qu'elle a et qui la caractérise ? Cela correspond à ses `attributs`. 

**Exemple**: Un hamster de l'Amazonie a des poils très longs, des moustaches, il vit la nuit, et il pèse 50kg.


## Jour 2 

### Exercices réalisés
- Créer un système d'héritage dans une tribu d'Orcs (100%)
- Créer une minuterie (100%)
- Créer un système d'affichage de menu (50%)

### Ce qu'il faut retenir

L'héritage de classe et un système puissant qui permet d'économiser  eaucoup  de lignes de code. Il permet d'éviter de réécrire le code d'une classe en faisant hériter des  des propriétés d'une classe parent

```js
class Creature {
  constructor(name) {
    this.name
  }
  
  speak(words) {
    console.log(words);
  }
} 
```

Ici,  la classe créature pose d'un nom et peut parler.


```js
class Orc extends Creature {
  constructor(name) {
    super(name)
  }
  
  shout(words) {
    console.log(words.toUpperCase());  
  }
} 
```

Ici, l'Orc dispose d'un nom,  il peut crier,  et il peut parler,  sans pour autant que nous ayons besoin de redéfinir ses méthodes,  car il hérite de créature grâce à `extends`.


---

`setTimeout` permet de déclencher une fonction quand le délai précisé est écoulé.  à gauche des paramètres se trouve la fonction, et à droite des paramètres se trouve le délai.

`setTimeout(() => alert("haha"), 2000)`

*Le script va alerter "haha" dans 2 secondes. Le délai est noté en ms.*

`setInterval` permet de déclencher un morceau de code plusieurs fois de suite fréquence définie.

`setInterval(() => console.log("Il est " + new Date), 1000)`

*le script va afficher l'heure toutes les secondes*

Il est également possible de communiquer une fonction à exécuter en ne passant que son nom

`setInterval(direBonjour, 1000)`


## Jour 3 

### Exercices réalisés 

- Créer un système d'affichage de menu (100%)
- Présenter npm et http-server
- Créer et modifier une liste de sports (50%)
- Créer une interface d'affichage de photos de chats (25%)

### Ce qu'il faut retenir 

#### NPM

| `npm init`                          | Crée un package.json, à lancer au début de chaque projet                                                                                                                                                                                                   |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `npm install http-server axios`     | Installe les librairies HTTP server, et axios.  Ces librairies se retrouvent dans la section Dependencies de  notre `package.json`.                                                                                                                        |
| `npm install` ou `npm i`            | Installe toutes les dépendances présentes dans le `package.json`  et génère un `package-lock.json`, et un `node_modules`                                                                                                                                   |
| `npm -v`                            | Affiche la version courante de NPM qui est installée.  Si NPM n'est pas installé, on peut l'installer en  allant sur [ce lien](https://nodejs.org/en/). (Recommended version)                                                                              |
| `npm start`                         | Démarre le script `start` présent dans votre `package.json`. Si vous n'avez pas de script, ce n'est pas grave.  [Comment créer un script npm ?](https://docs.npmjs.com/cli/v7/using-npm/scripts)                                                           |
| Qu'est-ce que node_modules?         | Un gros dossier avec toutes les dépendances. Comme ce n'est pas nous qui les codons, pas besoin de les versionner, ni de les partager.  Pour générer le dossier : `npm install`.                                                                           |
| Qu'est-ce que `package.json` ?      | Un tout petit fichier qui contient la liste des dépendances et les scripts de notre application. C'est ça qu'on doit passer à nos collègues si on travaille ensemble, et non le dossier `node_modules`.  Attention, ce fichier ne doit pas être supprimé ! |
| Qu'est-ce que `package-lock.json` ? | Une attestation d'installation. Il contient des informations faciles à lire par npm pour éviter de réinstaller ce qui est déjà installé.  Il peut être supprimé en toute sécurité                                                                          |


#### Cors et mimetypes 

- Le navigateur considère tous les modules comme des fichiers potentiellement dangereux. Donc il les bloque.

- Pour résoudre l'erreur, il faut passer par un serveur (Wamp, Mamp, ou http-server)


#### Manipulation de l'interface (DOM)

- Pour injecter un élément HTML dans la page avec JS, une bonne pratique est de procéder comme ceci : 
    1. On crée notre élément `const monPlat = document.createElement('p')`
    2. On lui ajoute sa tambouille : `monPlat.id = "plat1"; monPlat.addEventListener("click", () => {}); monPlat.innerText = "Grosse andouille";`
    3. On cible l'élément parent, et on lui injecte le plat : `document.getElementById("listePlats").appendChild(p)`


- L'utilisation de la structure `Map` permet de manipuler facilement des données sous la forme de paires
`clé-valeur`, ce qui augmente grandement les performances sous certaines conditions : 
Il faut connaître la clé en question pour accéder à la valeur. 
