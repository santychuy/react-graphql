import React from 'react';

export const Input = ({
	type,
	placeholder,
	handleChange,
	value,
	formUser,
	nameInput,
}) => {
	return (
		<div className="form-group">
			<input
				name={nameInput}
				type={type}
				value={value}
				className="form-control"
				placeholder={placeholder}
				onChange={({ target: { value, name } }) =>
					handleChange({ ...formUser, [name]: value })
				}
			/>
		</div>
	);
};
