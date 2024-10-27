import { Todo } from '../entities/Todo';
import { TodoRepository } from '../../data/repository/TodoRepository';

export class UpdateTodo {
  private repository = new TodoRepository();

  async execute(updatedTodo: Todo): Promise<void> {
    await this.repository.updateTodo(updatedTodo);
  }
}
