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

		let guild = client.guilds.cache.get('705866849832665238')
		const roleBowman = guild.roles.cache.get(bowman);
		const roleMagician = guild.roles.cache.get(magician);
		const roleThief = guild.roles.cache.get(thief);
		const roleWarrior = guild.roles.cache.get(warrior);
		const rolePirate = guild.roles.cache.get(pirate);
        guild.channels.cache.get('979459775525957732').setName(`💠 Members:  ${guild.members.cache.filter(member => !member.user.bot).size}`)
		guild.channels.cache.get('979471751316668536').setName(`🟢 Bownman:  ${roleBowman.members.size}`)
		guild.channels.cache.get('979477845980114954').setName(`🔵 Magician: ${roleMagician.members.size}`)
		guild.channels.cache.get('979475788552343552').setName(`🟠 Thief:    ${roleThief.members.size}`)
		guild.channels.cache.get('979475820009619476').setName(`🔴 Warrior:  ${roleWarrior.members.size}`)
		guild.channels.cache.get('979475831262941215').setName(`🟣 Pirate:   ${rolePirate.members.size}`)


		function statusCount() {
			client.channels.cache.get('979463424075513956')
			.setName(`🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online').size} 🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} ⛔ ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size} ⚫ ${guild.members.cache.filter(m => m.presence?.status == 'offline' || !m.presence).size}`)
		} statusCount()

		setInterval(() => {
			statusCount()
		}, 300000)
	},
};