const { voice, party, mod, bowman, magician, thief, warrior, pirate } = require('../config.json');
const { Collection } = require('discord.js');
const voiceCollection = new Collection();
module.exports = {
	name: "voiceStateUpdate",
	on: true,
	async execute(oldVoiceState, newVoiceState) {
		var date = new Date().toLocaleTimeString("en-US", {timeZone: "America/Toronto", hour12: false, hour: '2-digit', minute: '2-digit'});

		async function createParty() {
			const temp = await newVoiceState.guild.channels.create(`🔓${newVoiceState.member.user.username}'𝚜 𝚙𝚊𝚛𝚝𝚢`, {
				type: "GUILD_VOICE",
				bitrate: 128000,
				parent: newVoiceState.channel.parent,
				permissionOverwrites: [
					{
						id: mod,
						allow: ['MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS']
					},
					{
						id: bowman,
						allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD']
					},
					{
						id: magician,
						allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD']
					},
					{
						id: thief,
						allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD']
					},
					{
						id: warrior,
						allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD']
					},
					{
						id: pirate,
						allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'USE_VAD']
					},
				]
			}).catch(err => { });
			await newVoiceState.member.setNickname(`${newVoiceState.member.user.username} 🔑`).catch((e) => null);
			await newVoiceState.member.voice.setChannel(temp);
			voiceCollection.set(newVoiceState.id, temp.id);
		};

		async function giveKey () {
			if (oldVoiceState.channel.id === voiceCollection.get(newVoiceState.id)) {
				const members = oldVoiceState.channel?.members.filter((m) => !m.user.bot).map((m) => m.id);
				if (members.length > 0) {
					let randomID = members[Math.floor(Math.random() * members.length)];
					let randomMember = oldVoiceState.guild.members.cache.get(randomID);
					await randomMember.setNickname(`${randomMember.user.username} 🔑`).catch((e) => null);
					await oldVoiceState.channel.setName(`🔓${randomMember.user.username}'𝚜 𝚙𝚊𝚛𝚝𝚢`).catch((e) => null);
					await randomMember.voice.setChannel(oldVoiceState.channel);
					voiceCollection.set(oldVoiceState.id, null);
					voiceCollection.set(randomMember.id, oldVoiceState.channel.id);
				};
			};
		};

		if (!newVoiceState.member.user.bot) {
			if (newVoiceState.channel) {
				newVoiceState.member.roles.add(voice);
			} else if (oldVoiceState.channel) {
				newVoiceState.member.roles.remove(voice);
			};
		};

		if (!oldVoiceState.channel) {
			if (newVoiceState.guild.channels.cache.find(channel => channel.name === `🔓${newVoiceState.member.user.username}'𝚜 𝚙𝚊𝚛𝚝𝚢`)) return;
			if (newVoiceState.channel.id === party){
				console.log(`[${date}] ${newVoiceState.member.user.username} created party.`);
				createParty();
			} else {
				console.log(`[${date}] ${newVoiceState.member.user.username} joined party.`);
			};
		} else if (oldVoiceState.channelId !== party) {
			if (oldVoiceState.channel.members.size === 0) {
				if (newVoiceState.channelId === party) return newVoiceState.member.voice.setChannel(oldVoiceState.channel);
				console.log(`[${date}] ${newVoiceState.member.user.username} deleted party.`);
				await oldVoiceState.channel.delete();
				await oldVoiceState.member.setNickname("").catch((e) => null);
				await voiceCollection.set(oldVoiceState.id, null);
			} else if (!newVoiceState.channel) {
				console.log(`[${date}] ${newVoiceState.member.user.username} left party.`);
				await oldVoiceState.member.setNickname("").catch((e) => null);
				giveKey();
			} else if (newVoiceState.channel.id === party) {
				console.log(`[${date}] ${newVoiceState.member.user.username} remade party.`);
				giveKey();
				createParty();
			};
		};
	}
};