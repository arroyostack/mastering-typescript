// Tuples are fixed in their lenght and in their order.

// Tuples can represent a type
type httpRequestResponse = [string, number];

const successfullResponse = ["ok", 200];

const serverResponses: httpRequestResponse[] = [["not Found", 404], ["ok", 200]];

// A downfall of tuples is that typescript will not throw an error if you try to push an element to a tuple of fixed length.

successfullResponse.push( 90 ); // This should not be possible.