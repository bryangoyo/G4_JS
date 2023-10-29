function scrollSectionByPreviousNext(event) {
    //console.log("La tecla presionada es " , event.key);

    let keyPressed = event.key.toUpperCase();

    if(!["P","N"].includes(keyPressed)) return;

    let allSections = document.querySelectorAll("section");

    let allSectionsAndHeader = [document.getElementById("header_container")];

    allSectionsAndHeader.push(...allSections);

    //console.log(allSectionsAndHeader);

    let offsets = [...allSectionsAndHeader].map((currentSection) => currentSection.offsetTop);

    //console.log(offsets);

    //console.log("Posicion Y " , window.scrollY);
    //console.log("Array offsets " , offsets);

    if (keyPressed === "N") {
        for (let iterator = 0; iterator < offsets.length; iterator++) {
            if (offsets[iterator] > (Math.ceil(window.scrollY)+30)){
                allSectionsAndHeader[iterator].scrollIntoView();
                break;
            }
        }

    } else {
        for (let iterator = offsets.length; iterator > 0; iterator--) {
            if (offsets[iterator] < (Math.floor(window.scrollY)-30)){
                allSectionsAndHeader[iterator].scrollIntoView();
                break;
            }
            allSectionsAndHeader[0].scrollIntoView();
        }
    }
}

export default scrollSectionByPreviousNext;