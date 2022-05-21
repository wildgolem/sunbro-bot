const { explorer, voice, casul } = require('../config.json');
module.exports = {
    name: "guildMemberUpdate",
    on: true,
    execute(oldMember, newMember) {
        if (!newMember.user.bot) {
            if (newMember.roles.cache.has(casul) && newMember.roles.cache.has(voice)) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        color: 15844367,
                        description: `${newMember.user.username},\nYou need a class to join a voice chat.\nGo to <#949940867769188422> at once!`
                    }]
                }).catch(err => { });
            } else if (!newMember.roles.cache.has(explorer) && newMember.roles.cache.has(voice)) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        color: 15844367,
                        description: `${newMember.user.username},`,
                        image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/952469466179063818/youdied.png' },
                        footer: { text: `You cannot stay in a voice chat invisible,\n. . . go online and try again.` }
                    }]
                }).catch(err => { });
            };
        };
    }
};