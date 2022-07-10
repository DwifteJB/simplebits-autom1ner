/*
        GNU GENERAL PUBLIC LICENSE V2.0
        DO NOT REMOVE ANY OF THESE LINES.

		SCRIPT WRITTEN BY DWIFTE (https://github.com/DwifteJB)
		PASTE INTO THE CONSOLE ON ANY
		MINING BLOCKS.

		I AM NOT RESPONSIBLE IF YOU
		GET YOUR ACCOUNT BANNED.
*/


/* CONFIG */
var loopTimeStart = 1; // IN MINUTES
/* CONFIG END */

function loop() {
    setTimeout(function() {
        var dominanceButton = document.getElementsByClassName("disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none flex items-center font-bold justify-center py-1 px-3 text-gray-100 hover:text-gray-1 00 dark:text-gray-200 dark:hover:text-gray-300 bg-indigo-500 hover:bg-indigo-600 duration-200")[0];
        var energyButton = document.getElementsByClassName("disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none py-1 text-center font-bold uppercase tracking-wide text-gray-600 hover:text-green-500 dark:hover:text-green-400 bg-gray-200 dark:bg-gray-300 dark:hover:bg-green-200 dark:hover:bg-opacity-30 hover:bg-gray-100 duration-200")[0];
        var dominanceCount = 0;
        var energyCount = 0;
        console.log(`autom1ner:\n\nHash: ${document.getElementsByClassName("is-red2-tag")[0].firstChild.firstChild.innerHTML}\n`);
        // get amount of energy: document.getElementsByClassName("text-xs text-teal-500")[0].innerHTML.trim().split(" ")[0]
        // get amount of dominance: document.getElementsByClassName("text-xs text-indigo-400")[0].innerHTML.trim().split(" ")[0]
        //document.getElementsByClassName("disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none py-1 text-center font-bold uppercase tracking-wide text-gray-600 hover:text-green-500 dark:hover:text-green-400 bg-gray-200 dark:bg-gray-300 dark:hover:bg-green-200 dark:hover:bg-opacity-30 hover:bg-gray-100 duration-200")[0].click();
        let energy = document.getElementsByClassName("text-xs text-teal-500")[0].innerHTML.trim().split(" ")[0];
        let dominance = document.getElementsByClassName("text-xs text-indigo-400")[0].innerHTML.trim().split(" ")[0];
        console.log(`Dominance Loop started.`);
        var domianceLoop = setInterval(() => { 
            if (dominance == 0) {
                return clearInterval(domianceLoop);
            }
            dominanceButton.click(); 
            dominanceCount++;
            console.log(`dominanceCount: ${dominanceCount}`);
            if (dominanceCount == dominance) {
                console.log("Clearing Domiance Loop")
                clearInterval(domianceLoop);
                energyLoop
            }		
        }, 2000);
        console.log(`Energy Loop started.`);
        var energyLoop = setInterval(() => { 
            if (dominanceCount == dominance) {
                if (energy == 0) {
                    return clearInterval(energyLoop);
                }
                energyButton.click(); 
                energyCount++;
                console.log(`energyCount: ${energyCount}`);
                if (energyCount == energy) {
                    console.log("Clearing Energy Loop")
                    clearInterval(energyLoop);
                }
            } else {
                console.log("Waiting for dominance loop..");
            }
        }, 2000);
        console.log(`autom1ner: just used ${energy} energy and ${dominance} domiance`);
	    loop();
    }, loopTimeStart*60*1000);
}
loop();
