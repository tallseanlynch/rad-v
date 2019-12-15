<template>
    <div class="text-5xl">
        <vue-markdown
            class="vue-markdown-header"
            :source="text"
        >
            
        </vue-markdown>
    </div>
</template>

<script>
import { global } from '../mixins/global.js'
import VueMarkdown from 'vue-markdown'

export default {
    name: "CardHeader",
    components: {
        VueMarkdown
    },
    mixins: [global],
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
        }
    }
}
</script>

<style scoped>

</style>