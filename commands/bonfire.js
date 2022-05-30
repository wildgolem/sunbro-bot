const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bonfire')
		.setDescription('Replies with roles that user can set.'),
	async execute(interaction) {
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
      .setFooter({text: "Select your class to git gud:"})
      .setImage('https://cdn.discordapp.com/attachments/980907403279228958/980923358159994940/bonfire.png');
		await interaction.channel.send({ embeds: [embedMessage], components: [row] });
	},
};