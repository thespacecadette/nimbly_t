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
		deleteTodos: (state) => {
			state = {
				todos: [],
				total: 0,
				skip: 0,
				limit: 0,
			};

			return state;
		},
	},
});

export const { get, deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;
