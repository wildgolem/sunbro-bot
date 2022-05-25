const { SlashCommandBuilder } = require('@discordjs/builders');
const voiceDiscord = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('soundboard')
		.setDescription('Replies with roles that user can set.'),
	async execute(message) {
		const channel = message.member.voice.channel;
		if(!channel) return message.channel.send('Bro join a voice channel smh :wink:');

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/771978143699042334/978918117508001812/Emotional_Damage.mp3', { inlineVolume: true });

		const connection = voiceDiscord.joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});

        resource.volume.setVolume(0.1);
		player.play(resource);
		connection.subscribe(player);

		player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
	},
};