let name;
let pass;
// menampung input dari user

let accounts = [
	['edi', '123', false], 
	['nugi', '123', true], 
	['yudhi', '2334', false], 
	['sugiyo', '123', false], 
	['ichsan', '551', false], 
	['budi', 'abc', false]];
function checkInput(i) {
	let counter = 0;
	let status = [];	// untuk menyimpan status log in dan indikator akun premium, apakah true atau false

	for (counter = 0; counter < i; counter++) {
		if ((name == accounts[counter][0])	// cek apakah nama telah terdaftar
		&& (pass == accounts[counter][1])) {	// cek apakah password benar
			alert(`Selamat Datang, ${name}!`);
			status = ['logged in', accounts[counter][2]];	// menyimpan status log in dan status akun premium true atau false
			break;
		} else {
			status = false;
		}
	}
	status || alert('Username or Password is wrong');	// sekedar menampilkan message jika salah input.
	return status;
}

function checkAccountType(data, guest, free, premium) {
	let loggedIn = data(accounts.length);	// callback pertama, yang akan menjalankan checkInput()
	if (loggedIn === false) guest()	// callback yang memanggil guestAcc() jika loggedIn === false
	else if (loggedIn[1] === false) free(name)	// callback yang memanggil freeAcc(name) jika status premium === false
	else if (loggedIn[1] === true) premium(name)	// callback yang memanggil premiumAcc(name) jika status premium === true
	else return 'error'
}

let guestAcc = function() {
	alert('You are not signed in.\nYou need to Sign in to leave a comment.');
}
let freeAcc = function(username) {
	alert(`You are logged in as a Free user.\nLeave a comment as "${username}.`)
} 
let premiumAcc = function(username) {
	alert(`${username}, You have unlimited Access! Watch or download all movies in UltraHD!`);
}

name = prompt('Username: ', '');
pass = prompt('Password: ', '');
checkAccountType(checkInput, guestAcc, freeAcc, premiumAcc)