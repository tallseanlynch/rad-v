import '../../assets/css/tailwind.min.css'
import '../../assets/css/textly-utilities.css'
import { cards } from '../../data/story.js'
import testCardHistory from '../../data/testCardHistory.js'
import moment from 'moment'
import StoryExplorer from './storyExplorer.js'
import lazyCSSComp from './lazyCSSComp.js'
import MainMenu from '../../components/MainMenu'
import Chapter1 from '../../components/Chapter1.js'
import Element from '../../components/Element.js'

const lazyCSSCompOptions = {
  transitionTime: '3000ms',
  baseUnit: .5,
  numberOfUnits: 16
}

const additionalCSS = lazyCSSComp(lazyCSSCompOptions)

export default class App {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
      this.templates = {
        AppContainer: AppContainer.bind(this),
        CardContainer: CardContainer.bind(this),
        Element: Element.bind(this),
        BackgroundElements: BackgroundElements.bind(this),
        CardElements: CardElements.bind(this),
        ForegroundElements: ForegroundElements.bind(this),
        chapterElements: ChapterElements.bind(this),
        MainMenuElements: MainMenuElements.bind(this),
        Text0: Text0.bind(this),
        Option9: Option9.bind(this),
        OptionDotDotDot: OptionDotDotDot.bind(this),
        OptionDownArrow: OptionDownArrow.bind(this),
        Empty: Empty.bind(this),
        Chapter1: Chapter1.bind(this),
        MainMenu: MainMenu.bind(this),
        StoryExplorer: StoryExplorer.bind(this)
      }
      this.currentCardInstanceId = 'card-instance-0-0'
      this.currentCardOptionsActive = true
      this.cardHistory = testCardHistory
      this.cards = cards.bind(this)
      this.bus = bus.bind(this)
      this.busFunctions = {
        main: function () {
          if(this.appState.mainMenu === true) {
            this.appState.chapterMenu = true
            this.appState.mainMenu = false
            this.render()
          } else {
            if(this.appState.chapterMenu === true) {
              this.appState.chapterMenu = false
              this.appState.storyMenu = true
              this.render()
            }
          }
        }
      }
      window.bus = this.bus

      this.appState = {
        // mascot: 'wolf',
        // simForm: '',
        chapterMenu: false,
        mainMenu: false,
        storyMenu: true,
        storyExplorer: true,
        storyExploreSelect: '',
        storyExplorerFilter: ''
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
      this.cardHistory.push(cardData)
      this.updateCurrentCardInstanceId(this.parseCardInstance(cardInstanceId))
      const beforeHist = document.querySelector('.full-card').scrollTop
      this.render()
      document.querySelector('.full-card').scrollTop = beforeHist
    }
    
    updateCurrentCardInstanceId (id) {
      this.currentCardInstanceId = id
    }

    currentCardElements () {
      return this.getCardInstanceById(this.currentCardInstanceId).cardElements
    }
    
    addDefaultToElements (cardInstance) {
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
      if (this.elem) this.elem.innerHTML = `<section data-component="app">${this.templates.AppContainer()}</section>`
    }
}

function bus (elId) {
  this.busFunctions[elId].bind(this)(elId)
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

function BackgroundElements (els = []) {
  let preAllCardElements = this.cardHistory.map((ch) => {
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

function ChapterElements (els = [], options) {
  return this.templates.Chapter1()
}

function MainMenuElements (els = [], options) {
  return this.templates.MainMenu()
}

function CardElements (els = [], options) {
  let historyCardInstanceIds = this.cardHistory.map(histCardId => histCardId.cardInstance)
  let allCards = this.cardHistory.map((ch, chi) => {
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

function ForegroundElements (els = []) {
  return els
}

function AppContainer (config = {}) {
  const SE = this.appState.storyExplorer
  return `
  ${additionalCSS}
  ${SE ? this.templates.StoryExplorer(this.cards()) : ''}
  <div class="app-container full-card flex flex-col justify-start text-center w-full break-words h-full fixed items-center background-color-rad-0 p-8 pt-0" onClick="bus('main')">
    ${this.appState.storyMenu ? this.templates.BackgroundElements() : ''}
    ${this.appState.storyMenu ? this.templates.CardElements() : ''}
    ${this.appState.storyMenu ? this.templates.ForegroundElements() : ''}
    ${this.appState.chapterMenu ? this.templates.ChapterElements() : ''}
    ${this.appState.mainMenu ? this.templates.mainMenuElements() : ''}
    </div>
`
}

function CardContainer (config = {}) {
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

