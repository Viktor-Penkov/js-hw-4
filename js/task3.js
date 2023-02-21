const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt("Введіть пароль") ;
let message 
if (password === null) {
    message = "Авторизацію скасовано"
    alert (`${message}`)
}
else if (password === ADMIN_PASSWORD ) {
    message = "Ласкаво просимо!"
    alert (`${message}`)    
}
else if(password != ADMIN_PASSWORD ) {
    message = "Доступ заборонено, невірний пароль!"
    alert (`${message}`)

}
