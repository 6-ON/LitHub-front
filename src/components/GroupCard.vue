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
        emit('join-success',props.group.id)
    }
}
</script>

<template>
    <div class="card max-w-sm self-auto mx-auto bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div class="relative">
            <router-link :to="'/group/' + group.id">
                <img class="w-full h-64 object-cover" :src="group.image" alt="Group Image">
            </router-link>
            <div class="absolute top-0 right-0 mt-2 mr-2">
                <span class="px-2 py-1 text-white bg-blue-500 rounded-full">{{ group.members_count }}</span>
            </div>
        </div>
        <div class="px-4 py-3">
            <router-link :to="'/group/' + group.id">
                <h3 class="text-lg font-semibold text-gray-800 hover:text-blue-500">{{ group.title }}</h3>
            </router-link>
            <p class="text-gray-600">{{ group.description }}</p>
        </div>
        <button @click="handleJoin" :class="{ 'btn-disabled': group.is_joined || joining}" class="m-3  btn btn-accent ">{{
            group.is_joined ? 'joined' :
            'join' }}</button>
    </div>
</template>
<style scoped></style>