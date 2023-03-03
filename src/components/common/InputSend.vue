<script setup>
import { ref } from 'vue';

const input = ref('')
const emits = defineEmits(['send'])

defineProps({
    placeholder: {
        type: String,
        default: 'Write a comment'
    }
})
function trySend() {
    if (input.value === '') {
        console.log('empty value');
        return
    }
    emits('send',input.value)
    input.value = ''
}
</script>


<template>
    <div class="relative">
        <form @submit.prevent="trySend">
            <input
                class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                type="text" :placeholder="placeholder" v-model="input"/>
        </form>
        <span class="cursor-pointer flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg class="fill-blue-500 dark:fill-slate-50" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
            </svg>
        </span>
    </div>
</template>