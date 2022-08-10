const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('odds')
    .setDescription('Plays a game of "What Are the Odds?"')
    .addIntegerOption(option =>
      option.setName('lower-limit').setDescription('Enter the lower-limit for the range').setRequired(true)
    )
    .addIntegerOption(option =>
      option.setName('upper-limit').setDescription('Enter the upper-limit for the range').setRequired(true)
    )
    .addUserOption(option => option.setName('user').setDescription('Enter the @ of a user').setRequired(true))
    .addStringOption(option =>
      option.setName('prompt').setDescription('Enter the scenario (ex. "eats a watermelon")').setRequired(true)
    ),

  async execute(interaction) {
    const lowerLimit = interaction.options.getString('lower-limit');
    const upperLimit = interaction.options.getString('upper-limit');
    const user = interaction.options.getString('user');
    const scenario = interaction.options.getString('scenario');

    await interaction.reply({ content: `What are the odds that ${user} ${scenario}?`, ephemeral: false });
  }
};
