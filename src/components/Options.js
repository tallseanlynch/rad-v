 function OptionDotDotDot () {
    return `<div class="option mt-8 relative p-8 bg-white text-black border-b-1">
      <span class="opacity-flux-0 animation-duration-2 inline-block relative px-2">.</span>
      <span class="opacity-flux-0 animation-duration-1 inline-block relative px-2">.</span>
      <span class="opacity-flux-0 animation-duration-0 inline-block relative px-2">.</span>
    </div>`
  }
  
  function OptionDownArrow () {
    return `<div class="option mt-8 relative p-8 bg-white text-black border-b-1">
      <span class="opacity-flux-0 animation-duration-2 inline-block relative px-2">.</span>
      <span class="opacity-flux-0 animation-duration-1 inline-block relative px-2">.</span>
      <span class="opacity-flux-0 animation-duration-0 inline-block relative px-2">.</span>
    </div>`
  }
  
  function Option9 (interior) {
    return `
      <div class="option mt-8 relative p-8 bg-white text-black text-left border-b-1">
        <span class="opacity-flux-0 animation-duration-2 animation-direction-reverse">
            <span class="left-flux-0 animation-duration-2 inline-block relative">></span>
        </span>
        <span class="ml-10">
          ${interior }
        </span>
      </div>`
  }
  
export default {
    OptionDotDotDot,
    OptionDownArrow,
    Option9
}