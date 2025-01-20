import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state = {
				id: action.payload.id,
				isAuthenticated: action.payload.isAuthenticated,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				dob: action.payload.dob,
				mobileNumber: action.payload.mobileNumber,
				lastLogin: action.payload.lastLogin,
				emailAddress: action.payload.emailAddress,
			};

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
