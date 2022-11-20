let instructor = {
  firstName: "Firoz",
  inInstractor: true,
  fovoriteNumbers: [1, 2, 3, 4],
};
console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
/*
[ 'firstName', 'inInstractor', 'fovoriteNumbers' ]
[ 'Firoz', true, [ 1, 2, 3, 4 ] ]
[
  [ 'firstName', 'Firoz' ],
  [ 'inInstractor', true ],
  [ 'fovoriteNumbers', [ 1, 2, 3, 4 ] ]
]
*/
