<script setup>
import { ref } from 'vue';
import { createCategory } from '@/api/category'
import { useLibStore } from '@/stores/lib';
const category = ref({
    label: ''
})
const waitforSubmit = ref(false)
async function handleCreate() {
    waitforSubmit.value =true
    const createResponse = await createCategory(category.value)
    if(createResponse){
        useLibStore().categories.push(createResponse)
        waitforSubmit.value =false
        document.querySelector('#create-category-modal').checked = false
    }
}
</script>
<template>
    <input type="checkbox" id="create-category-modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative">
            <label for="create-category-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-center mb-5 text-xl">Create category</h3>
            <form class="flex items-center flex-col" @submit.prevent="handleCreate">
                <label class="input-group input-group-vertical">
                    <span>Title</span>
                    <input type="text" placeholder="Nature,Science" v-model="category.label" class="input input-bordered" />
                </label>
                <div class="modal-action">
                    <button :class="{'btn-disabled':waitforSubmit}" type="submit" class="btn">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>