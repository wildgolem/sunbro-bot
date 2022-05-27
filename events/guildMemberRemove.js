const { freemarket, bowman, magician, thief, warrior, pirate } = require('../config.json');
module.exports = {
    name: "guildMemberRemove",
    on: true,
    execute(member) {
        console.log(`${member.user.username} left the server.`);
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

        member.guild.channels.cache.get('979876930302136360').setName(`
            👥${member.guild.members.cache.filter(m => !m.user.bot).size}
			🤖${member.guild.members.cache.filter(m => m.user.bot).size}
            🔊${member.guild.roles.cache.get(voice).members.size}`);
        member.guild.channels.cache.get('979874775503618068').setName(`
            🟢${member.guild.members.cache.filter(m => m.presence?.status == 'online').size}
			🌙${member.guild.members.cache.filter(m => m.presence?.status == 'idle').size}
			⛔${member.guild.members.cache.filter(m => m.presence?.status == 'dnd').size}`);
    }
};