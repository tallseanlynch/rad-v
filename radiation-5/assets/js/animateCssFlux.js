var cssArray = [
    'font-size-flux',
    'font-weight-flux',
    'opacity-flux',
    'left-flux',
    'top-flux',
    'width-flux',
    'height-flux',
    'color-flux',
    'border-flux',
    'border-style-flux',
    'italic-flux'
]

var cssFunctionArray = [
    // function () {animateCSS('.font-size-flux', 50, .01, ['fontSize'], [[12, 11, 12, 12, 11, 12, 11, 12, 11, 12, 11, 12]], ['pt'], 1)},
    // function () {animateCSS('.font-weight-flux', 10, .01, ['fontWeight'], [[500, 900, 100, 500, 900]], [''], 1)},
    // function () {animateCSS('.opacity-flux', 10, .01, ['opacity'], [[1.0, 0.25, 0.75, 1.0, 0.001, 1.0]], [''], 1)},
    // function () {animateCSS('.left-flux', 10, .01, ['left'], [[0, 5, 10, 15, 10, 20, 15, 10, 0]], ['px'], 1)},
    // function () {animateCSS('.top-flux', 10, .01, ['top'], [[0, 5, 10, 15, 10, 20, 15, 10, 0]], ['px'], 1)},
    // function () {animateCSS('.width-flux', 10, .01, ['width'], [[100, 75, 85, 60, 50, 40, 30, 50, 75, 100]], ['%'], 1)},            
    // function () {animateCSS('.height-flux', 10, .01, ['height'], [[100, 75, 85, 60, 50, 40, 30, 50, 75, 100]], ['%'], 1)},
    // function () {animateCSS('.color-flux', 1000, .01, ['color'], [['white', 'lightgray', 'gray', 'darkgray', 'black', 'black', 'black', 'white', 'black', 'black', 'black','black', 'black', 'black']], [''], 1)},
    // function () {animateCSS('.border-flux', 100, .01, ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'], [[0, 5, 10, 5, 7, 5, 0],[0, 10, 5, 4, 7, 5, 0],[0, 5, 10, 5, 7, 5, 0],[0, 10, 5, 4, 7, 5, 0]], ['px solid','px solid','px solid','px solid'], 1)},
    // function () {animateCSS('.border-style-flux', 10, .01, ['borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borderStyle'], [[0, 1, 3, 2, 1, 3, 0],[0, 1, 3, 2, 1, 3, 0],[0, 1, 3, 2, 1, 3, 0],[0, 1, 3, 2, 1, 3, 0], ['dotted','groove','dotted','dashed','solid','hidden','dashed']], ['px','px','px','px',''], 1)},
    // function () {animateCSS('.italic-flux', 500, .1, ['fontStyle'], [['italic','normal', 'normal', 'italic','normal']], [''], 1)}
]

var renderCSSFunctions = new Array(cssArray.length)
renderCSSFunctions = renderCSSFunctions.fill(1,0)
// var initCSSRenderIndex
// for (initCSSRenderIndex = 0; initCSSRenderIndex < renderCSSFunctions.length; initCSSRenderIndex++) {
//     renderCSSFunctions[initCSSRenderIndex] = 0
// }
function initCSSRenders() {
    var initCSSRenderIndex
    for (initCSSRenderIndex = 0; initCSSRenderIndex < renderCSSFunctions.length; initCSSRenderIndex++) {

        if (renderCSSFunctions[initCSSRenderIndex] > 0) {

            cssFunctionArray[initCSSRenderIndex]()
        }
    }
}

function animateCSS (el, speed, mixUnit, cssProps, cssValues, cssUnits, repeat) {
    var keyFrameIndex = 0

    var elIndex = 0
    var mixPercent = 0.001
    var initCSSAnimate = setInterval(function () {
    for(elIndex=0;elIndex<cssProps.length;elIndex++) {
        if (keyFrameIndex == cssValues[0].length) {
            var loopSelectors
            for(loopSelectors = 0; loopSelectors < document.querySelectorAll(el).length; loopSelectors++) {
                document.querySelectorAll(el)[loopSelectors].style[cssProps[elIndex]] = cssValues[elIndex][keyFrameIndex] + cssUnits[elIndex]
                keyFrameIndex += 1          
            }
        }else {
            if(typeof cssValues[elIndex][keyFrameIndex] == 'string'){
                var loopStringSelectors
                for(loopStringSelectors = 0; loopStringSelectors < document.querySelectorAll(el).length; loopStringSelectors++) {
                document.querySelectorAll(el)[loopStringSelectors].style[cssProps[elIndex]] = cssValues[elIndex][keyFrameIndex] + cssUnits[elIndex]            
                if (cssProps.length < 2) {
                    keyFrameIndex += 1          
                }
                }
            } else {
                var fromCSS = cssValues[elIndex][keyFrameIndex] * (1 - mixPercent)
                var toCSS = cssValues[elIndex][keyFrameIndex + 1] * mixPercent
                var mixCSS = fromCSS + toCSS
                mixPercent += mixUnit
                var loopNormalSelectors
                for(loopNormalSelectors = 0; loopNormalSelectors < document.querySelectorAll(el).length; loopNormalSelectors++) {
                    document.querySelectorAll(el)[loopNormalSelectors].style[cssProps[elIndex]] = mixCSS + cssUnits[elIndex]
                }
            }
        }
    }
    if (mixPercent > .99) {
        mixPercent = 0.001
        keyFrameIndex += 1
    }
    if (keyFrameIndex >= cssValues[0].length) {
        stopInterval()
        if (repeat == 1) {
            animateCSS(el, speed, mixUnit, cssProps, cssValues, cssUnits, repeat)
        }
    }      
    }, speed)
    function stopInterval () {
        clearInterval(initCSSAnimate)
    }
}