// DEKLARASI VARIABEL
// ===================================================
// let nama = "Yusuf Firdaus"
// const umur = 24
// let alamat = "Jakarta"

// console.log("halo nama saya " + nama + "umur saya " + 24 + "saya tinggal di " + alamat);

// PERUBAHAN VARIABEL DENGAN OPERATOR MATEMATIKA
// let nama = "Yusuf Firdaus"
// let umurSekarang = 24
// let umurNanti = 5
// let totalUmur = umurSekarang + umurNanti;
// totalUmur = document.getElementById("hasil").innerHTML = `halo nama saya adalah: ${nama} umur saya saat ini adalah ${umurSekarang} kemudian pada saat 5 tahun lagi, umur saya menjadi ${totalUmur}`;

// FUNCTION DOM
function getData(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let password = document.getElementById("password").value;
    const hasil = document.getElementById("hasil");
    hasil.innerHTML = `
      <div class="container">
        <h3>Nama anda adalah : ${nama}</h3>
        <h3>Password anda adalah : ${password}</h3>
      </div>
    `;
    console.log(nama, password);
    alert("Data berhasil ditambah");
  }
  
  document.getElementById("submit").addEventListener("click", getData);
  
// namaSaya();
