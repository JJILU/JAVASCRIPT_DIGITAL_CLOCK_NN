// resources: https://date-fns.org/

const now = new Date();

console.log(dateFns.isToday(now));
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "YYYY"));
// console.log(dateFns.format(now, ' '));

// important - e.g date user signed up, blog post was created
// comparing dates using dateFns
const before = new Date("February 1 2024 12:00:00");

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
