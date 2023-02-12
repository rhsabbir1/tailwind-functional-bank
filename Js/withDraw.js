document.getElementById('withdrow-btn').addEventListener('click',function(){
    const WithdrowField = document.getElementById('Withdrow-field');
    const Withdrowstr = WithdrowField.value;
    const withdrawAmount =parseFloat(Withdrowstr)

    WithdrowField.value = '';
    if(isNaN(withdrawAmount)){
        return;
    }
    
})