// const tombolClose = document.querySelector('.close')
// const card = document.querySelector('.card')

// tombolClose.onclick = function () {
//     card.style.display = 'none'
// }

// DOM Traversal adalah menelusuri elemen lalu mencari parentnya

// const tombolClose = document.querySelectorAll('.close')

// tombolClose.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault()                                                          // Fungsi untuk menghentikan aksi elemen
//         e.stopPropagation()                                                         // Fungsi untuk menghentikan event bubbling supaya tidak dijalankan
//     })
// })

// // DOM Traversal memiliki bbrp method seperti parentElement, parentNode, nextSibling, previousSibling, nextElementSibling dll

// // const nama = document.querySelector('.nama')

// // console.log(nama.previousElementSibling)

// const cards = document.querySelectorAll('.card')                                       // Contoh event bubbling

// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('ok')
//     })
// })

// Cara yang diatas kurang efektif, dibawah ini yang menggunakan event bubbling.. jika ada perubahan instant di html maka akan tetap dijalankan

const container = document.querySelector('.container')

container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none'
    }
})


