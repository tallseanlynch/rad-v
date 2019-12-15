<template>
    <div
        class="bg-white option option-rad-rainbow-0 animation-duration-14 relative mb-8"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
            <h1>option option-rad-rainbow-1-7</h1>
        <p>4 seconds</p>
        <div class="animated-bar-1 z-index-2 animation-duration-7"></div>
        <div class="animated-bar-1 z-index-2 animation-duration-12"></div>
        <div class="animated-bar-1 z-index-2 animation-duration-9"></div>
        <div class="animated-bar-1 z-index-2 animation-duration-16"></div>
        <div class="animated-bar-1 z-index-2 animation-duration-11"></div>

        <template v-if="element.children">
            <RadElement
                :key="`element-child-${compKeys[childIndex]}`"
                v-for="(child, childIndex) in element.children"
                :element="child"
                @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
            />
        </template>
    </div>
</template>

<script>
import RadElement from './RadElement.vue'
import { compValues } from '../mixins/compValues.js'
import { global } from '../mixins/global.js'
export default {
    name: 'Option3',
    mixins: [compValues, global],
    components: {
        RadElement,
    },
}
</script>

<style scoped>
</style>