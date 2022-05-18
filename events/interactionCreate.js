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

		if (interaction.commandName === 'bonfire') {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('bowman')
						.setLabel('Bowman')
						.setStyle('SECONDARY'),

					new MessageButton()
						.setCustomId('magician')
						.setLabel('Magician')
						.setStyle('SECONDARY'),

					new MessageButton()
						.setCustomId('thief')
						.setLabel('Thief')
						.setStyle('SECONDARY'),

					new MessageButton()
						.setCustomId('warrior')
						.setLabel('Warrior')
						.setStyle('SECONDARY'),

					new MessageButton()
						.setCustomId('pirate')
						.setLabel('Pirate')
						.setStyle('SECONDARY'),
				);

			const embedMessage = new MessageEmbed()
				.setColor("#f1c40f")
				.setTitle("Howdy, casul.")
				.setFooter({ text: "Choose your class :" })
				.setImage('https://cdn.discordapp.com/attachments/771978143699042334/950612233518448670/bonfire.png');
			interaction.channel.send({ embeds: [embedMessage], components: [row] });
		}

		if (interaction.commandName === 'reroll') {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('reroll')
						.setEmoji('🎲')
						.setStyle('SECONDARY'),
				);

			const embedMessage = new MessageEmbed()
				.setColor("#f1c40f")
				.setTitle("Change of heart ?")
				.setFooter({ text: "Roll the die :" })
				.setImage('https://cdn.discordapp.com/attachments/771978143699042334/950612233518448670/bonfire.png');
			interaction.channel.send({ embeds: [embedMessage], components: [row] });
		}
	},
};