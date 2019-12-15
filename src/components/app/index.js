import * as tailwindCSS from '../../assets/css/tailwind.min.css'
import * as textlyUtilities from '../../assets/css/textly-utilities.css'
import { cards } from '../../data/story.js'
import moment from 'moment'

export default class App {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
      this.templates = {
        appContainer: appContainer.bind(this),
        cardContainer: cardContainer.bind(this),
        element: element.bind(this),
        backgroundElements: backgroundElements.bind(this),
        cardElements: cardElements.bind(this),
        foregroundElements: foregroundElements.bind(this),
        Text0: Text0.bind(this),
        Option9: Option9.bind(this),
        OptionDotDotDot: OptionDotDotDot.bind(this),
        OptionDownArrow: OptionDownArrow.bind(this)
      }
      this.currentCardInstanceId = 'card-instance-0-0'
      this.currentCardOptionsActive = true
      this.cardHistory = [
        {
          cardInstance: this.currentCardInstanceId,
          time: Date.now(),
          formatTime: moment(Date.now()).format("DD MMM YYYY hh:mm a"),
          chapter: false
        },
      ]
      this.cards = cards
      this.bus = bus.bind(this)
      this.busFunctions = {}
      window.bus = this.bus

      this.appState = {}
      this.setAppStateValue = this.setAppStateValue.bind(this)
      this.getAppState = this.getAppState.bind(this)
      this.updateCurrentCardInstanceId = this.updateCurrentCardInstanceId.bind(this)
      this.addDefaultToElements = this.addDefaultToElements.bind(this)
      this.getCardInstanceById = this.getCardInstanceById.bind(this)
      this.currentCardElements = this.currentCardElements.bind(this)
      this.parseCardInstance = this.parseCardInstance.bind(this)
      this.returnRandomId = this.returnRandomId.bind(this)
      this.addCardToCardHistory = this.addCardToCardHistory.bind(this)
    }

    setAppStateValue (key, value) {
      this.appState[key] = value
    }

    getAppState () {
      return this.appState
    }

    addCardToCardHistory (cardInstanceId, options = {}) {
      let cardData = {
        ...{
          cardInstance: cardInstanceId,
          time: Date.now(),
          formatTime: moment(Date.now()).format("DD MMM YYYY hh:mm a"),
          chapter: false
        },
        ...options
      }
      console.log('cardData', cardData)
      this.cardHistory.push(cardData)
      this.updateCurrentCardInstanceId(this.parseCardInstance(cardInstanceId))
      const beforeHist = document.querySelector('.full-card').scrollTop
      this.render()
      document.querySelector('.full-card').scrollTop = beforeHist //-100
    }
    
    updateCurrentCardInstanceId (id) {
      this.currentCardInstanceId = id
    }

    currentCardElements () {
      return this.getCardInstanceById(this.currentCardInstanceId).cardElements
    }
    
    addDefaultToElements (cardInstance) {
      console.log('addDefaultToElements')
      return cardInstance
    }

    getCardInstanceById (id) {
      return this.cards().cardInstances.filter(c => c.id === id)[0]
    }

    parseCardInstance (cardInstance) { 
      return cardInstance.indexOf('_') > -1 ? cardInstance.substr(0, cardInstance.indexOf('_')) : cardInstance
    }

    returnRandomId () {
      return 'id_' + String(Math.round(Math.random()*1234567890))
    }
        
    render () {
      console.log(this.cards())
      console.log(this)

      if (this.elem) this.elem.innerHTML = `<section data-component="app">${this.templates.appContainer()}</section>`
    }
}

function bus (elId) {
  console.log(this.busFunctions[elId])
  this.busFunctions[elId].bind(this)(elId)
}

function element (el = {}) {

  if(el.isHistory && el.goTo) {
    // user has been to this element's card before
    // element is an option from the card history
    // meaning user should see the selected option as text and not the option

    let historyElementInterior = ''
    if(el.text && ([...this.cardHistory.map(h => h.cardInstance), this.currentCardInstanceId ].indexOf(el.goTo) > -1)) {
      if(defaults && el.defaults.text && el.defaults.text.template) {
        historyElementInterior = `<span id="${this.returnRandomId()}" class="card-element--text opacity-in-0 animation-duration-0">${el.template(el.text)}</span>`
      } else {
        historyElementInterior = `<span id="${this.returnRandomId()}" class="card-element--text opacity-in-0 animation-duration-0">${el.text}</span>`              
      }
    }
    return `<div class="card-element--container ${el.cardElementClasses} history">${historyElementInterior}</div>`
  } else {
    // user has NOT been to this element's card before
    if(el.anchor) {
      return `<div class="card-element--anchor" id="${this.returnRandomId()}"></div>`
    }    
    let cardElementInterior = ''
    if(el.text && !el.template && !el.html) {cardElementInterior = el.text}
    if(el.html && !el.text && !el.template) {cardElementInterior = el.html}
    if(el.template) {
      let templateInterior = ''
      if(el.html) { templateInterior = `<span class="card-element--html">${el.html}</span>` }
      if(el.text) { templateInterior = `<span class="card-element--text">${el.text}</span>` }
      cardElementInterior = `<div class="card-element--template">${this.templates[el.template](templateInterior)}</div>`        
    }
    let generatedId = this.returnRandomId()
    this.busFunctions[generatedId] = el.callback
    return `<div class="card-element--container ${el.cardElementClasses ? el.cardElementClasses : ''} object"  id="${generatedId}" onClick="bus('${generatedId}')">${cardElementInterior}</div>`
  }
}


function OptionDotDotDot () {
  return `<div class="option mt-8 relative p-8 bg-white text-black border-b-1">
    <span class="opacity-flux-0 animation-duration-2 inline-block relative px-2">.</span>
    <span class="opacity-flux-0 animation-duration-1 inline-block relative px-2">.</span>
    <span class="opacity-flux-0 animation-duration-0 inline-block relative px-2">.</span>
  </div>`
}

function OptionDownArrow () {
  return `<div class="option mt-8 relative p-8 bg-white text-black border-b-1">
    <span class="opacity-flux-0 animation-duration-2 inline-block relative px-2">.</span>
    <span class="opacity-flux-0 animation-duration-1 inline-block relative px-2">.</span>
    <span class="opacity-flux-0 animation-duration-0 inline-block relative px-2">.</span>
  </div>`
}

function Option9 (interior) {
  return `
    <div class="option mt-8 relative p-8 bg-white text-black text-left border-b-1">
      <span class="opacity-flux-0 animation-duration-2 animation-direction-reverse">
          <span class="left-flux-0 animation-duration-2 inline-block relative">></span>
      </span>
      <span class="ml-10">
        ${interior }
      </span>
    </div>`
}

function Text0 (interior) {
  
  return `<div class="text text-group text-white my-8 bg-black p-8 text0">${interior}</div>`
}

function backgroundElements (els = []) {

  // let parsedCardInstance = this.parseCardInstance(ch.cardInstance)

  let allCardElements = this.cardHistory.map((ch) => {
    return this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).backgroundElements.map((ce => {
      if(typeof ce === 'string') {
        return { 
          text: ce, 
          template: this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).defaults.text.template
        }   
      } else {
        return ce
      }
    }))
  })[0]

  console.log('backgroundElements', els)
  return `<div class="layer--background-elements fixed h-full w-full">${allCardElements.map(el => {console.log(el); return this.templates.element(el)}).filter(cin => cin.chapter !== true).join('')}</div>`


  // return `<div class="layer--background-elements fixed h-full w-full">${els.map(el => this.templates.element(el)).join('')}</div>`
}

function cardElements (els = [], options) {
  // cardHistory ids as an array
  let historyCardInstanceIds = this.cardHistory.map(histCardId => histCardId.cardInstance)

  // get all cards and transform strings into objects {text:'text'} with templates
  let allCards = this.cardHistory.map((ch, chi) => {
    console.log('ch', ch)
    return this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).cardElements.map((ce => {
      if(typeof ce === 'string') {
        return { 
          text: ce, 
          template: this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).defaults.text.template,
          cardInstance: ch.cardInstance
        }   
      } else {
        return {...ce, cardInstance: ch.cardInstance}
      }
    }))
  })

  // all card elements
  let allCardElements = [].concat(...allCards)

  let firstCurrentCardElementIndex = allCardElements.map(ace => this.parseCardInstance(ace.cardInstance)).indexOf(this.parseCardInstance(this.currentCardInstanceId)) // === this.currentCardInstanceId && console.log()})
  console.log('firstCurrentCardElement', firstCurrentCardElementIndex)

  const animationTop = {
    html: `<div class="current-card-transition-in w-full animation-duration-1"></div>`
  }

  // 
  console.log(allCardElements.splice(firstCurrentCardElementIndex, 0, animationTop))
  // 
  // all options
  let filteredOptions = allCardElements.filter(ac => ac.goTo ).filter(op => op.goTo) 

  // chosen history option
  let filteredHistoryOptions = filteredOptions.filter(ho => historyCardInstanceIds.indexOf(ho.goTo) > -1).map(mho => mho.goTo)

  // unchosen history options
  let staleFilteredHistoryOptions = filteredOptions.filter(sho => historyCardInstanceIds.indexOf(sho.goTo) < 0 && historyCardInstanceIds.map(phc => this.parseCardInstance(phc)).indexOf(this.parseCardInstance(sho.goTo)) > -1).map(show => show.goTo)

  console.log('allCardElements', allCardElements)
  console.log('filteredOptions', filteredOptions)
  console.log('filteredHistoryOptions', filteredHistoryOptions)
  console.log('staleFilteredHistoryOptions', staleFilteredHistoryOptions)
  filteredHistoryOptions.length > 0 && console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> FILTERED AN EXISTING OPTION', filteredHistoryOptions)

  let filteredAllCardElements = allCardElements.filter(ace => (ace.goTo === undefined || staleFilteredHistoryOptions.indexOf(ace.goTo) < 0)).map(face => {
    if(filteredHistoryOptions.indexOf(face.goTo) < 0) {
      return face
    } else {
      console.log(face.cardInstance)
      return {
        ...face,
        goTo: undefined,
        template: this.getCardInstanceById(this.parseCardInstance(face.cardInstance)).defaults.text.template
      }
    }
  })
  console.log('filteredAllCardElements', filteredAllCardElements)
  return `<div class="layer--main-elements max-w-3xl p-16 block z-index-1 w-full">${filteredAllCardElements.map(el => {console.log(el); return this.templates.element(el)}).filter(cin => cin.chapter !== true).join('')}</div>`
}

function foregroundElements (els = []) {
  console.log(els)
  return els
}

function appContainer (config = {}) {
  return `
  <div
    class="app-container full-card flex flex-col justify-start text-center w-full break-words h-full fixed items-center background-color-rad-0 p-8 pt-0"
    ref="card"
  >
    ${this.templates.backgroundElements()}
    ${this.templates.cardElements()}
    ${this.templates.foregroundElements()}
  </div>
`
}

function cardContainer (config = {}) {
  return ``
}
