function scrollSectionByNumber(event) {
    //console.log("La tecla presionada es " , event.key);

    let pressedKey = Number(event.key);
    let sectionIndex = pressedKey - 1;

    if (isNaN(pressedKey)) return;

    let sections = document.querySelectorAll("section");
    let selectedSection = sections[sectionIndex];

    //console.log("La seccion seleccionada es " , selectedSection);

    if(selectedSection) selectedSection.scrollIntoView();
}

export default scrollSectionByNumber;