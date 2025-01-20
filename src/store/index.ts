import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import userReducer from './user/slice';
import { UserStore } from './user/initialState';
import { TodoStore } from './todos/initialState';
import todoReducer from './todos/slice';

// persistence
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export interface Store {
	user: UserStore;
	todos: TodoStore;
}

const reducers = combineReducers({
	todos: todoReducer,
	user: userReducer,
});
const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
