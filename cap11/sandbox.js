const newSection = () => {
    console.log('----------------------------------------------------------------------------');
};

// We create a Date object calling the constructor
// It'll create a date based on the moment the object is created

const agora = new Date();

console.log(agora);
console.log(typeof agora);

// years, months, times

console.log(agora.getFullYear()); // 2024...
console.log(agora.getMonth()); // Month represented in a array of months 0 based (jan=0, feb=1 and so forth)
console.log(agora.getDate()); // Month day
console.log(agora.getDay()); // Week day

console.log(agora.getTime()); // Timestamp: Number of milliseconds since 12 a.m on the 1st of January 1970s
console.log(agora.getHours()); // Hours in the moment
console.log(agora.getMinutes()); // Minutes in the moment
console.log(agora.getSeconds()); // Seconds in the moment

console.log(agora.toDateString()); // First part of the Date toString
console.log(agora.toTimeString()); // Second part of the Date toString
console.log(agora.toLocaleString()); // Formated Date and Formated Time

newSection();

// The usebility of timestamps:

// We can compare two dates using timestamps:

const before = new Date('December 9 2002 10:32:43');

const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);

const hours = Math.round(mins / 60);

const days = Math.round(hours / 24);

const years = Math.round(days / 365);

console.log(mins, hours, days, years);

newSection();

