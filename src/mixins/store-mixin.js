import { store } from '../data/store.js'
import moment from 'moment'

export const storemix = {
    name: 'storemix',
    methods: {
        goToCard(cardInstance, chapter = false) {

            store.setValue('currentCardOptionsActive', false)
            console.log('goToCard', cardInstance)

            const parseCardInstance = (cardInstance) => { 
                return cardInstance.indexOf('_') > -1 ? cardInstance.substr(0, cardInstance.indexOf('_')) : cardInstance
            }

            console.log(parseCardInstance(cardInstance))

            let pastCard = store.getValue('currentCardInstance')
            console.log(pastCard, store.getValue('currentCardInstance'))

            // debugger

            setTimeout(function() {
                store.setValue('currentCardInstance', cardInstance)
                // debugger
                store.addCardInstanceToHistory({
                    // cardInstance,
                    cardInstance: pastCard,
                    time: Date.now(),
                    formatTime: moment(Date.now()).format("DD MMM YYYY hh:mm a"),
                    chapter: chapter
                })
                store.setValue('currentCardOptionsActive', true)
            }, 1000)
            // store.setValue('history', draftHistory)
            // document.querySelector('.app-container').scrollTop = 0
        },
    }
}