function checkVowels(){
    let text = document.getElementById('inputText').value;
    let vowelCount = 0;

    text = text.toLowerCase();

    for(let i = 0; i<text.length;i++){
        let char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = 'Total Vowels: '+vowelCount;
}

function isVowel(char){
    const vowels = ['a','u','e','o','i'];
    return vowels.includes(char);
}