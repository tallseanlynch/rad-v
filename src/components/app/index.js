import '../../assets/css/tailwind.min.css'
import '../../assets/css/textly-utilities.css'
import { cards } from '../../data/story.js'
import moment from 'moment'

let testCardHistory = [
  {
    "cardInstance": "chapter-title-0",
    "time": 1576892605515,
    "formatTime": "20 Dec 2019 07:43 pm",
    "chapter": true
  },
  {
    "cardInstance": "card-instance-0-0",
    "time": 1576892605515,
    "formatTime": "20 Dec 2019 07:43 pm",
    "chapter": false
  },
  {
    "cardInstance": "card-instance-0-1_B",
    "time": 1576892867086,
    "formatTime": "20 Dec 2019 07:47 pm",
    "chapter": false,
    "generatedId": "id_345288608"
  },
  {
    "cardInstance": "card-instance-0-1---0",
    "time": 1576893772296,
    "formatTime": "20 Dec 2019 08:02 pm",
    "chapter": false,
    "generatedId": "id_188415536"
  },
  {
    "cardInstance": "card-instance-0-1---1",
    "time": 1576893777711,
    "formatTime": "20 Dec 2019 08:02 pm",
    "chapter": false,
    "generatedId": "id_172301382"
  },
  {
    "cardInstance": "card-instance-0-2",
    "time": 1576893781743,
    "formatTime": "20 Dec 2019 08:03 pm",
    "chapter": false,
    "generatedId": "id_735737441"
  },
  {
    "cardInstance": "card-instance-0-3",
    "time": 1576893785615,
    "formatTime": "20 Dec 2019 08:03 pm",
    "chapter": false,
    "generatedId": "id_909091624"
  },
  {
    "cardInstance": "card-instance-0-4",
    "time": 1576893789793,
    "formatTime": "20 Dec 2019 08:03 pm",
    "chapter": false,
    "generatedId": "id_17673057"
  }
]

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
        OptionDownArrow: OptionDownArrow.bind(this),
        Empty: Empty.bind(this),
        Chapter1: Chapter1.bind(this)
      }
      this.currentCardInstanceId = 'card-instance-0-4'
      this.currentCardOptionsActive = true
      this.cardHistory = testCardHistory
      // this.cardHistory = [
      //   {
      //     cardInstance: this.currentCardInstanceId,
      //     time: Date.now(),
      //     formatTime: moment(Date.now()).format("DD MMM YYYY hh:mm a"),
      //     chapter: false
      //   },
      // ]
      this.cards = cards.bind(this)
      this.bus = bus.bind(this)
      this.busFunctions = {}
      window.bus = this.bus

      this.appState = {
        mascot: 'wolf',
        simForm: ''
      }
      this.setAppStateValue = this.setAppStateValue.bind(this)
      this.getAppState = this.getAppState.bind(this)
      this.updateCurrentCardInstanceId = this.updateCurrentCardInstanceId.bind(this)
      this.addDefaultToElements = this.addDefaultToElements.bind(this)
      this.getCardInstanceById = this.getCardInstanceById.bind(this)
      this.currentCardElements = this.currentCardElements.bind(this)
      this.parseCardInstance = this.parseCardInstance.bind(this)
      this.returnRandomId = this.returnRandomId.bind(this)
      this.addCardToCardHistory = this.addCardToCardHistory.bind(this)
      this.addClassesToDOMNode = addClassesToDOMNode.bind(this)
      this.removeClassesFromDOMNode = removeClassesFromDOMNode.bind(this)
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
      // console.log('cardData', cardData)
      // console.log('CARDHISTORY OPTIONS', options)
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
      // console.log('addDefaultToElements')
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
      // console.log(this.cards())
      // console.log(this)

      if (this.elem) this.elem.innerHTML = `<section data-component="app">${this.templates.appContainer()}</section>`
    }
}

function bus (elId) {
  // console.log(this.busFunctions[elId])
  this.busFunctions[elId].bind(this)(elId)
}

function element (el = {}) {

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
      cardElementInterior = `<div class="card-element--template template-${el.template}">${this.templates[el.template](templateInterior)}</div>`        
    }
    let generatedId = this.returnRandomId()
      this.busFunctions[generatedId] = function () {
        this.addClassesToDOMNode(`.card-option.${el.cardInstance}`, ['opacity-out-0','animation-duration-1'])
        setTimeout(() => {
          el.callback && el.callback.bind(this)(el, {generatedId})
          el.goTo && this.addCardToCardHistory(el.goTo, {generatedId})  
        }, 1000)
      }
    return `<div class="card-element--container ${el.goTo ? 'card-option' : ''} ${el.cardInstance} ${el.cardElementClasses ? el.cardElementClasses : ''} object"  id="${generatedId}" onClick="bus('${generatedId}')">${cardElementInterior}</div>`
}

function addClassesToDOMNode (node, classes) {
  [...document.querySelectorAll(node)].forEach(addClass => {
    addClass.classList.add(...classes)
  })
}

function removeClassesFromDOMNode (node, classes) {
  [...document.querySelectorAll(node)].forEach(addClass => {
    addClass.classList.remove(...classes)
  })
}

function backgroundElements (els = []) {

  // let parsedCardInstance = this.parseCardInstance(ch.cardInstance)

  let allCardElements = this.cardHistory.map((ch) => {
    return this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).backgroundElements.map((ce => {
      if(typeof ce === 'string') {
        return { 
          text: ce, 
          template: this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).defaults.text.template,
        }   
      } else {
        return {
          ...ce, 
          // cardElementClasses: 'opacity-in-0 animation-duration-1'          
        }
      }
    }))
  })[0]

  // console.log('backgroundElements', els)
  return `<div class="layer--background-elements fixed h-full w-full">${allCardElements.map(el => {return this.templates.element(el)}).filter(cin => cin.chapter !== true).join('')}</div>`


  // return `<div class="layer--background-elements fixed h-full w-full">${els.map(el => this.templates.element(el)).join('')}</div>`
}

function cardElements (els = [], options) {
  // cardHistory ids as an array
  let historyCardInstanceIds = this.cardHistory.map(histCardId => histCardId.cardInstance)
  // console.log('historyCardInstanceIds', historyCardInstanceIds)
  // get all cards and transform strings into objects {text:'text'} with templates
  let allCards = this.cardHistory.map((ch, chi) => {
    // console.log('ch', ch)
    return this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).cardElements.map((ce => {
      if(typeof ce === 'string') {
        return { 
          text: ce, 
          template: this.getCardInstanceById(this.parseCardInstance(ch.cardInstance)).defaults.text.template,
          cardInstance: ch.cardInstance,
          // cardElementClasses: 'opacity-in-0 animation-duration-1'
        }   
      } else {
        return {
          ...ce,
          cardInstance: ch.cardInstance,
          // cardElementClasses: 'opacity-in-0 animation-duration-1'
        }
      }
    }))
  })

  // all card elements
  let allCardElements = [].concat(...allCards)

  let firstCurrentCardElementIndex = allCardElements.map(ace => this.parseCardInstance(ace.cardInstance)).indexOf(this.parseCardInstance(this.currentCardInstanceId)) // === this.currentCardInstanceId && console.log()})
  // console.log('firstCurrentCardElement', firstCurrentCardElementIndex)

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

  console.log('currentCardInstanceId', this.currentCardInstanceId)

  // unchosen history options
  // let staleFilteredHistoryOptions = filteredOptions.filter(sho => historyCardInstanceIds.indexOf(sho.goTo) < 0 && historyCardInstanceIds.map(phc => this.parseCardInstance(phc)).indexOf(this.parseCardInstance(sho.goTo)) > -1).map(show => show.goTo)
  let staleFilteredHistoryOptions = unchosenFilteredHistoryOptions.filter(op => currentCardInstanceIdOptions.indexOf(op) < 0)

  console.log('filteredOptions', filteredOptions)
  console.log('filteredHistoryOptions', filteredHistoryOptions)
  console.log('unchosenFilteredHistoryOptions', unchosenFilteredHistoryOptions)
  console.log('parsedUnchosenFilteredHistoryOptions', parsedUnchosenFilteredHistoryOptions)
  console.log('currentCardInstanceIdOptions', currentCardInstanceIdOptions)
  console.log('continueOptions', continueOptions)

  console.log('staleFilteredHistoryOptions', staleFilteredHistoryOptions)

  console.log('allCardElements', allCardElements)
  console.log('filteredOptions', filteredOptions)
  console.log('filteredHistoryOptions', filteredHistoryOptions)
  console.log('staleFilteredHistoryOptions', staleFilteredHistoryOptions)
  // filteredHistoryOptions.length > 0 && console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> FILTERED AN EXISTING OPTION', filteredHistoryOptions)

  let allFilteredCardElements = allCardElements.filter(ace => (ace.goTo === undefined || staleFilteredHistoryOptions.indexOf(ace.goTo) < 0))//.filter(c => continueOptions.indexOf(c.goTo) < 0)
// debugger
  let filteredAllCardElements = allFilteredCardElements.map(face => {
    // if(face.cardInstance === undefined) {
    //   console.log('!!!!!!!!!!!!!!!!!! FACE', face)
    // }
    if(filteredHistoryOptions.indexOf(face.goTo) < 0) {
      // console.log(face)
      return face
    } else {
      // console.log(face.cardInstance)
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

   let filterChapterCardElements = filteredAllCardElements.filter(falce => falce.chapter !== true)
  console.log('filterChapterCardElements', filterChapterCardElements)
   // console.log('filteredAllCardElements', filteredAllCardElements)

  //.filter(ce => ce.template !== 'Empty' || ce.cardInstance === undefined)
  // console.log('filteredAllCardElements', filteredAllCardElements)
  return `<div class="layer--main-elements max-w-3xl p-16 block z-index-1 w-full">${filterChapterCardElements.map(el => {return this.templates.element(el)}).join('')}</div>`
}

function foregroundElements (els = []) {
  // console.log(els)
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

function Empty () {  
  return ``
}

function Chapter1 () {
  return `<div class="flex justify-center content-center">
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
</div>`
}