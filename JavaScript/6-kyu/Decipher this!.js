function decipherThis(str) {
  const words = str.split(' ');

  const decryptedWords = words.map(word => {
    const charCode = word.match(/^\d+/)[0];
    const firstLetter = String.fromCharCode(charCode);

    let decrypted = word.replace(/^\d+/, firstLetter);

    if (decrypted.length > 2) {
      const secondLetter = decrypted[1];
      const lastLetter = decrypted[decrypted.length - 1];
      decrypted = decrypted.slice(0, 1) + lastLetter + decrypted.slice(2, -1) + secondLetter;
    }

    return decrypted;
  });

  return decryptedWords.join(' ');
}
