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

