// Storing data in localStorage
localStorage.setItem('name', 'John Doe');
localStorage.setItem('age', 25);

// Retrieving data from localStorage
const name = localStorage.getItem('name');
console.log(name); // Output: John Doe

// Updating an existing value in localStorage
localStorage.setItem('age', 26);

// Removing a key-value pair from localStorage
localStorage.removeItem('name');

// Clearing localStorage
localStorage.clear();

// Checking the number of items in localStorage
const itemCount = localStorage.length;
console.log(itemCount); // Output: 0

// Iterating over localStorage keys
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
