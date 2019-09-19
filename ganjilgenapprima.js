// menentukan bilangan yang dimasukkan: apakah bilangan prima, ganjil, atau genap dengan mengimplementasikan || dan &&.
// logikanya, kalo bilangan bisa dibagi 2, maka genap
// sisa di bagi 2, maka ganjil
// ga bisa di bagi 2 atau 3, maka prima

let message;
let num = prompt("masukkan bilangan:", '');

message = (num%2 && num%3) ? `${num} adalah bilangan prima` :
	(num%2 == 0) ? `${num} adalah bilangan genap` :
	( (num%2 != 0) && (!isNaN(num))) ? `${num} adalah bilangan ganjil` :
	(num == 0) ? "0 adalah angka keramat" : 
	`${num} itu kayaknya bukan bilangan deh....` ; 
alert(message);