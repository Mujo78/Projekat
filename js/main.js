
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

