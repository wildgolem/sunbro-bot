const { freemarket, explorer, voice } = require('../config.json');
module.exports = {
    name: "guildMemberUpdate",
    on: true,
    execute(oldMember, newMember) {
        if (!newMember.user.bot) {
            if (newMember.roles.cache.has(explorer) && newMember.roles.cache.has(voice)) {
                newMember.voice.setMute(false).catch(err => { });
                newMember.voice.setDeaf(false).catch(err => { });

                newMember.guild.channels.cache.get(freemarket).send({
                    embeds: [{
                        color: 15844367,
                        author: {
                            name: `${newMember.user.username} has joined a voice chat!`,
                            icon_url: `${newMember.user.avatarURL()}`,
                        }
                    }]
                }).then(msg => { setTimeout(() => msg.delete().catch(err => { }), 30000) });
            } else if (!newMember.roles.cache.has(explorer) && newMember.roles.cache.has(voice)) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        color: 15844367,
                        author: {
                            name: `${newMember.user.username},`,
                            icon_url: `${newMember.user.avatarURL()}`,
                        },
                        description: `You cannot stay invisible in a voice chat,\n...go online and try again.`,
                        image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/977739605019349033/gitgud.png' }
                    }]
                }).catch(err => { });
            };
        };
    }
};