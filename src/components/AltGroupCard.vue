<script setup>
import { joinGroup } from '@/api/groups'
import { ref } from 'vue';

const props = defineProps({
    group: {
        type: Object,
        required: true
    }
})
const joining = ref(false)
const emit = defineEmits(['join-success'])
async function handleJoin() {
    joining.value = true
    const joined = await joinGroup(props.group.id)
    if (joined) {
        emit('join-success', props.group.id)
    }
}
</script>

<template>
    <div class="max-w-xs self-auto h-fit overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
            <RouterLink :to="'/group/' + group.id">
                <h1 class="text-xl font-bold text-gray-800 uppercase hover:underline dark:text-white">{{ group.title }}</h1>
            </RouterLink>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ group.description }}</p>
        </div>

        <RouterLink :to="'/group/' + group.id"><img class="object-cover w-full h-48 mt-2" :src="group.image"
                :alt="group.slug"></RouterLink>

        <div class="flex items-center justify-between px-4 py-2 bg-sky-900">
            <h1 class="text-lg font-bold text-white">{{ group.members_count }} member</h1>
            <button @click="handleJoin" :class="{ 'btn-disabled': group.is_joined || joining }" class="btn btn-accent ">{{
                group.is_joined ? 'joined' :
                            'join' }}</button>
        </div>
</div></template>