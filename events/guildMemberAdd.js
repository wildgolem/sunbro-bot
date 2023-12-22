require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
        const embed = new EmbedBuilder()
            .setColor(0x6AA84F)
            .setTitle('Welcome to BLACKSMITH!')
            .setDescription(`${member.user.username} has joined us.`);
        
        const webhook = new WebhookClient({ id: process.env.crow_id, token: process.env.crow_token });
                
        member.roles.add(process.env.casul);
		webhook.send({ embeds: [embed] });
	},
};