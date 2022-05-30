const { SlashCommandBuilder } = require('@discordjs/builders');
const voiceDiscord = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('soundboard')
		.setDescription('Replies with roles that user can set.'),
	execute(message) {
		const channel = message.member.voice.channel;
		if(!channel) return;

		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913781574107156/emotional_damage.mp3', { inlineVolume: true });

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