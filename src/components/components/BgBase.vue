<template>
    
    <div class="bg-base flex flex-col justify-center text-center w-full break-words h-full fixed items-center layer"
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
    name: "BgBase",
    mixins: [compValues, global],
    components: {
        RadElement
    },
    props: {
        element: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>