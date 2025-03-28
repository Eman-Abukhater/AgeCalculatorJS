let userInput = document.getElementById('date');
let result = document.getElementById('result');

// Set the max date to today's date to avoid future date selections
userInput.max = new Date().toISOString().split("T")[0];

// Function to calculate age
function calculateAge() {
    let birthDate = new Date(userInput.value);

    // Get the day, month, and year of the birth date (adjusting months to be 1-based)
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1; // Convert from 0-based to 1-based
    let birthYear = birthDate.getFullYear();

    // Get the current date (adjusting months to be 1-based)
    let today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1; // Convert from 0-based to 1-based
    let todayYear = today.getFullYear();

    // Calculate the difference in years
    let years = todayYear - birthYear;

    // Calculate the difference in months
    let months = todayMonth - birthMonth;

    // Calculate the difference in days
    let days = todayDay - birthDay;

    // Adjust for negative days (if the current day is before the birth day)
    if (days < 0) {
        months--; // Borrow a month
        days += getDaysInMonth(todayYear, todayMonth - 1); // Add days from the previous month
    }

    // Adjust for negative months (if the current month is before the birth month)
    if (months < 0) {
        months += 12;
        years--; // Subtract a year since the birthday hasn't occurred yet
    }

    // Display the result
    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}

// Helper function to get the number of days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
// console.log(getDaysInMonth(2025,7));