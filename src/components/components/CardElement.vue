<template>
    <div
        v-if="isHistory && element.goTo"
        :class="`card-element--container ${element.cardElementClasses} history`"
    >
        <div
            v-if="element.text && ([...history.map(h => h.cardInstance), JSON.parse(JSON.stringify(currentCardInstance))].indexOf(element.goTo) > -1)"
        >
            <!-- {{ element.text }} -->
            <!-- {{ currentCardInstance }} -->
            <span
                v-if="defaults && defaults.text && defaults.text.template"
                :key="Date.now()"
                :is="defaults.text.template"
                class="card-element--text opacity-in-0 animation-duration-0"
            >{{ element.text }}</span>
            <span
                v-else
                :key="Date.now()"
                class="card-element--text opacity-in-0 animation-duration-0"        
            >{{ element.text }}</span>
        </div>
    </div>
    <div
        v-else
    >
        <div
            v-if="element.anchor===true"
            ref="elementAnchor"
            id="elAnchor"
        > </div>
        <div
            v-if="typeof element === 'string'"
            :class="`card-element--container ${element.cardElementClasses} string`"
            @click="clickCallback"
        >
            <span
                v-if="defaults && defaults.text && defaults.text.template"
                :is="defaults.text.template"
                class="card-element--text"
            >{{ element }}</span>
            <span
                v-else
                class="card-element--text"        
            >{{ element }}</span>
        </div>

        <div
            v-else
            :class="`card-element--container ${element.cardElementClasses} object`"
            @click="clickCallback"
        >

            <span
                v-if="element.text && !element.template && !element.html"
                class="card-element--text"
            >{{ element.text }}</span>

            <span
                v-if="element.html && !element.text && !element.template"
                v-html="element.html"
                class="card-element--html"
            ></span>

            <div
                v-if="element.template"
                :is="element.template"
                :class="{
                    ['opacity-out-3']: optionsActive
                }"
                class="card-element--template"
            >
            <!-- <div
                v-if="element.template"
                :is="element.template"
                class="card-element--template"
            > -->
                <span
                    v-if="element.html"
                    v-html="element.html"
                    class="card-element--html"
                ></span>
                <span
                    v-if="element.text"
                    class="card-element--text"
                >{{ element.text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
// should be able to regex out the final strings from the final innerHTML, could be fun to always make certains words appear with css

import { store } from '../data/store.js'

export default {
    name: "CardElement",
    props: {
        element: {
            type: undefined,
            default: ''
        },
        defaults: {
            type: Object,
            default: undefined
        },
        isHistory: {
            type: Boolean,
            default: false
        },
        currentCardOptionsActive: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            history: store.state.history,
            currentCardInstance: store.state.currentCardInstance,
            optionsActive: store.state.currentCardOptionsActive
        }
    },
    mounted() {
        if(this.element.mounted !== undefined ) {
            console.log('MOUNTED TEST')
        }
        this.element.mounted !== undefined && this.element.mounted()
        // if(this.element.anchor === true && !this.element.history) {
        //     console.log('ANCHOR!!!', this.element)
        //     setTimeout(() => {
        //         console.log(this.$refs.elementAnchor.offsetTop)
        //     }, 1000)
        // }
},
    methods: {
        clickCallback() {
            console.log('clickCallback')
            store.setValue('currentCardOptionsActive', false)
            this.$nextTick(function() {
                this.element.goTo && store.goToCard(this.element.goTo)
                // this.element.goTo && setTimeout(() => this.goToCard(this.element.goTo), 750)
                this.element.callback && this.element.callback()
                // this.element.callback && setTimeout(() => this.element.callback(), 500)
                console.log(store)
            })
            // debugger
        }
    }
}
</script>

