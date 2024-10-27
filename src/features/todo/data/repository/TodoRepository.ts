import { TodoApiDataSource } from '../datasource/TodoApiDataSource';
import { Todo } from '../../domain/entities/Todo';

export class TodoRepository {
    private dataSource = new TodoApiDataSource();
  
    async getTodos(): Promise<Todo[]> {
      return this.dataSource.fetchTodos();
    }
  
    async addTodo(todo: Todo): Promise<void> {
      await this.dataSource.addTodo(todo);
    }
  
    async updateTodo(updatedTodo: Todo): Promise<void> {
      await this.dataSource.updateTodo(updatedTodo);
    }
  
    async deleteTodo(id: number): Promise<void> {
      await this.dataSource.deleteTodo(id);
    }
  }