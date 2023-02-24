<script setup>
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue';
const authStore = useAuthStore()


onMounted(async () => {
    await authStore.getUser()
})
</script>


<template>
    <div v-if="authStore.user">
        {{ authStore.user }}
    </div>
    <div v-else>
        <p>unauthentified</p>
    </div>
</template>