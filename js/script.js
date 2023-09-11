const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let valueDefault;

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();  
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR Code...'
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}` /*https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example*/
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QRCode'
    })
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    verificaInput();
});

function verificaInput(){
    let url = document.getElementById("inputValue").value;
    
    if(url == "" || url == null){
        let span = document.getElementById("msgAlerta");
        span.innerHTML = "O Campo não pode ser vazio*";
        span.style.color = "red";
    }else{
        let span = document.getElementById("msgAlerta");
        span.hidden = true;
    }
}
function clearForm(){
    // document.getElementById('inputValue').value='';
    location.reload();
    return false;
}    