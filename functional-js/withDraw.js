document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithDraw = getInputFieldValue('Withdrow-field');
    if(isNaN(newWithDraw)){
        return;
    }
    
    const previousDepositeAmount = getElementValueByID('withdrad-total');

    const totalWithdraw = previousDepositeAmount + newWithDraw;
    setNewValueByID('withdrad-total' , totalWithdraw)
})