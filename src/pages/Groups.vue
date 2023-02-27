<script setup>
import { getGroups } from '@/api/groups';
import { ref, onMounted } from 'vue';
import { getGroups } from '@/api/groups';
const groups = ref();

onMounted(() => {
    groups.value = getGroups();
})
</script>
<template>
    <div v-for="group in groups">
        {{ group.title }}
    </div>
</template>