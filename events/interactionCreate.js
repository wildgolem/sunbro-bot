module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		if (!interaction.isCommand()) return;

		if (interaction.commandName === 'ping') {
			return interaction.reply('Pong!');
		}

		if (interaction.commandName === 'server') {
			return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		}
	},
};