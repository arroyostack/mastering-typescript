// Two syntax.
const names: string[] = [];
const dates: Array<number> = [];

// Array of arrays.
const board: string[][] = [
    ["x", "0", "x"],
    ["0", "x", "0"],
    ["0", "x", "0"]
];

//  Not common but con be done.
const secretMessage: number[][][] = [
    [
        [1, 4, 6, 3, 8],
        [3, 5, 3, 2, 4, 2]
    ],
    [
        [3, 54, 34, 34],
        [4, 5, 6, 34, 5]
    ]
];

// Exercise
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [[]];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string,
    price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = ( productArray: Product[] ) => {
    let total = 0;
    for ( let product of productArray ) {
        total += product.price;
    }
    return total;
};


