<template>
    <div
        :class="compClasses"
        :is="element.type"
        :element="element"
        :src="compSrc"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
    <span v-if="compText">
        {{compText}}
    </span>
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
import { global } from '../mixins/global.js'
import { compValues } from '../mixins/compValues.js'
import CardHeader from './CardHeader.vue'
import CardBody from './CardBody.vue'
import CardPath from './CardPath.vue'
import RadElement from './RadElement.vue'
export default {
    name: "RadElement",
    mixins: [global, compValues],
    components: {
        CardHeader,
        CardBody,
        CardPath,
        RadElement
    }
}
</script>

<style scoped>

</style>