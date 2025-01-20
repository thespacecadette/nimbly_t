import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		get: (state, action) => {
			state = {
				todos: action.payload.todos,
				total: action.payload.total,
				skip: action.payload.skip,
				limit: action.payload.limit,
			};

			return state;
		},
	},
});

export const { get } = todoSlice.actions;

export default todoSlice.reducer;
