/*
* Pour l'exercice 2, menu
* */
window.addEventListener("load", function (event) {

    const plats = new Map([
        [
            "France",
            {
                plat: "Baguette",
                avecViande: false,
            },
        ],
        [
            "Espagne",
            {
                plat: "Paella",
                avecViande: true,
            },
        ],
        [
            "Suède",
            {
                plat: "Smörgås",
                avecViande: true,
            },
        ],
        [
            "Autriche",
            {
                plat: "Escalope viennoise",
                avecViande: true,
            },
        ],
        [
            "Belgique",
            {
                plat: "La Poularde de Bruxelles",
                avecViande: true,
            },
        ],
        [
            "Chypre",
            {
                plat: "Mezze",
                avecViande: true,
            },
        ],
        [
            "Danemark",
            {
                plat: "Smorrebroff",
                avecViande: true,
            },
        ],
        [
            "Estonie",
            {
                plat: "Choucroute",
                avecViande: false,
            },
        ],
        [
            "Finlande",
            {
                plat: "Feuilletés de poisson",
                avecViande: false,
            },
        ],

    ]);

    class ListePlats {
        constructor(plats) {
            this.plats = plats;

        }
        retirerPlat(key) {
            console.log(key);
            this.plats.delete(key);
            return this.plats.delete();
        }
        afficherPlat() {

            // On crée un élément table, et on va l'enrichir dans la boucle for
            // Puis à la fin de la boucle for, on l'ajoute
            const table = document.createElement("table");

            for (let [key, value] of menu.plats) {
                //console.log(key);
                const tableRow = document.createElement('tr');

                let dataCell = document.createElement('td');

                // Ajout du pays
                dataCell.innerText = key;
                tableRow.appendChild(dataCell);

                // Ajout du plat
                dataCell = document.createElement("td");
                dataCell.innerText = value.plat;
                tableRow.appendChild(dataCell);

                // Ajout du status sur la viande
                dataCell = document.createElement("td");
                dataCell.innerText = value.avecViande ? "Avec viande" : "Sans viande";
                tableRow.appendChild(dataCell);


                // Ajout du bouton effacer

                    // On crée tout d'abord le bouton avec tout son mic mac
                const deleteButton = document.createElement("button");
                deleteButton.innerText = "Effacer";
                deleteButton.id = key;
                deleteButton.addEventListener("click", () => this.retirerPlat(key));

                    // On crée ensuite la cellule, et on lui injecte le bouton
                dataCell = document.createElement("td");
                dataCell.appendChild(deleteButton);
                    // Puis on injecte le tout dans la ligne de tableau
                tableRow.appendChild(dataCell);

                table.appendChild(tableRow);
            }

            document.getElementById("listePlats").appendChild(table);
        }

    }
    const menu = new ListePlats(plats);
    menu.afficherPlat();


    /*document.getElementByTagName('td').addEventListener('click', function () {
        retirerPlat();
    })*/





    /*const liste = document.getElementById('listePlats');
    liste.innerHTML = "";
    let viande;
    let key = plats.keys();
    for (const value of plats.values()) {
        if (value.avecViande) {
            viande = 'Contient de la viande'
        } else {
            viande = 'Ne contient pas de la viande'
        }
        liste.innerHTML = key.next().value + ` ` + value.plat + ` ` + viande + `<br>` + liste.innerHTML;
    }*/

});
