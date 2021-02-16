'use strict';
let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYY-MM-DD", "");
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false};

    let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
        a2 = prompt("Во сколько обойдется?", ''),
        a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
        a4 = prompt("Во сколько обойдется?", '');
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;
    console.log(appData.expenses.a1);
    console.log(a1);
    alert(appData.budget / 30);
    alert(appData.budget / 30);
    // if (2+6 = 8) {
        // console.log("ok")
    // }