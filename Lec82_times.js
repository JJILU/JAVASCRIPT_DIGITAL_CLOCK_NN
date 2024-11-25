// dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times

// 1: getFullYear() - returns year
console.log('getFullYear: ', now.getFullYear());
// 2: getFullYear() - returns month (counts from 0 - jan, 1 - feb, 2 - Mar, ...)
console.log('getMonth: ', now.getMonth());

// 3: getFullYear() - returns Date 
console.log('getDate: ', now.getDate());

// 4: getFullYear() - returns Date (counts from 0 - sun, 1 - mon, 2 - tue, ...)
console.log('getDay: ', now.getDay());

// 5: getHours() - returns Hour
console.log('getHours: ', now.getHours());

// 6: getHours() - returns Minutes
console.log('getHours: ', now.getMinutes());

// 5: getHours() - returns Seconds
console.log('getSeconds: ', now.getSeconds());


// timestamps - represented in millisecods since the first of jan 1970

console.log('timestamp', now.getTime());

// date string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());



