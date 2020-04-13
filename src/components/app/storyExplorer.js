import { colorValues as colors } from '../../assets/js/colors'
import { v4 as uuidv4 } from 'uuid';

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
    const thisCard = returnCardById(entryPoint, this.cards.cardInstances)

    if(this.storyExplorerTimeline.__debug[entryPoint] && this.storyExplorerTimeline.__debug[entryPoint].placements > 1000) {
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
            // if(this.storyExplorerTimeline.__debug[saneCard.goTo] && this.storyExplorerTimeline.__debug[saneCard.goTo].placements > 5) {
            //     return
            // }        
            let newDepth = depth + 1
            this.storyExplorerTimeline.__debug[saneCard.goTo].placements = this.storyExplorerTimeline.__debug[saneCard.goTo].placements + 1
            if(this.storyExplorerTimeline[saneCard.goTo] === undefined) {
                this.storyExplorerTimeline[saneCard.goTo] = Number(newDepth)
            } 
            if(this.storyExplorerTimeline[saneCard.goTo] < Number(newDepth)){
                this.storyExplorerTimeline[saneCard.goTo] = Number(newDepth)
            }
            this.assignDepthsToCardOptions(saneCard.goTo, newDepth)
        }
    })

}

export function findDuplicateCardIds () {
    const uniqueIds = {}
    this.cards.cardInstances.forEach(card => {
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
    this.cards.cardInstances.forEach(card => {
        if(SEIds.indexOf(card.id) < 0) {
            unusedIds[card.id] = card
        }
    })

    const improperGoTos = {}
    this.cards.cardInstances.forEach(card => {
        const filteredOptions = card.cardElements.filter(cardElement => cardElement.goTo === 'card-instance-0-0')
        if(filteredOptions.length > 0) {
            improperGoTos[card.id] = card
        }
    })

    // console.log({uniqueIds, duplicateIds, unusedIds, improperGoTos})
}

function createDepthYAxis (depthsObject) {
    const dY = {}
    Object.keys(depthsObject).forEach(cardId => {
        if(!dY[depthsObject[cardId]]){
            dY[depthsObject[cardId]] = [cardId]
            return
        }
        if(dY[depthsObject[cardId]]){
            dY[depthsObject[cardId]].push(cardId)
        }
    })
    return dY
}

export function renderStoryExplorerTimeline () {
    let t = this.storyExplorerTimeline
    const cards = Object.keys(t).filter(c => c !== '__debug')

    let largestDepth = 0
    cards.forEach(c => {
        if(t[c] > largestDepth) {
            largestDepth = t[c]
        }
    })
    const depthUnit = 95 / largestDepth
    const multipleDepthsY = createDepthYAxis(t)
    // console.log(multipleDepthsY)

    const allTimelineNodes = cards.map(c => {
        const xAdjustment = 2
        const yAdjustment = 1
        const nodeTop = t[c] * depthUnit
        const nodeLeft = (multipleDepthsY[t[c]].indexOf(c) + 1) * 100/(multipleDepthsY[t[c]].length + 1)
        const backgroundColor = colors[t[c]%15][1]
        const currentCard = returnCardById(c, this.cards.cardInstances)
        const currentCardOptions = currentCard && currentCard.cardElements && currentCard.cardElements.filter(ce => ce.goTo !== undefined && ce.goTo !== 'card-instance-0-0')
        let renderedCurrentCardOptionLines = []
        if(currentCardOptions === undefined) {
            console.log('!!! UNDEFINED CARD')
        } else {
            currentCardOptions.forEach(cco => {
                const saneId = cco.goTo.split('_')[0]
                if(multipleDepthsY[t[saneId]] === undefined){
                    console.log(`No multipleDepth found for timeline node ${cco.goTo}`)
                } else {
                    const lineLeft = (multipleDepthsY[t[saneId]].indexOf(saneId) + 1) * 100/(multipleDepthsY[t[saneId]].length + 1) + xAdjustment
                    const lineTop = (t[saneId] * depthUnit) + yAdjustment
                    renderedCurrentCardOptionLines.push(`<line class="cursor-pointer" x1="${nodeLeft + xAdjustment}%" y1="${nodeTop + yAdjustment}%" x2="${lineLeft}%" y2="${lineTop}%" style="stroke:${backgroundColor};stroke-width:3;"> </line>`)    
                }
            })
        }

        setTimeout(()=>{
            if(currentCardOptions) {document.querySelectorAll('.lines')[0].innerHTML += renderedCurrentCardOptionLines.join('')}
        }, 100)

        let showCardInstance = false
        const renderedOptions = `
        <div class="timeline-node absolute z-index-5 p-4 text-center" style="top:${nodeTop}%;left:${nodeLeft}%;background-color:${backgroundColor}"><span class="font-bold">${t[c]}${showCardInstance ? ' - ' + c.replace('card-instance-', '') : ''}</span></div>`
        // console.log(renderedOptions)
        return renderedOptions
    }).join('')


    // const allTimelineNodes = cards.map(c => {
    //     return `<div class="absolute z-index-5" style="top:${t[c] * depthUnit}%">X</div>`
    // }).join('')

    // console.log({largestDepth, depthUnit})

    // const Timeline = () => {
    //     console.log({allTimelineNodes})
        // const renderedTimeline = `
        return allTimelineNodes
        // console.log(renderedTimeline)
        // return renderedTimeline 
    // }

    // return Timeline()

}

export function createStoryExplorerTimeline () {
    const entryPoint = 'card-instance-0-0'
    let depth = 0
    this.storyExplorerTimeline[entryPoint] = depth
    // depth++
    const startTime = new Date()
    console.log(`startTime: ${startTime}`)
    this.assignDepthsToCardOptions(entryPoint, depth)
    // console.log({storyExplorerTimeline: this.storyExplorerTimeline})
    const endTime = new Date()
    const loadingTime = endTime - startTime
    console.log(`endTime: ${endTime}`)
    console.log(`loadingTime in seconds: ${loadingTime/1000}`)
    this.findDuplicateCardIds()
    return this.renderStoryExplorerTimeline()
}

export function renderStoryCards () {
    document.querySelector('.story-cards-container').innerHTML = `
        <div>
            ${this.cards.cardInstances.map(card => {
                return this.StoryCardInstance(card)
            }).join('')}            
        </div>
    `
}

export function StoryExplorer (cards) {    
    this.busFunctions.storyExplorerOpenClose = function () {
        this.appState.storyExplorer = !this.appState.storyExplorer
        const addStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'
        const removeStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-out-0' : 'left-slide-in-0'
        this.removeClassesFromDOMNode('.story-card-explorer', [removeStoryExplorerOpenCloseClass])
        this.addClassesToDOMNode('.story-card-explorer', [addStoryExplorerOpenCloseClass])
    }

    const filters = `
    <p><span class="font-bold">Number of Cards:</span> ${cards.cardInstances.length}</p>
    <form class="mb-16">
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

    `

//     <div class="flex flex-1 story-writer-container">
//     <div>
//         All of this text
//     </div>
// </div>

    const inlineClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'

    // const uuidLoadButton = uuidv4()
    // const setLoadButtonEventHandler = () => {
        this.busFunctions['file-upload'] = function (data) {
            console.log(data, this)
        }
        setTimeout(() => {

            document.querySelector('#file-upload').addEventListener('change', (e) => {
                console.log(e.target.files[0].name)
                // debugger
                // let reader = new FileReader()
                // reader.addEventListener('load', () => console.log('yo'))
                const path = `C:\\Users\\Sean\\Downloads\\${e.target.files[0].name}`
                fetch(path, {mode: 'no-cors'})
                .then(response => response.json())
                .then(data=> console.log(data))
                .catch(error => console.error(error));
                // fr.onload = (fre) => {
                //     console.log('yooooo')
                //     // console.log(fre)
                //     // let results = JSON.parse(e.target.result)
                //     // console.log(restults)
                //     // // let formatted = JSON.stringify(result, null, 2)
                //     // window.bus({elId: 'file-upload', e})
                // }

                // const path = `C:\\Users\\Sean\\Downloads\\${e.target.files[0].name}`
                // const newJSON = require(path)
                // console.log({
                //     path, newJSON
                // })
            })
        }, 500)
    // }
    // setLoadButtonEventHandler()

    return `
  <div class="story-card-explorer layer--main-elements block absolute z-index-2 bg-white p-8 overflow-y-auto ${inlineClass}">
    <div class="story-explorer-container text-3xl md:text-base">
        <div class="story-explorer-nav fixed bg-black top-0 left-0 w-full p-2">
            <h1 class="text-white inline-block italic mr-8 pl-8">Story Explorer</h1>
            <label for="file-upload" class="custom-file-upload cursor-pointer bg-white rounded py-1 px-3 mr-1 inline-block">Load</label>
            <input id="file-upload" type="file"/>
            <div class="cursor-pointer bg-white rounded py-1 px-3 mr-1 inline-block">Save</div>
        </div>
        <div class="flex flex-row mt-8">
            <div class="flex flex-1 story-cards-container">
                <div>
                    ${cards.cardInstances.map(card => {
                        return this.StoryCardInstance(card)
                    }).join('')}            
                </div>
            </div>
            <div class="flex flex-1 timeline-container">
                <div class="h-full w-full relative overflow-hidden">
                    <div class="translate-wrapper h-full w-full absolute">
                        ${this.createStoryExplorerTimeline()}
                        <svg class="w-full h-full lines">
                        </svg>
                    </div>
                </div>
            </div>
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

export function StoryCardInstance (cardInstance) {
    const cardInstanceStoryMoments = cardInstance.cardElements
        .filter(ce => ce.goTo === undefined)
        .map((ceText, ceTextIndex) => {
            let uuid = ceText.uuid
            // create the function on the App.busFunctions, which is available by calling window.bus({elId: uuid})
            this.busFunctions[uuid] = function (data) {
                console.log('bus', {data})
                // debugger
                const targetCard = this.cards.cardInstances.filter(ci => ci.uuid === data.elCardInstanceId)
                if(targetCard.length === 1) {
                    const targetElement = targetCard[0].cardElements.filter(ce => ce.uuid === data.elId)
                    // debugger
                    const innerText = document.querySelector(`#id-${targetElement[0].uuid}`).innerText
                    console.log('INNER TEXT', document.querySelector(`#id-${targetElement[0].uuid}`).innerText)
                    const updateData = {
                        elId: uuid,
                        elCardInstanceId: data.elCardInstanceId,
                        updateData: {
                            text: innerText
                        }
                    }
                    console.log({updateData})
                    this.updateCardElement(updateData)
                    if(data.createNewCardElement) {
                        const uuidNewCardElement = uuidv4()
                        this.createNewCardElement({
                            elId: uuid,
                            elCardInstanceId: cardInstance.uuid,
                            uuidNewCardElement
                        })
                        this.renderStoryCards()
                        document.querySelector(`#id-${uuidNewCardElement}`).focus()
                        
                    }
                    if(targetElement.length < 1) {
                        console.log('NO TARGET ELEMENT FOUND')
                    }
                    if(targetElement.length > 1) {
                        console.log('MULTIPLE TARGET ELEMENTS FOUND')
                    }
                    console.log({ targetCard, targetElement})
                } else {
                    if(targetCard.length < 1) {
                        console.log('NO TARGET CARD FOUND')
                    }
                    if(targetCard.length > 1) {
                        console.log('MULTIPLE TARGET CARDS FOUND')
                    }
                }
            }
            // must be set a bit later as DOM must load
            setTimeout(() => {
                // set keydown eventListener for UI cardElement
                // passing in event object
                document.querySelector(`#id-${uuid}`).addEventListener('keydown', (e) => {
                    // setting conditions for keypress
                    if(e.shiftKey && e.key === 'Enter'){
                        console.log('SHIFT ENTER')
                        e.preventDefault()
                        // call window busFunction with elId and e
                        // debugger
                        window.bus({elId: uuid, elCardInstanceId: cardInstance.uuid, e, createNewCardElement: true})
                    }
                })
            }, 500)
            return `<p class="py-2 ${ceTextIndex === 0 && 'font-bold'}">
                <div contenteditable id="id-${uuid}" class="inline-block"  onBlur="window.bus({elId:'${uuid}', elCardInstanceId:'${cardInstance.uuid}'})">
                    ${sanitizeCardElementText(ceText)}
                </div>
            </p>`
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
    
    return `<div id="id-${cardInstance.id}" class="story-card-instance block border-2 mb-8 p-8 hover:bg-gray-100 hover:pl-4 relative">
        <em class="text-white bg-black p-3 block">${cardInstance.id}</em>
        ${cardInstanceStoryMoments}
        ${cardInstanceOptions}
    </div>`
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

