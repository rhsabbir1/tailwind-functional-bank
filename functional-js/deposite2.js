

document.getElementById('depsite-btn').addEventListener('click',function(){
    
    const newDepositeAmount = getInputFieldValue('deposite-field');
    if(isNaN(newDepositeAmount)){
        alert('Provide a Valid Amount')
        return;
    }

    const previousDepositeAmount = getElementValueByID("deposite-total");
    const totalDepositeAmount = previousDepositeAmount + newDepositeAmount;

    setNewValueByID('deposite-total', totalDepositeAmount);

    const totalBalance = getElementValueByID('balance-total')
    const newBlanceTotal = totalBalance + newDepositeAmount;
    setNewValueByID('balance-total' , newBlanceTotal)

})