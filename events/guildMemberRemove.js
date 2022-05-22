const { freemarket } = require('../config.json');
module.exports = {
    name: "guildMemberRemove",
    on: true,
    execute(member) {
        member.guild.channels.cache.get(freemarket).send({
            embeds: [{
                color: 15844367,
                author: {
                    name: `${member.user.username},`,
                    icon_url: `${member.user.avatarURL()}`,
                },
                image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/952469466179063818/youdied.png' },
                footer: { text: 'A casul left us.' }
            }]
        }).catch(err => { });
    }
};