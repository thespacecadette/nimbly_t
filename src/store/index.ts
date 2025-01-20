import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import { UserStore } from './user/initialState';

export interface Store {
	user: UserStore;
}

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
