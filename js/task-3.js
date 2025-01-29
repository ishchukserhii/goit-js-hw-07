const listen = document.querySelector('#name-input')
const insert = document.querySelector('#name-output')

function type(){
if(listen.value.trim() === ""){
insert.innerHTML = "Anonymous"
}
else{
insert.innerHTML = `${listen.value.trim()}`
}
}

listen.addEventListener('input', type)