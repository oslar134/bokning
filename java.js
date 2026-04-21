const pageId = document.body.id;

switch (pageId){
    case 'index.html':

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
    break;
    case 'book.html':
        
    break;
}

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



//Denna kod är för att spara och skicka informationen till bekräftningssidan
//Detta fungerar inte behöver lagas
const form = document.querySelector('form');

            form.addEventListener('submit', (e) =>{
                console.log("test")
                e.preventDefault();
                const myformData = new FormData(form);
                const obj = Object.fromEntries(myformData.entries());

                console.log("Datan som samlats in", obj);

                localStorage.setItem('Användarval', JSON.stringify(obj));

                console.log("Nu ska datan vara sparad");

                window.location.href = 'godkann_info.html';
            })


            const SparadData = localStorage.getItem('Användarval');
            
            if (SparadData){
                const data = SparadData;

                console.log(data);

                document.getElementById('visningsnamn').textContent = data.fname;
            }
            else{
                document.getElementById("data").innerHTML = '<p>Ingen data hittades, gå tillbaka och fyll i formuläret</p>';
            }