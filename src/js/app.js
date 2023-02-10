const form = document.querySelector("#rating")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    
    [...form].forEach((el)=>{
        if(el.checked){
            localStorage.setItem("rating",el.value)
            window.location.href = "http://127.0.0.1:5500/src/thank-you.html";
        }else{
            alert("Please select a rating, it helps us greatly!")
            return
        }
    })
})