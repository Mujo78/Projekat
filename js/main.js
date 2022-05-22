// ------------------------ Mainpage
const showCars = () => {
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
                            <h5 class="card-title" id="naslov">${element.id}. ${element.name}</h5>
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
                                                    <label for="message-text" class="col-form-label">Broj vozila:</label>
                                                    <textarea class="form-control" id="number-text" placeholder="Primjer: 1"></textarea>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="message-text" class="col-form-label">Ostale informacije</label>
                                                    <textarea class="form-control" id="message-text" placeholder="Broj telefona..Grad....Adresa..." required="true"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" onclick="Order()">Naruči</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    `;
                }else
                    if(UpperCaseLetter.includes(prvoVeliko, 0,1) || UpperCaseLetter.includes(dvaVelika,0,2) || lowCaseLetter.includes(prvoMalo,0,1) || lowCaseLetter.includes(dvaMala, 0,2) ||
                        UpperCaseManufacturer.includes(prvoVeliko, 0,1) || UpperCaseManufacturer.includes(dvaVelika, 0,2) || lowCaseManufacturer.includes(prvoMalo,0,1) || lowCaseManufacturer.includes(dvaMala, 0,2) ||
                        element.name.includes(prvo) || element.name.includes(drugo) ||element.manufacturer.includes(prvo) || element.manufacturer.includes(drugo)) {
                            empty += `
                            <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                                <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
                                <div class="card-body">
                                        <h5 class="card-title" id="naslov">${element.id}. ${element.name}</h5>
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
                                                            <label for="message-text" class="col-form-label">Broj vozila:</label>
                                                            <textarea class="form-control" id="number-text" placeholder="Primjer: 1"></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="message-text" class="col-form-label">Ostale informacije</label>
                                                            <textarea class="form-control" id="message-text" placeholder="Broj telefona..Grad....Adresa..." required="true"></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary" onclick="Order()">Naruči</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                `;
                }
            });
                pretrazivanje.style.display = 'flex'; 
                Pretraga.style.display = 'flex';
                deletesearch.style.display = 'block'; 
                Pretraga.innerHTML = empty;
        })
        .catch(err => {
            console.log(err);
        })
}

const DeleteSearch = () => {
    let Pretraga = document.querySelector('.RezultatiPretrage');
    let pretrazivanje = document.querySelector('#pretraga');
    let deletesearch = document.querySelector('#buttons2');
    let inputs = document.querySelector('input');

    Pretraga.innerHTML = `<hr>`;
    pretrazivanje.style.display = 'none';
    Pretraga.style.display = 'none';
    inputs.value = '';
    deletesearch.style.display = 'none';
}

// GET - Mainpage


const showTopPonuda = () => {
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        return res.json();
    })
    .then(data => {
        let ponuda = document.getElementById('ponudaTop');
        let Kartica = document.getElementById('ZaApi');
        let empty = ' ';

        data.forEach(element => {
            empty += `
            <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
                <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
                <div class="card-body">
                    <h5 class="card-title" id="naslov">${element.id}. ${element.name}</h5>
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
                                            <label for="number-text" class="col-form-label">Broj vozila:</label>
                                            <textarea class="form-control" id="number-text" placeholder="Primjer: 1"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Ostale informacije</label>
                                            <textarea class="form-control" id="message-text" placeholder="Grad: Travnik - Adresa: Ulica b.b. -  Broj telefona: 38762000999" required></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onclick="Order()">Naruči</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    });
    ponuda.style.display = 'block';
    Kartica.style.display = 'flex';
    Kartica.innerHTML = empty;
});
}

const closeTopPonuda = () => {
    let ponuda = document.getElementById('ponudaTop');
    let Kartica = document.getElementById('ZaApi');

    ponuda.style.display = 'none';
    Kartica.style.display = 'none';
}

const Order = () => {
    let orderid = document.querySelector('#number-text').value;
    orderid = parseInt(orderid);
        fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${orderid}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok) {
                    alert('Uspješno naručeno!');
                    console.log(res);
                }else {
                    alert('Niste uspjeli naručiti, pokušajte onovno poslije..');
                }             
            })
    }

// ----------------------------------------------------------------- Allcars
const showCars2 = () => {
    let placeForResult = document.querySelector('.resultsOfSearch');
    let pretrazeno = document.querySelector('#pretraga2');
    let placeforApi = document.querySelector('#forApi');
    let search = document.querySelector('.form-control').value;
    let new_cars2 = document.querySelector('.new_cars2');
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
                search === element.manufacturer || search.toUpperCase() === UpperCaseLetter || search.toLowerCase() === lowCaseLetter ||
                UpperCaseLetter.includes(prvoVeliko, 0,1) || UpperCaseLetter.includes(dvaVelika,0,2) || lowCaseLetter.includes(prvoMalo,0,1) || lowCaseLetter.includes(dvaMala, 0,2) ||
                UpperCaseManufacturer.includes(prvoVeliko, 0,1) || UpperCaseManufacturer.includes(dvaVelika, 0,2) || lowCaseManufacturer.includes(prvoMalo,0,1) || lowCaseManufacturer.includes(dvaMala, 0,2) ||
                element.name.includes(prvo) || element.name.includes(drugo) ||element.manufacturer.includes(prvo) || element.manufacturer.includes(drugo)) {
                empty += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${element.imageUrl}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.id}. ${element.name}</h5>
                                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" value="Naruči">
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
                                        <label for="message-text" class="col-form-label">Broj vozila:</label>
                                        <textarea class="form-control" id="number-text" placeholder="Primjer: 1"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Ostale informacije</label>
                                        <textarea class="form-control" id="message-text" placeholder="Broj telefona..Grad....Adresa..." required></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <input type="button" class="btn btn-primary" onclick="Order()" value="Naruči">
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                `;
            }
});
        new_cars2.style.display = 'none';
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


const DeleteSearch2 = () => {
    let placeForResult = document.querySelector('.resultsOfSearch');
    let pretrazeno = document.querySelector('#pretraga2');
    let placeforApi = document.querySelector('#forApi');
    let deletesearch = document.querySelector('#buttons3');
    let new_cars2 = document.querySelector('.new_cars2');
    let inputs = document.querySelector('input');

    placeForResult.innerHTML = `<hr>`;
    new_cars2.style.display = 'flex';
    pretrazeno.style.display = 'none';
    placeForResult.style.display = 'none';
    placeforApi.style.display = 'none';
    inputs.value = '';
    deletesearch.style.display = 'none';
}

let cars = [];

const forApi = () => {
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        return res.json();
    })
    .then(data => {
        let new_cars2 = document.querySelector('.new_cars2');
        let Kartica = document.getElementById('forApi');
        let empty = '';

        data.forEach(element => {
            empty += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${element.imageUrl}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.id}. ${element.name}</h5>
                            <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year}</p>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <label for="message-text" class="col-form-label">Broj vozila:</label>
                                    <textarea class="form-control" id="number-text" placeholder="Primjer: 1"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Ostale informacije</label>
                                    <textarea class="form-control" id="message-text" placeholder="Broj telefona..Grad....Adresa..." required="true"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="Order()">Naruči</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            `;
        });
        Kartica.style.display = 'flex';
        new_cars2.style.display = 'none';
        Kartica.innerHTML = empty;
    })
}

const forApi2 = () => {
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let new_cars2 = document.querySelector('.new_cars2');
            let Kartica = document.getElementById('forApi');
            let empty = '';
    
            data.forEach(element => {
                empty += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${element.imageUrl}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.id}. ${element.name}</h5>
                                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year}</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        <label for="message-text" class="col-form-label">Broj vozila:</label>
                                        <textarea class="form-control" id="number-text" placeholder="Primjer: 1"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Ostale informacije</label>
                                        <textarea class="form-control" id="message-text" placeholder="Broj telefona..Grad....Adresa..." required="true"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onclick="Order()">Naruči</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                `;
            });
            Kartica.style.display = 'flex';
            Kartica.innerHTML = empty;
        })
    }


const new_cars_soon = () => {
    let apiData = document.getElementById('forApi');
    let new_cars2 = document.querySelector('.new_cars2');
    let results = document.querySelector('.resultsOfSearch');
    let buton = document.querySelector('#buttons3');
    let input = document.querySelector('#unos');

    input.value = '';
    buton.style.display = 'none';
    results.style.display = 'none';
    new_cars2.style.display = 'flex';
    apiData.style.display = 'none';
}

const carsAll = () => {
    let new_cars2 = document.querySelector('.new_cars2');
    forApi2();
    new_cars2.style.display = 'flex';

}

//-------------------------------------------------------- AddingCars

const validation = () => {
    let email = document.querySelector('.form-control1').value;
    let password = document.querySelector('.form-control2').value;
    let post_put = document.querySelector('.post-put');
    let validacia = document.querySelector('.form_validation');

    if(email !== 'mujo@gmail.com' && password !== 'mujo') {
        window.alert('Pogrešan e-mail ili lozinka');
    }else {
        post_put.style.display = 'flex';
        validacia.style.display = 'none';
    }
}

const post = () => {
    let post = document.querySelector('.post');
    let post_put = document.querySelector('.post-put');

    post_put.style.display = 'none';
    post.style.display = 'flex';
}

const put = () => {
    let puts = document.querySelector('.put');
    let tipke = document.querySelector('.forTipka');
    let post_put = document.querySelector('.post-put');

    post_put.style.display = 'none';
    puts.style.display = 'flex';
    tipke.style.display = 'flex';
}

const logOut = () => {
    let validation = document.querySelector('.form_validation');
    let post_put = document.querySelector('.post-put');
    input1 = document.querySelector('#inputEmail');
    input2 = document.querySelector('#inputPassword');

    validation.style.display = 'flex';
    input1 = '';
    input2 = '';
    post_put.style.display = 'none';
}

const post2 = () => {
    let name = document.querySelector('#inputname').value;
    let manufacturer = document.querySelector('#inputmanufacturer').value;
    let linkimg = document.querySelector('#inputlink').value;
    let price = document.querySelector('#inputprice').value;
    let year = document.querySelector('#inputyear').value;
    let id = 5;
    id++;
    if(name === '' || manufacturer === '' || linkimg === '' || price === '' || year === '' ) {
        window.alert('[ERROR] Niste unijeli nesto od ponuđenog!!');
    } else {

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
        .then(res => {
            if(res.ok) {
                console.log(res);
                alert(`Uspješno postavljeno. Status: ${res.status}`);
                empty2();
                back();
            }else {
                console.log(res);
            }
        })
    }
}

const back = () => {
    let post = document.querySelector('.post');
    let post_put = document.querySelector('.post-put');

    post_put.style.display = 'flex';
    post.style.display = 'none';
}

const puts = () => {
    let post_put = document.querySelector('.post-put');
    let post = document.querySelector('.post');
    let tipka = document.querySelector('.forTipka');

    
    post.style.display = 'none';
    post_put.style.display = 'none';
    Put();
    tipka.style.display = 'flex';
}


const Put = () => {

fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
    .then(res => {
        return res.json();
    })
    .then(data => {
       
        const Kartica = document.getElementById('put');
        let empty = '';

      data.forEach(element => {
        empty += `
        <div class="card" style="width: 18rem; box-shadow: 0px 0px 1px #ccc;">
            <img src="${element.imageUrl}" class="card-img-top" alt="Ovdje treba biti slika...">
            <div class="card-body">
                <h5 class="card-title">${element.id}. ${element.name}</h5>
                <p class="card-text">Proizvođač: ${element.manufacturer} <br> <b>Cijena:</b> ${element.price} <br> Godište: ${element.year} </p>
            </div>
        </div>
        `;
    });
        Kartica.style.display = 'flex';
        Kartica.innerHTML = empty;
    });
}

const saveIt = () => {
    let num = document.querySelector('#message-text').value;
    let put = document.querySelector('#put');
    let edit = document.querySelector('#edits');
    let Kartica = document.querySelector('.onlyOne');
    if(num === '') {
        alert('Niste unijeli nista!!!');
        put.style.display = 'flex';
        Kartica.style.display = 'none';
        edit.style.display = 'none';
    }else {
    num = parseInt(num);
    console.log(typeof(num));
    
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
            </div>
            `;
        }
    });
        edit.style.display = 'flex';
        put.style.display = 'none';
        Kartica.style.display = 'flex';
        Kartica.innerHTML = empty;
    })
    .catch(err => {
        console.log(err);
    })
    }
}

const back2 = () => {
    let put = document.querySelector('#put');
    let tipka = document.querySelector('.forTipka');
    let onlyOne = document.querySelector('.onlyOne');
    let edit = document.querySelector('.edit');
    let edits = document.querySelector('#edits');
    let post_put = document.querySelector('.post-put');

    edits.style.display = 'none';
    edit.style.display = 'none';
    post_put.style.display = 'flex';
    tipka.style.display = 'none';
    put.style.display = 'none';
    onlyOne.style.display = 'none';
}

const edit = () => {
    let edit1 = document.querySelector('.edit');

    edit1.style.display = 'flex';
}

const edit2 = () => {
    let num = document.querySelector('#message-text').value;
    console.log(num);
    let name = document.querySelector('#inputname2').value;
    let manufacturer = document.querySelector('#inputmanufacturer2').value;
    let linkimg = document.querySelector('#inputlink2').value;
    let price = document.querySelector('#inputprice2').value;
    let year = document.querySelector('#inputyear2').value;

    let name2 = document.querySelector('#inputname2');
    let manufacturer2 = document.querySelector('#inputmanufacturer2');
    let linkimg2 = document.querySelector('#inputlink2');
    let price2 = document.querySelector('#inputprice2');
    let year2 = document.querySelector('#inputyear2');
    let edit = document.querySelector('.edit');

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars`, {
        method: 'PUT',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            id: num,
            name: name,
            manufacturer: manufacturer,
            imageUrl: linkimg,
            price: price,
            year: year
        })
    })
    .then(res => {
        if(res.ok) {
            alert('Uspješno sačuvane izmjene! Status:204');
            console.log(res);
            edit.style.display = 'none';
            name2.value = '';
            manufacturer2.value = '';
            linkimg2.value = '';
            price2.value = '';
            year2.value = '';
        }
    })
}

const cancel = () => {
    let edit2 = document.querySelector('.edit');

    edit2.style.display = 'none';
}

const empty2 = () => {
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

console.log('Dobro došli! :D');