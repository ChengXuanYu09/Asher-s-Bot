import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

export const action = async (ctx) => {
    await ctx.reply('Pong!');
}
