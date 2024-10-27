import { Todo } from '../../domain/entities/Todo';

export class TodoApiDataSource {
    private todos: Todo[] = [];
  
    async fetchTodos(): Promise<Todo[]> {
      return this.todos;
    }
  
    async addTodo(todo: Todo): Promise<void> {
      this.todos.push(todo);
    }
  
    async updateTodo(updatedTodo: Todo): Promise<void> {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    }
  
    async deleteTodo(id: number): Promise<void> {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
