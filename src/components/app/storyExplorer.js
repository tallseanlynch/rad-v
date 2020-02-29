const StoryExplorer = (cards) => {
    return `<!--Chapter section -->
  <div class="chapter layer--main-elements block w-full h-full absolute z-index-2 bg-white p-8">
    <div class="story-explorer-container text-3xl">
      <h1 class="font-bold text-5xl mb-16 border-b-2 pb-4">Story Explorer<h1>
        <p><span class="font-bold">Number of Cards:</span> ${cards.cardInstances.length}</p>
        <p><span class="font-bold">Card Ids:</span>
            <div class="p-8">
                ${cards.cardInstances.map(card => {
                    return StoryCardInstance(card)
                }).join('')}            
            </div>
        <p>

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
            return 'UNKNOWN CARD ELEMENT TYPE'
        }
    }
}

const StoryCardInstance = (cardInstance) => {
    return `<div class="story-card-instance block border-2 mb-4 p-2">
        ${cardInstance.id} - ${sanitizeCardElementText(cardInstance.cardElements[0])}
    </div>`
}

{/* <p>${JSON.stringify(cards.cardInstances.length, null, 2)}</p> */}

  export default StoryExplorer
  