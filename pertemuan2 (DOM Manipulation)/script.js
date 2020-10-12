// DOM MANIPULATION berbagai method untuk memanipulasi berbagai elemen.

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>Muhammad Romdon</em>'

// const judul = document.getElementsByTagName('h1')[0]
// judul.style.backgroundColor = 'orange'

// const href = document.querySelector('section#a a')
// console.log(href.getAttribute('href'))
// console.log(href.setAttribute('id', 'link'))
// console.log(href.removeAttribute('id'))

// const p2 = document.querySelector('.p2')            Set attribute tidak bagus untuk menambah class baru karena menghapus class yg sudah ada
// p2.setAttribute('class', 'label')

// Ada beberapa macam method dalam classList yaitu add, remove, toggle, item, contains, replace

const p2 = document.querySelector('.p2')
// console.log(p2.classList)
p2.classList.add('label')


function biruMuda() {
    const ubahBackground = document.body.classList.toggle('biruMuda')
}