import dotenv from 'dotenv';

dotenv.config();

export const config = {
	APP: {
		NODE_ENV: process.env.NODE_ENV,
		PORT: process.env.PORT || 4000,
	},
	DB: {
		DB_PROD: process.env.DB_PROD || 'mongodb://localhost/graphql-yoga-prod',
		DB_TEST: process.env.DB_TEST || 'mongodb://localhost/graphql-yoga-test',
	},
};
