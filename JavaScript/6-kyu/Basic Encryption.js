function encrypt(text, rule) {
  let encrypted = "";
  
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let encryptedCode = (charCode + rule) % 256;
    encrypted += String.fromCharCode(encryptedCode);
  }
  
  return encrypted;
}
