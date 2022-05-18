const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bonfire')
		.setDescription('Replies with roles that user can set.'),
};