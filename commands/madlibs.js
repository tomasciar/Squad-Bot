const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('madlibs')
    .setDescription('Play a game of madlibs')
    .addStringOption(option => option.setName('person1').setDescription("Enter a person's name").setRequired(true))
    .addStringOption(option =>
      option.setName('person2').setDescription("Enter another person's name").setRequired(true)
    )
    .addStringOption(option => option.setName('number').setDescription('Enter a number').setRequired(true))
    .addStringOption(option =>
      option.setName('adjective').setDescription('Enter an adjective (ex. happy, sad)').setRequired(true)
    )
    .addStringOption(option => option.setName('verb').setDescription('Enter an verb (ex. running)').setRequired(true))
    .addStringOption(option =>
      option.setName('noun').setDescription('Enter a noun (ex. tree, station)').setRequired(true)
    )
    .addStringOption(option => option.setName('occupation').setDescription('Enter an occupation').setRequired(true))
    .addStringOption(option => option.setName('location').setDescription('Enter a location').setRequired(true))
    .addStringOption(option => option.setName('food').setDescription('Enter a type of food').setRequired(true))
    .addStringOption(option => option.setName('weapon').setDescription('Enter a weapon').setRequired(true)),

  async execute(interaction) {
    const person1 = interaction.options.getString('person1');
    const person2 = interaction.options.getString('person2');
    const number = interaction.options.getString('number');
    const adjective = interaction.options.getString('adjective');
    const verb = interaction.options.getString('verb');
    const noun = interaction.options.getString('noun');
    const occupation = interaction.options.getString('occupation');
    const location = interaction.options.getString('location');
    const food = interaction.options.getString('food');
    const weapon = interaction.options.getString('weapon');

    // Randomly picks which story to use
    const NUMBER_OF_STORIES = 5;
    const storyNumber = Math.floor(Math.random() * NUMBER_OF_STORIES);
    const stories = [
      `Only ${number} minutes left till the school bell rings, and when 
      it does, I'm going to attack ${person2} with my ${weapon}. It's 
      impossible to learn ${noun}ology when I can't stop thinking about 
      my ${food}. Ring ring. There's the bell. I start ${verb} towards
      ${person2}, but the school ${occupation} stops me and dunks my 
      ${food} into the toilet.`,

      `It was a ${adjective} summer day. ${person1} and I were excited 
      to go ${verb} at ${location}. I packed my trusty ${weapon} and 
      counted down the days. When it was time to leave, we drove there 
      in ${person2}'s ${noun}-mobile. We were listening to "My Gym 
      Partner is a(n) ${occupation}" on the radio. When we got there, 
      it smelled like ${food} in the toilet. I accidentally left 
      ${number} of the most important items at home, so we were forced 
      to go back, ${weapon} unscathed.`,

      `Today, I went to the Zoo with ${person1}. But to my surprise, I 
      saw ${person2} in the cage with the alligators. I didn't 
      know what to do, so I tossed down some ${food} to feed them. 
      Feeding ${person2} made me hungry, so I went to get a BeaverTail 
      for myself and ${person1}. Unfortunately, the BeaverTail made my 
      stomach upset, and I did a number ${number} in my pants. I knew 
      we should have gone to ${location} instead.`,

      `6:00 in the morning. I wake up to sound of my ${noun} beeping. 
      ${verb} out of bed, I almost trip on my friend ${person2}'s body. 
      They were laying on the ground because we had a sleepover the 
      night before. In fact, I had ${number} friends sleep over last night 
      night. It was ${adjective}. We had a disagreement in the backyard and
      it ended with all of us at ${location}. We had to leave my other 
      friend ${person1} behind because he ate too much ${food}.`,

      `It was a(n) ${adjective} day. I woke up to the smell of ${food} 
      roasting in the oven. I immediately start ${verb} down the stairs 
      to see if I can gobble up the grub. It was too late. ${person1} 
      already ate all of the food. I was so mad that I used my finishing 
      move on him with my ${weapon}. It was so powerful that he 
      was transported to the ${location} realm.`
    ];

    await interaction.reply({
      content: stories[storyNumber],
      ephemeral: false
    });
  }
};
