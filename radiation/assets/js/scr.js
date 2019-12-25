
export const scr = {

    //this takes in an object and reassigns it's classes, currently it doesn't matter, but call this first to avoid deleting a class added later
    branchClasses(obj){
        //obj comes in as {{"group-1": "border-flux border-weight-flux left-flux"}}
        // will remove group-1 class and add all of the declared classes
        let keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            let theEls = document.getElementsByClassName(keys[i])
            for (let j = 0; j < theEls.length; j++) {
                let classNames = obj[keys[i]].trim().split(' ')
                // theEls[j].classList.add(classNames)
                // console.log(classNames)
                // theEls[j].className = obj[keys[i]]
                for (let k = 0; k < classNames.length; k++) {
                    theEls[j].classList.add(classNames[k])
                }
            }
        }
    },
    organizeTextly() {
        let queueToType =[]
        // console.log(queueToType)
        let textlyRef = 0
        const sections = ['vue-markdown-header', 'vue-markdown-body', 'vue-markdown-path']

        for (let sectionInc = 0; sectionInc < sections.length; sectionInc++) {
            let sectionBody = document.getElementsByClassName(sections[sectionInc])
            for (let bodyInc = 0; bodyInc < sectionBody.length; bodyInc++) {

                //give attribute to parent button so can toggle it's display
                if (sections[sectionInc] === 'vue-markdown-path') {
                    let parentDiv = sectionBody[bodyInc].parentNode.parentNode
                    parentDiv.setAttribute(`textly-path-parent`, bodyInc)
                }


                let topNodes = sectionBody[bodyInc].querySelector('p').childNodes
                // console.log(document.getElementsByClassName(sections[sectionInc]))
                // console.log(topNodes)
                //first, go through and give block elements textly-element: block, check that a textly-element exists and assign block or inline, then wrap textNodes in spans
                for (let i = 0; i < topNodes.length; i++) {
                    if (topNodes[i].nodeType === 1 && (window.getComputedStyle(topNodes[i]).getPropertyValue('display') === 'block' || topNodes[i].tagName.toUpperCase() === "BR")) {
                        topNodes[i].setAttribute('textly-element', 'block')
                        // if (/\r|\n/.exec(topNodes[i].textContent)) {
                        //     console.log('EXEC')
                        // }
                    }
    
                    // give inline or block attributes so can parse easy
                    if (topNodes[i].nodeType === 1 && topNodes[i].getAttribute('textly-element') === null) {
                        const displayType = window.getComputedStyle(topNodes[i]).getPropertyValue('display')
                        if (displayType === 'block'){
                            topNodes[i].setAttribute('textly-element', 'block')
                        } else {
                            topNodes[i].setAttribute('textly-element', 'inline')
                        }
                    }
                    //wrap textNodes in spans
                    if (topNodes[i].nodeType === 3) {
                        const text = topNodes[i].textContent
                        let newSpan = document.createElement('span')
                        newSpan.textContent = text
                        newSpan.setAttribute('textly-element', 'inline')
                        sectionBody[bodyInc].querySelector('p').replaceChild(newSpan, topNodes[i])
                        
                    }
                }
                //take a break and reassign topNodes because I have changed all the textNodes to span elements
                topNodes = sectionBody[bodyInc].querySelector('p').childNodes
                // console.log(topNodes)
    
                //write part that stores display, textContent, and textly-element to queueToType
                for (let i = 0; i < topNodes.length; i++) {
                    queueToType.push({
                        display: window.getComputedStyle(topNodes[i]).getPropertyValue('display'),
                        textContent: topNodes[i].textContent,
                        "textly-element": topNodes[i].getAttribute('textly-element'),
                        "textly-ref": textlyRef
                    })
                    topNodes[i].setAttribute('textly-ref', textlyRef)
                    textlyRef++
                }
                for(let i = 0; i < topNodes.length; i++) {
                    // console.log(topNodes[i].tagName, topNodes[i].textContent, topNodes[i].attributes[0].nodeValue)
                }
                // console.log(queueToType)
                //second, set all topNodes to display = 'none' and textContent = ''
                for (let i = 0; i < topNodes.length; i++) {
                    if (sections[sectionInc] === 'vue-markdown-path') {
                        const parent = document.querySelector(`[textly-path-parent="${bodyInc}"]`)
                        parent.style.display = 'none'
                    }
                    if (topNodes[i].nodeType === 1) {
                        topNodes[i].textContent = ''
                        topNodes[i].style.display = 'none'    
                    }
                }
            }
            
        }
        scr.applyMultipleAnimations(queueToType)
        scr.printCard(queueToType)
    },
    printCard(queueToType) {
        let currentlyTyping = false
        let advanceAutomatically = false
        const normalTypingSpeed = 1
        const acceleratedTypingSpeed = 1
        let typingSpeed = normalTypingSpeed

        typeParagraphs()
        //run function to assign textly-ref attributes from the header all the way down to the paths


        function typeParagraphs() {
            let finishedTypingPage = false
            let queueInc = 0
            let letterInc = 0




            //start typing, if mouse is clicked it speeds up the timeout
            function printElementsUntilBlock() {
                let elFromQueue = queueToType[queueInc]

                function advanceAfterBlockToNextInlineStart() {
                    // console.log('2')
                    // console.log('start')
                    // console.log(queueToType[queueInc])
                    if (queueToType[queueInc]["textly-element"] === "inline") {
                        currentlyTyping = false
                        // console.log('3')
                        // console.log(queueInc)
                        if (advanceAutomatically &&  queueInc < queueToType.length) {
                            console.log('deep')
                            console.log(queueToType[queueInc])
                            printElementsUntilBlock()
                        }
                        return
                    } else {
                        // console.log('4')
                        queueInc++
                        advanceAfterBlockToNextInlineStart()
                    }
                }
                function addLetters() {
                    // console.log('add')
                    if (letterInc  === elFromQueue.textContent.length) {
                        // console.log('4.5')
                        letterInc = 0
                        queueInc++
                        if (elFromQueue["textly-element"] === 'inline') {
                            // console.log('5')
                            printElementsUntilBlock()
                        }
                    } else if (letterInc < elFromQueue.textContent.length) {
                        // console.log('7')
                        let letterToAdd = elFromQueue.textContent.slice(letterInc, letterInc+1)
                        // console.log(letterToAdd,"index: " + letterInc, "length: " +elFromQueue.textContent.length)
                        let theEl = document.querySelector(`[textly-ref="${elFromQueue["textly-ref"]}"]`)
                        theEl.style.display = elFromQueue.display === 'block'? 'block' : 'inline-block' //edited display
                        if (letterInc === 0 && theEl.parentNode.parentNode.parentNode.parentNode.getAttribute('textly-path-parent') !== null) {
                            theEl.parentNode.parentNode.parentNode.parentNode.style.display = 'block'
                        }

                        scr.renderGifs()
        
                        theEl.textContent += letterToAdd
                        letterInc++
                        setTimeout(addLetters, typingSpeed)
                    }
                }
                    if (queueInc < queueToType.length) {
                    // console.log('1')
                    let theEl = document.querySelector(`[textly-ref="${elFromQueue["textly-ref"]}"]`)
                    theEl.style.display = elFromQueue.display    
                    currentlyTyping = true
                        addLetters()

                    if (elFromQueue["textly-element"] === 'block') {
                        typingSpeed = normalTypingSpeed
                        currentlyTyping = false
                        // console.log('6')
                        advanceAfterBlockToNextInlineStart()
                    }
                } else {
                    finishedTypingPage = true
                    queueToType = []
                }
            }

            printElementsUntilBlock()

            //make mouse click that fires this function
            window.addEventListener('click', () => {
                advanceTyping()
            })
            function advanceTyping() {
                // console.log(currentlyTyping)
                if (currentlyTyping === true) {
                    typingSpeed = acceleratedTypingSpeed
                } else {
                    printElementsUntilBlock()
                }
                
            }
        }
    },
        // here goes to handle gifs

        //get parsed gifs
    renderGifs() {
        var gifArray = [
            'black-alpha-0.gif',
            'black-alpha-1.gif',
            'black-alpha-2.gif',
            'black-alpha-3.gif',
            'black-alpha-4.gif',
            'black-alpha-5.gif',
            'black-alpha-6.gif',
            'black-alpha-7.gif',
            'white-alpha-0.gif'
        ]
        function createGifTemplateElements() {
            let parsedElements = document.querySelectorAll('[class^="gif-"]')
            for (let gifIndex = 0; gifIndex < parsedElements.length; gifIndex++) {
                const gifRegex = /^gif-/
                let parentEl = parsedElements[gifIndex]

                //get the number suffix from the class name so we can apply the proper gif from the array

                let parentClassList = Array.from(parentEl.classList)
                let myImgIndex
                for (let classIndex = 0; classIndex < parentClassList.length; classIndex++) {
                    if (parentClassList[classIndex].match(gifRegex)) {
                        myImgIndex = parentClassList[classIndex].split('gif-')[1]
                    }
                }
                
                let imgSrcString = '' + gifArray[myImgIndex]

                let innerText = parentEl.textContent.toString()
                let textSpan = document.createElement('span')
                textSpan.classList.add('anim-text')
                textSpan.textContent = innerText
                parentEl.textContent =''
                let gifImgContainer = document.createElement('div')
                gifImgContainer.classList.add('anim-gif')
                let theImg = document.createElement('img')
                theImg.classList.add('anim-layer')
                // theImg.setAttribute('src', myGif)
                gifImgContainer.appendChild(theImg)
                parentEl.appendChild(textSpan)
                parentEl.appendChild(gifImgContainer)
                import(`../gifs/${gifArray[myImgIndex]}`).then(importedGif => {
                    theImg.setAttribute('src', importedGif.default);
                });
            }
        }

        // make the gifs proper have clientWidth and ClientHeight of their sibling text
        function adjustGifTexts() {
            var gifTexts = document.querySelectorAll('.anim-text')
            var gifs = document.querySelectorAll('.anim-gif')
            var gifIndex
            var heightAdd = 6
            var widthAdd = 6
            for(gifIndex = 0;gifIndex<gifTexts.length;gifIndex++){
                let paragraph = gifTexts[gifIndex].parentNode
                let pOffWidth = paragraph.offsetWidth
                let pOffHeight = paragraph.offsetHeight
                let layer = gifs[gifIndex].querySelector('.anim-layer')
                gifs[gifIndex].style.width = (pOffWidth + widthAdd) + 'px'
                gifs[gifIndex].style.height = (pOffHeight + heightAdd) + 'px'
                gifs[gifIndex].style.left = -widthAdd/2 +'px' 
                gifs[gifIndex].style.bottom = -heightAdd/2 +'px' 

            }
        }
    createGifTemplateElements()
    adjustGifTexts()
    },
    applyMultipleAnimations(queueToType) {
        let allStyleSheets = document.styleSheets
        let allRules = []
        let animRules = []
        for (let i = 0; i < allStyleSheets.length -1; i++){
            try {
                let sheetRules = allStyleSheets[i].rules
                // console.log(sheetRules.length)
                for (let j = 0 ; j < sheetRules.length; j++) {
                    allRules.push(sheetRules[j])
                }
            } catch (e) {
                console.warn("Can't read the css rules of: " + allStyleSheets[i].href, e);
                continue;
            }
        }
        for (let i = 0; i < allRules.length; i++) {
            if (allRules[i].style && allRules[i].style.animation !== '' && allRules[i].style.animation !== null && allRules[i].style.animation !== undefined) {
                // console.log(allRules[i].style.animation)
                animRules.push(i)
            }
        }
        //go through each queued item
        for (let i = 0; i < queueToType.length; i++) {
            // console.log(queueToType[i]["textly-ref"])
            //select that item to work with
            let el = document.querySelector(`[textly-ref="${queueToType[i]["textly-ref"]}"]`)
            let animStyles = []
            let classes = el.classList
            // console.log(animRules)
            //now go through each rule of animation 
            for (let j = 0; j < animRules.length; j++) {
                for (let k = 0; k < classes.length; k ++) {
                    // console.log(allRules[animRules[j]].selectorText)
                    // console.log(classes[k])
                    // console.log(allRules[animRules[j]].selectorText.indexOf(classes[k]))
                    if (allRules[animRules[j]].selectorText.indexOf(classes[k]) > -1) {
                        // console.log('pass')
                        animStyles.push(allRules[animRules[j]].style.animation)
                    }
                }
            }
            let animString = animStyles.join(', ')
            // console.log(animString)
            if (animString !== '') {
                // console.log('apply')
                el.style.animation = animString
            }
        }
        // console.log(queueToType)
        // console.log(allStyleSheets)
        // console.log(allRules)
        // console.log(animRules)
        // let fsopEl = document.querySelector('.font-size-flux.opacity-flux')
        // console.log(fsopEl.style.animation)
    }
}