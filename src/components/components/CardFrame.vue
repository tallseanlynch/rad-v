<template>
    <div id="card-frame">
        <RadElement 
            :key="`card-element-${cardElementIndex}`"
            v-for="(cardElement, cardElementIndex) in cardElements"
            :element="cardElement"
        />
    </div>
</template>

<script>
import { global } from '../mixins/global.js'
import RadElement from './RadElement.vue'
import { scr } from '../assets/js/scr.js'
import { store } from '../data/store.js'

export default {
    name: "CardFrame",
    mixins: [global],
    components: {
        RadElement
    },
    props: {
        branch: {
            type: Object
        },
        cardElements: {
            type: Array
        }
    },
    data() {
        return {
            currentBranch: this.branch,
            storeState: store.state
        }
    },
    methods: {
        sendCurrentBranchToApp() {
            this.$emit('send-current-branch-to-app', this.currentBranch)
        }
    },
    mounted() {
        window.radStore = store
        scr.organizeTextly()
        if (this.storyData["scr-config"]){
            scr.branchClasses(this.storyData["scr-config"]["class-groups"])
        }
        scr.renderGifs()
    },
    watch: {
        currentBranch: function () {
            this.sendCurrentBranchToApp()
        }
    },
    updated: function () {
    this.$nextTick(function () {
            scr.organizeTextly()
        if (this.storyData["scr-config"]){
            scr.branchClasses(this.storyData["scr-config"]["class-groups"])
        }            scr.renderGifs()
    })
}
}
</script>

<style scoped>
    #card-frame {
        /* background-color: black; */
        z-index: 1;
    }
</style>