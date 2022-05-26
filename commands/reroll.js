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
      .setTitle("Change of heart ?")
      .setFooter({text: "Roll the die :"})
      .setImage('https://cdn.discordapp.com/attachments/979172537193877504/979172945396129792/bonfire.png');
		await interaction.channel.send({ embeds: [embedMessage], components: [row] });
	},
};