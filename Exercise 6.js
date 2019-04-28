console.log('SOAL NOMOR 1')

console.log('LOOPING PERTAMA')

var angka = 1

while (angka <= 20){
  if (angka % 2 === 0){
    console.log(angka + ' - I love coding')
  }
  angka++
}

console.log('LOOPING KEDUA')

var angka = 20

while (angka >= 1 ){
  if (angka % 2 === 0){
    console.log(angka + ' - I will become fullstack developer')
  }
  angka--
}

console.log('SOAL NOMOR 2')

console.log('LOOPING PERTAMA')

for(var angka = 1; angka <= 20; angka++){
  console.log(angka + ' - I love coding')
}

console.log('LOOPING KEDUA')

for(var angka = 20; angka >= 1; angka--){
  console.log(angka + ' - I will become fullstack developer')
}

console.log('SOAL NOMOR 3')
console.log('Poin 1 & 2')

for (var angka = 1; angka <= 100; angka++){
  console.log("Counter sekarang " + angka)
  
  if (angka % 2 === 0){
    console.log("GENAP")
 } else {
   console.log("GANJIL")
 }
}

console.log('SOAL NOMOR 3')
console.log('Poin 3 & 4')

console.log('PERTAMBAHAN COUNTER 5')

for (var angka = 1; angka <= 100; angka+=2){
    console.log("counter sekarang = " + angka)
    if (angka % 3 === 0){
        console.log(angka + " KELIPATAN 3") 
    }
}
console.log('PERTAMBAHAN COUNTER 5')

for (var angka = 1; angka <= 100; angka+=5){ 
    console.log("counter sekarang = " + angka)
    if (angka % 6 === 0){
        console.log(angka +" KELIPATAN 6") 
     }
}
console.log('PERTAMBAHAN COUNTER 9')

for (var angka = 1; angka <= 100; angka+=9){
    console.log("counter sekarang = " + angka)
    if (angka % 10 === 0){
        console.log(angka +" KELIPATAN 10")
        }
}

