function openMeet(){
window.open("https://meet.google.com","_blank");
}

function showToast(message){
const toast=document.getElementById("toast");
const text=document.getElementById("toastMsg");

text.innerHTML=message;

toast.style.display="flex";

setTimeout(()=>{
toast.style.display="none";
},3000);
}

document.addEventListener("DOMContentLoaded",()=>{
showToast("Website Loaded Successfully!");
});
