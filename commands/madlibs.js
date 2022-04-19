const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("madlibs")
    .setDescription("Play a game of madlibs")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("Enter a sentence")
        .setRequired(true)
    ),
  async execute(interaction) {
    const string = interaction.options.getString("input");
    await interaction.reply({ content: `${string}`, ephemeral: false });
  }
};
