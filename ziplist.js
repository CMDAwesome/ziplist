"use strict";
function zipList(first, second) {
    const result = [];
    for (let i = 0; i < first.length; i++) {
        result.push(first[i], second[i]);
    }
    return result;
}
function zipListTheFunctionalWay(first, second) {
    return first.reduce((result, item, index) => result.concat(item, second[index]), []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
