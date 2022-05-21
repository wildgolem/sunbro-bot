const { booster, mod, explorer, voice, casul, bowman, magician, thief, warrior, pirate } = require('../config.json');
module.exports = {
    name: 'interactionCreate',
    on: true,
    async execute(interaction, client) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        // ping
        if (interaction.commandName === 'ping') {
            return interaction.reply('Pong!');
        }

        // server
        if (interaction.commandName === 'server') {
            return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        }

        // class
        if (interaction.isButton()) {
            member = interaction.member;

            if (interaction.customId == "reroll") {
                interaction.guild.roles.fetch(casul).then(role => {
                    if (member.roles.cache.has(booster)) {
                        if (member.roles.cache.has(mod)) {
                            member.roles.set([role, explorer, booster, mod, voice]);
                        } else {
                            member.roles.set([role, explorer, booster, voice]);
                        }
                    } else {
                        member.roles.set([role, explorer, voice]);
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