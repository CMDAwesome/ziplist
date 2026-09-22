function zipList<A, B>(first: A[], second: B[]): (A | B)[] {
  const result: (A | B)[] = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i], second[i]);
  }
  return result;
}

function zipListTheFunctionalWay<A, B>(first: A[], second: B[]): (A | B)[] {
  return first.reduce<(A | B)[]>((result, item, index) => result.concat(item, second[index]), []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
