import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
	mutation CreateUser($username: String!, $fullname: String!, $email: String!) {
		createUser(username: $username, fullname: $fullname, email: $email) {
			username
		}
	}
`;
