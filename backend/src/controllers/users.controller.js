import User from '../model/User';

export const getUsers = async () => await User.find();

export const createUser = async (_, { username, fullname, email }) => {
	const user = new User({ username, fullname, email });
	return await user.save();
};

export const findUser = async (_, { id }) => await User.findById(id);

export const deleteUser = async (_, { id }) => await User.findOneAndDelete(id);
