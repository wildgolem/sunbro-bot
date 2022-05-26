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
                image: { url: 'https://cdn.discordapp.com/attachments/979172537193877504/979176398348484719/you_died.png' },
                footer: { text: 'A casul left us.' }
            }]
        }).catch(err => { });

        member.guild.channels.cache.get('979459775525957732').setName(`Members:  ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
    }
};