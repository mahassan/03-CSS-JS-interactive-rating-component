const form = document.querySelector("#rating")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const rating = this.choice.value;
    localStorage.setItem("rating", rating);
    // debugging
    console.log(`chosen value was ${rating}`);
})