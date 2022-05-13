function submit () {
    location.href = '/html/index2.html';
}



// GET 
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        if(!res.ok) {
            throw error('Ovo je error');
        }else {
            return res.json();
        }
    })
    .then(data => {
        const Kartica = document.querySelector('.ZaApi');
        let empty = ''; 

      data.forEach(element => {
          empty += `
        <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
                <a class="btn btn-primary" id="buttons" onclick="showImage()">Go somewhere</a>
            </div>
        </div>`
    });

        Kartica.innerHTML = empty;
    })
    .catch(err => {
        console.log(err);
    })

showImage = () => {
    
}

showCars = () => {
    let Pretraga = document.querySelector('.RezultatiPretrage');
    let pretrazivanje = document.querySelector('#pretraga');
    let search = document.querySelector('.form-control').value;
    let deletesearch = document.querySelector('#buttons2');

    let drugo = search.substring(0,2);
    let prvo = search.substring(0,1);


        fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
        .then(res => {
            if(!res.ok) {
                throw error('Ovo je error');
            }else {
                return res.json();
            }
        })
        .then(data => {
            let empty = '';
          data.forEach(element => {
            let lowCaseManufacturer = element.manufacturer.toLowerCase();
            let UpperCaseManufacturer = element.manufacturer.toUpperCase();
            let UpperCaseLetter = element.name.toLowerCase();
            let lowCaseLetter = element.name.toUpperCase();
            let prvoVeliko = prvo.toUpperCase();
            let dvaVelika = drugo.toUpperCase();
            let prvoMalo = prvo.toLowerCase();
            let dvaMala = drugo.toLowerCase();

        if(search === element.name || search.toUpperCase() === UpperCaseManufacturer || search.toLowerCase() === lowCaseManufacturer ||
            search === element.manufacturer || search.toUpperCase() === UpperCaseLetter || search.toLowerCase() === lowCaseLetter) {
            empty += `
            <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                    <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.manufacturer} ${element.price} ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Go somewhere</a>
                
                </div>
            </div>
             <hr>`
        }else
            if(UpperCaseLetter.includes(prvoVeliko, 0,1) || UpperCaseLetter.includes(dvaVelika,0,2) || lowCaseLetter.includes(prvoMalo,0,1) || lowCaseLetter.includes(dvaMala, 0,2) ||
                UpperCaseManufacturer.includes(prvoVeliko, 0,1) || UpperCaseManufacturer.includes(dvaVelika, 0,2) || lowCaseManufacturer.includes(prvoMalo,0,1) || lowCaseManufacturer.includes(dvaMala, 0,2) ||
                element.name.includes(prvo) || element.name.includes(drugo) ||element.manufacturer.includes(prvo) || element.manufacturer.includes(drugo)){
            empty += `
            <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                    <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.manufacturer} ${element.price} ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Go somewhere</a>
                </div>
            </div> <hr>`;
    }
});
        pretrazivanje.style.display = 'block'; 
        Pretraga.style.display = 'flex';
        deletesearch.style.display = 'block'; 
        Pretraga.innerHTML = empty;
        })
        .catch(err => {
            console.log(err);
        })
}

DeleteSearch = () => {
    let Pretraga = document.querySelector('.RezultatiPretrage');
    let pretrazivanje = document.querySelector('#pretraga');
    let deletesearch = document.querySelector('#buttons2');
    let inputs = document.querySelector('input');

    Pretraga.innerHTML = `<hr>`
    pretrazivanje.style.display = 'none'; 
    Pretraga.style.display = 'none';
    inputs.value = '';
    deletesearch.style.display = 'none';
}
/*
function submit () {
    let email = document.querySelector('.form-control');
    let password = document.querySelector('#inputPassword2');
    let valueOfEmail = email.value;
    let valueOfPassword = password.value;
    let lpassword = valueOfPassword.length;
    let positionOfAt = valueOfEmail.indexOf('@');
    let beforeAt = valueOfEmail.substring(0, positionOfAt);

    if(valueOfEmail === ''){
        window.alert('Molimo unesite vas mail');
    }else{
        if(valueOfEmail.includes('@') && valueOfEmail.includes('.com') || valueOfEmail.includes('.ba')){
            if(valueOfEmail.includes('gmail') || valueOfEmail.includes('size') || valueOfEmail.includes('hotmail')){
                if(beforeAt.length > 3){
                    if(valueOfPassword === ''){
                        window.alert('Morate imati sifru!');
                    }else {
                        if(lpassword < 5){
                            window.alert('Vasa šifra mora imati bar 5 znakova!')
                        }else{
                            location.href = '/html/index2.html';
                        };
                    };
                }else{
                    window.alert('Više karaktera prije @ znaka!');
                };
            }else{
                window.alert('Mora sadržavati: gmail, hotmail ili size!');
            };
        }else{
            window.alert('Fali:@ ili .com ili .ba');
        };
    };
}
*/
//-------------------------------------------------------------------------------------

console.log('Zdravo')