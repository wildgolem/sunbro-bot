const { all, explorer, casul } = require('../config.json');
module.exports = {
    name: "guildMemberAdd",
    on: true,
    execute(member) {
        var date = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour12: false, hour: '2-digit', minute: '2-digit' });
        console.log(`[${date}] ${member.user.username} joined the server.`);
        member.roles.add([casul, explorer]);
        member.guild.channels.cache.get(all).send({
            embeds: [{
                color: 15844367,
                author: {
                    name: `Praise the sun, ${member.user.username}!`,
                    icon_url: `${member.user.avatarURL()}`,
                },
                image: { url: 'https://cdn.discordapp.com/attachments/980907403279228958/980913140428570704/praise_the_sun.png' }
            }]
        }).catch(err => { });
    }
};