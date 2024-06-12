function encrypt() {
    const plaintext = document.getElementById('plaintext').value;
    const key = parseInt(document.getElementById('key').value, 10);
    const errorMessage = document.getElementById('error-message');

    if (isNaN(key) || key < 0 || key > 25) {
        errorMessage.textContent = 'Please enter a valid key (0-25).';
        return;
    }

    let ciphertext = '';
    for (let char of plaintext) {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            let base = charCode >= 65 && charCode <= 90 ? 65 : 97;
            let encryptedCharCode = ((charCode - base + key) % 26) + base;
            ciphertext += String.fromCharCode(encryptedCharCode);
        } else {
            ciphertext += char;
        }
    }

    document.getElementById('ciphertext').value = ciphertext;
    errorMessage.textContent = '';
}

function decrypt() {
    const ciphertext = document.getElementById('ciphertext').value;
    const key = parseInt(document.getElementById('key').value, 10);
    const errorMessage = document.getElementById('error-message');

    if (isNaN(key) || key < 0 || key > 25) {
        errorMessage.textContent = 'Please enter a valid key (0-25).';
        return;
    }

    let plaintext = '';
    for (let char of ciphertext) {
        if (char.match(/[a-z]/i)) {
            const charCode = char.charCodeAt(0);
            let base = charCode >= 65 && charCode <= 90 ? 65 : 97;
            let decryptedCharCode = ((charCode - base - key + 26) % 26) + base;
            plaintext += String.fromCharCode(decryptedCharCode);
        } else {
            plaintext += char;
        }
    }

    document.getElementById('plaintext').value = plaintext;
    errorMessage.textContent = '';
}
