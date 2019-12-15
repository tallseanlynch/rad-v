<template>
    <div
        class="text text-group text-white"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
        <div class="text-regular-0 p-4">It takes a second, but once the air fills your lungs<span class="italic-flux-0 animation-duration-15"><span class="opacity-flux-0 animation-duration-11">--it starts to affect your <span class="font-flux-rad-0 animation-duration-16">b<span class="font-flux-rad-0 animation-duration-5">r</span><span class="font-flux-rad-0 animation-duration-10">ai</span>n...</span></span></span></div>
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
    name: 'BrainText',
    mixins: [compValues, global],
    components: {
        RadElement,
    },
}
</script>

<style scoped>
</style>