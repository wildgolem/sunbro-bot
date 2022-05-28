const { explorer } = require('../config.json');
module.exports = {
    name: "presenceUpdate",
    on: true,
    execute(oldPresence, newPresence) {
        if (newPresence.status !== "offline") {
            newPresence.member.roles.add(explorer);
        } else {
            newPresence.member.roles.remove(explorer);
        };

        newPresence.member.guild.channels.cache.get('979911051787268176').setName(`
            👥${newPresence.member.guild.members.cache.filter(m => !m.user.bot).size}  
            🟢${newPresence.member.guild.members.cache.filter(m => m.presence?.status == 'online').size}  
			🌙${newPresence.member.guild.members.cache.filter(m => m.presence?.status == 'idle').size}  
			⛔${newPresence.member.guild.members.cache.filter(m => m.presence?.status == 'dnd').size}`);
    }
};