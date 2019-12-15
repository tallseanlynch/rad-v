
import storyData from '../data/myStory4.js'

export const global = {
    name: 'global',
    data() {
        return {
            storyData,
            gameState: 'CARD',
            currentCardInstance: 'card-instance-0-0',
            mascot: ''
        }
    },
    props: {
        appData: {
            type: Object
        },
    },
    methods: {
        findCardInstanceIndexFromId(id) {
            return this.storyData.cardInstances.findIndex(obj => {
                return obj.id === id
            })
        },
        emitSetNewCardAndBranch(branchId) {
            this.$emit('emit-set-new-card-and-branch', branchId)
            document.querySelector('.app-container').scrollTop = 0
        },
        setNewCardAndBranch(newPathId, isStartOver) {
            let ciIndex = this.findCardInstanceIndexFromId(newPathId)
            if (isStartOver) {
                ciIndex = 0
            }
            this.currentBranch = this.storyData.cardInstances[ciIndex]
        },
        setGlobalProp(prop, propValue) {
            window.radData[prop] = propValue
        },
        getGlobalProp(prop) {
            return window.radData[prop]
        },
        getGlobalProps() {
            return window.radData
        }
    }
}