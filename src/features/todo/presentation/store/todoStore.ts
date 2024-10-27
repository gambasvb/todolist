import { defineStore } from 'pinia';
import { GetTodos } from '../../domain/usecases/GetTodo';
import { AddTodo } from '../../domain/usecases/AddTodo';
import { UpdateTodo } from '../../domain/usecases/UpdateTodo';
import { DeleteTodo } from '../../domain/usecases/DeleteTodo';
import { Todo } from '../../domain/entities/Todo';
import { ElMessage } from 'element-plus';

// Function untuk menampilkan pesan
const showMessage = (type: 'success' | 'error', message: string) => {
  ElMessage({
    message,
    type,
    duration: 2000,
  });
};

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    isLoading: false,
  }),

  actions: {
    async fetchTodos() {
      this.isLoading = true;
      try {
        const useCase = new GetTodos();
        this.todos = await useCase.execute();
      } catch (error) {
        showMessage('error', 'Failed to fetch Todos');
      } finally {
        this.isLoading = false;
      }
    },

    async addTodo(title: string) {
      this.isLoading = true;
      try {
        const newTodo: Todo = { id: Date.now(), title, completed: false };
        const useCase = new AddTodo();
        await useCase.execute(newTodo);
        this.todos.push(newTodo);
        showMessage('success', 'Todo added successfully!');
      } catch (error) {
        showMessage('error', 'Failed to add todo!');
      }finally {
        this.isLoading = false;
      }
    },

    async updateTodo(updatedTodo: Todo) {
      this.isLoading = true;
      try {

        const useCase = new UpdateTodo();
        await useCase.execute(updatedTodo);
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
        }
        showMessage('success', 'Todo added successfully!');
      } catch (error) {
        showMessage('error', 'Failed to update todo!');
      }finally {
        this.isLoading = false;
      }
    },

    async deleteTodo(id: number) {
      this.isLoading = true;
      try {
        const useCase = new DeleteTodo();
        await useCase.execute(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        showMessage('success', 'Todo deleted successfully!');
      }catch(error){
        showMessage('error', 'Failed to delete todo!');
      }finally {
        this.isLoading = false;
      }
    }
  },
});
