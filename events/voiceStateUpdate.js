module.exports = {
    name: "voiceStateUpdate",
    on: true,
    execute(oldVoiceState, newVoiceState) {
        let newState = newVoiceState.member;
        let oldState = oldVoiceState.member;
        const voice = newVoiceState.guild.roles.cache.get('948585787111391272');

        if (newVoiceState.channel) {
            newState.roles.add(voice);
        } else if (oldVoiceState.channel) {
            newState.roles.remove(voice);
        };
    }
};