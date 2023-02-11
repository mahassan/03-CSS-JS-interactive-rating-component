const form = document.querySelector("#rating")
form.addEventListener("submit", (e)=>{
    const rating = this.choice.value;
    
    // debugging
    console.log(`chosen value was ${rating}`);
})