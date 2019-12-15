<template>
    <div class="full-story-container">
        <div
            v-for="(text, textIndex) in story.textGroup0()"
           :key="textIndex"
            class="text text-group text-white my-8 bg-black p-8"
            :class="compClasses"
        >
            {{ text }}
        </div>
        <div
            @click="setMascot('Pheasant')"
        >
            <option-9>
                <span>Pheasant</span>
            </option-9>
        </div>
        <div
            @click="setMascot('Wolf')"
        >
            <option-9>
                <span>Wolf</span>
            </option-9>
        </div>
        <div
            @click="setMascot('Cat')"
        >
            <option-9>
                <span>Cat</span>
            </option-9>
        </div>
        <div
            @click="setMascot('Butterfly')"
        >
            <option-9>
                <span>Butterfly</span>
            </option-9>
        </div>
    </div>
</template>

<script>
import Option9 from './Option9.vue'
import story from '../data/story.js'
import { store } from '../data/store.js'
import { compValues } from '../mixins/compValues.js'
import { global } from '../mixins/global.js'

export default {
    name: 'Chapter-1-0',
    mixins: [compValues, global],
    components: {
        Option9
    },
    data() {
        return {
            story
        }
    },
    methods: {
        setMascot(mascot) {
            store.setValue('mascot', mascot)
            store.setValue('currentCardInstance', 'card-instance-0-1')
            document.querySelector('.app-container').scrollTop = 0
        }
    }
}
</script>

<style scoped>
</style>