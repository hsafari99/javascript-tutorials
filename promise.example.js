// Promise example
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve(randomNum);
      } else {
        reject(new Error('Random number is greater than 0.5'));
      }
    }, 1000);
  });
  
  // Promise methods
  
  // 1. then()
  promise.then((result) => {
    console.log('Resolved:', result);
  }).catch((error) => {
    console.log('Rejected:', error.message);
  }).finally(() => {
    console.log('Promise has been settled');
  });
  
  // 2. catch()
  promise.catch((error) => {
    console.log('Caught error:', error.message);
  });
  
  // 3. finally()
  promise.finally(() => {
    console.log('Promise has been settled');
  });
  
  // 4. Promise.all()
  const promise1 = Promise.resolve('Promise 1');
  const promise2 = Promise.resolve('Promise 2');
  const promise3 = Promise.reject(new Error('Promise 3 failed'));
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('Promise.all resolved:', results);
    })
    .catch((error) => {
      console.log('Promise.all rejected:', error.message);
    });
  
  // 5. Promise.race()
  const racePromise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Race Promise 1'));
  const racePromise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Race Promise 2'));
  
  Promise.race([racePromise1, racePromise2])
    .then((result) => {
      console.log('Promise.race resolved:', result);
    })
    .catch((error) => {
      console.log('Promise.race rejected:', error.message);
    });
  