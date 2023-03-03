<script setup>
import { getElapsedTime } from '@/helpers/date';




defineProps({
    comment: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex pb-4">
        <a class="inline-block mr-4" href="#">
            <img class="rounded-full max-w-none w-12 h-12" :src="comment.owner.image" />
        </a>
        <div>
            <div>
                <a class="inline-block text-base font-bold mr-2" href="#">{{ comment.owner.username }}</a>
                <span class="text-slate-500 dark:text-slate-300">{{ getElapsedTime(comment.created_at) }}</span>
            </div>
            <p>{{ comment.content }}</p>

        </div>
    </div>
</template>