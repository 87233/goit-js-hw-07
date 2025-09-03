const form  = document.querySelector(".login-form");
form.addEventListener("submit",formFunction);

function formFunction(event) {
    event.preventDefault();
    const el = event.target.elements;
    
    
 const info = {
    email: el.email.value,
    password: el.password.value
 }
 if(info.email === "" || info.password === "") {
    alert('All form fields must be filled in');
 }
    console.log(info)
    event.target.reset();
}
