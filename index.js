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

function deleteInvalids(array) {
    // Accepts only number type values
    return array.filter(value => typeof value === 'number' && !isNaN(value));
}


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