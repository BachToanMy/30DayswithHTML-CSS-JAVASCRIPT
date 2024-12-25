function convert(){
    const hexInput = document.getElementById('hexInput').value.toUpperCase();

    const binaryResult = document.getElementById('binaryResult');

    if(isValidHexInput(hexInput)){
        const binaryValue = parseInt(hexInput,16).toString(2).padStart(4,'0');
        binaryResult.textContent =  `Binary: ${binaryValue}`;
    }else{
        binaryResult.textContent = "Invalid Hexadecimal Number";
    }
}

function isValidHexInput(hexInput){

    const validInput = '0123456789ABCDEF';
    for(let i=0;i<hexInput.length;i++){
        const char = hexInput.charAt(i);
        if(validInput.indexOf(char)===-1){
            return false;
        }
    }
    return hexInput.length>0;
}