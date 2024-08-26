function criptografar() {
    // Captura o valor do input
    let textoDigitado = document.querySelector('#inputtext1').value;

    // Método simples de substituição de caracteres (Cifra de César com deslocamento 1)
    const encryptedText = textoDigitado.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) + 1)
    ).join('');

    // Define o valor criptografado no input
    document.querySelector('#inputtext1').value = encryptedText;
}

function descriptografar() {
    // Captura o valor do input
    let textoDigitado = document.querySelector('#inputtext1').value;

    // Método simples de substituição de caracteres (Cifra de César com deslocamento 1)
    const decryptText = textoDigitado.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) - 1)
    ).join('');

    // Define o valor descriptografado no input
    document.querySelector('#inputtext1').value = decryptText;
}

function copyText() {
    // Seleciona o valor do campo de entrada
    let textToCopy = document.querySelector('#inputtext2').value;
    
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Texto copiado com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}
