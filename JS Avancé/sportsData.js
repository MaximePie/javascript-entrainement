const coopGames = [
  {
    name: "Football",
    numberOfPlayers: 22,
    description: "Originaire de la Chine ancienne, le football s'est popularisé en Angleterre",
    isCoop: true, // Si isCoop = true, alors c'est un jeu en équipe. Sinon, c'est un jeu solo
    playablePlaces: ["Intérieur", "Extérieur"], // C'est un tableau qui contient les endroits praticables
  },
  {
    name: "Hockey sur gazon",
    numberOfPlayers: 22,
    description: "Le gazon est synthétique, et mouillé, pour accélérer les mouvements du palais.",
    isCoop: true, // Si isCoop = true, alors c'est un jeu en équipe. Sinon, c'est un jeu solo
    playablePlaces: ["Extérieur"], // C'est un tableau qui contient les endroits praticables
  },
]

const soloGames = [
  {
    name: "Athlétisme",
    description: "Le plus ancien champion date de -776",
    numberOfPlayers: 1,
    isCoop: false,
    playablePlaces: ["Extérieur"],
  },
  {
    name: "Boxe",
    description: "La boxe a disparu avec la chute de l'empire Romain, et est ré-apparue au XVIIème siècle",
    numberOfPlayers: 2,
    isCoop: false,
    playablePlaces: ["Intérieur"],
  },
  {
    name: "Escrime",
    description: "Il existe 157 fédérations nationales consacrées à la pratique de l'escrime",
    numberOfPlayers: 2,
    isCoop: false,
    playablePlaces: ["Intérieur"],
  },
]
