const { freemarket, explorer, bowman, magician, thief, warrior, pirate, casul } = require('../config.json');
module.exports = {
    name: "guildMemberAdd",
    on: true,
    execute(member) {
        console.log(`${member.user.username} joined the server.`);
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

        member.guild.channels.cache.get('979864263575351316')
            .setName(`👥${member.guild.memberCount} 
					🟢${member.guild.members.cache.filter(m => m.presence?.status == 'online').size} 
					🌙${member.guild.members.cache.filter(m => m.presence?.status == 'idle').size} 
					⛔${member.guild.members.cache.filter(m => m.presence?.status == 'dnd').size}`);
        member.guild.channels.cache.get('979867714099220490').setName(`Bowman: ${member.guild.roles.cache.get(bowman).members.size}`);
        member.guild.channels.cache.get('979867725671317564').setName(`Magician: ${member.guild.roles.cache.get(magician).members.size}`);
        member.guild.channels.cache.get('979867737201455124').setName(`Thief: ${member.guild.roles.cache.get(thief).members.size}`);
        member.guild.channels.cache.get('979867748450582628').setName(`Warrior: ${member.guild.roles.cache.get(warrior).members.size}`);
        member.guild.channels.cache.get('979867757996810311').setName(`Pirate: ${member.guild.roles.cache.get(pirate).members.size}`);
    }
};