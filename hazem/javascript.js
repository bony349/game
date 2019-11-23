const name = document.getElementById('name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const username = document.getElementById('username')
const gender = document.getElementById('gender')
const ConfirmPassword = document.getElementById('ConfirmPassword')
const form = document.getElementById('form-new-account');
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => {

    var messages = []
    if(gender.value === "0")
    {
        messages.push("You Have To Select Your Gender")
    }
    if(password.value.length < 5)
    {
        messages.push("The Password Must be 6 characters minimum")
    }
    if(password.value !== ConfirmPassword.value)
    {
        messages.push("Those passwords didn't match. Try again")    
    }
    if(messages.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join('\n')
    }
})