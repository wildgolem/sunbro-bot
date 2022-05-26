const { bowman, magician, thief, warrior, pirate } = require('../config.json');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logged in as ${client.user.tag}!`);
		client.user.setActivity("Jolly Coop", {
			type: "STREAMING",
			url: "https://www.twitch.tv/directory/game/Elden%20Ring"
		});

		let guild = client.guilds.cache.get('705866849832665238');
		client.channels.cache.get('979459775525957732').setName(`💠 Members:  ${guild.members.cache.filter(member => !member.user.bot).size}`);
	},
};