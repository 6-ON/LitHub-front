<template>
    <div class="alert alert-success text-white">
        <div>
            <span>{{ message }}</span>
        </div>
    </div>
</template>
<script setup>
defineProps({
    message: {
        required: true,
        type: String
    }
})
</script>