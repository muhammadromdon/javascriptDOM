// DOM Selection Method

// getElementsById mengembalikan element

// const judul = document.getElementById('judul')
// judul.style.backgroundColor = 'lightblue'

// getElementsByTagName mengembalikan HTMLCollections, HTMLCollections seperti array, setiap pemanggilan variabel harus diikuti nomor indexnya

// const p = document.getElementsByTagName('p')
// p[0].style.backgroundColor = 'lightblue'

// getElementByClass mengembalikan HTMLCollections

// const p = document.getElementsByClassName('p1')
// p[0].style.backgroundColor = 'lightblue';

// querySelector mengembalikan element

// const p = document.querySelector('section#b ul li:nth-child(2)')
// p.style.backgroundColor = 'lightblue'

// querySelectorALl memilih semua element dan mengembalikan nilai menjadi node list

// const p = document.querySelectorAll('p')
// p[0].innerHTML = 'ini diubah dari javascript'

// Mengubah node root

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = 'lightblue'