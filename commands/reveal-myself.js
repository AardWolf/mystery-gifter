const { SlashCommandBuilder } = require('@discordjs/builders');
const { register, deregister, reveal } = require('../modules/wishlist-manage');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reveal-me')
        .setDescription('Toggle whether your recipient can see who you are'),
    async execute(interaction) {
        const user = interaction.user;
        let reply = reveal(user.id);
        if (!reply) {
            reply = 'Sorry, there was an error';
        }
        await interaction.reply({ content: reply, ephemeral: true });
    },
    destroy: deregister,
    load: register,
};

