const { explorer, casul } = require('../config.json');
module.exports = {
    name: "guildMemberAdd",
    on: true,
    execute(member) {
        member.roles.add([casul, explorer]);
        member.guild.channels.cache.get("720747631432826920").send({
            embeds: [{
                color: 15844367,
                author: {
                    name: `${member.user.username}`,
                    icon_url: `${member.user.avatarURL()}`,
                },
                description: `Welcome to the server, casul!\nDo not forget to choose your class at \n<#949940867769188422>.`
            }]
        }).catch(err => { });
    }
};