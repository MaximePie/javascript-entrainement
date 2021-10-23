/**
 * TODO - Créer une application qui interroge l'utilisateur pour lui demander de saisir une phrase
 * TODO - Après que l'utilisateur a saisi sa phrase, l'application la convertit en langage Morse et affiche le résultat
 * // Exemple : "sos"=> "... ___ ..."
 * TODO - Ajouter un écouteur d'événement sur le bouton play qui va déclencher la lecture.
 *
 * Ressources :
 * https://stackoverflow.com/questions/9419263/how-to-play-audio
 * https://stackoverflow.com/questions/48377057/how-to-detect-end-of-audio-file-when-created-dynamically
 */


const code = getTranslationTable();


/**
 * Cette fonction renvoie la traduction de chaque caractères
 */
function getTranslationTable() {
  return [
    {
      character: "A",
      sequence: [".", "_"]
    },
    {
      character: "B",
      sequence: ["_", ".", ".", "."]
    },
    {
      character: "C",
      sequence: ["_", ".", "_", "."]
    },
    {
      character: "D",
      sequence: ["_", ".", "."]
    },
    {
      character: "E",
      sequence: ["."],
    },
    {
      character: "F",
      sequence: [".", ".", "_", "."],
    },
    {
      character: "G",
      sequence: ["_", "_", "."],
    },
    {
      character: "H",
      sequence: [".", ".", ".", "."],
    },
    {
      character: "I",
      sequence: [".", "."],
    },
    {
      character: "J",
      sequence: [".", "_", "_", "_"],
    },
    {
      character: "K",
      sequence: ["_", ".", "_"],
    },
    {
      character: "L",
      sequence: [".", "_", ".", "."],
    },
    {
      character: "M",
      sequence: ["_", "_"],
    },
    {
      character: "N",
      sequence: ["_", "."],
    },
    {
      character: "O",
      sequence: ["_", "_", "_"],
    },
    {
      character: "P",
      sequence: [".", "_", "_", "."],
    },
    {
      character: "Q",
      sequence: ["_", "_", ".", "_"],
    },
    {
      character: "R",
      sequence: [".", "_", "."],
    },
    {
      character: "S",
      sequence: [".", ".", "."],
    },
    {
      character: "T",
      sequence: ["_"],
    },
    {
      character: "U",
      sequence: [".", ".", "_"],
    },
    {
      character: "V",
      sequence: [".", ".", ".", "_"],
    },
    {
      character: "W",
      sequence: [".", "_", "_"],
    },
    {
      character: "X",
      sequence: ["_", ".", ".", "_"],
    },
    {
      character: "Y",
      sequence: ["_", ".", "_", "_"],
    },
    {
      character: "Z",
      sequence: ["_", "_", ".", "."],
    },
  ];
}
