const pageId = document.body.id;

console.log("test: " + pageId);

switch (pageId){
    case 'index.html': {
        
        //Button direkt till bokning
        document.getElementById("bookingButton")?.addEventListener("click", () =>{
            window.location.href = "book.html";
        })

        //Button till bokning
        document.getElementById("bookingButton_1")?.addEventListener("click", () =>{
            window.location.href = "book.html";
        })
    break;
        }

    case 'book.html': {
        
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
    break;
        }

    case "godkann_info.html": {
        
        const SparadData = localStorage.getItem('Användarval');
            
            if (SparadData){
                const data = JSON.parse(SparadData);

                console.log(data);


                //Här är all kod för att skriva ut informationen i html
                //Man hämtar först id och sen sätter du id till värdet från t.ex data.fname

                if (data.fname == "" || data.lname == "" || data.email == "" || data.telnumb == "" || data.hämtdatum == "" || data.lämndatum == "" || data.hämttid == "" || data.lämntid == "" || data.bil == ""){
                    
                }
                document.getElementById('fname').innerHTML = data.fname;
                document.getElementById('lname').innerHTML = data.lname;
                document.getElementById('email').innerHTML = data.email;
                document.getElementById('telnumb').innerHTML = data.telnumb;
                document.getElementById('hämtdatum').innerHTML = data.hämtdatum;
                document.getElementById('lämndatum').innerHTML = data.lämndatum;
                document.getElementById('hämttid').innerHTML = data.hämttid;
                document.getElementById('lämntid').innerHTML = data.lämntid;
                document.getElementById('bil').innerHTML = data.bil;

                if (data.extraval1 == "on"){
                    document.getElementById('extraval1').textContent = "Ja";
                }    
                else{
                    document.getElementById('extraval1').textContent = "Nej"
                }

                if (data.extraval2 == "on"){
                    document.getElementById('extraval2').textContent = "Ja";
                }  
                else{
                    document.getElementById('extraval2').textContent = "Nej"
                }   
                
                if (data.extraval3 == "on"){
                    document.getElementById('extraval3').textContent = "Ja";
                }
                else{
                    document.getElementById('extraval3').textContent = "Nej"
                }

                if (data.extraval4 == "on"){
                    document.getElementById('extraval4').textContent = "Ja";
                }
                else{
                    document.getElementById('extraval4').textContent = "Nej"
                }
            }
            else{
                document.getElementById("data").innerHTML = '<p>Ingen data hittades, gå tillbaka och fyll i formuläret</p>';
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


        //Kod för att godkänna informationen

        document.getElementById('godkann_button').addEventListener('click', () =>{
            console.log('test av knapp för bekräftning av information.')
        })
    break;
    }
    case 'cars.html':{
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
        }
}