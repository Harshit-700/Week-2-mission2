var totalSalary = 0;
var totalExpense =0;
var  expenses = [] ; 

var list = document.getElementById("list");
var setSalaryBtn = document.getElementById("set_salary_btn");
var addExpenseBtn = document.getElementById("add_expense_btn");
var ctx = document.getElementById("myChart");
var chart = new Chart(ctx, {
type: "pie",
data: {
labels: ["Expenses","Savings"],
datasets: [{
data: [0, 0],
backgroundColor: [
"rgb(236, 76, 62)",  
"rgb(75, 140, 244)"  
]
}]
}
});

function saveData() {
localStorage.setItem("salary", totalSalary) ;
localStorage.setItem("expenses", JSON.stringify(expenses));
}
window.onload = function () {
var savedSalary = localStorage.getItem("salary");
var savedExpenses = localStorage.getItem("expenses");


if (savedSalary) {
    totalSalary = parseInt(savedSalary);
}
if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
    expenses.forEach(function (item) {
        totalExpense += item.amount;
        addToUI(item.name, item.amount) ;
    });
}
updateUI();
};

setSalaryBtn.addEventListener("click", function () {  

var salaryInput = parseInt(document.getElementById("salary").value) ;


if (isNaN(salaryInput)){
    alert("Enter valid salary");
    return;
}

totalSalary =salaryInput;
saveData();
updateUI();

});

addExpenseBtn.addEventListener("click", function () {
var name = document.getElementById("expense_name").value;
var amount = parseInt(document.getElementById("amount").value);

if (name === "" || isNaN(amount)) {
    alert(" Required to fill all fields");
    return;
}


if (totalExpense + amount > totalSalary) {
    alert("Don't have enough balance! ");
    return;
}

totalExpense += amount ;


expenses.push({
    name: name,
    amount: amount
});
addToUI(name, amount);
saveData();

document.getElementById("expense_name").value = "";
document.getElementById("amount").value = "";
updateUI();
});


function addToUI(name, amount) {
var li = document.createElement("li");
li.innerText = name + " - ₹" + amount;

var delBtn = document.createElement("button");
delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

delBtn.onclick = function () {
    totalExpense -= amount;
    li.remove();
  
    expenses = expenses.filter(function (item) {
        return !(item.name === name && item.amount === amount);
    });

    saveData();
    updateUI();
};
li.appendChild(delBtn);
list.appendChild(li);

}
function updateUI() {
document.getElementById("card1").innerHTML =
"₹" + totalSalary + " <br>Total Salary";


document.getElementById("card2").innerHTML =
    "₹" + totalExpense + " <br>Total Expense";

document.getElementById("card3").innerHTML =
    "₹" + (totalSalary - totalExpense) + " <br>Remaining Balance";
updateChart();
}
function updateChart() {
var remaining = totalSalary - totalExpense;
chart.data.datasets[0].data = [totalExpense, remaining];
chart.update();
}
