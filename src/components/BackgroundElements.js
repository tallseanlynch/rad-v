export default function BackgroundElements (els = []) {
  let storyExplorerCardInstanceIds = this.storyStoryExplorerCardHistory
  let cardHistorySelector = this.cardHistory
  if(!!this.appState.storyExplorer){
    cardHistorySelector = storyExplorerCardInstanceIds
  } 

    let preAllCardElements = cardHistorySelector.map((ch) => {
      return this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).backgroundElements.map((ce => {
        if(typeof ce === 'string') {
          return { 
            text: ce, 
            template: this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).defaults.text.template,
            cardInstance: ch.cardInstance
          }   
        } else {
          return {
            ...ce, 
            cardInstance: ch.cardInstance
          }
        }
      }))
    })
  
    let allCardElements = []
    preAllCardElements.forEach(pace => {
      allCardElements = allCardElements.concat(pace).filter(bgel => { return this.parseCardInstance(bgel.cardInstance) === this.parseCardInstance(this.currentCardInstanceId)})
    })
    return `<div class="layer--background-elements fixed h-full w-full">${allCardElements.map(el => {return this.templates.Element(el)}).filter(cin => cin.chapter !== true).join('')}</div>`
  }
  