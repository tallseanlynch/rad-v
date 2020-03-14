import { colorValues as colors } from '../../assets/js/colors'

const improperGoTos = []
const renderedImproperGoTos = (goTos) => `
<div class="my-8 improper-go-tos">
    <h2 class="font-bold">Improper Go Tos</h2>
    ${goTos && goTos.map(goTo => `<p><a onClick="scrollCardIntoViewById('${goTo}')" class="text-red-500 italic">${goTo}<a></p>`).join('')}
</div>
`

window.scrollCardIntoViewById = (el) => {
    // console.log(el)
    document.getElementById(`id-${el}`).scrollIntoView();    
}

const renderImproperGoTos = () => {
    if(document.querySelectorAll('.improper-go-tos')[0]) {
        document.querySelectorAll('.improper-go-tos')[0].innerHTML = renderedImproperGoTos(improperGoTos)
    }
}

// console.log(colors)

const createStoryCardIcon = () => {

    const r4 = () => Math.round(Math.random() * 4)
    const r15 = () => Math.round(Math.random() * 15)

    return [
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
        [r15(), r4()],
    ]
}

// console.log(createStoryCardIcon())

function StoryCardIcon (sci) {
    return `<div class="inline-flex flex-col story-card-icon">
        <div class="flex flex-row icon-tile-row flex-shrink">
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[0][0]][sci[0][1]]}"></div>
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[1][0]][sci[1][1]]}"></div>
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[2][0]][sci[2][1]]}"></div>
        </div>
        <div class="flex flex-row icon-tile-row flex-shrink">
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[3][0]][sci[3][1]]}"></div>
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[4][0]][sci[4][1]]}"></div>
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[5][0]][sci[5][1]]}"></div>
        </div>
        <div class="flex flex-row icon-tile-row flex-shrink">
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[6][0]][sci[6][1]]}"></div>
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[7][0]][sci[7][1]]}"></div>
            <div class="icon-color-tile flex-1 flex-shrink" style="background-color:${colors[sci[8][0]][sci[8][1]]}"></div>
        </div>
</div>
`
}

// function findParent(cards, card) {
//     cards.map(card => {
//         card.cardElements.go
//     })
// }


// function createCardsOptionsIndex (cards) {
//     cards.cardInstances.map(card => {

//     })
//     return `${cards.cardInstances[0].id}`
// }

// TODO: cardChildren


function sanitizeCardOptions (cardOptionsArray) {
    const uniqueSanitizedCardOptions = {}
    const sanitizedCardOptions = []
    cardOptionsArray.forEach(cco => {
        if(uniqueSanitizedCardOptions[cco.goTo.split('_')[0]] === undefined){
            uniqueSanitizedCardOptions[cco.goTo.split('_')[0]] = true
            sanitizedCardOptions.push({
                ...cco,
                goTo: cco.goTo.split('_')[0]
            })    
        }
    })
    return sanitizedCardOptions
}

function returnCardById (id, cards) {
    return cards.filter(c => c.id === id)[0]
}

export function assignDepthsToCardOptions (entryPoint, depth) {
    // console.log('assignDepthsToCardOptions',{depth})
    const thisCard = returnCardById(entryPoint, this.cards().cardInstances)

    if(this.storyExplorerTimeline.__debug[entryPoint] && this.storyExplorerTimeline.__debug[entryPoint].placements > 10) {
        return
    }

    if(thisCard === undefined) {
        this.storyExplorerTimeline.__debug['error'] = {errors: 0, placements: 0}
        this.storyExplorerTimeline.__debug['error'].errors = this.storyExplorerTimeline.__debug['error'].errors + 1
        return
    }
    const currentCardOptions = thisCard.cardElements.filter(ce => !!ce.goTo)
    
    const sanitizedCurrentCardOptions = currentCardOptions && currentCardOptions.length > 0 && sanitizeCardOptions(currentCardOptions)

    sanitizedCurrentCardOptions && sanitizedCurrentCardOptions.length > 0 && sanitizedCurrentCardOptions.forEach(saneCard => {
        if(saneCard && saneCard.goTo !== 'card-instance-0-0') {
            if(this.storyExplorerTimeline.__debug[saneCard.goTo] === undefined) {
                this.storyExplorerTimeline.__debug[saneCard.goTo] = {errors: 0, placements: 0}
            }
            if(this.storyExplorerTimeline.__debug[saneCard.goTo] && this.storyExplorerTimeline.__debug[saneCard.goTo].placements > 5) {
                return
            }        
            this.storyExplorerTimeline.__debug[saneCard.goTo].placements = this.storyExplorerTimeline.__debug[saneCard.goTo].placements + 1
            this.storyExplorerTimeline[saneCard.goTo] = Number(depth)
            let newDepth = depth + 1
            this.assignDepthsToCardOptions(saneCard.goTo, newDepth)
        }
    })

    // console.log({sanitizedCurrentCardOptions, currentCardOptions, cardDepths})

    // return cardDepths

}

export function findDuplicateCardIds () {
    const uniqueIds = {}
    this.cards().cardInstances.forEach(card => {
        if(uniqueIds[card.id]){
            uniqueIds[card.id].push(card)
        } else {
            uniqueIds[card.id] = [card]
        }
        
    })
    
    const duplicateIds = {}
    Object.keys(uniqueIds).forEach(uniqueId => {
        if(uniqueIds[uniqueId].length > 1) {
            duplicateIds[uniqueId] = uniqueIds[uniqueId]
        }
    })

    const unusedIds = {}
    const SEIds = Object.keys(this.storyExplorerTimeline)
    this.cards().cardInstances.forEach(card => {
        if(SEIds.indexOf(card.id) < 0) {
            unusedIds[card.id] = card
        }
    })

    const improperGoTos = {}
    this.cards().cardInstances.forEach(card => {
        const filteredOptions = card.cardElements.filter(cardElement => cardElement.goTo === 'card-instance-0-0')
        if(filteredOptions.length > 0) {
            improperGoTos[card.id] = card
        }
    })

    console.log({uniqueIds, duplicateIds, unusedIds, improperGoTos})
}

export function createStoryExplorerTimeline () {
    const entryPoint = 'card-instance-0-0'
    let depth = 0
    this.storyExplorerTimeline[entryPoint] = depth
    depth++
    const startTime = new Date()
    console.log(`startTime: ${startTime}`)
    this.assignDepthsToCardOptions(entryPoint, depth)
    console.log({storyExplorerTimeline: this.storyExplorerTimeline})
    const endTime = new Date()
    const loadingTime = endTime - startTime
    console.log(`endTime: ${endTime}`)
    console.log(`loadingTime in seconds: ${loadingTime/1000}`)
    this.findDuplicateCardIds()
    return `createStoryExplorerTimeline created`
}

// const cardParents = (card, cards, depth = 0) => {
//     const d = depth
//     const cardOptionMatches = []
//     cards.cardInstances.forEach(eachCard => {
//         eachCard.cardElements.forEach(cardElement => {
//             if(cardElement.goTo && cardElement.goTo === card.id) {
//                 cardOptionMatches.push(eachCard.id)
//             }
//         })
//     })

//     if(cardOptionMatches.lenth === 0 || card.id === 'card-instance-0-0') {
//         return cardOptionMatches
//     } 
    
//     if(cardOptionMatches.lenth > 0 || card.id !== 'card-instance-0-0') {
//         return cardOptionMatches
//     } 

// }

function returnCardPath (card, cards) {
    const startingCard = ' card-instance-0-0'
    const cardParentsArray = cardParents(card, cards)
    const cardPathArray = [card.id, ...cardParentsArray]

    // console.log(cardPathArray.reverse().join(' > '))
    // debugger

    if(card.id === startingCard){
        return 'Starting card.'
    }

    return `${cardPathArray.join(', ')}`
}

export function StoryExplorer (cards) {    
    this.busFunctions.storyExplorerOpenClose = function () {
        // console.log('STORY EXPLORER BUS!')
        // console.log(this.appState.storyExplorer)
        this.appState.storyExplorer = !this.appState.storyExplorer
        const addStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'
        const removeStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-out-0' : 'left-slide-in-0'
        this.removeClassesFromDOMNode('.story-card-explorer', [removeStoryExplorerOpenCloseClass])
        this.addClassesToDOMNode('.story-card-explorer', [addStoryExplorerOpenCloseClass])
    }

    const inlineClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'
    return `
  <div class="story-card-explorer layer--main-elements block absolute z-index-2 bg-white p-8 overflow-y-auto ${inlineClass} animation-duration-10">
    <div class="story-explorer-container text-2xl">
      <h1 class="font-bold text-5xl mb-16 border-b-2 pb-4">Story Explorer<h1>
        <p><span class="font-bold">Number of Cards:</span> ${cards.cardInstances.length}</p>
        <form class="mb-16">
            <p>
                ${this.createStoryExplorerTimeline()}
            </p>
            <p class="pt-2">
                <span class="font-bold">Load History:</span>
                <select class="border border-black">
                    <option>card-history-0</option>         
                </select>
            </p>
            <p class="pt-2">
                <span class="font-bold">Select Card:</span>
                <select class="border border-black">
                    ${cards.cardInstances.map(card => {
                        return `<option>${card.id}</option>`
                    }).join('')}            
                </select>
            </p>
            <p class="pt-2">
                <span class="font-bold">Filter Card:</span>
                <input type="text" class="pl-2 border border-black" placeholder="card id, element text"></input>
            </p>
        </form>
        <div class="my-8">
            ${cards.cardInstances.map(card => {
                return StoryCardInstance(card)
            }).join('')}            
        </div>
      </div>
  </div>`
  }
//  ${renderedImproperGoTos(improperGoTos)}

const sanitizeCardElementText = (cardElement) => {
    if(typeof cardElement === 'string') {
        return cardElement
    } else {
        if(cardElement.text) {
            return cardElement.text
        } else {
            return '<span class="text-red-500">UNKNOWN CARD ELEMENT TYPE<span>'
        }
    }
}

function StoryCardInstance (cardInstance) {

    const cardInstanceStoryMoments = cardInstance.cardElements
        .filter(ce => ce.goTo === undefined)
        .map((ceText, ceTextIndex) => {
            return `<p class="py-2 ${ceTextIndex === 0 && 'font-bold'}"><em>${sanitizeCardElementText(ceText)}</em>${ceTextIndex === 0 ? `<em class="pl-4 text-gray-400">( ${cardInstance.id} )</em>` : ''}</p>`
        })
        .join('')

    const cardInstanceOptions = cardInstance.cardElements
        .filter(cardElement => {
            return cardElement.goTo !== undefined
        })
        .map(cardInstanceOption => {
            const filterImproperGoTo = cardInstanceOption.goTo === 'card-instance-0-0' ? `<p><span class="text-red-500">IMPROPER GO TO<span></p>` : ''
            filterImproperGoTo !== '' && improperGoTos.push(cardInstance.id)
            setTimeout(renderImproperGoTos, 100)
            // console.log(improperGoTos)
            return `<div class="my-4">${filterImproperGoTo}<p><b> > ${cardInstanceOption.text ? cardInstanceOption.text : cardInstanceOption.template}</b><em class="pl-4 text-gray-400">( ${cardInstanceOption.goTo} )</em></p></div>`
        })
        .join('')
        // ${StoryCardIcon(createStoryCardIcon())}
    
    return `<div id="id-${cardInstance.id}" class="story-card-instance block border-2 mb-16 p-8 hover:bg-gray-100 hover:pl-4 relative">
        ${cardInstanceStoryMoments}
        ${cardInstanceOptions}
    </div>`
}
