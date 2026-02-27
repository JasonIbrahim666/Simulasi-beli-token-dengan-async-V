// console.log('praktek async\n')
// const tokens = [Math.random()*5]
// const picture = ['1.png', '2.img']

// function login(username, callback){
//     console.log('mengambil data.....')
//     setTimeout(()=>{
//         callback({username, tokens})
//     },2000)
// }

// function getapikey(token){
//     if(token) return {apikey: '0101' + [Math.random()*200]}
// }

// function getpic(pics){
//     if(pics) return picture
// }

// login('jason ibrahim', function(response){
//     const {tokens} = response
//     const api = getapikey(tokens)
//     console.log(api)
//     const pics = getpic(picture) 
//     console.log(pics)

// })


// // const log = login('jason')
// // console.log(log)
// // const apikey = getapikey(log.token)
// // console.log(apikey)
// // const pic = getpic(picture)
// // console.log(pic)

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hargatoken = ['20K', '50K', '100K', '150K', '200K', '250K', '300K']

function gettoken(callback){
    console.log('token sedang di proses......')
    const token = Math.random()*5
    setTimeout(()=>{
        console.log('token berhasil di proses!')
        callback(token)
    }, 3000)
}

console.log('=== PEMBAYARAN TOKEN ===')
for(let i = 0; i < hargatoken.length; i++)
console.log(`${i + 1}. ${hargatoken[i]}`)
rl.question('mau beli token yang berapa? (cukup pilih sesuai urutan number): ', function(answer){
    const pilihan = parseInt(answer)
    if(pilihan >= 1 && pilihan <= hargatoken.length){
        gettoken(function(hasil){
            console.log(hasil)
            rl.close()
        })
    }
})
