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
                description: `Praise the sun, casul!\nDo not forget to visit \n<#949940867769188422>.`
            }]
        }).catch(err => { });
    }
};