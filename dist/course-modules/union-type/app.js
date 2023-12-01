"use strict";
(() => {
    // Union types
    const weather = "sunny";
    const user = "";
    // Instead of using 'any' type, union can aid.
    const headOrTails = [1, 2, 5, true, "Hello Mars!"];
    //  Not common but can be done
    const zero = 0;
    // Exercises
    // **********************************************
    // ******************* PART 1 *******************
    // **********************************************
    // Create a variable called highScore that can be a number OR a boolean
    let highScore = 1;
    highScore = true;
    // **********************************************
    // ******************* PART 2 *******************
    // **********************************************
    // create an array called stuff
    // it can be an array of numbers OR an array of strings
    // it cannot be an array of numbers and strings (mixed together)
    const stuff = [1, 2, 3, "Go!"];
})();
