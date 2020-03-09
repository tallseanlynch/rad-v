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

console.log(colors)

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

console.log(createStoryCardIcon())

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

function StoryExplorer (cards) {    
    this.busFunctions.storyExplorerOpenClose = function () {
        console.log('STORY EXPLORER BUS!')
        console.log(this.appState.storyExplorer)
        this.appState.storyExplorer = !this.appState.storyExplorer
        const addStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'
        const removeStoryExplorerOpenCloseClass = this.appState.storyExplorer ? 'left-slide-out-0' : 'left-slide-in-0'
        this.removeClassesFromDOMNode('.story-card-explorer', [removeStoryExplorerOpenCloseClass])
        this.addClassesToDOMNode('.story-card-explorer', [addStoryExplorerOpenCloseClass])
    }

    const inlineClass = this.appState.storyExplorer ? 'left-slide-in-0' : 'left-slide-out-0'
    return `
  <div class="story-card-explorer layer--main-elements block absolute z-index-2 bg-white p-8 overflow-y-auto ${inlineClass} animation-duration-10">
    <div class="story-explorer-container text-3xl">
      <h1 class="font-bold text-5xl mb-16 border-b-2 pb-4">Story Explorer<h1>
        <p><span class="font-bold">Number of Cards:</span> ${cards.cardInstances.length}</p>
        <form>
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
        ${renderedImproperGoTos(improperGoTos)}
        <div class="my-8">
            ${cards.cardInstances.map(card => {
                return StoryCardInstance(card)
            }).join('')}            
        </div>
      </div>
  </div>`
  }

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

export default StoryExplorer
  