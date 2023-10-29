import hideNavigationHelp from "./hideNavigationHelp.js";

function constructElement(tag, options, children) {
    let {classNames: classNames, ...atributs} = options; 

    const el = document.createElement(tag);
    for (const child of children) {
        el.append(child);
    }
    for (const className of classNames || []) {
        el.classList.add(className);
    }
    for (const atributName in atributs) {
      el.setAttribute(atributName, atributs[atributName]);
    }
    return el;
}

function createNavigationHelp(){
    console.log("Creation of help window");

    let titlesListItem = [...document.querySelectorAll('section[data-key]')].map(section => {
        //Only execute if data-key is greater than 0
        if(section.dataset.key > 0){
            const key = section.dataset.key;
            const title = section.querySelector('h2').textContent
            let listItemElems = constructElement('li', {classNames : ['list-group-item']}, [constructElement('kbd', {}, [key]), ' ', title]);
            return listItemElems;
        }
    });
    //console.log("Lista",titlesListItem);
    //Add Navigation for Previous and Next
    titlesListItem.push(constructElement('li', {classNames : ['list-group-item']}, [constructElement('kbd', {}, ["P"]), ' ', "Previous Section"]));
    titlesListItem.push(constructElement('li', {classNames : ['list-group-item']}, [constructElement('kbd', {}, ["N"]), ' ', "Next Section"]));
    
    let navHelpModal = constructElement('div', {classNames: ['modal', 'show'], id: 'navHelp'}, [ 
        constructElement('div', {classNames: ['modal-dialog']}, [
            constructElement('div', {classNames: ['modal-content']}, [
                constructElement('div', {classNames: ['modal-header']}, [
                    constructElement('h5', {classNames: ['modal-title']}, ['Navigation Help']),
                    constructElement('button', {classNames: ['btn-close'], type: 'button', onclick: "getElementById('navHelp').remove();"}, [])
                ]),
                constructElement('div', {classNames: ['modal-body']}, [constructElement('p', {classNames: ['ms-2', 'fs-6']}, ['Keyboard navigation.']),
                constructElement('ul', {classNames : ['list-group']}, titlesListItem)
                ])
            ])
        ])
    ]);

    //console.log(navHelpModal);
    
    return navHelpModal;
}

function showNavigationHelp(){
    let navigationHelp = createNavigationHelp();
    document.body.appendChild(navigationHelp);
}

export default showNavigationHelp;