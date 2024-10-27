import { describe, it, expect } from 'vitest';
import { Todo } from '../domain/entities/Todo';
import { TodoRepository } from '../data/repository/TodoRepository';

describe('TodoRepository CRUD', () => {
  const repo = new TodoRepository();

  it('should add a new todo', async () => {
    const todo: Todo = { id: 1, title: 'Test Todo', completed: false };
    await repo.addTodo(todo);
    const todos = await repo.getTodos();
    expect(todos).toContainEqual(todo);
  });

  it('should fetch all todos', async () => {
    const todos = await repo.getTodos();
    expect(todos).toBeInstanceOf(Array);
  });

  it('should update an existing todo', async () => {
    const todo: Todo = { id: 1, title: 'Test Todo', completed: false };
    await repo.addTodo(todo);

    const updatedTodo: Todo = { ...todo, completed: true };
    await repo.updateTodo(updatedTodo);

    const todos = await repo.getTodos();
    expect(todos.find(t => t.id === 1)?.completed).toBe(true);
  });

  it('should delete a todo', async () => {
    const todo: Todo = { id: 1, title: 'Test Todo', completed: false };
    await repo.addTodo(todo);
    await repo.deleteTodo(1);

    const todos = await repo.getTodos();
    expect(todos.find(t => t.id === 1)).toBeUndefined();
  });

  it('should not update a non-existing todo', async () => {
    const nonExistingTodo: Todo = { id: 999, title: 'Non-existing Todo', completed: false };
    await repo.updateTodo(nonExistingTodo);

    const todos = await repo.getTodos();
    expect(todos.find(t => t.id === 999)).toBeUndefined();
  });

  it('should not delete a non-existing todo', async () => {
    const initialCount = (await repo.getTodos()).length;
    await repo.deleteTodo(999);

    const todos = await repo.getTodos();
    expect(todos.length).toBe(initialCount);
  });

  // Tambahkan lebih banyak test case sesuai dengan kebutuhan
});
