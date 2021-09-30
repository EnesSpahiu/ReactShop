const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved'), 2000);
});

//   Without await
function foo() {
  const result = myPromise;
  console.log('foo return');
  return result;
}

// calling foo

console.log('starting foo');
foo().then((result) => {
  console.log('foo promise', result);
});

// async await
async function awaitfoo() {
  const result = await myPromise; // Wait here until the promise settles
  console.log('awaitfoo return');
  return result;
}

// calling awaitfoo

console.log('starting await foo');

awaitfoo().then((result) => {
  console.log('awaitfoo promise', result);
});
