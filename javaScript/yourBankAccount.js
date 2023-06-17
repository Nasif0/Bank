document.getElementById('deposit-button').addEventListener('click',function(){
    

var depositInputField = document.getElementById('deposit-input');
var depositInputString = depositInputField.value;
var depositInput = parseFloat(depositInputString);

var depositAmountfield = document.getElementById('deposit-amount');
var depositAmountString = depositAmountfield.innerText;
var depositAmount = parseFloat(depositAmountString);
var newDepositAmount = depositAmount + depositInput;
depositAmountfield.innerText = newDepositAmount;

var totalBalance = document.getElementById('balance-total');
var previousBalanceString = totalBalance.innerText;
previousBalanceTotal = parseFloat(previousBalanceString);

var newBalanceTotal = previousBalanceTotal + newDepositAmount;
totalBalance.innerText = newBalanceTotal;

depositInputField.value = '';




})