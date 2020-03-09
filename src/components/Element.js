export default function Element (el = {}) {
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
