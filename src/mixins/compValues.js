import uuid from 'uuid'
export const compValues = {
    props: {
        element: {
            type: Object
        }
    },
    methods: {
        emitSetNewCardAndBranch(branchId) {
            this.$emit('emit-set-new-card-and-branch', branchId)
        }
    },
    computed: {
        compSrc() {
            if (this.element.src) {
                return this.element.src
            } else return false
        },
        compKeys() {
            if (this.element.children) {
                let array = []
                this.element.children.forEach(function() {
                    array.push(uuid())
                })
                return array
            } else return []
        },
        compClickFunction() {
            if (this.element.clickFunction) {
                return this.element.clickFunction
            } else if (this.element.goToCard) {
                return () => {
                    this.emitSetNewCardAndBranch(this.element.goToCard)
                }
            } else return function() {return}
        },
        compClasses() {
            if (this.element.classes) {
                return this.element.classes
            } else return []
        },
        compText() {
            if (this.element.text) {
                return this.element.text
            } else return false
        }
    }
}