module.exports = {
    name: "presenceUpdate",
    on: true,
    execute(oldPresence, newPresence) {
        const explorer = newPresence.guild.roles.cache.get('841722936607637514');

        if (newPresence.status !== "offline") {
            newPresence.member.roles.add(explorer);
        } else {
            newPresence.member.roles.remove(explorer);
        };
    }
};