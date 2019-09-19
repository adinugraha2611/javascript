let isAdmin;
let age = prompt("Masukkan umur Anda: ", '');
(age >= 18)
? ( 
	(isAdmin  = confirm("Tekan \"Ok\" jika Anda  Admin!")) 
	? alert("Hello, Boss! Anda masuk sebagai Administrator.")
	: alert("Hallo, Anda masuk sebagai guest.") 
	)
: (age < 18) ? alert("Anda belum cukup umur!")
: alert("Masukkan angka!"); 