import React from 'react';

export const UserCard = ({ key, username, fullname, email }) => (
	<div key={key} className="card m-3">
		<div className="card-body">
			<h4>{username}</h4>
			<h5>{fullname}</h5>
			<p>{email}</p>
		</div>
	</div>
);
