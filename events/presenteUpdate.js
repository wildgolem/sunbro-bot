module.exports = {
    name: "presenceUpdate",
    on: true,
    execute(oldPresence, newPresence) {
        let member = newPresence.member;
        const explorer = newPresence.guild.roles.cache.get('841722936607637514');

        if (newPresence.status !== "offline") {
            member.roles.add(explorer);
        } else {
            member.roles.remove(explorer);
        };
    }
};