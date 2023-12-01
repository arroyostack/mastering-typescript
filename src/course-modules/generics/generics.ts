// Generics
// Basic Example
const names: Array<string> = [];
const position: Array<number> = [];

// Another use of generics. IT tells Typescript what our element is.
const userInput = document.querySelector<HTMLInputElement>( 'card' );

// The following three functions serve the same purpose except they differ in the input type.

function identityNumber( item: number ): number {
    return item;
}
function identityString( item: string ): string {
    return item;
}
function identityBoolean( item: boolean ): boolean {
    return item;
}
// Here we can take a different approach using Typescript. It will achieve the same purpose without repeating code.
// & function identityTypeAgnosticOptimization<Type>(item: Type): Type
function identityTypeAgnosticOptimization<Type>( item: Type ): Type {
    return item;
}

// & function identityTypeAgnosticOptimization<number>(item: number): number
identityTypeAgnosticOptimization<number>( 4 );


function getRandomElement<Type>( elementsArray: Type[] ): Type {
    const radomIndex = Math.floor( Math.random() * elementsArray.length );
    return elementsArray[radomIndex];
};


// & Watch out when typescript infer type, it can get mixed: "function getRandomElement<string | number>(elementsArray: (string | number)[]): string | number"
getRandomElement( ['q', 'g', 56] );

// & In React.js use "," in arrow functions <T,>

// & Through generics we can also accept two types of unknown elements.
// & the following function and generic will infer that the return type is an intersection between 'T' and 'U'.
//* function merge<T, U>(object1: T, object2: U): T & U

function merge<T, U>( object1: T, object2: U ) {
    return {
        ...object1,
        ...object2
    };
}

const comboObject = merge( { name: "Sally" }, { city: "London" } );


// & Adding Types constrain
// & In the above function we have achieve to allow two types of objects.
// & We still don't know about the types of those input elements.
// & We can further constrain the generic (T, U) to allow only certain types with the 'extends' operator.

function mergeOptimized<T extends object, U extends object>( object1: T, object2: U ) {
    return {
        ...object1,
        ...object2
    };
}

// & Generic can extend interfaces!.

