const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setAvatar('./images/sunbro.png');
		console.log(`Logged in as ${client.user.tag}!`);
        client.user.setActivity({
            name: "🇯🇵",
			type: ActivityType.Streaming,
			url: "https://www.twitch.tv/directory/game/Just%20Chatting?tl=Japan"
		});
	},
};