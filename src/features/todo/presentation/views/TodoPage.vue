<template>
    <el-container>
        <el-header class="header">
            <h1>Todo List</h1>
        </el-header>
        <el-main>
            <TodoList />
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import TodoList from '../components/TodoList.vue';
</script>

<style scoped>
.header {
    background-color: #409EFF;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 24px;
}

el-main {
    padding: 20px;
}

@media (max-width: 768px) {
    .header {
        font-size: 20px;
        padding: 10px;
    }

    el-main {
        padding: 10px;
    }
}
</style>