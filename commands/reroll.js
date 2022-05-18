const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reroll')
		.setDescription('Replies with roles that user can set.'),
};