const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

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

		if (interaction.commandName === 'button') {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('primary')
						.setLabel('Primary')
						.setStyle('PRIMARY'),

					new MessageButton()
						.setCustomId('secondary')
						.setLabel('Secondary')
						.setStyle('SECONDARY'),
				);

			interaction.reply({ content: 'You ran the button command!', components: [row] });
		}
	},
};