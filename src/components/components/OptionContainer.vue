<template>
    <Option7>
        Yo yo yo
    </Option7>
</template>

<script>
import Option7 from './Option7.vue'
import { compValues } from '../mixins/compValues.js'
import { global } from '../mixins/global.js'
export default {
    name: 'Option5',
    mixins: [compValues, global],
    components: {
        Option7,
    },
}
</script>

<style scoped>
</style>

