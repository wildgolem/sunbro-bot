const { voice, party, status, bowmanStat, magicianStat, thiefStat, warriorStat, pirateStat, mod, bowman, magician, thief, warrior, pirate } = require('../config.json');
const { khang, lai, vince, pei, hai } = require('../config.json');
const { Collection } = require('discord.js');
const voiceDiscord = require('@discordjs/voice');
const voiceCollection = new Collection();
module.exports = {
	name: "voiceStateUpdate",
	on: true,
	async execute(oldVoiceState, newVoiceState) {
		var date = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour12: false, hour: '2-digit', minute: '2-digit' });

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

		async function giveKey() {
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

		function welcomeAudio(resource) {
			const channel = newVoiceState.member.voice.channel;
			if (!channel) return;

			const player = voiceDiscord.createAudioPlayer();

			const connection = voiceDiscord.joinVoiceChannel({
				channelId: channel.id,
				guildId: newVoiceState.guild.id,
				adapterCreator: newVoiceState.guild.voiceAdapterCreator,
			});

			resource.volume.setVolume(0.2);
			player.play(resource);
			connection.subscribe(player);

			player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
				connection.destroy();
			});
		};

		if (!newVoiceState.member.user.bot) {
			if (newVoiceState.channel) {
				newVoiceState.member.roles.add(voice);
			} else if (oldVoiceState.channel) {
				newVoiceState.member.roles.remove(voice);
			};

			if (newVoiceState.channel && oldVoiceState.channelId !== newVoiceState.channelId) {
				let resource;
				if (newVoiceState.member.user.id === khang) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/979172537193877504/979173073968308274/emotional_damage.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === lai) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/979172537193877504/980263332458164255/lai_lai.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === vince) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/979172537193877504/980264553411649596/ara_ara.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === pei) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/979172537193877504/980272562158321714/miss_pei_yao_han.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === hai) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/979172537193877504/980337408195330108/masters_so_big.mp3', { inlineVolume: true });
				}
				
				if (typeof resource !== 'undefined') {
					setTimeout(function () {
						welcomeAudio(resource);
					}, 1500);
				};
			};

			if (!oldVoiceState.channel) {
				if (newVoiceState.guild.channels.cache.find(channel => channel.name === `🔓${newVoiceState.member.user.username}'𝚜 𝚙𝚊𝚛𝚝𝚢`)) return;
				if (newVoiceState.channel.id === party) {
					console.log(`[${date}] ${newVoiceState.member.user.username} created party.`);
					createParty();
				} else {
					console.log(`[${date}] ${newVoiceState.member.user.username} joined party.`);
				};
			} else if (oldVoiceState.channelId !== party && oldVoiceState.channelId !== status && oldVoiceState.channelId !== bowmanStat &&
					oldVoiceState.channelId !== magicianStat && oldVoiceState.channelId !== thiefStat && oldVoiceState.channelId !== warriorStat &&
					oldVoiceState.channelId !== pirateStat && oldVoiceState.channel.members.size === 0) {
				if (newVoiceState.channelId === party) return newVoiceState.member.voice.setChannel(oldVoiceState.channel);
				console.log(`[${date}] ${newVoiceState.member.user.username} deleted party.`);
				await oldVoiceState.channel.delete();
				await oldVoiceState.member.setNickname("").catch((e) => null);
				voiceCollection.set(oldVoiceState.id, null);
			} else if (newVoiceState.channelId === party) {
				console.log(`[${date}] ${newVoiceState.member.user.username} remade party.`);
				giveKey();
				createParty();
			} else if (!newVoiceState.channel) {
				console.log(`[${date}] ${newVoiceState.member.user.username} left party.`);
				await oldVoiceState.member.setNickname("").catch((e) => null);
				giveKey();
			};
		};
	}
};