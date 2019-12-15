<template>
    <div
        class="bg-white option option-rad-rainbow-0 animation-duration-9 mt-8 relative mb-8"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >

        <div class="relative">
            <h1>option</h1>
            <p>4 seconds</p>
        </div>

        <div class="animated-bar-0 animation-duration-10"></div>
        <div class="animated-bar-0 animation-duration-15 z-index-2"></div> 
        
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
    name: 'Option1',
    mixins: [compValues, global],
    components: {
        RadElement,
    },
}
</script>

<style scoped>
</style>