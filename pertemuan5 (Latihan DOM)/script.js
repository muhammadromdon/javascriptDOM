// Studi kasus 1, jika tombol diklik menambah warna, dan jika diklik kembali menjadi putih

const tombolUbah = document.getElementById('tUbahWarna')

tombolUbah.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class', 'biruMuda')
    document.body.classList.toggle('biruMuda')
}

// Studi kasus 2, menambah tombol menggunakan JS dan mengacak warna

const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')

tAcakWarna.appendChild(teksTombol)
tAcakWarna.setAttribute('type', 'button')

tombolUbah.after(tAcakWarna)

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})


// Studi kasus 3, mengubah warna dengan slider range

const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function () {
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sHijau.addEventListener('input', function () {
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sBiru.addEventListener('input', function () {
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// Studi kasus 4, mengubah warna ketika pointer mouse digerakkan

// document.body.addEventListener('mouseover', function (e) {
//     // posisi mouse diketahui dengan method clientX
//     // console.log(e.clientX)
//     // mengetahui ukuruan browser dengan method window.innerWidth
//     // console.log(window.innerWidth)

//     const xPos = Math.round(e.clientX / window.innerWidth * 255)

//     const yPos = Math.round(e.clientX / window.innerHeight * 255)

//     document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)'
// })