// const before = new Date('March 1 2024 10:30:30');
// const now = new Date();
const before = new Date('February 1 2019 10:30:30');
const now = new Date('November 25 2024 16:47:30');

// timestamps
// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log('diff', diff);
// 60 sec in 1 min
const mins = Math.round(diff / 1000 / 60);
console.log('mins', mins);
// 60 min in 1 hour
const hours = Math.round(mins / 60);
console.log('hours', hours);
// 60 min in 1 hour
const days = Math.round(hours / 24);
console.log('days', days);

console.log(`the blog was written ${days} days ago`);

// converting timstamps into objects
const timestamp = 1675938474990;
// converts timestamp to date object
console.log(new Date(timestamp));
