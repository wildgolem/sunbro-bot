const { voice } = require('../config.json');
module.exports = {
    name: "voiceStateUpdate",
    on: true,
    execute(oldVoiceState, newVoiceState) {
        if (newVoiceState.channel) {
            newVoiceState.member.roles.add(voice);
        } else if (oldVoiceState.channel) {
            newVoiceState.member.roles.remove(voice);
        };
    }
};