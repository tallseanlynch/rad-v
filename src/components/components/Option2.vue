<template>
    <div
        class="option option-extra w-full mt-8"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
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
    name: 'Option2',
    mixins: [compValues, global],
    components: {
        RadElement,
    },
}
</script>

<style scoped>
</style>