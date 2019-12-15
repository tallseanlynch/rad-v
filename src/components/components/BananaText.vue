<template>
    <div
        class="text text-group text-white"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
        <div class="text-regular-0 p-4">The smell of <span class="opacity-flux-0 animation-duration-5">metalic bananas</span> fills the air...</div>
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
    name: 'BananaText',
    mixins: [compValues, global],
    components: {
        RadElement,
    },
}
</script>

<style scoped>
</style>