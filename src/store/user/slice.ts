import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state = {
				id: action.payload.id,
				username: action.payload.username,
				email: action.payload.email,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				gender: action.payload.gender,
				image: action.payload.image,
				accessToken: action.payload.accessToken,
				refreshToken: action.payload.refreshToken,
			};

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
