const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bonfire',
    execute(interaction, client) {
        if (!interaction.isCommand()) return;

        if (interaction.commandName === 'reroll') {
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
				.setFooter({ text: "Roll the die :" })
				.setImage('https://cdn.discordapp.com/attachments/771978143699042334/950612233518448670/bonfire.png');
			interaction.channel.send({ embeds: [embedMessage], components: [row] });
		}

        if (interaction.isButton()) {
            booster = "756223561911500861";
            explorer = "841722936607637514";
            casul = '771985317489541120';
            voice = '948585787111391272';
            mod = '797925442962194434';
            beginner = "771985317489541120";

            member = interaction.member;

            if (interaction.customId == "reroll") {
                interaction.guild.roles.fetch(beginner).then(role => {
                    if (member.roles.cache.has(booster)) {
                        if (member.roles.cache.has(mod)) {
                            member.roles.set([role, explorer, booster, mod]);
                        } else {
                            member.roles.set([role, explorer, booster]);
                        }
                    } else {
                        member.roles.set([role, explorer]);
                    };
                });
            };
            interaction.deferUpdate();
        };

        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            command.execute(interaction);
        } catch (error) {
            console.error(error);
            interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
        }
    },
};