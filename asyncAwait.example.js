// Async function example
async function fetchData() {
    try {
      // Simulating an asynchronous operation
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
  
      console.log('Data:', data);
  
      // Throwing an error
      if (data.error) {
        throw new Error('Data retrieval error');
      }
  
      // Returning a value
      return data;
    } catch (error) {
      console.log('Error:', error.message);
      throw error;
    }
  }
  
  // Calling the async function
  async function main() {
    try {
      // Await for the promise to resolve
      const result = await fetchData();
  
      // Continue execution after the promise resolves
      console.log('Result:', result);
  
      // Using Promise.allSettled
      const promises = [
        Promise.resolve('Promise 1'),
        Promise.reject(new Error('Promise 2 failed')),
        Promise.resolve('Promise 3')
      ];
  
      const settledPromises = await Promise.allSettled(promises);
      console.log('Settled promises:', settledPromises);
  
      // Using Promise.any
      const anyPromises = [
        Promise.reject(new Error('Promise 4 failed')),
        Promise.resolve('Promise 5'),
        Promise.reject(new Error('Promise 6 failed'))
      ];
  
      const anyResult = await Promise.any(anyPromises);
      console.log('Resolved promise from Promise.any:', anyResult);
    } catch (error) {
      console.log('Main error:', error.message);
    }
  }
  
  // Invoking the main function
  main();
  