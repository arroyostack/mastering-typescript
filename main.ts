interface Product {
  readonly id: number,
  name: string,
  age?: number;
  applyDiscount( discount: number ): number;
}
// Unlike 'types',  interfaces can  inherit and extends.
// They allow this behaviour
interface Dog {
  type: string;
}
interface Dog {
  name: string;
}
// The interface Dog will add a new property name

// Dog Owner interface has the properties of Dog plus his  properties.
interface DogOwner extends Dog {
  owner: string;
}

const peter: DogOwner = {
  owner: "Peter",
  type: "Adult dog",
  name: "Puppy"
};