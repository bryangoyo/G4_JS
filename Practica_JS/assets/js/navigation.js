import scrollSectionByNumber from "./scrollSectionByNumber.js";
import scrollSectionByPreviousNext from "./scrollSectionByPreviousNext.js";
import stopEventPropagation from "./stopEventPropagation.js";
import hideNavigationHelp from "./hideNavigationHelp.js";
import showNavigationHelp from "./showNavigationHelp.js";
import showHelpKey from "./showHelpKey.js";

document.addEventListener("keypress" , scrollSectionByNumber);
document.addEventListener("keypress" , scrollSectionByPreviousNext);
document.addEventListener("keypress" , showHelpKey);

let pageForms= document.querySelector("form");

//Ramiro Teran: Code to ignore keypress when using the form
pageForms.addEventListener("keypress" , stopEventPropagation);

//Show navigation help window once after loading
setTimeout(showNavigationHelp, 500);

// Close navigation help window after 4 secs
setTimeout(hideNavigationHelp, 4000);