const form = document.querySelector('.login-form');
form.addEventListener('submit', push);

function push(e){
e.preventDefault();
console.log(e)
const email = e.target.elements.email.value.trim();
const password = e.target.elements.password.value.trim();
if(email === "" || password === "" ){
alert("All form fields must be filled in");
}
const obj = {
email: email,
password: password
}
console.log(obj)
// return obj
form.reset()
}
