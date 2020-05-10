// Assignment Code
var generateBtn = document.querySelector("#generate");



var emptyArr=[[]];
var emptyArr2=[];



//add events target

let passLength= document.getElementById('quantity');
let lowerCase= document.getElementById('lowercase');
let upperCase= document.getElementById('uppercase');
let numericChar= document.getElementById('numeric');
let specialCharEvt= document.getElementById('special');
let clearButton= document.getElementById('clear');
let box= document.querySelector('.box');
let num;
let moreIndex;

let alphaOCharLower='abcdefghiklmnopqrstuvwxyz';
    let randomString="";

let numIndex= {
numOfChar: function(){
     numb=passLength.value;
     return num= Number(numb)    
},
charToAdd: function(){
    return moreIndex= num-emptyArr[0].length;
},

}

let alphaCharLower='abcdefghiklmnopqrstuvwxyz'
let alphaCharUpper='ABCDEFGHIJKLMNOPQRSTUVWXTZ'
let numberList= '0123456789'
let specialChar= '!#$%&()*+,-./:;<=>?@[]^_{|}~'





// set functions and output variables
const randomSelection=function (input){    
    let rnum= Math.floor(Math.random() * alphaCharLower.length); 
    return emptyArr[0].push(input= input[rnum]);       
};
const ranNumSelection=function (input){    
    let rnum= Math.floor(Math.random() * 10); 
    return emptyArr[0].push(input= input[rnum]);       
};

const addMoreToString= function(){
    let alphaOCharLower='abcdefghiklmnopqrstuvwxyz'
    for (let i= moreIndex; i > 0; i--){
        let rNum= Math.floor(Math.random() * alphaOCharLower.length);
        emptyArr2.push(alphaOCharLower[rNum]);
    };
}

       

let writePassword= function(){
  if(passLength.value == 0){
        alert('choose character length')
        location.reload(true);
  } else{
    if(lowerCase.checked == true){
        let aUpperOut= randomSelection(alphaCharLower);
    };
    if (upperCase.checked == true ){
        let aUpperOut= randomSelection(alphaCharUpper);
        };
    if (numericChar.checked == true ){
        let numericOut= ranNumSelection(numberList);
        };
    if (specialCharEvt.checked == true ){
        let specialOut= randomSelection(specialChar);
     };
     addMoreToString();
        
    // let newArrTwo= emptyArr2.join("");      
};
}

const clear= function (){
    location.reload(true);
}



generateBtn.addEventListener("click", function generateIt(){
    writePassword();   
    let newArr= emptyArr[0].join("") + emptyArr2.join("") ;
    document.querySelector("#password").value= newArr;
    clearButton.style.visibility='visible';
    generateBtn.style.visibility='hidden';
})
passLength.addEventListener("click", numIndex.numOfChar)
passLength.addEventListener("click", function show(){
    box.style.visibility='visible';
})
passLength.addEventListener("click", numIndex.charToAdd)



clearButton.addEventListener('click',clear)
