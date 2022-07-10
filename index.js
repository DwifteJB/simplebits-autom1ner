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
var verbose = true;
/* CONFIG END */

function loop() {
    setTimeout(function() {
        var dominanceButton = document.getElementsByClassName("disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none flex items-center font-bold justify-center py-1 px-3 text-gray-100 hover:text-gray-1 00 dark:text-gray-200 dark:hover:text-gray-300 bg-indigo-500 hover:bg-indigo-600 duration-200");
        var energyButton = document.getElementsByClassName("disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none py-1 text-center font-bold uppercase tracking-wide text-gray-600 hover:text-green-500 dark:hover:text-green-400 bg-gray-200 dark:bg-gray-300 dark:hover:bg-green-200 dark:hover:bg-opacity-30 hover:bg-gray-100 duration-200");
        var dominanceCount = 0;
        var energyCount = 0;
        var dominanceFinish = false;
        console.log(`autom1ner:\n\nHash: ${document.getElementsByClassName("is-red2-tag")[0].firstChild.firstChild.innerHTML}\n`);
        // get amount of energy: document.getElementsByClassName("text-xs text-teal-500")[0].innerHTML.trim().split(" ")[0]
        // get amount of dominance: document.getElementsByClassName("text-xs text-indigo-400")[0].innerHTML.trim().split(" ")[0]
        //document.getElementsByClassName("disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none py-1 text-center font-bold uppercase tracking-wide text-gray-600 hover:text-green-500 dark:hover:text-green-400 bg-gray-200 dark:bg-gray-300 dark:hover:bg-green-200 dark:hover:bg-opacity-30 hover:bg-gray-100 duration-200")[0].click();
        let energy = document.getElementsByClassName("text-xs text-teal-500")[0].innerHTML.trim().split(" ")[0];
        let dominance = document.getElementsByClassName("text-xs text-indigo-400")[0].innerHTML.trim().split(" ")[0];
        (verbose == true) ? console.log(`Dominance Loop started.`) : null;
        var dominanceLoop = setInterval(() => { 
            if (dominance == 0) {
                dominanceFinish = true;
                return clearInterval(dominanceLoop);
            }
            // switch case seems a bit complex for this system, might add in next update
            if (dominance-100 >= 0) {
                dominanceButton[4].click();
                dominanceCount += 100;
                (verbose == true) ? console.log(`Dominance clicked 100 button.`) : null;
            } else if (dominance-20 >= 0) {
                dominanceButton[3].click();
                dominanceCount += 20;
                (verbose == true) ? console.log(`Dominance clicked 20 button.`) : null;
            } else if (dominance-20 >= 0) {
                dominanceButton[2].click();
                dominanceCount += 10;
                (verbose == true) ? console.log(`Dominance clicked 10 button.`) : null;
            } else if (dominance-5 >= 0) {
                dominanceButton[1].click();
                dominanceCount += 5;
                (verbose == true) ? console.log(`Dominance clicked 5 button.`) : null;
            } else if (dominance-1 >= 0) {
                dominanceButton[0].click();
                dominanceCount += 1;
                (verbose == true) ? console.log(`Dominance clicked 1 button.`) : null;
            } 
            (verbose == true) ? console.log(`dominanceCount: ${dominanceCount}`) : null;
            if (dominanceCount >= dominance) {
                (verbose == true) ? console.log("Clearing dominance Loop") : null;
                dominanceFinish = true;
                clearInterval(dominanceLoop);
            }		
        }, 4000);
        var energyLoop = setInterval(() => { 
            if (dominanceFinish == true) {
                (verbose == true) ? console.log(`Energy loop started.`) : null;
                if (energy == 0) {
                    return clearInterval(energyLoop);
                }
                if (energy-100 >= 0) {
                    energyButton[4].click();
                    energyCount += 100;
                    (verbose == true) ? console.log(`Energy clicked 100 button.`) : null;
                } else if (energy-20 >= 0) {
                    energyButton[3].click();
                    energyCount += 20;
                    (verbose == true) ? console.log(`Energy clicked 20 button.`) : null;
                } else if (energy-20 >= 0) {
                    energyButton[2].click();
                    energyCount += 10;
                    (verbose == true) ? console.log(`Energy clicked 10 button.`) : null;
                } else if (energy-5 >= 0) {
                    energyButton[1].click();
                    energyCount += 5;
                    (verbose == true) ? console.log(`Energy clicked 5 button.`) : null;
                } else if (energy-1 >= 0) {
                    energyButton[0].click();
                    energyCount += 1;
                    (verbose == true) ? console.log(`Energy clicked 1 button.`) : null;
                } 
                (verbose == true) ? console.log(`energyCount: ${energyCount}`) : null;
                if (energyCount >= energy) {
                    (verbose == true) ? console.log(`Clearing energy Loop`) : null;
                    clearInterval(energyLoop);
                }
            } else {
                (verbose == true) ? console.log(`Waiting for dominance loop...`) : null;
            }
        }, 4000);
        console.log(`autom1ner: just used ${energy} energy and ${dominance} dominance`);
	    loop();
    }, loopTimeStart*60*1000);
}
loop();
