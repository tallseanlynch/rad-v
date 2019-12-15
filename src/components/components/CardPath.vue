<template>
    <div>
        <button
            class="w-full border-white border-solid border-2 m-2 p-2"
            @click="emitSetNewCardAndBranch(compGoToCard)"
        >
            <vue-markdown
                class="vue-markdown-path"
                :source="text"
            >
            
        </vue-markdown>
        </button>
    </div>
</template>

<script>
import { global } from '../mixins/global.js'
import VueMarkdown from 'vue-markdown'

export default {
    name: "CardPath",
    mixins: [global],
    components: {
        VueMarkdown
    },
    props: {
        element: {
            type: Object
        }
    },
    computed: {
        text() {
            if (this.element.text) {
                return this.element.text
            } else return ''
        },
        compGoToCard() {
            if (this.element.goToCard) {
                return this.element.goToCard
            } else return ''
        }
    }
}
</script>

<style scoped>

</style>