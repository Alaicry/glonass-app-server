import express from 'express'

const app = express()

app.listen(5000, () => {
	console.log('Сервер запустился на 5000 порту');
})

app.post('/', async (req, res) => {
	console.log(req);
	console.log(res);
	return res.json({ egts: 'test' });
})