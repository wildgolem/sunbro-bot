require('dotenv').config();
const { Events, EmbedBuilder, WebhookClient, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('./images/praise_the_sun.png');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
        /* const embed = new EmbedBuilder()
            .setTitle(`${member.name} has arrived.`)
            .setColor(0x6AA84F)
            .setImage('attachment://praise_the_sun.png');
        
        const webhook = new WebhookClient({ id: process.env.crow_id, token: process.env.crow_token });
                
        member.roles.add(process.env.casul);
		webhook.send({ embeds: [embed], files: [file] }); */
	},
};