module.exports = {
    name: "voiceStateUpdate",
    on: true,
    execute(oldVoiceState, newVoiceState) {
        const voice = newVoiceState.guild.roles.cache.get('948585787111391272');

        if (newVoiceState.channel) {
            newVoiceState.member.roles.add(voice);
        } else if (oldVoiceState.channel) {
            newVoiceState.member.roles.remove(voice);
        };
    }
};