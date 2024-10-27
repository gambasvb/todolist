<template>
  <transition name="fade">
    <el-card class="todo-item" shadow="hover">
      <div class="todo-content">
        <el-checkbox v-model="todo.completed" @change="toggleComplete">{{ todo.title }}</el-checkbox>
      </div>
      <div class="todo-actions">
        <el-button @click="editTodo" type="primary" icon="el-icon-edit" size="mini"></el-button>
        <el-button @click="deleteTodo" type="danger" icon="el-icon-delete" size="mini"></el-button>
      </div>
    </el-card>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Todo } from '../../domain/entities/Todo';

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits(['update', 'delete']);

const toggleComplete = () => {
  emit('update', { ...props.todo, completed: !props.todo.completed });
};

const editTodo = () => {
  // Aksi edit todo, bisa buka dialog modal edit
};

const deleteTodo = () => {
  emit('delete', props.todo.id);
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
}
.todo-content {
  flex: 1;
}
.todo-actions {
  display: flex;
  gap: 5px;
}
</style>
