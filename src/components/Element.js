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

    const constructVariables = (card) => {
      // console.log('thiiiissssss', this)
      const variableStart = card.indexOf('{{')
      const variableEnd = card.indexOf('}}') + 2
      const variablesExist = variableStart > -1
      if(variablesExist) {
        // console.log('Found variables in cardElement', el)

        // const variables = card.match(/(?<={{\s+).*?(?=\s+}})/gs)
        const variablePreCode = card.substring(0, variableStart)
        const variablePostCode = card.substring(variableEnd, card.length)
        const variable = card.substring(variableStart, variableEnd).replace('{{', '').replace('}}', '').trim()
        // debugger
        const variableValue = this.getAppState()[String(variable)]
        const finalCardElement = variablePreCode + variableValue + variablePostCode
        // console.log({
        //   variable,
        //   variablePreCode,
        //   variablePostCode,
        //   variableValue,
        //   finalCardElement
        // })
        if(finalCardElement.indexOf('{{') > -1) {
          return constructVariables(finalCardElement)
        } else {
          return finalCardElement
        }
      } else {
        return card
      }
    }    

    const cardElementWithVariableValues = constructVariables(cardElementInterior)

    const operations = {
      setAppStateValue: (data) => {
        // console.log('setAppStateValue data:', data)
        const key = Object.keys(data)[0]
        const value = data[key]
        this.setAppStateValue(key, value)
        // console.log(this.appState)
      },
      closeObserverTarget: (data) => {
        // console.log('closeObserverTarget data:', data)
        this.addClassesToDOMNode(`.observer-middle-0`, ['observer-transition-out-0'])
        this.addClassesToDOMNode(`.observer-middle-flash-0`, ['observer-transition-out-1'])
        this.addClassesToDOMNode(`.observer-middle-flash-1`, ['observer-transition-out-2'])
        setTimeout(() => {
            document.querySelector('.observer-button-0') && document.querySelector('.observer-button-0').remove()
        }, 1500)
      } 
    }

    // will need parser in text to pull out any special values {{mascot}}

    el.ops && console.log(el.ops)

    el.generatedId = this.returnRandomId()
    this.busFunctions[el.generatedId] = function () {
      // console.log('THISTHISTHIS', this)
      el.goTo && this.addClassesToDOMNode(`.card-option.${el.cardInstance}`, ['opacity-out-0','animation-duration-1'])
      setTimeout(() => {
        // el.callback && el.callback.bind(this)(el, {generatedId})
        // console.log(el, el.ops)
        // console.log('INNER THIS', this)
        if (el.ops && el.ops.length > 0) {
          el.ops.forEach((op) => {
            // console.log(this, operations)
            // console.log('FOREACH EACH OP', op)
            const operationKey = Object.keys(op)
            const operationFunction = operations[Object.keys(op)[0]]
            const operationData = { ...op[operationKey], el }
            operationFunction(operationData)
          })
        }
        el.goTo && this.addCardToCardHistory(el.goTo, {generatedId: el.generatedId})  
      }, 1000)
    }

    // const show = el.show && this.getAppState()[el.show]
    // const hide = el.hide && this.getAppState()[el.hide]

    // el.show && console.log('show', el.show)
    // el.hide && console.log('hide', el.hide)
    // console.log('ELEMENT LOG', el)

    if(el.show) {
      console.log('SHOW!!!!', el.show)
      console.log(this.getAppState()[el.show])
    }

    if(el.hide) {
      console.log('HIDE!!!!', el.hide)
      console.log(this.getAppState()[el.hide])
    }

    const show = el.show && this.getAppState()[el.show]
    const hide = el.hide && this.getAppState()[el.hide]

    let showClass = (el.show && show) ? '' : 'hidden'
    if(el.show === undefined) {
      showClass = ''
    }
    const hideClass = (el.hide && hide) ? 'hidden' : ''

    return `<div class="card-element--container ${showClass} ${hideClass} ${el.goTo ? 'card-option' : ''} ${el.cardInstance} ${el.cardElementClasses ? el.cardElementClasses : ''} object"  id="${el.generatedId}" onClick="bus('${el.generatedId}')">${cardElementWithVariableValues}</div>`
}
