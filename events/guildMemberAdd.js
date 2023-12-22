require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
        const embed = new EmbedBuilder()
            .setColor(0x6AA84F)
            .setImage('./images/praise_the_sun.png')
            .setFooter(`${member.user.username} has arrived.`);
        
        const webhook = new WebhookClient({ id: process.env.crow_id, token: process.env.crow_token });
                
        member.roles.add(process.env.casul);
		webhook.send({ embeds: [embed] });
	},
};