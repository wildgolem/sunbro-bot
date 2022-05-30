const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reroll')
		.setDescription('Replies with roles that user can set.'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('reroll')
					.setEmoji('🎲')
					.setStyle('SECONDARY'),
			);
    const embedMessage = new MessageEmbed()
      .setColor("#f1c40f")
      .setTitle("Not 4/4? Go agane.")
      .setFooter({text: "Roll the die to change class:"})
      .setImage('https://cdn.discordapp.com/attachments/980907403279228958/980921175158960218/rolling.png');
		await interaction.channel.send({ embeds: [embedMessage], components: [row] });
	},
};