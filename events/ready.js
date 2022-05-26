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

		client.channels.cache.get('979459775525957732').setName(`Members:  ${client.guilds.cache.get(guildId).members.cache.filter(member => !member.user.bot).size}`)
	},
};