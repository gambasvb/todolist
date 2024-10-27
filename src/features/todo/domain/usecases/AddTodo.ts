// AddTodo.ts
import { Todo } from '../entities/Todo';
import { TodoRepository } from '../../data/repository/TodoRepository';

export class AddTodo {
  private repository = new TodoRepository();

  async execute(todo: Todo) {
    await this.repository.addTodo(todo);
  }
}
