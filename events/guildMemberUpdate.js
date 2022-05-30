const { freemarket, explorer, voice } = require('../config.json');
module.exports = {
    name: "guildMemberUpdate",
    on: true,
    execute(oldMember, newMember) {
        if (!newMember.user.bot) {
            if (!newMember.roles.cache.has(explorer) && newMember.roles.cache.has(voice)) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        color: 15844367,
                        author: {
                            name: `${newMember.user.username},`,
                            icon_url: `${newMember.user.avatarURL()}`,
                        },
                        description: `You cannot stay invisible in a voice chat,\n...go online and try again.`,
                        image: { url: 'https://cdn.discordapp.com/attachments/980907403279228958/980913613009215538/gitgud.png' }
                    }]
                }).catch(err => { });
            };
        };
    }
};