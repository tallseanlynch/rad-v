export default function CardElements (els = [], options) {
    let storyExplorerCardInstanceIds = this.storyStoryExplorerCardHistory
    let cardHistorySelector = this.cardHistory
    if(!!this.appState.storyExplorer){
      cardHistorySelector = storyExplorerCardInstanceIds
    } 
    let historyCardInstanceIds = cardHistorySelector.map(histCardId => histCardId.cardInstance)
    let allCards = cardHistorySelector.map((ch, chi) => {
      return this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).cardElements.map((ce => {
        if(typeof ce === 'string') {
          return { 
            text: ce, 
            template: this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).defaults.text.template,
            cardInstance: ch.cardInstance,
          }   
        } else {
          return {
            ...ce,
            cardInstance: ch.cardInstance,
          }
        }
      }))
    })
  
    // all card elements
    let allCardElements = [].concat(...allCards)
  
    let firstCurrentCardElementIndex = allCardElements.map(ace => this.parseCardInstance(ace.cardInstance)).indexOf(this.parseCardInstance(this.currentCardInstanceId)) // === this.currentCardInstanceId && console.log()})
  
    const animationTop = {
      html: `<div class="current-card-transition-in w-full animation-duration-1"></div>`,
      cardInstance: this.currentCardInstanceId
    }
    allCardElements.splice(firstCurrentCardElementIndex, 0, animationTop)
  
    // all options
    let filteredOptions = allCardElements.filter(ac => ac.goTo ).filter(op => op.goTo) 
  
    // chosen history option
    let filteredHistoryOptions = filteredOptions.filter(ho => historyCardInstanceIds.indexOf(ho.goTo) > -1).map(mho => mho.goTo)
    let unchosenFilteredHistoryOptions = filteredOptions.filter(ho => historyCardInstanceIds.indexOf(ho.goTo) < 0).map(mho => mho.goTo)
    let parsedUnchosenFilteredHistoryOptions = unchosenFilteredHistoryOptions.map(phc => this.parseCardInstance(phc))
    let currentCardInstanceIdOptions = this.getCardInstanceById(this.currentCardInstanceId).cardElements.filter(ccii => ccii.goTo).map(ce => ce.goTo)
    let continueOptions = filteredHistoryOptions.filter(co => co.text === undefined)
  
  
    // unchosen history options
    let staleFilteredHistoryOptions = unchosenFilteredHistoryOptions.filter(op => currentCardInstanceIdOptions.indexOf(op) < 0)
  
    let allFilteredCardElements = allCardElements.filter(ace => (ace.goTo === undefined || staleFilteredHistoryOptions.indexOf(ace.goTo) < 0))//.filter(c => continueOptions.indexOf(c.goTo) < 0)
    let filteredAllCardElements = allFilteredCardElements.map(face => {
      if(filteredHistoryOptions.indexOf(face.goTo) < 0) {
        return face
      } else {
        if(face.text) {
          return {
            ...face,
            goTo: undefined,
            template: this.getCardInstanceById(this.parseCardInstance(face.cardInstance)).defaults.text.template,
            cardElementClasses: 'opacity-in-0 animation-duration-1'
          }  
        } else {
          return {
            template: 'Empty'
          }
        }
      }
    }).filter(ce => ce !== undefined)
  
     let filterChapterCardElements = filteredAllCardElements
    return `<div class="layer--main-elements max-w-3xl p-16 block z-index-1 w-full">${filterChapterCardElements.map(el => {return this.templates.Element(el)}).join('')}</div>`
  }