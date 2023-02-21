let credits = 23580 ;
let pricePerDroid  = 3000 ;
let message ;
let totalPrice ;
let totalTV = Number( prompt ("Яку кількість телевізорів Ви бажаєте купити ?") );
totalPrice = pricePerDroid * totalTV



if (totalTV === null) {
    message = "Авторизацію скасовано"
    alert (`${message}`)
}

else if(totalPrice < credits ) {
    credits = credits - totalPrice
    message = `Ви купили ${totalTV}   телевізорів, на рахунку залишилось ${credits} кредитів.`
    alert (`${message}`)
    
    
}
else if(totalPrice > credits ) {
    message = `Недостатньо коштів на рахунку!`
    alert (`${message}`)
    
}