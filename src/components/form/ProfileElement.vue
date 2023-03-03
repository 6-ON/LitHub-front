<script setup>
import { watch, ref,defineEmits } from 'vue';

const emit = defineEmits(['submitted'])
const props = defineProps({
    fillWith: {
        required: true
    }
    ,type:{
        required:true
    }
    ,placeholder:{
        required:true
    }
    ,name:{
        required:true
    }
})
const satisfied = ref(false)

const value = ref(props.fillWith)


watch(value, (newValue) => {
    if (newValue !== '' && newValue !== props.fillWith) {
        if (!satisfied.value)
            satisfied.value = true
    }
    else
        satisfied.value = false
})

function submit() {
    emit('submitted',props.name,value.value)
    satisfied.value = false
}
</script>

<template>
    <form class="flex gap-6" @submit.prevent="submit">
        <input @keydown.enter.prevent="" :type="type" class="input input-borderd input-primary" :placeholder="placeholder" v-model="value">
        <button type="submit" class="btn btn-primary" :class="{ 'btn-disabled': !satisfied }">Update</button>
    </form>
</template>