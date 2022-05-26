const { freemarket, explorer, casul} = require('../config.json');
module.exports = {
    name: "guildMemberAdd",
    on: true,
    execute(member) {
        member.roles.add([casul, explorer]);
        member.guild.channels.cache.get(freemarket).send({
            embeds: [{
                color: 15844367,
                author: {
                    name: `Praise the sun, ${member.user.username}!`,
                    icon_url: `${member.user.avatarURL()}`,
                },
                image: { url: 'https://cdn.discordapp.com/attachments/979172537193877504/979174871068196914/praise_the_sun.png' }
            }]
        }).catch(err => { });

        member.guild.channels.cache.get('979459775525957732').setName(`Members:  ${member.guild.members.cache.filter(member => !member.user.bot).size}`)
    }
};