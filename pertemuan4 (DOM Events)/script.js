// DOM Events Javascript
// Cara membuat events bisa dilakukan dengan Event Handler yg meliputi Inline HTML Attr (menambah attr js di html) dan Element Method (event di script js), bisa juga menggunakan method terbaru addEventListener()

// Studi kasus pertama, merubah paragraf 3 saat diclick berubah warna background dengan method Inline HTML Attribute

const p3 = document.querySelector('.p3')

function ubahWarna() {                          // Untuk penggunaan Inline HTML Attribute tinggal tambahkan attribute onclick di HTMLnya
    p3.style.backgroundColor = 'lightblue'
}

// Studi kasus kedua, sama seperti yang pertama tapi menggunakan Element method

// const p4 = document.querySelector('section#b p')

// p4.onclick = function () {
//     p4.style.backgroundColor = 'lightblue'
// }

// Penggunaan element method tidak bisa dijalankan lebih dari 1, jadi jika 2 event dalam 1 element hanya akan dipilih 1..

// Studi kasus ke 3, menggunakan addEventListener, ketika diklik paragraf ke 4 maka akan menambah list baru

const p4 = document.querySelector('section#b p')

p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul')

    const liBaru = document.createElement('li')
    const teksLiBaru = document.createTextNode('list baru')

    liBaru.appendChild(teksLiBaru)
    ul.appendChild(liBaru)
})

// addEventListener method terbaru yang jika digunakan lebih dari 2 event maka akan ditambahkan dan terus dijalankan

// Studi kasus ke 4 menggunakan addEventListener untuk 2 event

const p1 = document.querySelector('.p1')

p1.addEventListener('click', function () {
    p1.style.backgroundColor = 'lightblue'
})

p1.addEventListener('click', function () {
    p1.style.color = 'lightgreen'
})


