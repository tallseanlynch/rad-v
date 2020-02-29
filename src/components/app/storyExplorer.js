const StoryExplorer = (cards) => {
    return `<!--Chapter section -->
  <div class="chapter layer--main-elements block w-full h-full absolute z-index-2 bg-white">
    <div class="story-explorer-container text-3xl">
      <h1 class="font-bold text-5xl mb-8">Story Explorer<h1>
        <p><span class="font-bold">Number of Cards:</span> ${cards.cardInstances.length}</p>
        <p><span class="font-bold">Card Ids:</span>
            ${cards.cardInstances.map(card => {
                return StoryCardInstance(card)
            }).join('')}
        <p>

      </div>
  </div>`
  }

const StoryCardInstance = (cardInstance) => {
    return `<div class="story-card-instance block">
        ${cardInstance.id}
    </div>`
}

{/* <p>${JSON.stringify(cards.cardInstances.length, null, 2)}</p> */}

  export default StoryExplorer
  