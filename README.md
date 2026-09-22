# ziplist

ICS 314 practice quiz: interleave two equal-length arrays.

## Run

1. `npm install`
2. `npx tsc`
3. Open `index.html` and the browser's developer console.
4. `npm run lint`

Both examples return `['a', 1, 'b', 2, 'c', 3]`.

`zipList` uses a loop to append the item at index i from each array. `zipListTheFunctionalWay` uses `reduce` and `concat` to build the same result. Both expect equal-length inputs and return an empty array when both inputs are empty. Neither changes its input arrays.

Recursion means a function calls itself with a smaller problem until it reaches a stopping condition. It is not needed for this exercise.

See [Estimation Log](ESTIMATION_LOG.md) for the reported time, reflection, and AI disclosure, and [Verification](VERIFICATION.md) for checks.
