class Player {
    // & Typescript needs to know types of properties declared in the constructor.
    // & Readonly is exclusive from typescript and wont let make changes of value.
    // & Public is a exclusive to typescript and properties are set to public by default.
    // & Public helps communication to other developers stating that the property should be public.
    // & Private indicates that the property can only be used within the class and not through its instances.
    first: string;
    last: string;
    readonly game: string;
    protected score: number;
    private lives: number;
    constructor( first: string, last: string ) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.game = "Donkey Kong.";
        this.lives = 9;
    }

    private secretMethod() {
        console.log( "Secret Method" );
    }

    showSecret() {
        // & Accessing private properties.
        console.log( this.secretMethod(), this.lives );
    }

    // & Getter.
    get fullName(): string {
        return `${this.first + " " + this.last}`;
    }

}

// & Since the property score is set to 'protected' in parent class, the property is also available at any child class from 'Player'.
class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    resetScore() {
        this.score = 999999;
    }
}