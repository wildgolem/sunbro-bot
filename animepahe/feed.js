const axios = require('axios');
const cheerio = require('cheerio');

function animepahe() {
    require('dotenv').config();
    const { EmbedBuilder, WebhookClient } = require('discord.js');
    const RssFeedEmitter = require('rss-feed-emitter');

    const webhook = new WebhookClient({ id: process.env.anya_id, token: process.env.anya_token });

    const feeder = new RssFeedEmitter();

    feeder.add({
        url: 'https://raw.githubusercontent.com/wildgolem/sunbro-bot/main/animepahe/animepahe-rss.xml',
        refresh: 300000,
    });

    feeder.on('new-item', function(item) {
        const image = searchImage(item);
        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${item.title.split(" ").slice(0, -3).join(" ")}`,
                iconURL: image,
                url: item.link
            })
            .setColor(0xD5015B)
            .setImage(`${item.description}`)
            .setFooter({ text: `${item.title.split(" ").slice(-2).join(" ")}` });

        webhook.send({ embeds: [embed] });
    });

    feeder.on('error', console.error);
}

async function searchImage(item) {
    try {
        const searchPage = await axios.get(`https://gogoanime3.net/search.html?keyword=${item.title.split(" ").slice(0, -3).join(" ")}&page=1`);
        const $ = cheerio.load(searchPage.data);
        return $('div.last_episodes > ul > li > div > a > img').attr('src');
       
    } catch (error) {
        console.error(error);
    }
}

module.exports = { animepahe };
