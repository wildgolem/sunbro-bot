const { booster, mod, explorer, casul, bowman, magician, thief, warrior, pirate } = require('../config.json');
module.exports = {
    name: 'interactionCreate',
    on: true,
    async execute(interaction, client) {
        console.log(`${interaction.user.tag} triggered an interaction in #${interaction.channel.name}.`);

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
                    member.voice.disconnect();
                    if (member.roles.cache.has(booster)) {
                        if (member.roles.cache.has(mod)) {
                            if (member.roles.cache.has(explorer)) {
                                member.roles.set([role, explorer, booster, mod]);
                            } else {
                                member.roles.set([role, booster, mod]);
                            }
                        } else {
                            if (member.roles.cache.has(explorer)) {
                                member.roles.set([role, explorer, booster]);
                            } else {
                                member.roles.set([role, booster]);
                            }
                        }
                    } else {
                        if (member.roles.cache.has(mod)) {
                            if (member.roles.cache.has(explorer)) {
                                member.roles.set([role, explorer, mod]);
                            } else {
                                member.roles.set([role, mod]);
                            }
                        } else {
                            if (member.roles.cache.has(explorer)) {
                                member.roles.set([role, explorer]);
                            } else {
                                member.roles.set([role]);
                            }
                        }
                    };
                });
                member.guild.channels.cache.get('979867714099220490').setName(`Bowman: ${member.guild.roles.cache.get(bowman).members.size}`);
                member.guild.channels.cache.get('979867725671317564').setName(`Magician: ${member.guild.roles.cache.get(magician).members.size}`);
                member.guild.channels.cache.get('979867737201455124').setName(`Thief: ${member.guild.roles.cache.get(thief).members.size}`);
                member.guild.channels.cache.get('979867748450582628').setName(`Warrior: ${member.guild.roles.cache.get(warrior).members.size}`);
                member.guild.channels.cache.get('979867757996810311').setName(`Pirate: ${member.guild.roles.cache.get(pirate).members.size}`);
            } else if (interaction.customId == "bowman") {
                interaction.guild.roles.fetch(bowman).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                    member.guild.channels.cache.get('979867714099220490').setName(`Bowman: ${member.guild.roles.cache.get(bowman).members.size}`);
                });
            } else if (interaction.customId == "magician") {
                interaction.guild.roles.fetch(magician).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                    member.guild.channels.cache.get('979867725671317564').setName(`Magician: ${member.guild.roles.cache.get(magician).members.size}`);
                });
            } else if (interaction.customId == "thief") {
                interaction.guild.roles.fetch(thief).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                    member.guild.channels.cache.get('979867737201455124').setName(`Thief: ${member.guild.roles.cache.get(thief).members.size}`);
                });
            } else if (interaction.customId == "warrior") {
                interaction.guild.roles.fetch(warrior).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                    member.guild.channels.cache.get('979867748450582628').setName(`Warrior: ${member.guild.roles.cache.get(warrior).members.size}`);
                });
            } else if (interaction.customId == "pirate") {
                interaction.guild.roles.fetch(pirate).then(role => {
                    member.roles.add(role);
                    member.roles.remove(casul);
                    member.guild.channels.cache.get('979867757996810311').setName(`Pirate: ${member.guild.roles.cache.get(pirate).members.size}`);
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