<script setup>
import { getElapsedTime } from '@/helpers/date';
import { ref,computed } from 'vue';

const props = defineProps({
    message: {
        type: Object,
        required: true
    }
})
const side = computed(() => (props.message?.from_user) ? 'chat-end' : 'chat-start')

</script>

<template>
    <div class="chat" :class="side" >
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img :src="message?.user.image" />
            </div>
        </div>
        <div class="chat-header">
            {{ message?.user.username }}
            <time class="text-xs opacity-50">{{ getElapsedTime(message.created_at) }}</time>
        </div>
        <div class="chat-bubble">{{ message?.content }}</div>
    </div>
</template>