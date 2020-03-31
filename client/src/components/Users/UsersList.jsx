import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { UserCard } from './UserCard';

const GET_USERS = gql`
	{
		getUsers {
			username
			fullname
			email
		}
	}
`;

export const UsersList = () => {
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) return <h1>Cargando...</h1>;
	if (error) return <h1>Error al hacer consulta {error.message}</h1>;

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				{data.getUsers.map(({ username, fullname, email }, i) => (
					<UserCard email={email} username={username} fullname={fullname} key={i} />
				))}
			</div>
		</div>
	);
};
