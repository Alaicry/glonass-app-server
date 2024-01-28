



import { log } from 'console';
import net from 'net'

const server = net.createServer((socket) => {
	console.log('Клиент подключился');

	socket.on('data', (data) => {
		console.log(`Данные: ${data.toString('hex')}`);
		// Ваш код обработки принятых данных здесь
		console.log(data.toString('hex').length);
		socket.write(data)
	});


	socket.on('end', () => {
		console.log('Клиент отключился');
	});

	socket.on('error', (err) => {
		console.error(`Ошибка: ${err.message}`);
	});
});

const PORT = 5000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
	console.log(`Сервер запустился на ${HOST}:${PORT}`);
});