function getInputFieldValue(filedId){
    const fieldvalue = document.getElementById(filedId);
    const fieldvalueStr = fieldvalue.value;
    const fieldValueAmount = parseFloat(fieldvalueStr);
    fieldvalue.value ='';
    return fieldValueAmount;
}

function getElementValueByID(elementId){
    const elementValue = document.getElementById(elementId);
    const elementStr =elementValue.innerText;
    const elementAmount = parseFloat(elementStr);
    return elementAmount;
}

function setNewValueByID(elmentID , value){
    const amountId = document.getElementById(elmentID);
    amountId.innerText = value;
}