const { guildId, status, bowmanStat, magicianStat, thiefStat, warriorStat, pirateStat, bowman, magician, thief, warrior, pirate } = require('../config.json');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logged in as ${client.user.tag}!`);
		client.user.setActivity("Jolly Coop", {
			type: "STREAMING",
			url: "https://www.twitch.tv/directory/game/Elden%20Ring"
		});

		let guild = client.guilds.cache.get(guildId);

		function statusCount() {
			guild.channels.cache.get(status).setName(`
			🌐 ${guild.members.cache.filter(m => !m.user.bot).size} 
			🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online' && !m.user.bot).size} 
			🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} 
			⛔ ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size}`);
			guild.channels.cache.get(bowmanStat).setName(`𝙱𝚘𝚠𝚖𝚊𝚗: ${guild.roles.cache.get(bowman).members.size}`);
			guild.channels.cache.get(magicianStat).setName(`𝙼𝚊𝚐𝚒𝚌𝚒𝚊𝚗: ${guild.roles.cache.get(magician).members.size}`);
			guild.channels.cache.get(thiefStat).setName(`𝚃𝚑𝚒𝚎𝚏: ${guild.roles.cache.get(thief).members.size}`);
			guild.channels.cache.get(warriorStat).setName(`𝚆𝚊𝚛𝚛𝚒𝚘𝚛: ${guild.roles.cache.get(warrior).members.size}`);
			guild.channels.cache.get(pirateStat).setName(`𝙿𝚒𝚛𝚊𝚝𝚎: ${guild.roles.cache.get(pirate).members.size}`);
		} statusCount();

		setInterval(() => {
			statusCount();
		}, 600000);
	},
};