import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import TodoList from '../presentation/components/TodoList.vue';
import { describe, it, expect } from 'vitest';

describe('TodoList.vue', () => {
  it('renders correctly', () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    
    const wrapper = mount(TodoList);
    console.log({xx:wrapper})
    expect(wrapper.exists()).toBe(true);

  });

  it('adds a new todo item', async () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find('input');
    
    await input.setValue('New Todo');
    await wrapper.find('button').trigger('click');

    const todoItems = wrapper.findAllComponents({ name: 'TodoItem' });
    expect(todoItems.length).toBe(1);
    expect(todoItems[0].text()).toContain('New Todo');
  });

//   it('marks a todo item as completed', async () => {
//     const wrapper = mount(TodoList);
//     const input = wrapper.find('input');

//     await input.setValue('New Todo');
//     await wrapper.find('button').trigger('click');

//     const todoItem = wrapper.findComponent({ name: 'TodoItem' });
//     const checkbox = todoItem.find('input[type="checkbox"]');
    
//     await checkbox.setValue(true);
//     expect(checkbox.element.checked).toBe(true);
//   });

  it('deletes a todo item', async () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find('input');

    await input.setValue('New Todo');
    await wrapper.find('button').trigger('click');

    let todoItems = wrapper.findAllComponents({ name: 'TodoItem' });
    expect(todoItems.length).toBe(1);

    await todoItems[0].find('button[type="danger"]').trigger('click');
    todoItems = wrapper.findAllComponents({ name: 'TodoItem' });
    expect(todoItems.length).toBe(0);
  });
});
