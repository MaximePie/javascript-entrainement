const sentence = prompt("Entrez une phrase !");
const translatedPhrase = translateToMorse(sentence);
console.log(translatedPhrase);
document.write(`<p>${sentence}</p>`);
document.write(`<p>${translatedPhrase}</p>`);
document.getElementById("playButton").addEventListener("click", () => play(translatedPhrase));

/**
 * Joue la suite de séquences passée en paramètres
 * @param sequence, une chaîne de caractères sous la forme ".__._._."
 */
function play(sequence) {

  const short = new Audio("./short.mp3");
  const long = new Audio("./long.mp3");
  const silence = new Audio("./silence.mp3");
  const arrayedSequence = sequence.split("");
  let nextSymbolIndex = 0;

  short.addEventListener("ended", playNext);
  long.addEventListener("ended", playNext);
  silence.addEventListener("ended", playNext);

  playNext();

  function playNext() {
    const currentSymbol = arrayedSequence[nextSymbolIndex];
    if (currentSymbol === ".") {
      short.play();
    } else if (currentSymbol === "_") {
      long.play();
    }
    else if (currentSymbol === " ") {
      silence.play();
    }
    nextSymbolIndex++;
  }
}

/**
 * Cette fonction traduit la phrase reçue en paramètre en langage Morse.
 * @return string, la phrase traduite en morse au format "._.. .__."
 * @param initialSentence La phrase que l'on aimerait traduire au format "SOS"
 */
function translateToMorse(initialSentence) {
  const code = getTranslationTable();
  const disembodiedSentence = initialSentence.split("");
  let translatedSentence = "";

  disembodiedSentence.forEach(letter => {
    let morseCodeForThisLetter = "";
    morseCodeForThisLetter = code.find(encodedLetter => encodedLetter.character === letter.toUpperCase());
    if (morseCodeForThisLetter) {
      morseCodeForThisLetter.sequence.forEach(sound => translatedSentence += sound);
      // translatedSentence += morseCodeForThisLetter.sequence.map(sound => sound);
    }
    else {
      translatedSentence += " ";
    }
  });
  return translatedSentence;
}

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
