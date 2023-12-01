"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.game = "Donkey Kong.";
        this.lives = 9;
    }
    secretMethod() {
        console.log("Secret Method");
    }
    showSecret() {
        // & Accessing private properties.
        console.log(this.secretMethod(), this.lives);
    }
    // & Getter.
    get fullName() {
        return `${this.first + " " + this.last}`;
    }
}
// & Since the property score is set to 'protected' in parent class, the property is also available at any child class from 'Player'.
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    resetScore() {
        this.score = 999999;
    }
}
