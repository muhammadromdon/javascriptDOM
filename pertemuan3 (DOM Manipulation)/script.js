// DOM Manipulation
// Bagian memanipulasi node

const pBaru = document.createElement('p')                           // Create elemen lalu tambahkan textnya
const teksPBaru = document.createTextNode('Paragraf Baru')

pBaru.appendChild(teksPBaru)                                        // Setelah membuat elemen, kemudian masukkan var teksPBaru ke memori

const sectionA = document.getElementById('a')                       // Langkah akhir seleksi dulu dibagian mana elemen mau ditambahkan lalu tambah dengan method appendChild

sectionA.appendChild(pBaru)

// Studi kasus lain dengan menambahkan elemen ditengah" dengan insertBefore

const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('item baru')

liBaru.appendChild(teksLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2)

// Studi kasus lain untuk menghapus node dengan removeChild

const link = document.getElementsByTagName('a')[0]

sectionA.removeChild(link)

// Studi kasus mengganti node dengan replaceNode

const sectionB = document.getElementById('b')

const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru')
h2Baru.appendChild(teksH2Baru)

sectionB.replaceChild(h2Baru, p4)

