const { freemarket, youtube, chess, voice, party, status, bowmanStat, magicianStat, thiefStat, warriorStat, pirateStat, mod, bowman, magician, thief, warrior, pirate } = require('../config.json');
const { khang, lai, vince, pei, hai, ben, cody } = require('../config.json');
const { Collection } = require('discord.js');
const voiceDiscord = require('@discordjs/voice');
const voiceCollection = new Collection();
const client = require("../index")
const { DiscordTogether } = require("discord-together");
client.discordTogether = new DiscordTogether(client);
module.exports = {
	name: "voiceStateUpdate",
	on: true,
	async execute(oldVoiceState, newVoiceState) {
		var date = new Date().toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour12: false, hour: '2-digit', minute: '2-digit' });

		async function createParty() {
			const temp = await newVoiceState.guild.channels.create(`🔓︱${newVoiceState.member.user.username}'𝚜 𝚙𝚝`, {
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
			if (oldVoiceState.channelId === voiceCollection.get(newVoiceState.id)) {
				const members = oldVoiceState.channel?.members.filter((m) => !m.user.bot).map((m) => m.id);
				if (members.length > 0) {
					let randomID = members[Math.floor(Math.random() * members.length)];
					let randomMember = oldVoiceState.guild.members.cache.get(randomID);
					await randomMember.setNickname(`${randomMember.user.username} 🔑`).catch((e) => null);
					await oldVoiceState.channel.setName(`🔓︱${randomMember.user.username}'𝚜 𝚙𝚝`).catch((e) => null);
					await randomMember.voice.setChannel(oldVoiceState.channel);
					voiceCollection.set(oldVoiceState.id, null);
					voiceCollection.set(randomMember.id, oldVoiceState.channel.id);
				};
			};
		};

		async function welcomeAudio(resource) {
			const channel = newVoiceState.member.voice.channel;
			if (!channel) return;

			const player = voiceDiscord.createAudioPlayer();

			const connection = voiceDiscord.joinVoiceChannel({
				channelId: channel.id,
				guildId: newVoiceState.guild.id,
				adapterCreator: newVoiceState.guild.voiceAdapterCreator,
			});

			await resource.volume.setVolume(0.05);
			player.play(resource);
			connection.subscribe(player);

			player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
				connection.destroy();
			});
		};

		if (!newVoiceState.member.user.bot) {
			if (newVoiceState.channel) {
				newVoiceState.member.roles.add(voice).catch(err => { });
			} else if (oldVoiceState.channel) {
				newVoiceState.member.roles.remove(voice).catch(err => { });
			};

			if (!oldVoiceState.channel) {
				if (newVoiceState.guild.channels.cache.find(channel => channel.name === `🔓︱${newVoiceState.member.user.username}'𝚜 𝚙𝚝`)) return;
				if (newVoiceState.channel.id === party) {
					console.log(`[${date}] ${newVoiceState.member.user.username} created party.`);
					createParty();
				} else {
					console.log(`[${date}] ${newVoiceState.member.user.username} joined party.`);
				};
			} else if (oldVoiceState.channelId !== party && oldVoiceState.channelId !== status && oldVoiceState.channelId !== bowmanStat &&
				oldVoiceState.channelId !== magicianStat && oldVoiceState.channelId !== thiefStat && oldVoiceState.channelId !== warriorStat &&
				oldVoiceState.channelId !== pirateStat && oldVoiceState.channelId !== youtube && oldVoiceState.channelId !== chess && 
				oldVoiceState.channel.members.size === 0) {
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

			if (newVoiceState.member.voice.channelId === youtube && newVoiceState.channel.members.size >= 1) {
				console.log(`[${date}] ${newVoiceState.member.user.username} opened youtube.`);
				giveKey();
				await oldVoiceState.member.setNickname("").catch((e) => null);
				await client.discordTogether.createTogetherCode(newVoiceState.member.voice.channel.id, 'youtube').then(async invite => {
					return client.channels.cache.get(freemarket).send({
						embeds: [{
							color: 15844367,
							author: {
								name: `${newVoiceState.member.user.username} invites you to watch youtube.`,
								icon_url: `${newVoiceState.member.user.avatarURL()}`,
							},
							description: `\[[link](${invite.code})\]`,
							image: { url: 'https://cdn.discordapp.com/attachments/980907403279228958/981583183927709746/maple_tv.png' },
							footer: {text: '(expires in 30 seconds)'}
						}]
					}).then(msg => {setTimeout(() => msg.delete(), 30000)}).catch(err => { });
				});
			} else if (newVoiceState.member.voice.channelId === chess && newVoiceState.channel.members.size >= 1) {
				console.log(`[${date}] ${newVoiceState.member.user.username} opened chess.`);
				giveKey();
				await oldVoiceState.member.setNickname("").catch((e) => null);
				await client.discordTogether.createTogetherCode(newVoiceState.member.voice.channel.id, 'chess').then(async invite => {
					return client.channels.cache.get(freemarket).send({
						embeds: [{
							color: 15844367,
							author: {
								name: `${newVoiceState.member.user.username} invites you to play chess.`,
								icon_url: `${newVoiceState.member.user.avatarURL()}`,
							},
							description: `\[[link](${invite.code})\]`,
							image: { url: 'https://cdn.discordapp.com/attachments/980907403279228958/981613351060787260/table.png' },
							footer: {text: '(expires in 30 seconds)'}
						}]
					}).then(msg => {setTimeout(() => msg.delete(), 30000)}).catch(err => { });
				});
			};

			if (newVoiceState.channel && oldVoiceState.channelId !== newVoiceState.channelId) {
				let resource;
				if (newVoiceState.member.user.id === khang) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913781574107156/emotional_damage.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === lai) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913782102585444/lai_lai.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === vince) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913780923961444/ara_ara.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === pei) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913781196615710/cmt_taimes_coh.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === hai) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913782383583282/masters_so_big.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === ben) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913782840754246/watashi_ga_kita.mp3', { inlineVolume: true });
				} else if (newVoiceState.member.user.id === cody) {
					resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/980907403279228958/980913781888651284/fuck_you_cody.mp3', { inlineVolume: true });
				}

				if (typeof resource !== 'undefined') {
					setTimeout(function () {
						welcomeAudio(resource);
					}, 2000);
				};
			};
		};
	}
};