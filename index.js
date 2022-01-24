let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

//for(let i = 0; i < weeklyExpenseQuestions.length; i++) {
//    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//weeklyExpenses = weeklyExpenses + answer
//}

//for(let i = 0; i < monthlyExpenseQuestions.length; i++) {
//    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//monthlyExpenses = monthlyExpenses + answer
//}

//for(let i = 0; i < annualExpenseQuestions.length; i++) {
//    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//annualExpenses = annualExpenses + answer
//}

// iterating through the opposite way

//for(let i = weeklyExpenseQuestions.length - 1; i >= 0; i--) {
//    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//weeklyExpenses = weeklyExpenses + answer
//}

//using while instead of for
let i = 0
while (i < weeklyExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
    i++;
}