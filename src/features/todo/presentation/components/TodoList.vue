<template>
    <el-loading :loading="isLoading" text="Loading...">
        <el-input v-model="newTodo" placeholder="What needs to be done?" @keyup.enter="addTodo" clearable>
            <template #append>
                <el-button @click="addTodo" type="primary">Add</el-button>
            </template>
        </el-input>

        <transition-group name="fade" tag="div" class="todo-items">
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @update="updateTodo" @delete="deleteTodo" />
        </transition-group>
    </el-loading>

    <transition-group name="fade" tag="div" class="todo-items">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @update="updateTodo" @delete="deleteTodo" />
    </transition-group>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodoStore } from '../store/todoStore';
import TodoItem from './TodoItem.vue';

const store = useTodoStore();
const newTodo = ref('');

const addTodo = async () => {
    if (newTodo.value.trim()) {
        await store.addTodo(newTodo.value);
        newTodo.value = '';
    }
};

const updateTodo = async (updatedTodo: any) => {
    await store.updateTodo(updatedTodo);
};

const deleteTodo = async (id: number) => {
    await store.deleteTodo(id);
};

const todos = computed(() => store.todos);

store.fetchTodos();
</script>

<style scoped>
.todo-list {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

.todo-items {
    margin-top: 20px;
}

@media (max-width: 768px) {
    .todo-list {
        padding: 10px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.todo-list {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

.todo-items {
    margin-top: 20px;
}
</style>