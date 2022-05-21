module.exports = {
    name: "guildMemberUpdate",
    on: true,
    execute(oldMember, newMember) {
        if (!newMember.user.bot) {
            if (newMember.roles.cache.has('771985317489541120') && newMember.roles.cache.has('948585787111391272')) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        color: 15844367,
                        description: `${newMember.user.username},\nYou need a class to join a voice chat.\nGo to <#949940867769188422> at once!`
                    }]
                }).catch(err => { });
            } else if (newMember.roles.cache.has('948585787111391272') && !newMember.roles.cache.has('841722936607637514')) {
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