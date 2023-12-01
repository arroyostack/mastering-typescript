// Even though typescript infer the variable bellow as an'HTMLElement', it does not know that    this is actually a button element. This is where 'Type Assertion' comes to help.
// Examples:
const userInput = document.getElementById( 'todo-input' ) as HTMLInputElement;
const button = document.getElementById( 'btn' ) as HTMLButtonElement;
const form = document.getElementById( 'todo-form' ) as HTMLFormElement;
// Alternative way of type . Less common.
// const input = document.getElementById( 'todo-input' );
// ( <HTMLInputElement>input ).value;

// Logic
// If the callback function from an  listener event comes within outside the function, we'll need to type the parameter in the outer function. In this case event is a 'SubmitEvent' type.
const handleSubmit = ( event: SubmitEvent ) => {
    event.preventDefault();
    console.log( 'Submitted' );
};
form.addEventListener( 'submit', handleSubmit );
