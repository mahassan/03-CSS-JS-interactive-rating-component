const form = document.querySelector("#rating")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(this.ratings)
    const rating = this.ratings.value;
    localStorage.setItem("rating", rating);
    // debugging
    console.log(`chosen value was ${rating}`);
})