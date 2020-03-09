export default function MainMenu () {
    return `<!--Main menu section -->
    <style>
      .movement-vertical-0--0 {
          animation: keyframes-movement-vertical infinite ease-in-out 0.5s;
          position: relative;
      }
  
      .movement-vertical-0--1 {
        animation: keyframes-movement-vertical infinite ease-in-out 1s;
        position: relative;
      }
  
      .movement-vertical-0--2 {
        animation: keyframes-movement-vertical infinite ease-in-out 2s;
        position: relative;
  
      }
      .movement-vertical-0--3 {
        animation: keyframes-movement-vertical infinite ease-in-out 3s;
        position: relative;
  
      }
      .movement-vertical-0--4 {
        animation: keyframes-movement-vertical infinite ease-in-out 4s;
        position: relative;
  
      }
  
      .movement-vertical-0--5 {
        animation: keyframes-movement-vertical infinite ease-in-out 5s;
        position: relative;
      }
  
      .movement-vertical-0--6 {
        animation: keyframes-movement-vertical infinite ease-in-out 6s;
        position: relative;
      }
  
      .movement-vertical-0--7 {
        animation: keyframes-movement-vertical infinite ease-in-out 7s;
        position: relative;
      }    
  
      .movement-vertical-0--8 {
        animation: keyframes-movement-vertical infinite ease-in-out 8s;
        position: relative;
      }
  
      .movement-vertical-0--9 {
        animation: keyframes-movement-vertical infinite ease-in-out 9s;
        position: relative;
      }
  
      .movement-vertical-0--10 {
        animation: keyframes-movement-vertical infinite ease-in-out 10s;
        position: relative;
    }
  
      @keyframes keyframes-movement-vertical {
        0% {
            left: 0%;
            top: -15%;
            font-size: 1em;
        }
    
        25% {
            left: 50%;
        }
    
        50% {
            left: 0%;
            font-size: 3em;
        }
    
        75% {
            left: 100%;
        }
    
        100% {
            left: 0%;
            top: 105%;
            font-size: 1em;
        }
      }
  
      .game-font {
        font-family: slkscrb;
        font-size: 2em;
      }
  
      .game-font-main-menu {
        font-family: slkscrb;
        font-size: 5em;
      }
  
      .game-font-main-menu-sub {
        font-family: slkscrb;
        font-size: 3.5em;
      }
  
    </style>
  <div class="main-menu layer--main-elements flex justify-center w-full h-full absolute z-index-3 bg-black overflow-hidden">
    <!--Foreground elements section -->
  
      <div class="flex justify-center content-center h-full w-full absolute text-white game-font-main-menu z-index-4">
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-7">R</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-6">A</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-10">D</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-9">I</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-8">A</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-15">T</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-16">I</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-5">O</span>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <span class="color-flux-0 animation-duration-7">N</span>
        </div>
      </div>
  
      <div class="flex flex-col justify-end content-center h-full w-full absolute text-white game-font-main-menu-sub z-index-5 items-end pb-24 pr-24">
        <div class="flex items-center justify-center">
          <span class="color-flux-0 animation-duration-7">START</span>
        </div>
        <div class="flex items-center justify-center">
          <span class="color-flux-0 animation-duration-7">CONTINUE</span>
        </div>
      </div>
  
    <div class="flex justify-center content-center h-full w-full absolute text-white game-font">
      <div class="flex-1 background-color-rad-0 animation-duration-11">
        <span class="animation-duration-10 movement-vertical-0--10">
          <span class="color-rad-0 animation-duration-10">R</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--8">
          <span class="color-rad-0 animation-duration-12">A</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--6">
          <span class="color-rad-0 animation-duration-4">D</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--4">
          <span class="color-rad-0 animation-duration-6">I</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-4">
        <span class="animation-duration-10 movement-vertical-0--5">
          <span class="color-rad-0 animation-duration-10">A</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--7">
          <span class="color-rad-0 animation-duration-10">T</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--9">
          <span class="color-rad-0 animation-duration-10">I</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-9 flex items-center justify-center">
        <span class="animation-duration-10 movement-vertical-0--4">
          <span class="color-rad-0 animation-duration-10">N</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--3">
          <span class="color-rad-0 animation-duration-10">R</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--6">
          <span class="color-rad-0 animation-duration-10">A</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-3 flex items-center justify-center">
        <span class="animation-duration-10 movement-vertical-0--4">
          <span class="color-rad-0 animation-duration-10">I</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--3">
          <span class="color-rad-0 animation-duration-10">A</span>
        </span>
        <span class="animation-duration-10 movement-vertical-0--8">
          <span class="color-rad-0 animation-duration-10">T</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-8 flex items-center justify-center">
        <span class="font-size-flux-0 animation-duration-5">
          <span class="color-rad-0 animation-duration-12">A</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-15 flex items-center justify-center">
        <span class="font-size-flux-0 animation-duration-5">
          <span class="color-rad-0 animation-duration-5">T</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-12 flex items-center justify-center">
        <span class="font-size-flux-0 animation-duration-5">
          <span class="color-rad-0 animation-duration-8">I</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-7 flex items-center justify-center">
        <span class="font-size-flux-0 animation-duration-5">
          <span class="color-rad-0 animation-duration-13">O</span>
        </span>
      </div>
      <div class="flex-1 background-color-rad-0 animation-duration-10 flex items-center justify-center">
        <span class="font-size-flux-0 animation-duration-5">
          <span class="color-rad-0 animation-duration-10">N</span>
        </span>
      </div>
    </div>
  </div>`
  }
  
  