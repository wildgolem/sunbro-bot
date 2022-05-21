module.exports = {
    name: "guildMemberUpdate",
    on: true,
    execute(oldMember, newMember) {
        /* var date = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto" }); */

        if (!newMember.user.bot) {
            if (newMember.roles.cache.has('771985317489541120') && newMember.roles.cache.has('948585787111391272')) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        description: `[warning] 
                        \nYou need a class to join a voice chat.
                        \nGo to <#949940867769188422> at once!`
                    }]
                });
            } else if (newMember.roles.cache.has('948585787111391272') && newMember.roles.cache.has('841722936607637514')) {
                newMember.voice.setMute(false);
                newMember.voice.setDeaf(false);
            } else if (newMember.roles.cache.has('948585787111391272') && !newMember.roles.cache.has('841722936607637514')) {
                newMember.voice.setMute(true);
                newMember.voice.setDeaf(true);

                newMember.send({
                    embeds: [{
                        description: `[warning] 
                        \nYou will be timeout in 300 seconds for inactivity (invisible).
                        \nGo online, quick!`
                    }]
                });

                var timeout = setTimeout(function () {
                    if (newMember.roles.cache.has('948585787111391272') && !newMember.roles.cache.has('841722936607637514')) {
                        newMember.timeout(3600000, "Inactivity").then(() => newMember.send({
                            embeds: [{
                                color: 15844367,
                                description: `[inactivity] 
                            \n${newMember.user.username},`,
                                image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/952469466179063818/youdied.png' },
                                footer: { text: '...respawning in 60 minutes.' }
                            }]
                        })).then(msg => { setTimeout(() => msg.delete(), 3600000) }).catch(err => { });
                    };
                }, 300000);
            };
        };
    }
};