const Angka = (a, b) => {
    let hasil = [];
    for(let i = a; i <= b; i++){
        hasil.push(i);
    }
    return hasil;
}

console.log(Angka(4, 8))