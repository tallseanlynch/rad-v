<template>
    <div
        class="radiation-container mb-16"
        :class="compClasses"
        @click="compClickFunction"
        @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
    >
        <div class="css-preview-container flex justify-center content-center">
            <div class="css-preview text-white block font-size-flux-0 animation-duration-8">
                <span class="letter font-weight-flux-0 animation-duration-12">
                    <!-- <span class="color-rad-0 animation-duration-14">
                <span class="letter font-flux-rad-0 animation-duration-9">
                  <span class="top-flux-0 animation-duration-7">R</span>
                </span>
                    </span>-->

                    <span class="color-rad-0 animation-duration-14">
                        <span class="letter font-flux-rad-0 animation-duration-9">
                            <span class="top-flux-0 animation-duration-7">R</span>
                        </span>
                    </span>

                    <span class="color-rad-0 animation-duration-5">
                        <span class="letter font-flux-rad-0 animation-duration-8">A</span>
                    </span>

                    <span class="color-rad-0 animation-duration-12">
                        <span class="letter font-flux-rad-0 animation-duration-13">
                            <span class="top-flux-0 animation-duration-12">D</span>
                        </span>
                    </span>

                    <span class="color-rad-0 animation-duration-8">
                        <span class="letter font-flux-rad-0 animation-duration-12">
                            <span class="top-flux-0 animation-duration-16">I</span>
                        </span>
                    </span>

                    <span class="color-rad-0 animation-duration-4">
                        <span class="letter font-flux-rad-0 animation-duration-8">
                            <span class="top-flux-0 animation-duration-12">A</span>
                        </span>
                    </span>

                    <span class="color-rad-0 animation-duration-9">
                        <span class="letter font-flux-rad-0 animation-duration-16">T</span>
                    </span>

                    <span class="color-rad-0 animation-duration-15">
                        <span class="letter font-flux-rad-0 animation-duration-11">
                            <span class="top-flux-0 animation-duration-9">I</span>
                        </span>
                    </span>

                    <span class="color-rad-0 animation-duration-7">
                        <span class="letter font-flux-rad-0 animation-duration-2">
                            <span class="top-flux-0 animation-duration-6">O</span>
                        </span>
                    </span>

                    <span class="letter font-flux-rad-0 animation-duration-9">
                        <span class="color-rad-0 animation-duration-15">N</span>
                    </span>
                </span>
            </div>
        </div>
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
    name: 'RadiationContainer',
    mixins: [compValues, global],
    components: {
        RadElement,
    },
}
</script>

<style scoped>
</style>