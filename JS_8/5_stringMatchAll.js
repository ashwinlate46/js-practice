/* matchAll() ->
- The matchAll() method returns an iterator containing the results of matching a string against a string(or a regular expression).
*/

let text = "I love Cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
const result = Array.from(iterator);
console.log("Length of an Array: ", result.length,result);

/* Output ->
Length of an Array:  3 [
    [
      'Cats',
      index: 7,
      input: 'I love Cats. Cats are very easy to love. Cats are very popular.',
      groups: undefined
    ],
    [
      'Cats',
      index: 13,
      input: 'I love Cats. Cats are very easy to love. Cats are very popular.',
      groups: undefined
    ],
    [
      'Cats',
      index: 41,
      input: 'I love Cats. Cats are very easy to love. Cats are very popular.',
      groups: undefined
    ]
  ]
  */

  /* If the parameter is regular expression the global flag(g) must be set.
  Otherwise a TypeError is thrown.
  */
  const iterator1 = text.matchAll(/Cats/g);
  const result1 = Array.from(iterator1);
  console.log("Length of an Array: ", result1.length,result1);

  //If you want to search case insensitive the insensitive flag(i) must be set.
  
let text1 = "I love Cats. cats are also cute. Cats are very easy to love. cats are very popular."
const iterator2 = text1.matchAll(/Cat/gi);
const result2 = Array.from(iterator2);
console.log("Length of an Array: ", result2.length,result2);

/*Length of an Array:  4 [
    [
      'Cat',
      index: 7,
      input: 'I love Cats. cats are also cute. Cats are very easy to love. cats are very popular.',
      groups: undefined
    ],
    [
      'cat',
      index: 13,
      input: 'I love Cats. cats are also cute. Cats are very easy to love. cats are very popular.',
      groups: undefined
    ],
    [
      'Cat',
      index: 33,
      input: 'I love Cats. cats are also cute. Cats are very easy to love. cats are very popular.',
      groups: undefined
    ],
    [
      'cat',
      index: 61,
      input: 'I love Cats. cats are also cute. Cats are very easy to love. cats are very popular.',
      groups: undefined
    ]
  ]
  */