interface Colorful {
    color: string;
}
// Classes are able to implement interfaces.
class Bike implements Colorful {
    constructor( public color: string ) { }
}

class Jacket implements Colorful {
    constructor( public color: string, public brand: string ) { };
    printColor() {
        console.log( `${this.color}` );
    }
}

const bike1 = new Bike( "green" );
const jacket1 = new Jacket( "blue", "Table" );

console.log( jacket1.printColor() );

