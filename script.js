// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;
//     const errorMessage = document.getElementById("error-message");

//     if (password !== confirmPassword) {
//         errorMessage.textContent = "Passwords do not match!";
//         return;
//     }

//     if (password.length < 6) {
//         errorMessage.textContent = "Password should be at least 6 characters long!";
//         return;
//     }

//     // Form submission logic here (e.g., send data to server)
//     errorMessage.textContent = "";
    
// });


const bar =document.getElementById('bar');
const nav =document.getElementById('navbar')
const close =document.getElementById('close')

if (bar) {
    bar.addEventListener('click',()=>{
    nav.classList.add('work');
    console.log("clicking")
})
} 
if(close) {
    close.addEventListener('click',()=>{
    nav.classList.remove('work')
})
}


