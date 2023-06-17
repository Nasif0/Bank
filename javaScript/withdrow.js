document.getElementById('btn-withdrow').addEventListener('click', function(){

var withdrowAmuntOfInput = document.getElementById('withdrow-input');
var withdrowinputString = withdrowAmuntOfInput.value;
var withdrowInput = parseFloat(withdrowinputString);


var withdrawTotalElement = document.getElementById('withdrow-total');
var withdrawTotalString = withdrawTotalElement.innerText;
var withdrowTotal = parseFloat(withdrawTotalString);

var newWithdrowTotal = withdrowInput + withdrowTotal;

withdrawTotalElement.innerText = newWithdrowTotal;


var BalanceTotalElement = document.getElementById('balance-total');
var balanceTotalString = BalanceTotalElement.innerText;
var balanceTotal = parseFloat(balanceTotalString);
 var newBalance = balanceTotal - newWithdrowTotal;

 BalanceTotalElement.innerText = newBalance;


withdrowAmuntOfInput.value = '';
})