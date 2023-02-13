document.getElementById('withdrow-btn').addEventListener('click',function(){
    const WithdrowField = document.getElementById('Withdrow-field');
    const Withdrowstr = WithdrowField.value;
    const withdrawAmount =parseFloat(Withdrowstr)

    WithdrowField.value = '';
    if(isNaN(withdrawAmount)){
        return;
    }

    const withdradTotalElement =document.getElementById('withdrad-total');
    const withdradStr = withdradTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(withdradStr)


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalString)

    if(withdrawAmount > previousBalanceAmount){
        return;
    }

    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdradTotalElement.innerText = newWithdrawAmount;

    const newbalance = previousBalanceAmount - withdrawAmount;
    balanceTotal.innerText = newbalance;
    
})