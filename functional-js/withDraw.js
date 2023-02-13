document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithDraw = getInputFieldValue('Withdrow-field');
    if(isNaN(newWithDraw)){
        alert('Provide a Valid Amount')
        return;
    }
    
    const previousDepositeAmount = getElementValueByID('withdrad-total');

    const previousBalance = getElementValueByID('balance-total');
    if(newWithDraw> previousBalance){
        alert('Provide a Valid Amount')
        return;
    }

    const totalWithdraw = previousDepositeAmount + newWithDraw;
    setNewValueByID('withdrad-total' , totalWithdraw)

    const newBalance = previousBalance - newWithDraw;
    setNewValueByID('balance-total' , newBalance)
})