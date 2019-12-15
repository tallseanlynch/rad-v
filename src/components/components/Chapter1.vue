<template>
    <transition
        name="chapter"
        @after-enter="toggleAnimationComplete"
        @before-leave="toggleAnimationComplete"
        @after-leave="goToCard('card-instance-0-0', true)"
    >
        <div
            v-if="show"
            class="chapter-header radiation-container py-20 fixed"
            :class="{
                ['chapter-complete']: animationComplete
            }"
            @click="chapterClicked"
        >
            <div class="css-preview-container flex justify-center content-center">
                <div class="css-preview text-white block font-size-flux-0 animation-duration-8">
                    <span class="letter font-weight-flux-0 animation-duration-12">
                        <span class="color-rad-0 animation-duration-14">
                            <span class="letter font-flux-rad-0 animation-duration-9">
                                <span class="top-flux-0 animation-duration-7">C</span>
                            </span>
                        </span>

                        <span class="color-rad-0 animation-duration-5">
                            <span class="letter font-flux-rad-0 animation-duration-8">H</span>
                        </span>

                        <span class="color-rad-0 animation-duration-12">
                            <span class="letter font-flux-rad-0 animation-duration-13">
                                <span class="top-flux-0 animation-duration-12">A</span>
                            </span>
                        </span>

                        <span class="color-rad-0 animation-duration-8">
                            <span class="letter font-flux-rad-0 animation-duration-12">
                                <span class="top-flux-0 animation-duration-16">P</span>
                            </span>
                        </span>

                        <span class="color-rad-0 animation-duration-4">
                            <span class="letter font-flux-rad-0 animation-duration-8">
                                <span class="top-flux-0 animation-duration-12">T</span>
                            </span>
                        </span>

                        <span class="color-rad-0 animation-duration-9">
                            <span class="letter font-flux-rad-0 animation-duration-16">E</span>
                        </span>

                        <span class="color-rad-0 animation-duration-15">
                            <span class="letter font-flux-rad-0 animation-duration-11">
                                <span class="top-flux-0 animation-duration-9">R</span>
                            </span>
                        </span>

                        <span class="color-rad-0 animation-duration-7 w-8">
                            <span class="letter font-flux-rad-0 animation-duration-2">
                                <span class="top-flux-0 animation-duration-6"></span>
                            </span>
                        </span>

                        <span class="letter font-flux-rad-0 animation-duration-9">
                            <span class="color-rad-0 animation-duration-15">1</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { store } from '../data/store.js'

export default {
    name: 'Chapter1',
    data() {
        return {
            storeState: store.state,
            classes: '',
            show: false,
            animationComplete: false
        }
    },
    mounted() {
        console.log('Chapter mounted')
        this.show = true;
        // this.classes = 'top-slide-in-0'
    },
    methods: {
        chapterClicked() {
            console.log('Chapter clicked')
            this.show = !this.show
            // this.classes = 'top-slide-out-0'
        },
        toggleAnimationComplete() {
            this.animationComplete = !this.animationComplete
            console.log('toggleAnim')
        },
        goToCard(cardInstance, history) {
            store.goToCard(cardInstance, history)
        }
    },
}
</script>

<style scoped>

.chapter-enter-active, .chapter-leave-active {
    transition: top 2s;
    top: 40%;
}

div.chapter-enter, div.chapter-leave-to {
    transition: top 2s;
    top: -100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.chapter-complete {
    top: 40%;
}

.curtain {
    left: 0;
    top: 0;
}

</style>