const { explorer } = require('../config.json');
module.exports = {
    name: "presenceUpdate",
    on: true,
    execute(oldPresence, newPresence) {
        if (newPresence.status !== "offline") {
            newPresence.member.roles.add(explorer);
        } else {
            newPresence.member.roles.remove(explorer);
        };
    }
};