import moment from 'moment'

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export const store = {
    state: {
      history: [
        // {
        //   cardInstance: 'card-instance-0-0',
        //   time: Date.now(),
        //   formatTime: moment(Date.now()).format("DD MMM YYYY hh:mm a")
        // }
      ],
      cardReset: true,
      endChoices: {
        world: false,
        more: false,
        show: false
      },
      mascot: 'pheasant',
      // currentCardInstance: 'card-instance-2-4',
      currentCardInstance: 'chapter-title-0',
      opalAlive: false,
      opalHasBody: true,
      procedureLocation: 'outside',
      simForm: 'person',
      currentCardOptionsActive: true
    },
    setValue(key, value) {
      this.state[key] = value;
    },
    getValue(key) {
      // console.log('getValue', key, isObject(this.state[key]) ? JSON.parse(JSON.stringify(this.state[key])) : this.state[key])
      let value = isObject(this.state[key]) ? JSON.parse(JSON.stringify(this.state[key])) : this.state[key]
      if(value === undefined) { debugger}
      return isObject(this.state[key]) ? JSON.parse(JSON.stringify(this.state[key])) : this.state[key]
    },
    getState() {
      return JSON.parse(JSON.stringify(this.state))
    },
    findCardInstanceIdWithinHistory(id) {
      let cardInstance;
      this.state.forEach((card) => {
        if(card.id === id) {
          cardInstance = card
        }
      })
      return JSON.parse(JSON.stringify(cardInstance))
    },
    addCardInstanceToHistory(cardInstance) {
      const beforeHist = document.querySelector('.full-card').scrollTop
      console.log('************outside', document.querySelector('.full-card').scrollTop)
      this.state.history.push(cardInstance)
      console.log(JSON.parse(JSON.stringify(this.state.history)))
      setTimeout(() => {
        console.log('**************inside', document.querySelector('.full-card').scrollTop)
        console.log(document.querySelector('.current-card-anchor'))
//        window.scrollTo(0,document.querySelector('.current-card-anchor').offsetTop)
        document.querySelector('.full-card').scrollTop = beforeHist //-100
      }, 0)
    },
    goToCard(cardInstance, chapter = false) {
      // this.state.currentCardOptionsActive = false
      // this.cardReset = false
      this.setValue('currentCardOptionsActive', false)

      console.log('goToCard', cardInstance)

      const parseCardInstance = (cardInstance) => { 
          return cardInstance.indexOf('_') > -1 ? cardInstance.substr(0, cardInstance.indexOf('_')) : cardInstance
      }

      console.log(parseCardInstance(cardInstance))

      // debugger

      setTimeout(() => {
        this.addCardInstanceToHistory({
          // cardInstance,
          cardInstance: store.getValue('currentCardInstance'),
          time: Date.now(),
          formatTime: moment(Date.now()).format("DD MMM YYYY hh:mm a"),
          chapter: chapter
        })
        this.setValue('currentCardInstance', cardInstance)
        this.setValue('currentCardOptionsActive', true)
      }, 1000)

      // store.setValue('history', draftHistory)
      // document.querySelector('.app-container').scrollTop = 0
  },
};