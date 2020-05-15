module.exports = {
	name: 'nowplaying',
	description: 'Nhận nhạc đang phát.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`Đang phát: ${serverQueue.songs[0].title}`);
	},
};
