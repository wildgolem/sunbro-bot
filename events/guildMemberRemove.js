require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('../images/you_died.png');

module.exports = {
	name: Events.GuildMemberRemove,
	execute(member) {
        /* const embed = new EmbedBuilder()
			.setFooter(`Git gud ${member}.`)
            .setColor(0xCC0000)
			.setImage('attachment://you_died.png');

		const webhook = new WebhookClient({ id: process.env.crow_id, token: process.env.crow_token });
        
		webhook.send({ embeds: [embed], files: [file] }); */
	},
};