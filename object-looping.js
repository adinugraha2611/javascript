// membuat class schedule dengan parameter matkul1 sampai matkul6 dengan deafult value 'kosong'
let Schedule = function(matkul1='kosong', matkul2='kosong', matkul3='kosong', matkul4='kosong', matkul5='kosong', matkul6='kosong') {
	this.matkul1 = matkul1
	this.matkul2 = matkul2
	this.matkul3 = matkul3
	this.matkul4 = matkul4
	this.matkul5 = matkul5
	this.matkul6 = matkul6
};

// buat object hari dari senin sampai jumat yang berisi matkul-matkul pada hari tersebut
let senin = new Schedule('kalkulus', 'algoritma', 'bahasa inggris', 'kosong', 'kosong');
let selasa = new Schedule('Javascript', 'python', 'kosong', 'bahasa Jawa', 'kosong')
let rabu = new Schedule('kosong', 'algoritma', 'kosong', 'bahasa inggris', 'kosong')
let kamis = new Schedule('bahasa indonesia', 'kosong', 'kalkulus', 'algoritma', 'python', 'kosong')
let jumat = new Schedule('kalkulus', 'kosong', 'kosong')

// buat satu object lagi yang menampung semua object hari. (semacam nested object)
let jadwal = {senin, selasa, rabu, kamis, jumat}

/*
Jadi, sampai tahap ini, kita punya 2 tingkatan object:
1. object jadwal yang berisi object senin sampai object jumat
2. object senin sampai object jumat yang berisi matkul-matkul
misalkan kita mau menampilkan jadwal dari senin-jumat beserta semua isi matkulnya:
kita butuh
untuk loopingnya, kita gunakan for (keys in object). Penjelasannya ada di sini: http://javascript.info/object 	cari di bagian  Heading: "The “for…in” loop"  
Pada contoh ini, saya menggunakan nested loop, dimana loop pertama menampilkan isi object jadwal, yang juga berisi loop untuk menampilkan isi dari object senin sampai object jumat
*/


for (let isiJadwal in jadwal) {
	document.write(isiJadwal + ': <br>')	// senin: ... dst
	for (let isiMatkul in jadwal[isiJadwal]) {		// ini bukan array, tapi bentuk pemanggilan object dengan kurung siku ( http://javascript.info/object  bagian heading "Computed properties") 
		document.write(isiMatkul + ': ' + jadwal[isiJadwal][isiMatkul] + '<br>')	// matkul1: Kalkulus ... dst
	}
}


/*
sebenarnya bisa juga pakai forEach, tapi forEach pada dasarnya tidak bisa mengoperasikan loop pada object.
jadi, object yang akan kita loop harus dikonversi ke array dulu
caranya dengan memakai method Object.keys(namaObject) 
method ini akan me-return  isi object ke bentuk array.
dalam contoh ini, ketika kita menjalankan:
Object.keys(jadwal) 
maka akan di-return array berisi [senin, selasa, rabu, kamis, jumat]
penjelasan lebih lanjut: https://gomakethings.com/the-es6-way-to-loop-through-objects-with-vanilla-javascript/
Kalo pakai forEach, maka untuk mendapatkan hasil yang sama, code nya akan jadi seperti ini: 
*/

// Object.keys(jadwal).forEach(function(isiJadwal) {
// 	document.write(isiJadwal + ': <br>')
// 	Object.keys(jadwal[isiJadwal]).forEach(function(isiMatkul) {
// 		document.write(isiMatkul + ': ' + jadwal[isiJadwal][isiMatkul] + '<br>')
// 	})
// })

