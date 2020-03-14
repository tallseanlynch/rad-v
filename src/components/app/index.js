import '../../assets/css/tailwind.min.css'
import '../../assets/css/textly-utilities.css'
import { cards } from '../../data/story.js'
import testCardHistory from '../../data/testCardHistory.js'
import moment from 'moment'
import { StoryExplorer, createStoryExplorerTimeline, assignDepthsToCardOptions, findDuplicateCardIds, renderStoryExplorerTimeline } from './storyExplorer.js'
import lazyCSSComp from './lazyCSSComp.js'
import MainMenu from '../../components/MainMenu'
import Chapter1 from '../../components/Chapter1.js'
import Element from '../../components/Element.js'
import Options from '../../components/Options.js'
import Texts from '../../components/Texts.js'
import BackgroundElements from '../BackgroundElements.js'
import ForegroundElements from '../ForegroundElements.js'
import CardElements from '../CardElements.js'

const { Option9, OptionDotDotDot, OptionDownArrow } = Options
const { Text0 } = Texts

const lazyCSSCompOptions = {
  // transitionTime: '3000ms',
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
      this.storyExplorerTimeline = {
        __debug: {}
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
        },
        storyExplorerOpenClose: function () {
          this.appState.storyExplorer = !this.appState.storyExplorer
          const addStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'
          const removeStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-out-0' : 'left-slide-in-0'
          this.removeClassesFromDOMNode('.story-card-explorer', [removeStoryExplorerOpenCloseClass])
          this.addClassesToDOMNode('.story-card-explorer', [addStoryExplorerOpenCloseClass])
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
      this.createStoryExplorerTimeline = createStoryExplorerTimeline.bind(this)
      this.assignDepthsToCardOptions = assignDepthsToCardOptions.bind(this)
      this.findDuplicateCardIds = findDuplicateCardIds.bind(this)
      this.renderStoryExplorerTimeline = renderStoryExplorerTimeline.bind(this)
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
      this.renderAppContainer()
      document.querySelector('.full-card').scrollTop = beforeHist
      // const afterHist = document.querySelector('.full-card').scrollTop
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

    renderAppContainer () {
      document.querySelector('.app-container-wrapper').innerHTML = this.templates.AppContainer()
    }

    render () {
      if (this.elem) this.elem.innerHTML = `
      ${additionalCSS}
      <section data-component="app">
      ${this.templates.StoryExplorer(this.cards())}
      ${this.templates.AppContainer()}
      </section>`
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

function ChapterElements (els = [], options) {
  return this.templates.Chapter1()
}

function MainMenuElements (els = [], options) {
  return this.templates.MainMenu()
}

function AppContainer (config = {}) {
  const SE = this.appState.storyExplorer
  return `
  <div class="app-container-wrapper">
    <div class="app-nav w-full absolute text-white text-5xl p-3">
      <h1 class="absolute toggle-story-explorer z-index-2 text-5xl font-bold absolute mr-6 right-0">
        <span class="text-gray-300 hover:text-black cursor-pointer transition-all" onClick="bus('storyExplorerOpenClose')">+</span>
      </h1>
    </div>
    <div class="app-container full-card flex flex-col justify-start text-center w-full break-words h-full fixed items-center background-color-rad-0 p-8 pt-0" onClick="bus('main')">
      ${this.appState.storyMenu ? this.templates.BackgroundElements() : ''}
      ${this.appState.storyMenu ? this.templates.CardElements() : ''}
      ${this.appState.storyMenu ? this.templates.ForegroundElements() : ''}
      ${this.appState.chapterMenu ? this.templates.ChapterElements() : ''}
      ${this.appState.mainMenu ? this.templates.mainMenuElements() : ''}
    </div>
  </div>
`
}

function Empty () {  
  return ``
}

