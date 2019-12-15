<template>
    <img class="absolute h-full w-full"
        :src="element.src"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"

    />
</template>

<script>
// import RadElement from './RadElement.vue'
import { compValues } from '../mixins/compValues.js'
import { global } from '../mixins/global.js'
export default {
    name: "BgGif",
    mixins: [compValues, global],
    props: {
        element: {
            type: undefined,
            default: {}
        }
    }
}
</script>

<style scoped>

</style>