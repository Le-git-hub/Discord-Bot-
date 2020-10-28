const Discord = require('discord.js');
const bot = new Discord.Client();
const LIVE = '770580545784119296'
const im_sub = '760930796075876373'
const token = 'NzYxNDgyMTUxMjcwOTQwNjgy.X3bPhA.I9vDN6Ezx18NfoghS_032gvQsRk';
const light_black = '761556575764086844'
const green = '761556670253760512'
const orange = '761556820493860884'
const light_blue = '761556894371414056'

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('sub to cocoGG');
    bot.user.setActivity('To CocoGG', { type: 'Sub'}).catch(console.error);


})
bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + '!הצטרף לשרת')
})
bot.on('messageDelete', member => {
    message.member.roles.add(LIVE)
})
bot.on('message', (message) => {

    
    if (message.content == '!im sub') {
        message.member.roles.add(im_sub)
    }
    else if (message.content == '!gray') {
        
        message.member.roles.add(light_black)
    }
    else if (message.content == '!green') {
        
        message.member.roles.add(green)
    }
    else if (message.content == '!orange') {
        
        message.member.roles.add(orange)
    }
    else if (message.content == '!cyan') {
        
        message.member.roles.add(light_blue)
    }
})


bot.login(process.env.token);
