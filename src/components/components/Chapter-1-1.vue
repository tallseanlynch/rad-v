<template>
    <div class="full-story-container">
        <div
            v-for="(text, textIndex) in story"
           :key="textIndex"
            class="text text-group text-white my-8 bg-black p-8"
            :class="compClasses"
        >
            {{ text }}
        </div>
        <div
            @click="setRealLifeSimulationLength(7)"
        >
            <option-9>
                <span>For the 7th and last year...</span>
            </option-9>
        </div>
        <div
            @click="setRealLifeSimulationLength(8)"
        >
            <option-9>
                <span>For the 7th and 8th years...</span>
            </option-9>
        </div>
        <div
            @click="setRealLifeSimulationLength(6)"
        >
            <option-9>
                <span>I felt like I had pushed the simulatons far enough.</span>
            </option-9>
        </div>
    </div>
</template>

<script>
import inputStory from '../data/story.js'
import { store } from '../data/store.js'
import { compValues } from '../mixins/compValues.js'
import { global } from '../mixins/global.js'
export default {
    name: 'Chapter-1-1',
    mixins: [compValues, global],
    data() {
        return {
            inputStory,
            storeState: store.state
        }
    },
    computed: {
        story() {
            // console.log(inputStory.textGroups2())
            return inputStory.textGroup1()
        }
    },
    methods: {
        setRealLifeSimulationLength(length) {
            store.setValue('realLifeSimulationLength', length)
            store.setValue('currentCardInstance', 'card-instance-0-0')
            document.querySelector('.app-container').scrollTop = 0
        }
    }
}
</script>

<style scoped>
</style>