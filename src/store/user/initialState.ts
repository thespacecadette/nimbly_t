export interface UserStore {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
}

const userStore: UserStore = {
	id: -1,
	username: '',
	email: '',
	firstName: '',
	lastName: '',
	gender: '',
	image: '',
	accessToken: '',
	refreshToken: '',
};

export default userStore;
