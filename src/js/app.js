const form = document.querySelector("#rating")
form.addEventListener("submit", function(e){
    const rating = this.ratings.value
    // debugging
    console.log(`chosen value was ${rating}`);
})