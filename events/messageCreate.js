const { dcim } = require('../config.json');
module.exports = {
    name: "messageCreate",
    on: true,
    execute(message) {
        if (message.author.bot) return;
        if (message.attachments.size == 0) {
            if (message.channel.id == dcim){
                message.delete().catch(err => { });
            }
        }

    }
};