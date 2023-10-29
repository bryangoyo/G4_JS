import showNavigationHelp from "./showNavigationHelp.js";
import hideNavigationHelp from "./hideNavigationHelp.js";

function showHelpKey(event) {
    //console.log("La tecla presionada es " , event.key);

    let keyPressed = event.key.toUpperCase();

    if(keyPressed==="H") {
        showNavigationHelp();
        
        // Close navigation help window after 4 secs
        setTimeout(hideNavigationHelp, 4000);
    }

}

export default showHelpKey;