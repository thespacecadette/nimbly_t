export interface UserStore {
	id: number;
	isAuthenticated: boolean;
	firstName: string;
	lastName: string;
	dob: string;
	mobileNumber: string;
	lastLogin: string;
	emailAddress: string;
}

const userStore: UserStore = {
	id: -1,
	isAuthenticated: false,
	firstName: '',
	lastName: '',
	dob: '',
	mobileNumber: '',
	lastLogin: '',
	emailAddress: '',
};

export default userStore;
