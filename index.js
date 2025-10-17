const { Telegraf } = require("telegraf")

const BOT_KEY = "8458027195:AAEXzxdXkc8EllG0sEp3U_o00Cg9B_49dpw"

const bot = new Telegraf(BOT_KEY);

const Sentiment = require("sentiment")
const sentiment = new Sentiment()

bot.start((ctx)=>{
    return ctx.reply("Welcome to Mood Bot! Type in any word")
})

bot.hears(/.*/, (ctx)=>{
    const result = sentiment.analyze(ctx.message.text)
    return ctx.reply(`Score : ${result.score}\n Comparative Score: ${result.comparative}`)
})

bot.launch()