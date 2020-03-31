import './database';
import { config } from './config';
import server from './app';

const {
	APP: { PORT },
} = config;

server.start(
	{
		port: PORT,
		endpoint: '/api',
		cors: { credentials: true, origin: ['http://localhost:3000'] },
	},
	({ port }) => {
		console.log(`Server on: http://localhost:${port}`);
	}
);
