<template>
    <div
        class="option mt-8 relative p-8 bg-white text-black border-b-1"
    >
        <span class="opacity-flux-0 animation-duration-2 inline-block relative px-2">.</span>
        <span class="opacity-flux-0 animation-duration-1 inline-block relative px-2">.</span>
        <span class="opacity-flux-0 animation-duration-0 inline-block relative px-2">.</span>
        <!-- <span class="opacity-flux-0 animation-duration-2 animation-direction-reverse">
            <span class="left-flux-0 animation-duration-2 inline-block relative">></span>
        </span>
        <span class="ml-10">
            <slot></slot>
        </span> -->
    </div>
</template>

<script>
import { global } from '../mixins/global.js'

export default {
    name: 'OptionDotDotDot',
    mixins: [global],
    props: {
        goToCard: {
            type: String,
            default: 'card-instance-0-0'
        }
    },
}
</script>

<style scoped>
</style>