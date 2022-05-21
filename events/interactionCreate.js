module.exports = {
    name: 'interactionCreate',
    on: true,
    async execute(interaction, client) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (interaction.commandName === 'ping') {
            return interaction.reply('Pong!');
        }

        if (interaction.commandName === 'server') {
            return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        }

        // class
        if (interaction.isButton()) {
            booster = "756223561911500861";
            mod = '797925442962194434';
            explorer = "841722936607637514";
            voice = '948585787111391272';

            casul = '771985317489541120';
            bowman = "771931086271938561";
            magician = "771931082982686770";
            thief = "771931084657131550";
            warrior = "771931073587838987";
            pirate = "938891553601110106";

            member = interaction.member;

            if (interaction.customId == "reroll") {
                interaction.guild.roles.fetch(casul).then(role => {
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
            } else if (interaction.customId == "bowman") {
                interaction.guild.roles.fetch(bowman).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                });
            } else if (interaction.customId == "magician") {
                interaction.guild.roles.fetch(magician).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                });
            } else if (interaction.customId == "thief") {
                interaction.guild.roles.fetch(thief).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                });
            } else if (interaction.customId == "warrior") {
                interaction.guild.roles.fetch(warrior).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                });
            } else if (interaction.customId == "pirate") {
                interaction.guild.roles.fetch(pirate).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                });
            };
            interaction.deferUpdate();
        };

        //error catch
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
        }
    },
};