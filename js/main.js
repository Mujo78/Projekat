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
        let empty = ' '; 

      data.forEach(element => {
          empty += `
        <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;" id="${element.id}">
                <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Naruči</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Unos podataka</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Ostale informacije</label>
                                            <textarea class="form-control" id="message-text" placeholder="Broj telefona..Grad....Adresa..."></textarea>
                                        </div>
                                    </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onclick="Order(this)">Naruči</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    });

        Kartica.innerHTML = empty;
    })
    .catch(err => {
        console.log(err);
    })

//
const Order = (order) => {
    let orderid = order.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${orderid}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok) {
                let orderId = document.getElementById(orderid);
                orderId.remove();
            }
            console.log(res);
        })
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
                    <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godiste: ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Naruči</a>
                
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
                    <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Naruči</a>
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
// ALL CARS PART
// GET method for all cars in nav bar
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        if(!res.ok) {
            throw error('Ovo je error');
        }else {
            return res.json();
        }
    })
    .then(data => {
        const Kartica = document.querySelector('.forApi');
        let empty = ''; 

      data.forEach(element => {
          empty += `
        <div class="card mb-3" style="max-width: 840px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.imageUrl}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
                        <a class="btn btn-primary" id="buttons" onclick="showImage()">Naruči</a>
                    </div>
                </div>
            </div>
        </div>`
    });

        Kartica.innerHTML = empty;
    })
    .catch(err => {
        console.log(err);
    })

showCars2 = () => {
    let placeForResult = document.querySelector('.resultsOfSearch');
    let pretrazeno = document.querySelector('#pretraga2');
    let placeforApi = document.querySelector('.forApi');
    let search = document.querySelector('.form-control').value;
    console.log(search)
    let deletesearch = document.querySelector('#buttons3');

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
                    <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godiste: ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Naruči</a>
                
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
                    <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Naruči</a>
                </div>
            </div> <hr>`;
    }
});
        placeforApi.style.display = 'none';
        pretrazeno.style.display = 'block';
        deletesearch.style.display = 'block';
        placeForResult.style.display = 'flex';

        placeForResult.innerHTML = empty;
        })
        .catch(err => {
            console.log(err);
        })
}
DeleteSearch2 = () => {
    let placeForResult = document.querySelector('.resultsOfSearch');
    let pretrazeno = document.querySelector('#pretraga2');
    let placeforApi = document.querySelector('.forApi');
    let deletesearch = document.querySelector('#buttons3');
    let inputs = document.querySelector('input');
    let input2 = document.querySelector('#input2');

    placeForResult.innerHTML = `<hr>`
    pretrazeno.style.display = 'none'; 
    placeForResult.style.display = 'none';
    placeforApi.style.display = 'flex';
    inputs.value = '';
    input2.value = '';
    deletesearch.style.display = 'none';
}
showCars3 = () => {
    let placeForResult = document.querySelector('.resultsOfSearch');
    let pretrazeno = document.querySelector('#pretraga2');
    let placeforApi = document.querySelector('.forApi');
    let search = document.querySelector('.form-control').value;
    let deletesearch = document.querySelector('#buttons3');

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
            let ferrari = 'Ferrari';

        if(search === ferrari || search.toUpperCase() === UpperCaseManufacturer || search.toLowerCase() === lowCaseManufacturer) {
            empty += `
            <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                    <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">Proizvođač:${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godiste: ${element.year} </p>
                    <a class="btn btn-primary" id="buttons" onclick="showImage()">Go somewhere</a>
                
                </div>
            </div>
             <hr>`
        }else{
            placeForResult.innerHTML = 'Nema rezultata pretrage'
        }
});
        placeforApi.style.display = 'none';
        pretrazeno.style.display = 'block';
        deletesearch.style.display = 'block';
        placeForResult.style.display = 'flex';

        placeForResult.innerHTML = empty;
        })
        .catch(err => {
            console.log(err);
        })
}
validation = () => {
    let email = document.querySelector('.form-control1').value;
    let password = document.querySelector('.form-control2').value;
    let post_put = document.querySelector('.post-put');
    let validacia = document.querySelector('.form_validation');

    if(email !== 'mujo@gmail.com' && password !== 'mujo'){
        window.alert('Pogrešan e-mail ili lozinka');
    }else{
        post_put.style.display = 'flex';
        validacia.style.display = 'none';
    }
}
post = () => {
    let post = document.querySelector('.post');
    let buton2 = document.querySelector('#buton2');
    let buton3 = document.querySelector('#buton3');

    buton2.style.display = 'none';
    buton3.style.display = 'none';
    post.style.display = 'flex';
}
back = () => {
    let post = document.querySelector('.post');
    let buton2 = document.querySelector('#buton2');
    let buton3 = document.querySelector('#buton3');

    post.style.display = 'none';
    buton2.style.display = 'flex';
    buton3.style.display = 'flex';
}
empty2 = () => {
    let name = document.querySelector('#inputname');
    let manufacturer = document.querySelector('#inputmanufacturer');
    let linkimg = document.querySelector('#inputlink');
    let price = document.querySelector('#inputprice');
    let year = document.querySelector('#inputyear');

    name.value = '';
    manufacturer.value = '';
    linkimg.value = '';
    price.value = '';
    year.value = '';
}
post2 = () => {
    let name = document.querySelector('#inputname').value;
    let manufacturer = document.querySelector('#inputmanufacturer').value;
    let linkimg = document.querySelector('#inputlink').value;
    let price = document.querySelector('#inputprice').value;
    let year = document.querySelector('#inputyear').value;
    let id = 5;
    id++;
    if(name === '' || manufacturer === '' || linkimg === '' || price === '' || year === '' ){
        window.alert('[ERROR] Niste unijeli nesto od ponuđenog!!');
    }

    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            id: id,
            name: name,
            manufacturer: manufacturer,
            imageUrl: linkimg,
            price: price,
            year: year
        })
    })
    .then(res=> {
        if(res.ok){
            alert(`Uspješno postavljeno. Status: ${res.status}`);
            empty2();
            back();
            console.log(res);
        }else{
            console.log(res);
        }
    })
}
put = () => {
    let buton2 = document.querySelector('#buton2');
    let buton3 = document.querySelector('#buton3');
    let puts = document.querySelector('.put');
    let tipke = document.querySelector('.forTipka')

    buton2.style.display = 'none';
    buton3.style.display = 'none';
    puts.style.display = 'flex';
    tipke.style.display = 'flex';
}

fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        if(!res.ok) {
            throw error('Ovo je error');
        }else {
            return res.json();
        }
    })
    .then(data => {
        const Kartica = document.querySelector('.put');
        let empty = ''; 

      data.forEach(element => {
          empty += `
        <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
            <div class="card-body">
                <h5 class="card-title">${element.id}. ${element.name}</h5>
                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
            </div>
        </div>`
    });

        Kartica.innerHTML = empty;
    })
    .catch(err => {
        console.log(err);
    })

back2 = () => {
    let put = document.querySelector('.put');
    let buton2 = document.querySelector('#buton2');
    let buton3 = document.querySelector('#buton3');
    let tipka = document.querySelector('.forTipka');

    tipka.style.display = 'none';
    put.style.display = 'none';
    buton2.style.display = 'flex';
    buton3.style.display = 'flex';
}
saveIt = () => {
    let num = document.querySelector('#message-text').value;
    num = parseInt(num);
    console.log(typeOf(num));
    
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        if(!res.ok) {
            throw error('Ovo je error');
        }else {
            return res.json();
        }
    })
    .then(data => {
        const Kartica = document.querySelector('.onlyOne');
        const put = document.querySelector('.put');
        let empty = ''; 

      data.forEach(element => {

        if(element.id === num){
          empty += `
        <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
            <div class="card-body">
                <h5 class="card-title">${element.id}. ${element.name}</h5>
                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
            </div>
        </div>`
        }
    });
        put.style.display = 'none';
        Kartica.style.display = 'flex';
        Kartica.innerHTML = empty;
    })
    .catch(err => {
        console.log(err);
    })


}
edit = () => {

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