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
