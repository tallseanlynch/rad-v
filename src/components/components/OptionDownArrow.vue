<template>
    <div
        class="option mt-8 relative p-8 bg-white text-black border-b-1"
    >
        <span class="opacity-flux-0 animation-duration-2 animation-direction-reverse py-4">
            <span class="down-arrow top-flux-0 animation-duration-2 inline-block relative">V</span>
        </span>
    </div>
</template>

<script>
import { global } from '../mixins/global.js'

export default {
    name: 'OptionDownArrow',
    mixins: [global],
    props: {
        goToCard: {
            type: String,
            default: 'card-instance-0-0'
        }
    },
}
</script>

<style>
.down-arrow {
    transform: scale(1.5,.75);
}
</style>