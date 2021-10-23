// Ce script existe pour le bon déroulement de l'exercice, s'il vous plaît, ne pas toucher

// PAS TOUCHER
const notes = document.querySelectorAll(".Note");
notes.forEach(note => {
  const noteContent = note.querySelectorAll("p");
  addTrigger();
  hideNotes();

  function addTrigger() {
    const triggerElement = makeTrigger();
    const noteHeader = note.querySelector("h4");
    noteHeader.appendChild(triggerElement);
  }

  function hideNotes() {
    noteContent.forEach(content => {
      content.style.visibility = "hidden";
      content.style.position = "absolute";
    })
  }

  function showNotes() {
    noteContent.forEach(content => {
      content.style.visibility = "visible";
      content.style.position = "relative";
    })
  }

  function makeTrigger() {
    const trigger = document.createElement("span");
    trigger.innerText = " 👇";
    trigger.style.cursor = "pointer";
    trigger.style.color = "gray";
    trigger.style.fontWeight = "bold";
    trigger.addEventListener("click", () => {
      showNotes();
    })

    return trigger;
  }
});
