let form = document.querySelector('#form')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    let error = document.querySelector('#error')
    let message = ""

    let name, email, password, date, nationality
    name = document.querySelector('#name')
    email = document.querySelector('#email')
    password = document.querySelector('#password')
    date = document.querySelector('#date')
    nationality = document.querySelector('#nationality')

    if(name.value == ""){
        message = "Please fill the name !"
    } else if(!isAlphabet(name.value)){
        message = "Please put a letter !"
    } else if(email.value == ""){
        message = "Please fill the email !"
    } else if(!email.value.endsWith(".com")){
        message = "Email must ends with .com"
    } else if(!email.value.includes("@")){
        message = "Email must contains @"
    } else if(email.value.indexOf("@") != 
        email.value.lastIndexOf("@")) {
        message = "Email must contains only 1 @"
    } else if(email.value.includes("@.") ||
        email.value.includes(".@") ||
        email.value.includes("..")) {
    } else if(password.value == ""){
        message = "Please fill the password !"
    } else if(password.value.length <8){
        message = "Password must be at least 8 characthers !"
    } else if(date.value == ""){
        message = "Please fill the date of birth !"
    } else if(nationality.value == ""){
        message = "Please choose the nationality !"
    }

    error.textContent = message
})

function isAlphabet(string) {
    string = string.toLowerCase()
    let valid = true
    Array.from(string).forEach((c) =>{
        if(c < 'a' || c > 'z') valid = false
        if(c == ' ') valid = true
    })
    return valid
}