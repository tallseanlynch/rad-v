
const lazyCSSComp = (options) => {
    const { baseUnit, numberOfUnits, transitionTime = '500ms' } = options

    const CSStemplates = [
        (x) => `
    .hover\\\:pl-${x}:hover {padding-left: ${baseUnit * x}em;transition:padding-left ${transitionTime} ease-out; }`,
        (x) => `
    .hover\\\:pr-${x}:hover {padding-right: ${baseUnit * x}em;transition:padding-right ${transitionTime} ease-out; }`,
        (x) => `
    .hover\\\:pt-${x}:hover {padding-top: ${baseUnit * x}em;transition:padding-top ${transitionTime} ease-out; }`,
        (x) => `
    .hover\\\:pb-${x}:hover {padding-bottom: ${baseUnit * x}em;transition:padding-bottom ${transitionTime} ease-out; }`,
    (x) => `
    .hover\\\:p-${x}:hover {padding: ${baseUnit * x}em;transition:padding ${transitionTime} ease-out; }`,
    ]    

    return `
<style>

    .timeline-container {
        min-height: 300px;        
    }

    .layer--main-elements {
        padding-bottom: 50%;
    }

    .left-side-off {
        left: -100%;
    }

    .transition-all {
        transition: all 1000ms;
    }

    .story-card-instance {
        transition: all 3000ms;
    }

    .story-card-icon {
        width: 30px;
        height: 30px;
        outline: 2px solid black;
        margin-left: 2px;
    }

    .icon-color-tile {
        width: 10px;
        height: 10px;
    }

    ${CSStemplates.map(CSSTemplate => {
        const CSSString = []
        for(let i=0;i<numberOfUnits;i++) {
            CSSString.push(CSSTemplate(i))
        }
        return CSSString.join(' ')
    })}    

    *, *::before, *::after {
        box-sizing: border-box;
    }

    @keyframes keyframes-left-slide-in-0 {
        0% { left: -100%; }
        100% { left: 5%; }
    }

    @keyframes keyframes-left-slide-out-0 {
        100% { left: -100%; }
        0% { left: 5%; }
    }

    .left-slide-in-0 {
        animation: keyframes-left-slide-in-0 1000ms forwards;
        position: fixed;
    }
    
    .left-slide-out-0 {
        animation: keyframes-left-slide-out-0 1000ms forwards;
        position: fixed;
    }
    
    .story-card-explorer {
        top: 5%;
        width: 90%;
        height: 90%;
    }

    ::-webkit-scrollbar
    {
        width: 0px;
    }
    ::-webkit-scrollbar-track-piece
    {
        background-color: transparent;
    }
  
    .observer-transition-out-0 {
      transform: rotate(720deg) scaleX(5) scaleY(0);
    }
  
    .observer-transition-out-1 {
      transform: rotate(-720deg) scaleX(7) scaleY(0);
    }
  
    .observer-transition-out-2 {
      transform: rotate(1440deg) scaleX(10) scaleY(0);
    }
  
    .observer-middle {
      transition: all 500ms ease;
      width: 10em;
      height: 10em;
    }
  
    .observer-middle-flash-0 {
      transition: all 750ms ease;
    }
  
    .observer-middle-flash-1 {
      transition: all 1000ms ease;
    }
  
    .observer-interior {
      height: 100%;
      width: 100%;
    }
  
    .app-nav {
        height: 50px;
        z-index: 1000;
    }

  @keyframes keyframes-observer-button-close-1 {
    0% {color: black;}
    25% {color: red;}
    50% {color: orange;}
    75% {color: yellow;}
    100% {color: white;}
  }

</style>
`
}

export default lazyCSSComp