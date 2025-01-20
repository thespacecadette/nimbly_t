export interface Todo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

export interface TodoStore {
	todos: Array<Todo>;
	total: number;
	skip: number;
	limit: number;
}

const todoStore: TodoStore = {
	todos: [],
	total: 0,
	skip: 0,
	limit: 0,
};

export default todoStore;
