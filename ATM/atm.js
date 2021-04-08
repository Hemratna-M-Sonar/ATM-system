const optionScreen = document.querySelector(".main-screen-options");
const accountType = document.querySelector(".main-screen-account-type");
const enterAmount = document.querySelector(".main-screen-enter-amount");
const enterPass = document.querySelector(".main-screen-enter-pass");
const finalOutput = document.querySelector(".main-screen-final-output");
const finalResult = document.querySelector(".final-result");
const balanceLeft = document.querySelector(".balance-left");

const cashWithdrawal = document.querySelector(".cashwid");
const accountDetails = document.querySelector(".accdetails");
const savingAccount = document.querySelector(".savingacc");
const enterTheAmount = document.querySelector(".enter-the-amount");
const enterThePin = document.querySelector(".enter-the-pin");
const bigCancel = document.querySelector(".big-cancel");

let amountScreen = document.querySelector(".amount-screen");
let pinScreen = document.querySelector(".pin-screen");

// let transactionStatus = document.querySelector(".final-result h1").innerHTML;
// let leftBalance = document.querySelector(".balance-left h1").innerHTML;
// let rupees = document.querySelector(".balance-left h1 span").innerHTML;

bigCancel.addEventListener('click',() => {
    optionScreen.style.display = "flex";
    accountType.style.display = "none";
    enterAmount.style.display = "none";
    enterPass.style.display = "none";
    finalOutput.style.display = "none";
})

// clicking cash withdrawal and going to account type
cashWithdrawal.addEventListener('click',() => {
    optionScreen.style.display = "none";
    accountType.style.display = "flex";
});

// clicking saving account and going to enter amount
savingAccount.addEventListener('click',() => {
    accountType.style.display = "none";
    enterAmount.style.display = "flex";
});

// clicking enter in amount window and going to enter pin
enterTheAmount.addEventListener('click',() => {
    if(amountScreen.value == ""){
        alert("Please Enter Some Amount");
    }
    else if(amountScreen.value % 100 != 0){
        alert("Please Enter Amount in Multiples of 100 & 500");
        amountScreen.value = "";
    }
    else{
        enterAmount.style.display = "none";
        enterPass.style.display = "flex";
    }
});

    let bankBalance = 200000.00;
// clicking enter in pin window and going to final output screen
enterThePin.addEventListener('click',() => {
    if(pinScreen.value == ""){
        alert("Please Enter Your PIN");
        // finalOutput.style.display = "none";
    }
    else if(pinScreen.value.length != 4){
        alert("Wrong PIN Entered");
        pinScreen.value = "";
        // finalOutput.style.display = "none";
    }
    else{
        enterPass.style.display = "none";
        finalOutput.style.display = "flex";
    }

    if(amountScreen.value > bankBalance){
        finalOutput.style.display = "flex";
        finalResult.style.display = "block";
        balanceLeft.style.display = "block";
        document.querySelector(".final-result h1").innerHTML = "Insufficient Balance...!";
        document.querySelector(".balance-left h1").innerHTML = `Your Available Balance is ₹`+ bankBalance+`.00`;
        // document.querySelector(".balance-left .left-balance span").innerHTML = "₹"+bankBalance;
        // document.querySelector(".transaction-status").innerTEXT += "Insufficient Balance...!";
    }
    else{
        document.querySelector(".final-result h1").innerHTML = "Cash Withdrawal Successful...!";
        document.querySelector(".balance-left h1").innerHTML = `Amount Left in Your Acount is ₹` + (bankBalance - amountScreen.value)+`.00`;
        // document.querySelector(".balance-left h1 span").innerHTML = `₹${bankBalance - amountScreen.value}`;
        finalOutput.style.display = "flex";
        finalResult.style.display = "block";
        balanceLeft.style.display = "block";
    }
});
bankBalance = bankBalance - amountScreen.value;


// clicking account details and going to enter pin
accountDetails.addEventListener('click',() => {
    optionScreen.style.display = "none";
    enterPass.style.display = "flex";
    enterThePin.addEventListener('click',() => {
        enterPass.style.display = "none";
        finalOutput.style.display = "flex";
        finalResult.style.display = "none";
        document.querySelector(".balance-left h1").innerHTML = `Your Available Balance is ₹` + bankBalance + ".00";
        // document.querySelector(".balance-left h1 span").innerHTML = `₹${bankBalance}`;
        balanceLeft.style.display = "block";
    });
});

function dis(val){
    amountScreen.value += val; 
}
function clearAmount(){
    amountScreen.value = amountScreen.value.substring(0,amountScreen.value.length-1);
}
function cancelAmount(){
    amountScreen.value = ""; 
}


function dispin(){
    pinScreen.value += "*"; 
}
function clearPin(){
    pinScreen.value = pinScreen.value.substring(0,pinScreen.value.length-1);
}
function cancelPin(){
    pinScreen.value = ""; 
}


