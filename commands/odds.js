const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('odds')
    .setDescription('Repeats everything said after the command')
    .addStringOption(option => option.setName('input').setDescription('Enter a sentence').setRequired(true)),

  async execute(interaction) {
    const string = interaction.options.getString('input');
    await interaction.reply({ content: `${string}`, ephemeral: false });
  }
};
