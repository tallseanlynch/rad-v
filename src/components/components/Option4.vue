<template>
    <div
        class="option bg-white mt-8 relative stretch-transparent"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
        <h1>option</h1>
        <p>stretch-transparent</p>
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
    name: 'Option4',
    mixins: [compValues, global],
    components: {
        RadElement,
    }
}
</script>

<style scoped>
</style>