require('dotenv').config();
const { Events } = require('discord.js');

module.exports = {
	name: Events.VoiceStateUpdate,
	on: true,
	async execute(oldState, newState) {
		if (newState.channelId === process.env.coop) {
			const temp = await newState.guild.channels.create({
                name: `☊・𝚓𝚘𝚒𝚗`,
                type: 2,
                bitrate: 64000,
                parent: newState.channel.parent,
				userLimit: 69,
            }).catch(err => { });
            temp.lockPermissions();
            await newState.member.voice.setChannel(temp);
		}

		if (oldState.channel && oldState.channel.members.size === 0) {
			if (oldState.channelId !== process.env.coop) await oldState.channel.delete();
		}
	},
};