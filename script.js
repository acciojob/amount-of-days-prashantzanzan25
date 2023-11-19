//your JS code here. If required.
function daysOfAYear(year) {
    // Check if the year is a leap year
    // Leap years are divisible by 4, but not divisible by 100 unless they are divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}

// Examples
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
