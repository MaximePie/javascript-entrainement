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

