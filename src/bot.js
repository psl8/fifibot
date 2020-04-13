var counter = 0
const fifiisms = [
  'pfft',
  'loser',
  '\u{1F602}',
  '*hissing noises*',
  'nani'
]

function getMessage () {
  var fifiism = fifiisms[counter++ % fifiisms.length]
  if (counter % 69 === 0) {
    fifiism = "Yes, ma'am"
  }
  return fifiism
}

// Run dotenv
require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content.includes('\u{1F97A}')) {
    msg.channel.send(getMessage())
  }
})

client.login(process.env.DISCORD_TOKEN)
