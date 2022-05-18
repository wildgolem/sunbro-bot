module.exports = {
    name: 'bonfire',
    execute(interaction, client) {
        if (interaction.isButton()) {
            booster = "756223561911500861";
            explorer = "841722936607637514";
            casul = '771985317489541120';
            voice = '948585787111391272';
            mod = '797925442962194434';
            beginner = "771985317489541120";

            bowman = "771931086271938561";
            magician = "771931082982686770";
            thief = "771931084657131550";
            warrior = "771931073587838987";
            pirate = "938891553601110106";

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
            } else if (interaction.customId == "bowman") {
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