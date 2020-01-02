import '../../assets/css/tailwind.min.css'
import '../../assets/css/textly-utilities.css'
import { cards } from '../../data/story.js'
import moment from 'moment'

let testCardHistory = [
  // {
  //   "cardInstance": "chapter-title-0",
  //   "time": 1576892605515,
  //   "formatTime": "20 Dec 2019 07:43 pm",
  //   "chapter": true
  // },
  {
    "cardInstance": "card-instance-0-0",
    "time": 1576892605515,
    "formatTime": "20 Dec 2019 07:43 pm",
    "chapter": false
  },
  // {
  //   "cardInstance": "card-instance-0-1_B",
  //   "time": 1576892867086,
  //   "formatTime": "20 Dec 2019 07:47 pm",
  //   "chapter": false,
  //   "generatedId": "id_345288608"
  // },
  // {
  //   "cardInstance": "card-instance-0-1---0",
  //   "time": 1576893772296,
  //   "formatTime": "20 Dec 2019 08:02 pm",
  //   "chapter": false,
  //   "generatedId": "id_188415536"
  // },
  // {
  //   "cardInstance": "card-instance-0-1---1",
  //   "time": 1576893777711,
  //   "formatTime": "20 Dec 2019 08:02 pm",
  //   "chapter": false,
  //   "generatedId": "id_172301382"
  // },
  // {
  //   "cardInstance": "card-instance-0-2",
  //   "time": 1576893781743,
  //   "formatTime": "20 Dec 2019 08:03 pm",
  //   "chapter": false,
  //   "generatedId": "id_735737441"
  // },
  // {
  //   "cardInstance": "card-instance-0-3",
  //   "time": 1576893785615,
  //   "formatTime": "20 Dec 2019 08:03 pm",
  //   "chapter": false,
  //   "generatedId": "id_909091624"
  // },
  // {
  //   "cardInstance": "card-instance-0-4",
  //   "time": 1576893789793,
  //   "formatTime": "20 Dec 2019 08:03 pm",
  //   "chapter": false,
  //   "generatedId": "id_17673057"
  // }
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
        chapterElements: chapterElements.bind(this),
        mainMenuElements: mainMenuElements.bind(this),
        Text0: Text0.bind(this),
        Option9: Option9.bind(this),
        OptionDotDotDot: OptionDotDotDot.bind(this),
        OptionDownArrow: OptionDownArrow.bind(this),
        Empty: Empty.bind(this),
        Chapter1: Chapter1.bind(this),
        MainMenu: MainMenu.bind(this)
      }
      this.currentCardInstanceId = 'card-instance-0-0'
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
        mainMenu: true,
        storyMenu: false
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
        el.goTo && this.addClassesToDOMNode(`.card-option.${el.cardInstance}`, ['opacity-out-0','animation-duration-1'])
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
          // cardElementClasses: 'opacity-in-0 animation-duration-1'          
        }
      }
    }))
  })

  console.log('preAllCardElements', preAllCardElements)

  let allCardElements = []
  preAllCardElements.forEach(pace => {
    console.log('pace', pace)
    allCardElements = allCardElements.concat(pace).filter(bgel => { return this.parseCardInstance(bgel.cardInstance) === this.parseCardInstance(this.currentCardInstanceId)})
  })

  // console.log(allCardElements)

  // console.log(allCardElements.filter(bgel => { return bgel.cardInstance === this.currentCardInstanceId}))
  // console.log(allCardElements.filter(bgel => { return bgel}))

  // console.log(`<div class="layer--background-elements fixed h-full w-full">${allCardElements.map(el => {return this.templates.element(el)}).filter(cin => cin.chapter !== true).join('')}</div>`)
  return `<div class="layer--background-elements fixed h-full w-full">${allCardElements.map(el => {return this.templates.element(el)}).filter(cin => cin.chapter !== true).join('')}</div>`


  // return `<div class="layer--background-elements fixed h-full w-full">${els.map(el => this.templates.element(el)).join('')}</div>`
}

function chapterElements (els = [], options) {
  return this.templates.Chapter1()
}

function mainMenuElements (els = [], options) {
  return this.templates.MainMenu()
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

  // console.log('currentCardInstanceId', this.currentCardInstanceId)

  // unchosen history options
  // let staleFilteredHistoryOptions = filteredOptions.filter(sho => historyCardInstanceIds.indexOf(sho.goTo) < 0 && historyCardInstanceIds.map(phc => this.parseCardInstance(phc)).indexOf(this.parseCardInstance(sho.goTo)) > -1).map(show => show.goTo)
  let staleFilteredHistoryOptions = unchosenFilteredHistoryOptions.filter(op => currentCardInstanceIdOptions.indexOf(op) < 0)

  // console.log('filteredOptions', filteredOptions)
  // console.log('filteredHistoryOptions', filteredHistoryOptions)
  // console.log('unchosenFilteredHistoryOptions', unchosenFilteredHistoryOptions)
  // console.log('parsedUnchosenFilteredHistoryOptions', parsedUnchosenFilteredHistoryOptions)
  // console.log('currentCardInstanceIdOptions', currentCardInstanceIdOptions)
  // console.log('continueOptions', continueOptions)

  // console.log('staleFilteredHistoryOptions', staleFilteredHistoryOptions)

  // console.log('allCardElements', allCardElements)
  // console.log('filteredOptions', filteredOptions)
  // console.log('filteredHistoryOptions', filteredHistoryOptions)
  // console.log('staleFilteredHistoryOptions', staleFilteredHistoryOptions)
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

   let filterChapterCardElements = filteredAllCardElements//.filter(falce => falce.chapter !== true)
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

const globalStyles = `<style>

  .observer-transition-out-0 {
    transform: rotate(720deg) scaleX(5) scaleY(0);
  }

  .observer-transition-out-1 {
    transform: rotate(-720deg) scaleX(7) scaleY(0);
  }

  .observer-transition-out-2 {
    transform: rotate(1440deg) scaleX(10) scaleY(0);
  }

  .observer-middle {
    transition: all 500ms ease;
    width: 5em;
  }

  .observer-middle-flash-0 {
    transition: all 750ms ease;
  }

  .observer-middle-flash-1 {
    transition: all 1000ms ease;
  }

  .observer-interior {
    height: 100%;
    width: 100%;
  }

@keyframes keyframes-observer-button-close-1 {
  0% {color: black;}
  25% {color: red;}
  50% {color: orange;}
  75% {color: yellow;}
  100% {color: white;}
}


</style>
`

function appContainer (config = {}) {
  return `
  ${globalStyles}
  <div class="app-container full-card flex flex-col justify-start text-center w-full break-words h-full fixed items-center background-color-rad-0 p-8 pt-0" onClick="bus('main')">
    ${this.appState.storyMenu ? this.templates.backgroundElements() : ''}
    ${this.appState.storyMenu ? this.templates.cardElements() : ''}
    ${this.appState.storyMenu ? this.templates.foregroundElements() : ''}
    ${this.appState.chapterMenu ? this.templates.chapterElements() : ''}
    ${this.appState.mainMenu ? this.templates.mainMenuElements() : ''}
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
  return `<!--Chapter section -->
<div class="chapter layer--main-elements block w-full h-full absolute z-index-2 bg-black">
  <!--Background elements section -->
  <div class="flex justify-center content-center items-center h-full w-full absolute">
    <div class="chapter layer--background-elements fixed h-full w-full">
      <div class="card-element--container">
        <img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-5" src="./assets/gifs/seq-3-p.gif">
      </div>
      <div class="card-element--container">
        <img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-10" src="./assets/gifs/seq-2-p.gif">
      </div>
      <div class="card-element--container">
        <div class="screen-bar-1 animation-duration-0"></div>
        <div class="screen-bar-1 animation-duration-1"></div>
        <div class="screen-bar-1 animation-duration-2"></div>
        <div class="screen-bar-1 animation-duration-3"></div>
        <div class="screen-bar-1 animation-duration-4"></div>
        <div class="screen-bar-1 animation-duration-5"></div>
        <div class="screen-bar-1 animation-duration-6"></div>
        <div class="screen-bar-1 animation-duration-7"></div>
        <div class="screen-bar-1 animation-duration-8"></div>
      </div>
    </div>  



    <div class="curtain fixed w-full h-full bg-black opacity-flux-1 animation-duration-19"></div>
      <div class="curtain fixed w-full h-full bg-black opacity-flux-0 animation-duration-3"></div>
    <div class="curtain fixed w-full h-full bg-black opacity-flux-0 animation-duration-0"></div>




    <!--Foreground elements section -->
    <div class="flex justify-center content-center items-center h-full w-full absolute">
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
    </div>
  </div>
</div>`
}

function MainMenu () {
  return `<!--Main menu section -->
  <style>
    .movement-vertical-0--0 {
        animation: keyframes-movement-vertical infinite ease-in-out 0.5s;
        position: relative;
    }

    .movement-vertical-0--1 {
      animation: keyframes-movement-vertical infinite ease-in-out 1s;
      position: relative;
    }

    .movement-vertical-0--2 {
      animation: keyframes-movement-vertical infinite ease-in-out 2s;
      position: relative;

    }
    .movement-vertical-0--3 {
      animation: keyframes-movement-vertical infinite ease-in-out 3s;
      position: relative;

    }
    .movement-vertical-0--4 {
      animation: keyframes-movement-vertical infinite ease-in-out 4s;
      position: relative;

    }

    .movement-vertical-0--5 {
      animation: keyframes-movement-vertical infinite ease-in-out 5s;
      position: relative;
    }

    .movement-vertical-0--6 {
      animation: keyframes-movement-vertical infinite ease-in-out 6s;
      position: relative;
    }

    .movement-vertical-0--7 {
      animation: keyframes-movement-vertical infinite ease-in-out 7s;
      position: relative;
    }    

    .movement-vertical-0--8 {
      animation: keyframes-movement-vertical infinite ease-in-out 8s;
      position: relative;
    }

    .movement-vertical-0--9 {
      animation: keyframes-movement-vertical infinite ease-in-out 9s;
      position: relative;
    }

    .movement-vertical-0--10 {
      animation: keyframes-movement-vertical infinite ease-in-out 10s;
      position: relative;
  }

    @keyframes keyframes-movement-vertical {
      0% {
          left: 0%;
          top: -15%;
          font-size: 1em;
      }
  
      25% {
          left: 50%;
      }
  
      50% {
          left: 0%;
          font-size: 3em;
      }
  
      75% {
          left: 100%;
      }
  
      100% {
          left: 0%;
          top: 105%;
          font-size: 1em;
      }
    }

    .game-font {
      font-family: slkscrb;
      font-size: 2em;
    }

    .game-font-main-menu {
      font-family: slkscrb;
      font-size: 5em;
    }

    .game-font-main-menu-sub {
      font-family: slkscrb;
      font-size: 3.5em;
    }

  </style>
<div class="main-menu layer--main-elements flex justify-center w-full h-full absolute z-index-3 bg-black overflow-hidden">
  <!--Foreground elements section -->

    <div class="flex justify-center content-center h-full w-full absolute text-white game-font-main-menu z-index-4">
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-7">R</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-6">A</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-10">D</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-9">I</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-8">A</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-15">T</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-16">I</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-5">O</span>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <span class="color-flux-0 animation-duration-7">N</span>
      </div>
    </div>

    <div class="flex flex-col justify-end content-center h-full w-full absolute text-white game-font-main-menu-sub z-index-5 items-end pb-24 pr-24">
      <div class="flex items-center justify-center">
        <span class="color-flux-0 animation-duration-7">START</span>
      </div>
      <div class="flex items-center justify-center">
        <span class="color-flux-0 animation-duration-7">CONTINUE</span>
      </div>
    </div>

  <div class="flex justify-center content-center h-full w-full absolute text-white game-font">
    <div class="flex-1 background-color-rad-0 animation-duration-11">
      <span class="animation-duration-10 movement-vertical-0--10">
        <span class="color-rad-0 animation-duration-10">R</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--8">
        <span class="color-rad-0 animation-duration-12">A</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--6">
        <span class="color-rad-0 animation-duration-4">D</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--4">
        <span class="color-rad-0 animation-duration-6">I</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-4">
      <span class="animation-duration-10 movement-vertical-0--5">
        <span class="color-rad-0 animation-duration-10">A</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--7">
        <span class="color-rad-0 animation-duration-10">T</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--9">
        <span class="color-rad-0 animation-duration-10">I</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-9 flex items-center justify-center">
      <span class="animation-duration-10 movement-vertical-0--4">
        <span class="color-rad-0 animation-duration-10">N</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--3">
        <span class="color-rad-0 animation-duration-10">R</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--6">
        <span class="color-rad-0 animation-duration-10">A</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-3 flex items-center justify-center">
      <span class="animation-duration-10 movement-vertical-0--4">
        <span class="color-rad-0 animation-duration-10">I</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--3">
        <span class="color-rad-0 animation-duration-10">A</span>
      </span>
      <span class="animation-duration-10 movement-vertical-0--8">
        <span class="color-rad-0 animation-duration-10">T</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-8 flex items-center justify-center">
      <span class="font-size-flux-0 animation-duration-5">
        <span class="color-rad-0 animation-duration-12">A</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-15 flex items-center justify-center">
      <span class="font-size-flux-0 animation-duration-5">
        <span class="color-rad-0 animation-duration-5">T</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-12 flex items-center justify-center">
      <span class="font-size-flux-0 animation-duration-5">
        <span class="color-rad-0 animation-duration-8">I</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-7 flex items-center justify-center">
      <span class="font-size-flux-0 animation-duration-5">
        <span class="color-rad-0 animation-duration-13">O</span>
      </span>
    </div>
    <div class="flex-1 background-color-rad-0 animation-duration-10 flex items-center justify-center">
      <span class="font-size-flux-0 animation-duration-5">
        <span class="color-rad-0 animation-duration-10">N</span>
      </span>
    </div>
  </div>
</div>`
}





















// old

// function MainMenu () {
//   return `<!--Main menu section -->
//   <style>
//     .movement-vertical-0--0 {
//         animation: keyframes-movement-vertical infinite ease-in-out 0.5s;
//         position: relative;
//     }

//     .movement-vertical-0--1 {
//       animation: keyframes-movement-vertical infinite ease-in-out 1s;
//       position: relative;
//     }

//     .movement-vertical-0--2 {
//       animation: keyframes-movement-vertical infinite ease-in-out 2s;
//       position: relative;

//     }
//     .movement-vertical-0--3 {
//       animation: keyframes-movement-vertical infinite ease-in-out 3s;
//       position: relative;

//     }
//     .movement-vertical-0--4 {
//       animation: keyframes-movement-vertical infinite ease-in-out 4s;
//       position: relative;

//     }

//     .movement-vertical-0--5 {
//       animation: keyframes-movement-vertical infinite ease-in-out 5s;
//       position: relative;
//     }

//     .movement-vertical-0--6 {
//       animation: keyframes-movement-vertical infinite ease-in-out 6s;
//       position: relative;
//     }

//     .movement-vertical-0--7 {
//       animation: keyframes-movement-vertical infinite ease-in-out 7s;
//       position: relative;
//     }    

//     .movement-vertical-0--8 {
//       animation: keyframes-movement-vertical infinite ease-in-out 8s;
//       position: relative;
//     }

//     .movement-vertical-0--9 {
//       animation: keyframes-movement-vertical infinite ease-in-out 9s;
//       position: relative;
//     }

//     .movement-vertical-0--10 {
//       animation: keyframes-movement-vertical infinite ease-in-out 10s;
//       position: relative;
//   }

//     @keyframes keyframes-movement-vertical {
//       0% {
//           left: 0%;
//           top: -15%;
//           font-size: 1em;
//       }
  
//       25% {
//           left: 50%;
//       }
  
//       50% {
//           left: 0%;
//           font-size: 5em;
//       }
  
//       75% {
//           left: 100%;
//       }
  
//       100% {
//           left: 0%;
//           top: 105%;
//           font-size: 1em;
//       }
//     }

//   </style>
// <div class="main-menu layer--main-elements flex justify-center w-full h-full absolute z-index-3 bg-black overflow-hidden">
//   <!--Foreground elements section -->
//   <div class="flex justify-center content-center h-full w-full absolute text-white text-group">
//     <div class="flex-1 background-color-rad-0 animation-duration-11">
//       <span class="color-flux-0 animation-duration-6 self-center">R</span>
//       <span class="animation-duration-10 movement-vertical-0--10 animation-direction-reverse">
//         <span class="color-flux-0 animation-duration-10">R</span>
//       </span>
//       <span class="animation-duration-10 movement-vertical-0--8">
//         <span class="color-flux-0 animation-duration-12">R</span>
//       </span>
//       <span class="animation-duration-10 movement-vertical-0--6">
//         <span class="color-flux-0 animation-duration-4">R</span>
//       </span>
//       <span class="animation-duration-10 movement-vertical-0--4">
//         <span class="color-flux-0 animation-duration-6">R</span>
//       </span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-4">
//       <span class="animation-duration-10 movement-vertical-0--5">
//         <span class="color-flux-0 animation-duration-10">A</span>
//       </span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-9 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-11">D</span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-3 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-17">I</span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-8 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-12">A</span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-15 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-5">T</span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-12 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-8">I</span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-7 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-13">O</span>
//     </div>
//     <div class="flex-1 background-color-rad-0 animation-duration-10 flex items-center justify-center">
//       <span class="color-flux-0 animation-duration-10">N</span>
//     </div>
//   </div>
// </div>`
// }