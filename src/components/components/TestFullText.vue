<template>
    <div class="full-story-container">
        <div
            v-for="(text, textIndex) in story.textGroups"
           :key="textIndex"
            class="text text-group text-white my-8 bg-black p-8"
            :class="compClasses"
        >
            {{ text }}
        </div>
        <!-- <div
            class="text text-group text-white"
            :class="compClasses"
            @click="compClickFunction"
            @emit-set-new-card-and-branch="emitSetNewCardAndBranch(...arguments)"
        >
            {{ story.raw }}
        </div> -->
    </div>
</template>

<script>
// import RadElement from './RadElement.vue'
import story from '../data/story.js'
import { compValues } from '../mixins/compValues.js'
import { global } from '../mixins/global.js'
export default {
    name: 'TestFullText',
    mixins: [compValues, global],
    data() {
        return {
            story
        }
    }
}
</script>

<style scoped>
</style>