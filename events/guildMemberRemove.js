const { all } = require('../config.json');
module.exports = {
    name: "guildMemberRemove",
    on: true,
    execute(member) {
        console.log(`[${date}] ${member.user.username} left the server.`);
        member.guild.channels.cache.get(all).send({
            embeds: [{
                color: 15844367,
                author: {
                    name: `${member.user.username},`,
                    icon_url: `${member.user.avatarURL()}`,
                },
                image: { url: 'https://cdn.discordapp.com/attachments/980907403279228958/980913466393129030/you_died.png' },
                footer: { text: 'a casul left us.' }
            }]
        }).catch(err => { });
    }
};