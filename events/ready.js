const { guildId } = require('../config.json');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logged in as ${client.user.tag}!`);
		client.user.setActivity("Jolly Coop", {
			type: "STREAMING",
			url: "https://www.twitch.tv/directory/game/Elden%20Ring"
		});

		let memberCount = client.guilds.cache.get(guildId).memberCount;
		client.guilds.cache.get(guildId).channels.cache.get('979831700257386496').setName(`Members: ${memberCount}`);
	},
};