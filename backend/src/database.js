import { connect } from 'mongoose';

import { config } from './config';

const {
	DB: { DB_PROD, DB_TEST },
	APP: { NODE_ENV },
} = config;

(async () => {
	const uri = NODE_ENV === 'development' ? DB_TEST : DB_PROD;
	try {
		await connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log('Database connected!');
	} catch (e) {
		console.log(e);
	}
})();
