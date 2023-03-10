<script setup>
import { getUsers } from '@/api/users';
import { onMounted, ref } from 'vue';

const users = ref([])
onMounted(async () => {
    const result = await getUsers()
    users.value = result
})
</script>
<template>
    <h1 class="text-3xl text-center text-blue-400 font-bold  p-6">Users</h1>

    <div class="flex justify-center">
        <div class="flex flex-col gap-4 p-6 ">
            <div v-for="user in users" class="flex items-center space-x-3 ">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img :src="user.image" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">{{ user.username }}</div>
                    <div :class="{ 'badge-primary': user.isAdmin }" class="text-sm badge opacity-50">{{ user.isAdmin ?
                        'admin' : 'user' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>