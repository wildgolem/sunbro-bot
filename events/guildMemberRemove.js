require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
	name: Events.GuildMemberRemove,
	execute(member) {
        const embed = new EmbedBuilder()
            .setColor(0xCC0000)
			.setImage('./images/you_died.png')
			.setFooter(`git gud ${member.user.username}.`);

		const webhook = new WebhookClient({ id: process.env.crow_id, token: process.env.crow_token });
        
		webhook.send({ embeds: [embed] });
	},
};