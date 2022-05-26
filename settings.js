const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "Bang Chan" //namabot kalian
global.ownername= "Jewel" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA" //bebas asal jan hapus
global.github = "https://github.com/ghst0715" //bebas
global.email = "ghst0715@gmail.com" //bebas
global.region = "unknown" //bebas
global.ownernomer = "2349160204216" // nomor wa kalian
global.ownernomerr = "+2349160204216" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/lol.jpg" // foto donasi di folder image
global.background_welcome="./image/lol.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["2349160204216"] //ganti agar fitur owner bisa di gunakan
global.packname = '© SKZ' //sticker wm ubah
global.author = 'SKZ' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done',
    admin: 'This command can only be used by admin',
    botAdmin: 'This command can only be used when the bot becomes an admin!',
    owner: 'This command can only be used by the owner!',
    group: 'This command can only be used in groups!',
    private: 'This command can only be used in private!',
    bot: 'Bot Number User Special Features',
    errtoimg: 'Sorry, Currently Not Support Gif Sticker!',
    wait: '⏳ In Process',
    lockCmd: 'Feature Not Enabled By Owner!',
    example1: 'Welcome @user to the @subject group.Dont forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @date (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
