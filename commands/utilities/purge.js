const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Deletes last 100 messages.')
		.setDefaultMemberPermissions('0'),
	async execute(interaction) {
		await interaction.channel.bulkDelete(100).catch(console.error);
	},
};