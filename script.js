const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';        
let key = '';
function generateKey(length, characters) {         
    while (key.length < length) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}
key = generateKey(15, characters);
console.log(key);










