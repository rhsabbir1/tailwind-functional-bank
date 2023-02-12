document.getElementById('depsite-btn').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite-field');
    const depositestring = depositeField.value;
    const depositeAmount = parseFloat(depositestring)

    depositeField.value = '';

    if(isNaN(depositeAmount)){
        return;
    }
    
    const depositeTotal =document.getElementById('deposite-total');
    const depositeTotalstring = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(depositeTotalstring)

    const newDepositeAmount = previousDepositeAmount + depositeAmount;
    depositeTotal.innerText = newDepositeAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalString);


    balanceTotal.innerText = previousBalanceAmount + depositeAmount;

})