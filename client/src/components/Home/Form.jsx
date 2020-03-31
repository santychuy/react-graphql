import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../../graphql/mutations';
import { Input } from './InputForm';

export const Form = () => {
	const [formUser, setFormUser] = useState({
		username: '',
		fullname: '',
		email: '',
	});
	const [successMsg, setSuccessMsg] = useState(false);
	const [createUser] = useMutation(CREATE_USER);

	const handleSaveUser = async ({ preventDefault }) => {
		preventDefault();
		const { username, fullname, email } = formUser;
		await createUser({ variables: { username, fullname, email } });
		setSuccessMsg(true);
		setTimeout(() => {
			setSuccessMsg(false);
		}, 3000);
	};

	return (
		<div className="card">
			<div className="card-body">
				<form onSubmit={e => handleSaveUser(e)}>
					<Input
						value={formUser.username}
						handleChange={setFormUser}
						placeholder="Santychuy"
						type="text"
						formUser={formUser}
						nameInput="username"
					/>
					<Input
						value={formUser.fullname}
						handleChange={setFormUser}
						placeholder="Santiago"
						type="text"
						formUser={formUser}
						nameInput="fullname"
					/>
					<Input
						value={formUser.email}
						handleChange={setFormUser}
						placeholder="example@mail.com"
						type="email"
						formUser={formUser}
						nameInput="email"
					/>
					<button type="submit" className="btn btn-primary btn-block mt-5">
						Create User
					</button>
					{successMsg && (
						<div class="alert alert-success mt-5" role="alert">
							User Saved!
						</div>
					)}
				</form>
			</div>
		</div>
	);
};
