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
                image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/949879763898605698/praisethesun.png' }
            }]
        }).catch(err => { });
    }
};