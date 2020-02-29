const StoryExplorer = (cards) => {
    return `<!--Chapter section -->
  <div class="layer--main-elements block w-full absolute z-index-2 bg-white p-8">
    <div class="story-explorer-container text-3xl">
      <h1 class="font-bold text-5xl mb-16 border-b-2 pb-4">Story Explorer<h1>
        <p><span class="font-bold">Number of Cards:</span> ${cards.cardInstances.length}</p>
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

const StoryCardInstance = (cardInstance) => {

    const cardInstanceOptions = cardInstance.cardElements.filter(cardElement =>{
        // console.log(cardElement)
        return cardElement.goTo !== undefined
    })

    console.log('*********', cardInstanceOptions)

    return `<div class="story-card-instance block border-2 mb-16 p-8 hover:bg-gray-100 hover:pl-4 relative">
        ${cardInstance.cardElements.filter(ce => ce.goTo === undefined).map((ceText, ceTextIndex) => {
            return `<p class="py-2 ${ceTextIndex === 0 && 'font-bold'}"><em>${sanitizeCardElementText(ceText)}</em>${ceTextIndex === 0 ? `<em class="pl-4 text-gray-400">( ${cardInstance.id} )</em>` : ''}</p>`
        }).join('')}
        ${cardInstanceOptions.map(cardInstanceOption => {
            return `<div class="my-4"><p><b> > ${cardInstanceOption.text ? cardInstanceOption.text : cardInstanceOption.template}</b><em class="pl-4 text-gray-400">( ${cardInstanceOption.goTo} )</em></p></div>`
        }).join('')}
    </div>`
}

export default StoryExplorer
  