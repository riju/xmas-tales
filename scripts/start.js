
/*
 * start.js
 * This file contains the initializations of the Javascript Objects which the XMAS Tales web app needs to work.
 */


/* Initialize */
function init() {
    /* Add new objects to window */
    window.mBookViewController = new BookViewController();
    window.mChristmasTreeViewController = new ChristmasTreeViewController();
    window.mAmbientLightManager = new AmbientLightManager();
}

window.onload = init;
