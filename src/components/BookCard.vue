<script setup>
import { getElapsedTime } from '@/helpers/date';
import Reactions from '@/components/common/Reactions.vue'
const availableReactions = ['👍', '❤️', '🤩', '👎'];

defineProps({
    post: {
        required: true,
        type: Object
    }
})
</script>
<template>
    <article class="mb-4 p-6 rounded-xl bg-gray-50 hover:shadow-lg dark:bg-slate-800 flex flex-col">
        <div class="flex pb-6 items-center justify-between">
            <div class="flex">
                <RouterLink to="#" class="inline-block mr-4">
                    <img class="rounded-full max-w-none w-14 h-14" :src="post.owner.image" />
                </RouterLink>
                <div class="flex flex-col">
                    <div class="flex items-center">
                        <a class="inline-block text-lg font-bold mr-2" href="#">{{ post.owner.username }}</a>
                    </div>
                    <div class="text-slate-500 dark:text-slate-300">
                        {{ getElapsedTime(post.created_at) }}
                    </div>
                </div>
            </div>
        </div>
        <RouterLink :to="'/book/' + post.id">
            <img :src="post.image" :alt="post.slug" srcset="" class="rounded-3xl">
        </RouterLink>

        <h3 class="text-3xl font-bold ml-5 mt-3 flex items-end gap-1">
            <RouterLink :to="'/book/' + post.id" class="hover:underline">
                {{ post.title }}
            </RouterLink>
            <RouterLink :to="'/book/' + post.id" class="badge badge-primary">{{ post.category?.label ?? 'uncategorized' }}</RouterLink>
        </h3>
        <p class="text-xl ml-5 mt-3">
            {{ post.description }}
        </p>
        <div class="flex mt-5 gap-3">
            <Reactions :count="post.reactions_count" :available-reactions="availableReactions"></Reactions>

            <div>
                <svg class="w-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        fill-rule="evenodd"></path>
                </svg>
                <span class="badge">{{ post.comments_count }}</span>
            </div>
        </div>
    </article>
</template>