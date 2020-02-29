
const lazyCSSComp = (options) => {
    const { baseUnit, numberOfUnits, transitionTime = '500ms' } = options

    const CSStemplates = [
        (x) => `
    .hover\\\:pl-${x}:hover {padding-left: ${baseUnit * x}em;transition:all ${transitionTime} ease-out; }`,
        (x) => `
    .hover\\\:pr-${x}:hover {padding-right: ${baseUnit * x}em;transition:all ${transitionTime} ease-out; }`,
        (x) => `
    .hover\\\:pt-${x}:hover {padding-top: ${baseUnit * x}em;transition:all ${transitionTime} ease-out; }`,
        (x) => `
    .hover\\\:pb-${x}:hover {padding-bottom: ${baseUnit * x}em;transition:all ${transitionTime} ease-out; }`,
    (x) => `
    .hover\\\:p-${x}:hover {padding: ${baseUnit * x}em;transition:all ${transitionTime} ease-out; }`,
    ]    

    return `
<style>
    .story-card-instance {
        transition: all 3000ms;
    }

    ${CSStemplates.map(CSSTemplate => {
        const CSSString = []
        for(let i=0;i<numberOfUnits;i++) {
            CSSString.push(CSSTemplate(i))
        }
        return CSSString.join(' ')
    })}    
</style>
`
}

export default lazyCSSComp