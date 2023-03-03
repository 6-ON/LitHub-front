
<script setup>

defineProps({
    member: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="flex items-center gap-3">
        <div class="avatar online">
            <div class="w-14 rounded-full">
                <img :src="member?.image" />
            </div>
        </div>
        <h5 class="font-mono text-gray-600">@{{ member?.username }}</h5>
    </div>
</template>