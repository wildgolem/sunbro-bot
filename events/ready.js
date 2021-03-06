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
			π ${guild.members.cache.filter(m => !m.user.bot).size} 
			π’ ${guild.members.cache.filter(m => m.presence?.status == 'online' && !m.user.bot).size} 
			π ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} 
			β ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size}`);
			guild.channels.cache.get(bowmanStat).setName(`π±ππ πππ: ${guild.roles.cache.get(bowman).members.size}`);
			guild.channels.cache.get(magicianStat).setName(`πΌπππππππ: ${guild.roles.cache.get(magician).members.size}`);
			guild.channels.cache.get(thiefStat).setName(`πππππ: ${guild.roles.cache.get(thief).members.size}`);
			guild.channels.cache.get(warriorStat).setName(`πππππππ: ${guild.roles.cache.get(warrior).members.size}`);
			guild.channels.cache.get(pirateStat).setName(`πΏπππππ: ${guild.roles.cache.get(pirate).members.size}`);
		} statusCount();

		setInterval(() => {
			statusCount();
		}, 600000);
	},
};