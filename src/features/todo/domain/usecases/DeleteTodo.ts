import { TodoRepository } from '../../data/repository/TodoRepository';

export class DeleteTodo {
  private repository = new TodoRepository();

  async execute(id: number): Promise<void> {
    await this.repository.deleteTodo(id);
  }
}
