const { voice, party, mod, bowman, magician, thief, warrior, pirate } = require('../config.json');
const { Collection } = require('discord.js');
const voiceCollection = new Collection();
module.exports = {
	name: "voiceStateUpdate",
	on: true,
	async execute(oldVoiceState, newVoiceState) {
		if (!newVoiceState.member.user.bot) {
			if (newVoiceState.channel) {
				newVoiceState.member.roles.add(voice);
			} else if (oldVoiceState.channel) {
				newVoiceState.member.roles.remove(voice);
			};
		}

		if (!oldVoiceState.channel && newVoiceState.channel.id === party) {
			console.log(`${newVoiceState.member.user.username} created party.`);
			if (newVoiceState.guild.channels.cache.find(channel => channel.name === `🔓${newVoiceState.member.user.username}'s Party`)) return;
			const temp = await newVoiceState.guild.channels.create(`🔓${newVoiceState.member.user.username}'s Party`, {
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
			newVoiceState.member.setNickname(`${newVoiceState.member.user.username} 🔑`).catch((e) => null);
			newVoiceState.member.voice.setChannel(temp);
			voiceCollection.set(newVoiceState.id, temp.id);
		} else if (!newVoiceState.channel) {
			console.log(`${newVoiceState.member.user.username} left party.`);
			newVoiceState.member.setNickname("").catch((e) => null);
			if (oldVoiceState.channel.id === voiceCollection.get(newVoiceState.id)) {
				const members = oldVoiceState.channel?.members.filter((m) => !m.user.bot).map((m) => m.id);
				if (members.length > 0) {
					let randomID = members[Math.floor(Math.random() * members.length)];
					let randomMember = oldVoiceState.guild.members.cache.get(randomID);
					randomMember.setNickname(`${randomMember.user.username} 🔑`).catch((e) => null);
					randomMember.voice.setChannel(oldVoiceState.channel);
					oldVoiceState.channel.setName(`🔓${randomMember.user.username}'s Party`).catch((e) => null);
					voiceCollection.set(oldVoiceState.id, null);
					voiceCollection.set(randomMember.id, oldVoiceState.channel.id);
				} else if (oldVoiceState.channel.id != party) {
					voiceCollection.set(oldVoiceState.id, null);
					oldVoiceState.channel.delete()
				};
			};
		} else if (!oldVoiceState.channel && newVoiceState.channel.id != party) {
			console.log(`${newVoiceState.member.user.username} joined party.`);
		} else if (oldVoiceState.channel.id != party && oldVoiceState.channel.members.size === 0) {
			console.log(`${newVoiceState.member.user.username} changed party.`);
			newVoiceState.member.setNickname("").catch((e) => null);
			voiceCollection.set(oldVoiceState.id, null);
			oldVoiceState.channel.delete()
			if (newVoiceState.channel.id === party) {
				const temp = await newVoiceState.guild.channels.create(`🔓${newVoiceState.member.user.username}'s Party`, {
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
				newVoiceState.member.setNickname(`${newVoiceState.member.user.username} 🔑`).catch((e) => null);
				newVoiceState.member.voice.setChannel(temp);
				voiceCollection.set(newVoiceState.id, temp.id);
			}
		} else if (oldVoiceState.channel.id != party && newVoiceState.channel.id === party) {
			console.log(`${newVoiceState.member.user.username} remade party.`);
			const temp = await newVoiceState.guild.channels.create(`🔓${newVoiceState.member.user.username}'s Party`, {
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
			newVoiceState.member.setNickname(`${newVoiceState.member.user.username} 🔑`).catch((e) => null);
			newVoiceState.member.voice.setChannel(temp);
			voiceCollection.set(newVoiceState.id, temp.id);
			const members = oldVoiceState.channel?.members.filter((m) => !m.user.bot).map((m) => m.id);
			if (members.length > 0) {
				let randomID = members[Math.floor(Math.random() * members.length)];
				let randomMember = oldVoiceState.guild.members.cache.get(randomID);
				randomMember.setNickname(`${randomMember.user.username} 🔑`).catch((e) => null);
				randomMember.voice.setChannel(oldVoiceState.channel);
				oldVoiceState.channel.setName(`🔑${randomMember.user.username}'s Party`).catch((e) => null);
				voiceCollection.set(oldVoiceState.id, null);
				voiceCollection.set(randomMember.id, oldVoiceState.channel.id);
			} else {
				if (oldVoiceState.channel.id != party) {
					voiceCollection.set(oldVoiceState.id, null);
					oldVoiceState.channel.delete()
				}
			};
		};
	}
};