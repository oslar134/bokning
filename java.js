//Button direkt till bokning
document.getElementById("bookingButton")?.addEventListener("click", () =>{
    window.location.href = "book.html"
})

//Button till bokning
document.getElementById("bookingButton_1")?.addEventListener("click", () =>{
    window.location.href = "book.html"
})

//Kod för drop button
const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".drop_down");

if (dropBtn){
    dropBtn.onclick = function() {
        dropContent.classList.toggle("show");
    }
}
window.onclick = function(event){
    if (!event.target.matches("#dropBtn")){
        if (dropContent && dropContent.classList.contains("show")){
            dropContent.classList.remove("show");
        }
    }
}

function showAlert(page){
    console.log("Du har klickat på " + page);
    window.location.href = page
}