( () => {

    // Union types
    const weather: "sunny" | "cloudy" | "rainy" = "sunny";

    // Anion types of Types
    type Name = string;
    type Alias = string;

    const user: Name | Alias = "";

    // Instead of using 'any' type, union can aid.
    const headOrTails: ( string | number | boolean )[] = [1, 2, 5, true, "Hello Mars!"];

    //  Not common but can be done
    const zero: 0 = 0;


    // Exercises
    // **********************************************
    // ******************* PART 1 *******************
    // **********************************************
    // Create a variable called highScore that can be a number OR a boolean
    let highScore: ( number | boolean ) = 1;
    highScore = true;

    // **********************************************
    // ******************* PART 2 *******************
    // **********************************************
    // create an array called stuff
    // it can be an array of numbers OR an array of strings
    // it cannot be an array of numbers and strings (mixed together)
    const stuff: ( number | string )[] = [1, 2, 3, "Go!"];

    // **********************************************
    // ******************* PART 3 *******************
    // **********************************************
    // Create a literal type called SkillLevel
    // There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
    type SkillLevel = "Beginner" | "Intermediate" | "Advance" | "Expert";

    // **********************************************
    // ******************* PART 4 *******************
    // **********************************************
    // Create a type called SkiSchoolStudent
    // name must be a string
    // age must be a number
    // sport must be "ski" or "snowboard"
    // level must be a value from the SkillLevel type (from above)
    type SkiSchoolStudent = {
        name: string;
        age: number;
        sport: "ski" | "snowboard";
        level: SkillLevel;
    };

} )()

