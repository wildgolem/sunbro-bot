module.exports = {
    name: "guildMemberUpdate",
    on: true,
    execute(oldMember, newMember) {
        let newUpdate = newMember.member;
        let oldUpdate = oldMember.member;
        var date = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto" });
        /* const channel = message.client.channels.cache.get('720747631432826920'); */

        if (newMember.roles.cache.has('771929833306849300') &&
            newMember.roles.cache.has('771931086271938561')) {
            newMember.roles.add('950859199347318884');
        } else if (newMember.roles.cache.has('771929833306849300') &&
            newMember.roles.cache.has('771931082982686770')) {
            newMember.roles.add('950862979337949194');
        } else if (newMember.roles.cache.has('771929833306849300') &&
            newMember.roles.cache.has('771931084657131550')) {
            newMember.roles.add('950863034706980935');
        } else if (newMember.roles.cache.has('771929833306849300') &&
            newMember.roles.cache.has('771931073587838987')) {
            newMember.roles.add('950863040482517054');
        } else if (newMember.roles.cache.has('771929833306849300') &&
            newMember.roles.cache.has('938891553601110106')) {
            newMember.roles.add('950863042470613035');
        };


        if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771951445758312478')) {
            newMember.roles.add('950926443746037820');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771951442989940736')) {
            newMember.roles.add('950926497965805588');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771953982440210454')) {
            newMember.roles.add('950926500780187648');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771953665383989279')) {
            newMember.roles.add('950926502701187093');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771953981249290250')) {
            newMember.roles.add('950926505955983362');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771950293049933865')) {
            newMember.roles.add('950926508279615568');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771950295881482270')) {
            newMember.roles.add('950926510557122590');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771952046650818570')) {
            newMember.roles.add('950926512884944896');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771952048471146546')) {
            newMember.roles.add('950926515032440882');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('771952847251046420')) {
            newMember.roles.add('950926517406421012');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('938893272930197514')) {
            newMember.roles.add('950926519490990181');
        } else if (newMember.roles.cache.has('771929840226926593') &&
            newMember.roles.cache.has('938893731279568966')) {
            newMember.roles.add('950926519839117352');
        };


        if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771951604084768789')) {
            newMember.roles.add('950928242326523915');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771951602738135050')) {
            newMember.roles.add('950928244687921153');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771954214897057853')) {
            newMember.roles.add('950928246063628320');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771954211180642345')) {
            newMember.roles.add('950928248257265734');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771954212946051093')) {
            newMember.roles.add('950928249037422612');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771952036844404766')) {
            newMember.roles.add('950928249771393045');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771952039793000458')) {
            newMember.roles.add('950928249955942420');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771952849658839070')) {
            newMember.roles.add('950928250606067754');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771952850564808704')) {
            newMember.roles.add('950928250840973363');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('771952851366314005')) {
            newMember.roles.add('950928279160914010');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('938893325761650698')) {
            newMember.roles.add('950928282654765136');
        } else if (newMember.roles.cache.has('771929840504274977') &&
            newMember.roles.cache.has('938893819796148264')) {
            newMember.roles.add('950928282881253396');
        };


        if (!newMember.user.bot) {
            if (newMember.roles.cache.has('771985317489541120') && newMember.roles.cache.has('948585787111391272')) {
                newMember.voice.disconnect();
                newMember.send({
                    embeds: [{
                        description: `[warning] 
                        \nYou need a class to join a voice chat.
                        \nGo to <#949940867769188422> at once!`
                    }]
                }).catch(err => { });
            } else if (newMember.roles.cache.has('948585787111391272') && newMember.roles.cache.has('841722936607637514')) {
                newMember.voice.setMute(false);
                newMember.voice.setDeaf(false);

                /* channel.send({
                    embeds: [{
                        color: 15844367,
                        description: `[alert] 
                        \n${newMember.user.username} has joined a voice chat!`,
                        image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/949879763898605698/praisethesun.png' }
                    }]
                }).then(msg => { setTimeout(() => msg.delete(), 60000) }).catch(err => { }); */
            } else if (newMember.roles.cache.has('948585787111391272') && !newMember.roles.cache.has('841722936607637514')) {
                newMember.voice.setMute(true).catch(err => { });
                newMember.voice.setDeaf(true).catch(err => { });

                newMember.send({
                    embeds: [{
                        description: `[warning] 
                        \nYou will be timeout in 300 seconds for inactivity (invisible).`
                    }]
                }).catch(err => { });

                var timeout = setTimeout(function () {
                    if (newMember.roles.cache.has('948585787111391272') && !newMember.roles.cache.has('841722936607637514')) {
                        newMember.timeout(3600000, "Inactivity")./* then(() => channel.send({
                            embeds: [{
                                color: 15844367,
                                description: `[inactivity] 
                            \n${newMember.user.username},`,
                                image: { url: 'https://cdn.discordapp.com/attachments/771978143699042334/952469466179063818/youdied.png' },
                                footer: { text: '...respawning in 60 minutes.' }
                            }]
                        })). */then(msg => { setTimeout(() => msg.delete(), 3600000) }).catch(err => { });
                    };
                }, 300000);
            };
        };
    }
};