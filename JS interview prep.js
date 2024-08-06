// AllowOnce
/*
function allowOnce(func, context) {
  let ran = false;
  return function (...args) {
    if (!ran) {
      ran = true;
      return func.call(context || this, ...args);
    }
    return null;
  };
}

const someFun = allowOnce((x) => {
  return x;
});

console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
console.log(someFun([312, 2]));
*/

// Memoize
/*
function memoize(func, context) {
  let memo = {};
  return function (...args) {
    let argKey = JSON.stringify(args);
    if (memo[argKey] === undefined) {
      memo[argKey] = func.call(context || this, ...args);
    }
    return memo[argKey];
  };
}

const expensiveFun = memoize((a, b) => {
  for (let i = 1; i < 100000000; i++) {}
  console.log("The expensive function ran!!!");
  return a * b;
});

console.time("First");
console.log(expensiveFun(3, 4));
console.timeEnd("First");
console.time("Second");
console.log(expensiveFun(3, 4));
console.timeEnd("Second");
console.time("Third");
console.log(expensiveFun(3, 4));
console.timeEnd("Third");
*/
