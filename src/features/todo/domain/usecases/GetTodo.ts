// GetTodos.ts
import { Todo } from '../entities/Todo';
import { TodoRepository } from '../../data/repository/TodoRepository';

export class GetTodos {
  private repository = new TodoRepository();

  async execute(): Promise<Todo[]> {
    return this.repository.getTodos();
  }
}
