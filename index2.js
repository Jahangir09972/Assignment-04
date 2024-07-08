//problem number-01
function calculateMoney(ticketSold) {
    // If the input is negative, it will return an error message
    if (ticketSold < 0) {
        return "Error: Ticket sold number cannot be negative."; }

    // Income from ticket sales
    const income = ticketSold * 120;

    // Cost calculation
    const guardSalary = 500;
    const staffLunchCost = 8 * 50;
    const expense = guardSalary + staffLunchCost;

    // Remaining money
    const remainingBalance = income - expense;

    return remainingBalance;
}

console.log(calculateMoney(10));



//problem number-02

function checkName(name) {
// If the name contains numbers then "Invalid Name" will be returned
if (/\d/.test(name)) {
    return "Invalid Name";}

    // Last letter of name
    const lastChar = name.charAt(name.length - 1).toLowerCase();
    
    // Correct letters
    const validChars = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    
    // Returns "Good Name" if the last character is among the correct characters, otherwise "Bad Name"
    if (validChars.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

console.log(checkName("Niloy"));



//problem number-03
function deleteInvalids(array) {
    // Accepts only number type values
    return array.filter(value => typeof value === 'number' && !isNaN(value));
}

const inputArray = [1, NaN];
console.log(deleteInvalids(inputArray));



//problem number-04

function password(userInfo) {
    // Checking properties
    if (!userInfo.name || !userInfo.birthYear || !userInfo.siteName) {
        return "invalid";
    }
    
    // Check whether birthYear is 4 digits
    if (userInfo.birthYear.toString().length !== 4) {
        return "invalid";
    }
    
    // Extract name, year of birth, and site name
    const name = userInfo.name;
    const birthYear = userInfo.birthYear;
    const siteName = userInfo.siteName;
    
    // Generate password
    const password = `${siteName}#${name}@${birthYear}`;
    
    return password;
}

const userInfo = {
    name: "kibria",
    birthYear: 1992,
    siteName: "Bdjobs"
};

const generatedPassword = password(userInfo);
console.log(generatedPassword);


// const invalidUserInfo = {
//     name: "Kibria",
//     birthYear: 1992,
//     siteName: "Bdjobs"
// };

// const invalidGeneratedPassword = password(invalidUserInfo);
// console.log(invalidGeneratedPassword);




//problem number-05

function monthlySavings(payments, livingCost) {
    // Checking input validation
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let totalIncome = 0;

    // Calculating gross income and taxes
    for (let payment of payments) {
        if (payment >= 3000) {
            totalIncome += payment * 0.80; // 20% tax deduction
        } else {
            totalIncome += payment;
        }
    }

    // Calculate the savings
    const savings = totalIncome - livingCost;

    // Returning savings
    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}

// Example input
const payments = [900, 2700, 3400];
const livingCost = 100;

const result = monthlySavings(payments, livingCost);
console.log(result);

// // Testing invalid input
// const invalidPayments = "not an array";
// const invalidLivingCost = "not a number";

// const invalidResult = monthlySavings(invalidPayments, invalidLivingCost);
// console.log(invalidResult);




