function hideNavigationHelp(){
    //console.log("Close navigation help");
    let helpWindow = document.getElementsByClassName("modal");
    if(helpWindow.length > 0) {
        helpWindow[0].remove();
    }
}

export default hideNavigationHelp;