const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bonfire',
    execute(interaction, client) {
        if (!interaction.isCommand()) return;

        if (interaction.commandName === 'bonfire') {
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
				.setFooter({ text: "Choose your class :" })
				.setImage('https://cdn.discordapp.com/attachments/771978143699042334/950612233518448670/bonfire.png');
			interaction.channel.send({ embeds: [embedMessage], components: [row] });
		}

        if (interaction.isButton()) {
            casul = '771985317489541120';
            beginner = "771985317489541120";

            bowman = "771931086271938561";
            magician = "771931082982686770";
            thief = "771931084657131550";
            warrior = "771931073587838987";
            pirate = "938891553601110106";

            member = interaction.member;

            if (interaction.customId == "bowman") {
                interaction.guild.roles.fetch(bowman).then(role => {
                    member.roles.add(role);
                    member.roles.remove(beginner);
                });
            } else if (interaction.customId == "magician") {
                interaction.guild.roles.fetch(magician).then(role => {
                    member.roles.add(role);
                    member.roles.remove(beginner);
                });
            } else if (interaction.customId == "thief") {
                interaction.guild.roles.fetch(thief).then(role => {
                    member.roles.add(role);
                    member.roles.remove(beginner);
                });
            } else if (interaction.customId == "warrior") {
                interaction.guild.roles.fetch(warrior).then(role => {
                    member.roles.add(role);
                    member.roles.remove(beginner);
                });
            } else if (interaction.customId == "pirate") {
                interaction.guild.roles.fetch(pirate).then(role => {
                    member.roles.add(role);
                    member.roles.remove(beginner);
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