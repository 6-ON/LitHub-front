<script setup>
import { getGroups } from '@/api/groups';
import GroupCard from '@/components/GroupCard.vue';
import { ref, onMounted } from 'vue';
const groups = ref();
onMounted(async () => {
    groups.value = await getGroups();
})
</script>
<template>
    <h1 class="text-3xl font-bold text-center p-8 text-sky-600">Groups</h1>

    <div class="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GroupCard v-for="group in groups" :group="group"></GroupCard>
    </div>
</template>