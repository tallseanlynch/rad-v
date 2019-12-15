<template>
    <div class="card-body w-full text-lg my-10">
        <vue-markdown
            class="vue-markdown-body"
            :source="text"
        >
            
        </vue-markdown>
    </div>
</template>

<script>
import { global } from '../mixins/global.js'
import VueMarkdown from 'vue-markdown'

export default {
    name: "CardBody",
    mixins: [global],
    components: {
        VueMarkdown
    },
    props: {
        element: {
            type: Object
        }
    },
    data: function () {
        return {
            anchorAttributes: {
                target: '_blank',
                rel: 'noopener noreferrer nofollow'
            },
            markdown: '[A link to a website](https://google.com)',
            html: '<p><a href="https://google.com">A link to a website</a>'
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