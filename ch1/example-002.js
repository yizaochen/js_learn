let book;

book = {
  topic: "JavaScript",
  edition: 7,
};

console.log(book);
console.log(book.topic);
book.author = "Flanagan";
book.contents = {};
console.log(book);
console.log(book.contents);

let primes = [2, 3, 5, 7];
console.log(primes);
console.log(primes.length);

let empty = [];
console.log(empty);
console.log(empty.length);

let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];
console.log(points);

let data = {
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};
console.log(data);
