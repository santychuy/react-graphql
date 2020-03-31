import { gql } from 'apollo-boost';

export const GET_USERS = gql`
	{
		getUsers {
			username
			fullname
			email
		}
	}
`;
