const { guildId, bowman, magician, thief, warrior, pirate } = require('../config.json');
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
			guild.channels.cache.get('979984161165168700').setName(`
			🌐 ${guild.members.cache.filter(m => !m.user.bot).size} 
			🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online' && !m.user.bot).size} 
			🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} 
			⛔ ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size}`);
			guild.channels.cache.get('979867714099220490').setName(`𝙱𝚘𝚠𝚖𝚊𝚗: ${guild.roles.cache.get(bowman).members.size}`);
			guild.channels.cache.get('979867725671317564').setName(`𝙼𝚊𝚐𝚒𝚌𝚒𝚊𝚗: ${guild.roles.cache.get(magician).members.size}`);
			guild.channels.cache.get('979867737201455124').setName(`𝚃𝚑𝚒𝚎𝚏: ${guild.roles.cache.get(thief).members.size}`);
			guild.channels.cache.get('979867748450582628').setName(`𝚆𝚊𝚛𝚛𝚒𝚘𝚛: ${guild.roles.cache.get(warrior).members.size}`);
			guild.channels.cache.get('980262199895416912').setName(`𝙿𝚒𝚛𝚊𝚝𝚎: ${guild.roles.cache.get(pirate).members.size}`);
		} statusCount();

		setInterval(() => {
			statusCount();
		}, 600000);
	},
};