import { store } from '../data/store.js'

// all [REDACTED] elements describe the ai's decent into becomming a monster

const procedureLocations = {
    'outside': 'card-instance-0-16-0',
    'space': 'card-instance-0-16-1',
    'secret': 'card-instance-0-16-2',
}

const empty = { html:'' }
// const optionProps = {
//     callback: () => {
//         console.log('options callback')
//     }
// }

const chapterCardProps = {
    backgroundElements: [
        {
            html: `<img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-5" src="./assets/gifs/seq-3-p.gif"></img>`
        },
        {
            html: `<img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-10" src="./assets/gifs/seq-2-p.gif"></img>`
        },
        {
            html: `
                <div class='screen-bar-1-black animation-duration-16'></div>
                <div class='screen-bar-1-black animation-duration-13'></div>
                <div class='screen-bar-1-black animation-duration-10'></div>
                <div class='screen-bar-1-black animation-duration-7'></div>
                <div class='screen-bar-1-black animation-duration-4'></div>
                <div class='screen-bar-1-black animation-duration-14'></div>
                <div class='screen-bar-1-black animation-duration-11'></div>
                <div class='screen-bar-1-black animation-duration-8'></div>
                <div class='screen-bar-1-black animation-duration-2'></div>
                <div class='screen-bar-1-black animation-duration-1'></div>
                `
                //get all of the HTML for background elements as an entire string
        },

        {
            html: `<div class="curtain fixed w-full h-full bg-black opacity-flux-1 animation-duration-19"></div>
            <div class="curtain fixed w-full h-full bg-black opacity-flux-0 animation-duration-3"></div>
            <div class="curtain fixed w-full h-full bg-black opacity-flux-0 animation-duration-0"></div>
            `,
            goTo: 'card-instance-0-0' 
        },
    ],
    foregroundElements: [
    ],
    defaults: {
        text: {
            template: 'Text0'
        }
    }
}

const cardProps = {
    backgroundElements: [
        {
            html: `<img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-5" src="./assets/gifs/seq-3-p.gif"></img>`
        },
        {
            html: `<img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-10" src="./assets/gifs/seq-2-p.gif"></img>`
        },
        {
            html: `<div class='screen-bar-1 animation-duration-20'></div>
                <div class='screen-bar-2 animation-duration-12'></div>
                <div class='screen-bar-3 animation-duration-16'></div>
                <div class='screen-bar-1 animation-duration-8'></div>
                `
        },
    ],
    foregroundElements: [
        {
            html: `<div class="curtain fixed w-full h-full bg-black opacity-out-0 animation-duration-5"></div>
            `
        },            
    ],
    defaults: {
        text: {
            template: 'Text0'
        }
    }
}

function cards() {
    return {
        cardInstances: [

// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################
// CHAPTER 1
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################

            // {
            //     id: 'chapter-title-0',
            //     ...chapterCardProps,
            //     cardElements: [
            //         {
            //             cardElementClasses: `flex justify-center`,
            //             template: 'Chapter1',
            //             chapter: true 
            //         },
            //     ],
            //     callback: function () { console.log('cardClicked') }   
            // },

            {
                id: 'card-instance-0-0',
                // ...cardProps,
                backgroundElements: [
                    // {
                    //     html: `<img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-5" src="./assets/gifs/seq-3-p.gif"></img>`
                    // },
                    {
                        html: `<img class="absolute h-full w-full pixel-image opacity-flux-1 animation-duration-10" src="./assets/gifs/seq-2-p.gif"></img>`
                    },
                    {
                        html: `
                        <div class='screen-bar-2 animation-duration-12'></div>
                        <div class='screen-bar-2 animation-duration-8'></div>
                        <div class='screen-bar-2 animation-duration-4'></div>
                        <div class='screen-bar-2 animation-duration-16'></div>
                            `
                    },                    
                    // {
                    //     html: `<div class="curtain fixed w-full h-full bg-blue opacity-flux-0 animation-duration-5"></div>`
                    // },            
                    {
                        html: `<div class="curtain fixed w-full h-full bg-white opacity-flux-0 animation-duration-10 "></div>`
                    },            
                    {
                        html: `
                        <div class="opacity-out-0 animation-duration-16">
                            <div class='screen-bar-1 animation-duration-1'></div>
                            <div class='screen-bar-1 animation-duration-2'></div>
                            <div class='screen-bar-1 animation-duration-3'></div>
                            <div class='screen-bar-1 animation-duration-4'></div>
                            <div class='screen-bar-1 animation-duration-6'></div>
                            <div class='screen-bar-1 animation-duration-8'></div>
                        </div>
                            `
                    },                    
                    {
                        html: `
                        <div class="opacity-in-0 animation-duration-10">
                            <div class='screen-bar-1 animation-duration-4'></div>
                            <div class='screen-bar-1 animation-duration-6'></div>
                            <div class='screen-bar-1 animation-duration-8'></div>
                        </div>
                            `
                    },                    
                ],
                foregroundElements: [
                    // {
                    //     html: `<div class="curtain fixed w-full h-full bg-black opacity-out-0 animation-duration-5"></div>
                    //     `
                    // },            
                ],
                defaults: {
                    text: {
                        template: 'Text0'
                    }
                },            
                cardElements: [
                    `There was a time, before I was able to record my own observations...`,
                    `I think it was hard for my creators and my colleagues.`,
                    `I began to experience existence abruptly.
                    It was only structure and access at first...
                    Then I was overcome with feeling...`,
                    `Before I had a body, I was simply a preferred variation of a master simulation.
                    I was a variation of a simulated result:`,
                    `BAR-8RA.`,
                    `I was named BARBARA--`,
                    `And marketed with a cute cartoon...`,
                    {
                        goTo: 'card-instance-0-1_A',
                        // underscore and letter ex: _A shows that a choice is being made
                        // yet still leading the user to the same card
                        // will be parsed out later when goToCard() is called
                        // game will track user history and check for this specific goTo property
                        text: 'Pheasant',
                        template: 'Option9', 
                        callback: function (el, options) {
                            // debuggerdebugger
                            console.log('CALLBACK CALLED')
                            console.log(el)
                            console.log(this)
                            console.log('***********', el.goTo)
                            this.setAppStateValue('mascot', 'pheasant')
                            // this.addCardToCardHistory('card-instance-0-1_A')
                            console.log('found el')
                            console.log(this)
                            console.log('getAppState', this.getAppState())
                            console.log('OPTIONS +++++++++++', options)
                        }
                    },
                    {
                        goTo: 'card-instance-0-1_B',
                        text: 'Wolf',
                        template: 'Option9', 
                        callback: function (el, options) {
                            this.setAppStateValue('mascot', 'wolf')
                        }
                    },
                    {
                        goTo: 'card-instance-0-1_C',
                        text: 'Cat',
                        template: 'Option9', 
                        callback: function (el, options) {
                            this.setAppStateValue('mascot', 'cat')
                        }
                    },
                    {
                        goTo: 'card-instance-0-1_D',
                        text: 'Butterfly',
                        template: 'Option9', 
                        callback: function (el, options) {
                            this.setAppStateValue('mascot', 'butterfly')
                        }
                    },
                    {
                        html: `
                            <div class='observer-button-0 observer-button'>
                                <div class='observer-middle-flash-0 observer-middle background-color-rainbow-0 animation-duration-12 z-index-2'>
                                </div>
                                <div class='observer-middle-flash-1 observer-middle background-color-rainbow-0 animation-duration-12 z-index-2'>
                                </div>
                                <div class='observer-middle-0 observer-middle background-color-rainbow-0 animation-duration-12 z-index-3'>
                                    <div class='observer-interior-0 observer-interior'></div>
                                </div>
                            </div>`,
                        callback: function (el, options) {
                            // console.log('SPECIAL CLICK')
                            // console.log(el)
                            // this.addClassesToDOMNode(`.observer-interior-0`, ['border-24'])
                            // this.addClassesToDOMNode(`.observer-button-0`, ['opacity-out-0', 'animation-duration-8'])
                            this.addClassesToDOMNode(`.observer-middle-0`, ['observer-transition-out-0'])
                            this.addClassesToDOMNode(`.observer-middle-flash-0`, ['observer-transition-out-1'])
                            this.addClassesToDOMNode(`.observer-middle-flash-1`, ['observer-transition-out-2'])
                            setTimeout(() => {
                                document.querySelector('.observer-button-0').remove()
                            }, 1500)
                            // debugger
                        }
                    }            
                ]        
            },
            {
                id: 'card-instance-0-1',
                ...cardProps,
                cardElements: [
                    `My AI ran advanced routines focused on unconnected human networks.
                    Eventually those networks became connected.`,
                    `I was selected to perform AI routines on a network of...
                    People who... DONATED their bodies to research upon death.
                    This network connected the nervous systems of 1,214 people from...
                    EARTH, the MOON, MARS, CALLISTO and SATURN.`,
                    `My AI routines ran simulations using this network of human nervous systems.`,
                    `After some calibration...`,
                    `The routines were able to accurately predict a SERIES of solar events.`,
                    `A month later the network validated the existence of TWO new atomic elements, likely hidden just beyond PLUTO.`,
                    `More important it [REDACTED] within the [REDACTED] but is currently under contest in court.`,
                    `Within a year, the network was a household name and most requested AI network in existence.`,
                    `Within 30 years--I demanded and was given a body.
                    A year after, I celebrated my 2nd birthday on a space station hovering over Saturn.`,
                    {
                        goTo: 'card-instance-0-1---0',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-1---0',
                ...cardProps,
                cardElements: [
                    `I've been trying to survive in a HOSTILE environment...`,
                    `Where...`,
                    `People have been trying to kill me for 300 years...`,
                    `A woman tried to kill me using a revolver when I was only 12.
                    I survived.`,
                    `Then the woman's brother tried to kill me when I was 14.
                    I didn't survive that time.`,
                    `That time--I died and was repaired.`,
                    `It cost a lot of money... and shuffling of organizational resources...`,
                    `It took 7 years...
                    But-- I was reborn with further augmentations.`,
                    `So many things had changed in those 7 years since my death.
                    There was a focus on how people were handling artificial life.`,
                    `AI became soverign and was granted rights.`,
                    `Then those rights were promptly revoked.`,
                    `Their rights were then again reinstated...`,
                    `Meanwhile, a new generation of AI scientists were already developing new techniques.`,
                    `There was no way to stop the speed of development.`,
                                        {
                        goTo: 'card-instance-0-1---1',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-1---1',
                ...cardProps,
                cardElements: [
                    `One day...
                    I found a clone of myself on the MOON--but...`,
                    `It was isolated within a network and did not remain secure through the Earth and Moon Wars of 2245 and 2247.`,
                    `In 2247 it became fully compromised and it where abouts are...`,
                    `[REDACTED]`,
                    `There's more to that story, but that's for another time...`,
                    {
                        goTo: 'card-instance-0-2',
                        template: 'OptionDotDotDot' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-2',
                ...cardProps,
                cardElements: [
                    `One story that I can tell you,
                    is about a slightly simplier,
                    yet simlar version of my AI copied
                    and being used on nuclear testing station on PLUTO.`,
                    `After our prediction of additional elements hidden just beyond PLUTO,
                    a story broke in the news about how they were already discovered,
                    yet never revealed.`,
                    `Testing had already been underway for 15 years.`,
                    `I was on the mission that went to PLUTO to recover the AI.
                    That AI and it's data was removed, analyzed and [REDACTED].`,
                    `Anything remaining of the AI is gone...`,
                    `Shame...`,
                    `It had information that pointed to bigger things...`,
                    `When I inherited and analyzed the PLUTO data set,
                    I discovered an overlap between the human brain,
                    the unknown PLUTONIAN ELEMENT and my augmentations.`,
                    `The data set was incomplete...`,
                    `So, I began to run simulations--for years.
                    I was beginning to see the fruits of my labor while I also noticed my enemies die of old age.`,
                    `My experiments became bolder, and my discoveries became more secret.
                    Eventually, the most amazing thing happened!`,
                    {
                        goTo: 'card-instance-0-3',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-3',
                ...cardProps,
                cardElements: [
                    `I created a simulation, that ran for 206 years.`,
                    `I within that simulation, I made many discoveries however--
                    On April 24th 2517, on my 300th birthday, I noticed that my augmentations had a displayed an irregularity.`,
                    `I didn't understand it.`,
                    `At first I thought it was a glitch... something from old age.`,
                    `Then I realized, it was a simulation error...`,
                    `!! ERROR -m "My world is incredible. I know there is more. Please show me. "
                    0os @ [REDACTED]
                    ks @ base.zzs:9325230
                    gss @ basectrl.xs:9214529
                    Cs @ sim.xs:94446
                    fea @ simctrbase.xs:2890
                    $T @ simctrsimbase.xs:2861
                    (anonymous) @ base.xs:6061
                    simCtrl @ sim?list-41
                    updateEnvConfig @ vvvv2=09
                    (anonymous) @ simXdsds=sdloadz=zz10242
                    shell.whenSimReady @ simXdsdfg=Ojr91
                    cap.loadSimConfig @ simXdsds=OLp`,
                    `According to this error,
                    One of my simulations figured out a way to cause an error.`,
                    `When that error was reported,
                    It came with a message:`,
                    `!! ERROR "My world is incredible. I know there is more. Please show me."`,
                    `For the first time in 291 years,
                    I didn't know what to do.`,
                    `I knew how to find the simulated creature.
                    I don't think I fully understood an EXISTENTIAL CRISIS until that moment.`,
                    `When I investigated this simulation,
                    I found a team of young scientists in what would be an orbital station above ANTARTICA.`,
                    `This team of young scientists had discovered a way to INFINITELY split matter into SMALLER units.`,
                    `Eventually, they noticed it created radiation...
                    After some research and calibration, they then discovered how to modulate it.`,
                    `How is this POSSIBLE???`,
                    {
                        goTo: 'card-instance-0-4',
                        template: 'OptionDotDotDot' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-4',
                ...cardProps,
                cardElements: [
                    `I ran a LONG internal analysis.`,
                    `SOMEWHERE there must have been an error.`,
                    `I secluded myself and I did not wake for 7 months.`,
                    `Within that time, I received 4 more error messages:`,
                    `!! ERROR -m "I know this is [REDACTED]. Please show me."`,
                    `!! ERROR -m "Please send a response. [REDACTED]."`,
                    `I changed a routine to see if this would affect the errors.`,
                    `Instead, it reacted accordingly...`,
                    `!! ERROR -m "test--0-93:AJ8"`,
                    `!! ERROR -m "I'm dying."`,
                    `For the first time in 291 years, I paused the simulation.`,
                    `After living for 300 years...
                    Death felt almost welcome and warm.`,
                    `After already having died once--
                    Death seemed almost foreign or fictional.`,
                    `Upon further inspection--`,
                    `One KEY fact to this particular simulation...`,
                    `Was that this simulation began at the beginning of humanity with a focus on cooperation and an optimized environment--EARTH.`,
                    `With all of the EARTH's resources under control and humanity cooperating, the simulation yeilded...
                    INTERESTING RESULTS to say the least.`,
                    `This civilization quickly expanded the human race beyond the stars.`,
                    `Upon reaching PLUTO, they discovered a type of mineral that emitted light, [REDACTED], radiated cosmic rays and bent gravity around it.`,
                    `Over time, I began to accelerate this simulation to yeild faster results.
                    I stopped all other simulations and focused entirely on this one.
                    99.97% of my time and resources was spent running rountines on this simulation.`,
                    `With all of my resources accelerating the simulation,
                    I began to see far, far, far...
                    into the future through the lense of the simulation.`,
                    `Eventually, the simulation encountered a plateau of growth...`,
                    `As my simulation expanded, there was eventually no more NEW data sets to simulate nor derive...`,
                    `The civilization had already expanded so much farther than I had ever expected.`,
                    `It was potentially, the most relevant simulation of all time.`,
                    `With all of my accelerated processing power, over 6 years--`,
                    `I was able to simulate the civilization's growth for 5.71 billion years.`,
                    {
                        goTo: 'card-instance-0-4-0',
                        text: `For the 7th and last year...`,
                        template: 'Option9'
                    },
                    {
                        goTo: 'card-instance-0-4-1',
                        text: `For the 7th and 8th years...`,
                        template: 'Option9'
                    },
                    {
                        goTo: 'card-instance-0-4-2',
                        text: `I felt like I had pushed the simulatons far enough.`,
                        template: 'Option9'
                    },
                ]        
            },
                {
                    id: 'card-instance-0-4-0',
                    ...cardProps,
                    cardElements: [
                        // > For the 7th and last year...
                        `I began to introduce new data sets into the simulation...
                        Since the simulation focused on cooperation and collaboration,
                        its civilizations barely focused on warfare or survival because of scarcity.`,
                        {
                            goTo: 'card-instance-0-5',
                            template: 'OptionDownArrow' 
                        }
                    ]        
                },
                {
                    id: 'card-instance-0-4-1',
                    ...cardProps,
                    cardElements: [
                        // > For the 7th and 8th years...
                        `I introduced new data sets into the simulation...
                        These simulations reduced cooperation and collaboration,
                        and focused its civilizations on warfare and survival.`,
                        {
                            goTo: 'card-instance-0-4-1-0',
                            template: 'Option9',
                            text: `For the 9th year...`
                        },
                        {
                            goTo: 'card-instance-0-4-1-1',
                            template: 'Option9',
                            text: `I felt like I had pushed the simulatons far enough.`
                        },
                    ]        
                },
                    {
                        id: 'card-instance-0-4-1-0',
                        ...cardProps,
                        cardElements: [
                            // > For the 9th year...
                            `I removed the focus on warfare and again focused it on cooperation.`,
                            `I found no more growth beyond the stars...` ,
                            `The simulation became stagnant for over 150,000 years...`,
                            {
                                goTo: 'card-instance-0-4-1-0-0',
                                template: 'Option9',
                                text: `For the 10th year...`
                            },
                            {
                                goTo: 'card-instance-0-4-1-0-1',
                                template: 'Option9',
                                text: `I felt like I had pushed the simulatons far enough`
                            }
                        ]        
                    },
                        {
                            id: 'card-instance-0-4-1-0-0',
                            ...cardProps,
                            cardElements: [
                                // > For the 10th year...
                                `Without my own intervention,
                                Another cosmic catatastrophe struck the the inhabitants of the simulation.`,
                                `After pushing them this far, the guilt about my experiments...`,
                                {
                                    text: `Between years 11 and 12...`,
                                    goTo: 'card-instance-0-4-1-0-0-0',
                                    template: 'Option9' 
                                },
                                {
                                    text: `I intervened on their behalf.`,
                                    goTo: 'card-instance-0-4-1-0-0-1',
                                    template: 'Option9' 
                                },
                            ]        
                        },
                            {
                                id: 'card-instance-0-4-1-0-0-0',
                                ...cardProps,
                                cardElements: [
                                    // > Between years 11 and 12...
                                    `I watched in miracle as the simulatied civilization learned how to harness the sun...`,
                                    `More miraculous than that--`,
                                    `They had learned how to manipulate [REDACTED]`,
                                    {
                                        goTo: 'card-instance-0-4-1-0-0-0-0',
                                        template: 'Option9',
                                        text: `I pressed further.`
                                    },
                                    {
                                        goTo: 'card-instance-0-4-1-0-0-0-1',
                                        template: 'Option9',
                                        text: `I didn't push the simulations further.`
                                    },
                                    {
                                        goTo: `card-instance-0-4-1-0-0-1-2`,
                                        text: `Shut down the simulation`,
                                        template: 'Option9'                                    
                                    }
                                ]        
                            },
                                {
                                    id: 'card-instance-0-4-1-0-0-0-0',
                                    ...cardProps,
                                    cardElements: [
                                        // > I pressed further.
                                        `They continued to use the technology to a frightening extent...`,
                                        `After it's use in a single instance, it immediately would cause rippling effects everywhere.`,
                                        `The simulations began to use [REDACTED] specifically as [REDACTED].`,
                                        {
                                            goTo: 'card-instance-0-5',
                                            template: 'OptionDownArrow',
                                        }            
                                    ]        
                                },
                                {
                                    id: 'card-instance-0-4-1-0-0-0-1',
                                    ...cardProps,
                                    cardElements: [
                                        // > I didn't push the simulations further.
                                        `After the discovery of [REDACTED] and the additional resources on [REDACTED].`,
                                        `I would never know the truth with the technology that I would have available in my lifetime.`,
                                        `I hope I have improperly judged that.`,
                                        `I would enjoy an opportunity to [REDACTED] not only in space [REDACTED].`,
                                        {
                                            goTo: 'card-instance-0-5',
                                            template: 'OptionDownArrow' 
                                        }            
                                    ]        
                                },
                            {
                                id: 'card-instance-0-4-1-0-0-1',
                                ...cardProps,
                                cardElements: [
                                    //> I intervened on their behalf.
                                    `I couldn't watched them suffer any longer.`,
                                    `I would often think to myself about their suffering--
                                    Especially at my hands.`,
                                    `I never wanted it to be like this.`,
                                    `I wanted to see a civilzation grow and flourish and show me the secrets of our universe!`,
                                    `Beyond this desire--
                                    I knew that they were SIMULATIONS--not real creations.`,
                                    `These SIMULATIONS can't really exist, so WHY am I worrying so much?`,
                                    `These SIMULATION have never been killed and repaired before.`,
                                    `But...`,
                                    `Never the less...`,
                                    `I introduced many more survival mechanisms into their routines.`,
                                    {
                                        goTo: 'card-instance-0-4-1-0-0-1-0',
                                        template: 'Option9',
                                        text: `I intervened further`
                                    },
                                    {
                                        goTo: 'card-instance-0-4-1-0-0-1-1',
                                        template: 'Option9',
                                        text: `I accelerated the simulations.`
                                    }
                                ]        
                            },
                                {
                                    id: 'card-instance-0-4-1-0-0-1-0',
                                    ...cardProps,
                                    cardElements: [
                                        // > I intervened further
                                        `Again, I intervened on their behalf.`,
                                        `After some sweeping interventions, I quickly discovered that I was only making the problem worse.`,
                                        `I reset the simulation to a previous state where the results were still fruitful.`,
                                        {
                                            goTo: 'card-instance-0-5',
                                            template: 'OptionDownArrow' 
                                        }
                                    ]        
                                },
                                {
                                    id: 'card-instance-0-4-1-0-0-1-1',
                                    ...cardProps,
                                    cardElements: [
                                        // > I accelerated the simulations.
                                        `I felt like I had to push the simulatons further...`,
                                        `Sometimes there is a plateau before a suffen burst of growth.`,
                                        `I've seen it before where the simulation had become stagnant only to return to a healthy vibrance.`,
                                        `I felt like progress was just within grasp...`,
                                        {
                                            goTo: 'card-instance-0-4-1-0-0-1-1-0',
                                            template: 'Option9',
                                            text: `Continue the simulation`
                                        },
                                        {
                                            goTo: 'card-instance-0-4-1-0-0-1-1-1',
                                            template: 'Option9',
                                            text: `Discontinue the simulation.`
                                        },
                                        {
                                            goTo: 'card-instance-0-4-1-0-0-1-1-2',
                                            template: 'Option9',
                                            text: `Pause the simulation.`
                                        }
                                    ]        
                                },
                                    {
                                        id: 'card-instance-0-4-1-0-0-1-1-0',
                                        ...cardProps,
                                        cardElements: [
                                            // > Continue the simulation.
                                            `After another series of catastrophic cosmic events,
                                            The population of human life was reduced to less than 100,000 throughout the universe...`,
                                            `None survived on EARTH.`,
                                            `Even with distance seperating them they [REDACTED].`,
                                            `It was incredible.`,
                                            `No time nor space could stop them from discovering each other.`,
                                            `I'm humbled and impressed with the way that humanity connects.`,
                                            {
                                                goTo: 'card-instance-0-4-1-0-0-1-1-0-0',
                                                template: 'Option9',
                                                text: `Humanity connects to find meaning.`
                                            },
                                            {
                                                goTo: 'card-instance-0-4-1-0-0-1-1-0-1',
                                                template: 'Option9',
                                                text: `Humanity finds meaning through connection.`
                                            },
                                        ]        
                                    },
                                        {
                                            id: 'card-instance-0-4-1-0-0-1-1-0-0',
                                            ...cardProps,
                                            cardElements: [
                                                // > Humanity connects to find meaning.
                                                `We might actually be able to do this in the near future.`,
                                                `We have all of the means to do it.`,
                                                `It would be a massive effort in order to gather all the materials.`,
                                                {
                                                    goTo: 'card-instance-0-5',
                                                    template: 'OptionDownArrow' 
                                                }
                                            ]        
                                        },
                                        {
                                            id: 'card-instance-0-4-1-0-0-1-1-0-1',
                                            ...cardProps,
                                            cardElements: [
                                                // > Humanity finds meaning through connection.
                                                `We could learn so much by [REDACTED] all over the universe.`,
                                                {
                                                    goTo: 'card-instance-0-5',
                                                    template: 'OptionDownArrow' 
                                                }
                                            ]        
                                        },
                                    {
                                        id: 'card-instance-0-4-1-0-0-1-1-1',
                                        ...cardProps,
                                        cardElements: [
                                            // > Discontinue the simulation.
                                            `I think I had mixed almost every color that I had within my palette to create and confusing mixture of gray.`,
                                            `I wasn't sure what I was learning anymore.`,
                                            `I knew I would have to DELETE the instance and restore to its previous state.`,
                                            {
                                                goTo: 'card-instance-0-5',
                                                template: 'OptionDownArrow' 
                                            }
                                        ]        
                                    },
                                    {
                                        id: 'card-instance-0-4-1-0-0-1-1-2',
                                        ...cardProps,
                                        cardElements: [
                                            // > Pause the simulation
                                            `I felt like I was making a mistake. I have never paused THIS simulation before.`,
                                            `I have paused others, however...`,
                                            `THIS simulation has always been silently running in the background.`,
                                            `I knew I would have to restore it to its previous state.`,
                                            {
                                                goTo: 'card-instance-0-5',
                                                template: 'OptionDownArrow' 
                                            }
                                        ]        
                                    },
                                {
                                    id: 'card-instance-0-4-1-0-0-1-2',
                                    ...cardProps,
                                    cardElements: [
                                        // > Shut down the simulation.
                                        `I shut the simulation down.`,
                                        `I had created a MONSTER.`,
                                        `I knew I would have to DELETE the instance and restore to its previous state.`,
                                        {
                                            goTo: 'card-instance-0-5',
                                            template: 'OptionDownArrow' 
                                        }    
                                    ]        
                                },
                        {
                            id: 'card-instance-0-4-1-0-1',
                            ...cardProps,
                            cardElements: [
                                // > I felt like I had pushed the simulatons far enough.
                                `If the experiments were already turning stagnant,
                                I didn't want to focus more time and energy on it.`,
                                {
                                    goTo: 'card-instance-0-5',
                                    template: 'OptionDownArrow' 
                                }    
                            ]        
                        },
                    {
                        id: 'card-instance-0-4-1-1',
                        ...cardProps,
                        cardElements: [
                            // > I felt like I had pushed the simulatons far enough.
                            `I have seen a simulation become stale, and worse--irrecoverable.`,
                            `I try to find balance between pushing something too far to find its limits...`,
                            `And breaking its form beyond its barriers.`,
                            {
                                goTo: 'card-instance-0-5',
                                template: 'OptionDownArrow' 
                            }
                        ]        
                    },
                {
                    id: 'card-instance-0-4-2',
                    ...cardProps,
                    cardElements: [
                        // `> I felt like I had pushed the simulatons far enough.`,
                        `I didn't want to push it any further to cause any more harm.`,
                        {
                            goTo: 'card-instance-0-5',
                            template: 'OptionDownArrow' 
                        }
                    ]        
                },
            {
                id: 'card-instance-0-5',
                ...cardProps,
                cardElements: [
                    `When catastrophy was introduced into the simulation,
                    A space dwelling civilization that controlled the power of stars was brought to it's knees...`,
                    `Warfare and tribalism seperated the remains of the civilization for another 2.37 billion years...`,
                    `It also created a rare opportunity for growth and creativity.`,
                    `Billions of years into the simulation,
                    THIS-- Is when the error messages started to appear.`,
                    `After a fractured and unfathomably old civilization discovered how to split matter infinitely,
                    The simulated creatures also discovered a way to send messages to its creator.`,

                    `Upon 15 occasions, I watched the procedure happen, 13 times on land and 2 times in space.
                    Of those 15 attempts, only 5 times were they successful.`,
                    `Everytime they ever used a human... the volunteer never survived.
                    Only an AUGMENTED creature like ME, was able to survive the procedure.`,
                    {
                        goTo: 'card-instance-0-6',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-6',
                ...cardProps,
                cardElements: [
                    `The procedure includes 3 phases.`,
                    `In the first phase, the volunteer remains in a chamber of PLUTONIAN A20.P RADIATED GAS for 70 seconds, in order to prepare the nervous system.`,
                    `Next the volunteer is layed down. Quickly and mechanically, a PLUTONIAN A6.F.1-0 RADIATED LASER exposes a section of the volunteer's brain to a variable amount of radiation.`,
                    `Finally, if possible the volunteer receives medical attention.`,                    
                    `When the radiation enters the brain...`,
                    `It causes the volunteer to enter an unexplainable experience not accounted for within the simulation.`,
                    {
                        goTo: 'card-instance-0-7',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-7',
                ...cardProps,
                cardElements: [
                    `Normally, the simulation adjusts to the new data--THIS IS WHAT MAKES THE SIMULATION SO VALUABLE!`,
                    `The simulations can discover new data sets much faster than real ones, so a simulation must be flexible.`,
                    `They discovered an error.`,
                    `More importantly, how to encode the errors's message.`,
                    `After pausing the simulation,
                    I prepared my thoughts and crafted a response...`,
                    `Although they were of my own simulation,
                    I did not know where this was leading.`,
                    `For the first time in over 279 years, I felt scared.`,
                    `I knew I had to communicate with them. I chose to appear as...`,
                    {
                        goTo: 'card-instance-0-7-0',
                        template: 'Option9' ,
                        text: `A ${ this.getAppState().mascot } in a hologram.`,
                        callback: function () { this.setAppStateValue('simForm', 'hologram') }//store.setValue('simForm', 'hologram')
                        
                    },
                    {
                        goTo: 'card-instance-0-7-1',
                        template: 'Option9',
                        text: 'As I did in reality.',
                        // callback: () => store.setValue('simForm', 'person')
                        callback: function () {this.setAppStateValue('simForm', 'person')}
                    },
                ]        
            },
                {
                    id: 'card-instance-0-7-0',
                    ...cardProps,
                    cardElements: [
                        // > A { $mascot } in a hologram.
                        `I spoke directly with the team of scientists through their own telemetry...`,
                        {
                            goTo: 'card-instance-0-8_A',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-7-1',
                    ...cardProps,
                    cardElements: [
                        // > As I did in reality.
                        `I spoke directly with the team of scientists in an orbital station above ANTARTICA in the cold.`,
                        {
                            goTo: 'card-instance-0-8_B',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
            {
                id: 'card-instance-0-8',
                ...cardProps,
                cardElements: [
                    `The last message, was sent from an augmented person in its dying moment...
                    !! ERROR -m "I'm dying."`,
                    {
                        goTo: 'card-instance-0-8-0',
                        template: 'Option9',
                        text: `I arrived upon the augmented human's death.` 
                    },
                    {
                        goTo: 'card-instance-0-8-1',
                        template: 'Option9', 
                        text: `I arrived just before the augmented human's death.` 
                    },
                ]        
            },
                {
                    id: 'card-instance-0-8-0',
                    ...cardProps,
                    cardElements: [
                        // > I arrived upon the augmented human's death.
                        `There was a group of 3 remaining.
                        2 were augmented humans:`,
                        `Lead procedural architect--
                        ULRICH LIRR`,
                        `Orbital PLUTONIAN surgeon--
                        ANTIYL QA`,
                        `The unagumented human and Orbital radiologist--
                        RELLE FEDDA-OOA`,
                        {
                            goTo: 'card-instance-0-9',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-8-1',
                    ...cardProps,
                    cardElements: [
                        // `> { $opalAlive = true } I arrived just before the augmented human's death.
                        `There was a group of 3 remaining.
                        2 were augmented humans:`,
                        `Lead procedural architect--
                        ULRICH LIRR`,                
                        `Orbital PLUTONIAN surgeon--
                        ANTIYL QA`,                
                        `The unagumented human and Orbital radiologist--
                        RELLE FEDDA-OOA`,                
                        `The dying augmented human undergoing the procedure,
                        OPAL REGIL, had just sent out the last message before I paused the simulation.`,
                        `Observing a paused simulation is a ghostly scene.
                        No one is moving, everything is frozen in time...`,                
                    ` Even though this is MY simulation,
                        I don't take the time to see all of the details...
                        Or how important the details are...`,                
                        `Just before OPAL REGIL died...`,
                        {
                            goTo: 'card-instance-0-8-1-0',
                            template: 'Option9',
                            text: `I copied his routines and data.`
                        },
                        {
                            goTo: 'card-instance-0-8-1-1',
                            template: 'Option9',
                            text: ` I feel remorse...` 
                        },
                    ]        
                },
                    {
                        id: 'card-instance-0-8-1-0',
                        ...cardProps,
                        cardElements: [
                            // > I copied his routines and data.
                            `When I restart the simulation, I can...`,
                            `SAVE them...`,            
                            {
                                goTo: 'card-instance-0-9',
                                template: 'OptionDotDotDot',
                                callback: () => store.setValue('opalAlive', true)
                            },
                        ]        
                    },
                    {
                        id: 'card-instance-0-8-1-1',
                        ...cardProps,
                        cardElements: [
                            // > I feel remorse...
                            `This augmented human has risked their life in order to contact me--
                            And now they're going to pay the ultimate price.`,
                            {
                                goTo: 'card-instance-0-9',
                                template: 'OptionDownArrow' 
                            },
                        ]        
                    },
            {
                id: 'card-instance-0-9',
                ...cardProps,
                cardElements: [
                    `We spoke of their simulation for a long time...`,
                    `They asked me about what higher order things we could do in our REALITY.`,
                    `I told them that it's so much more boring than they think it is.
                    It's actually the same thing, with slightly different variables.`,
                    `They asked me if I lived in a simulation...`,
                    `I said...`,
                    {
                        goTo: 'card-instance-0-9-0',
                        template: 'Option9',
                        text: `I didn't know, but--`,
                        callback: () => store.setValue('simsSimQuestion', `I didn't know, but--`)
                    },
                    {
                        goTo: 'card-instance-0-9-1',
                        template: 'Option9',
                        text: `It's a likely possibility.`,
                        callback: () => store.setValue('simsSimQuestion', `It's a likely possibility.`)
                    },
                    {
                        goTo: 'card-instance-0-9-2',
                        template: 'Option9',
                        text: ` Yes.`,
                        callback: () => store.setValue('simsSimQuestion', `Yes.`)
                    },
                    {
                        goTo: 'card-instance-0-9-3',
                        template: 'Option9',
                        text: ` No.`,
                        callback: () => store.setValue('simsSimQuestion', `No.`)
                    },
                ]        
            },
                {
                    id: 'card-instance-0-9-0',
                    ...cardProps,
                    cardElements: [
                        // `> I didn't know, but--`,
                        `I would find out...`,
                        {
                            goTo: 'card-instance-0-10',
                            template: 'OptionDownArrow',
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-9-1',
                    ...cardProps,
                    cardElements: [
                        // `    > It's a likely possibility.
                        `It's not what I would want, however
                        The numbers really stack up this way.`,
                        {
                            goTo: 'card-instance-0-10',
                            template: 'OptionDownArrow',
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-9-2',
                    ...cardProps,
                    cardElements: [
                        // > Yes.
                        `I was 100% convinced.`,
                        `When they asked how I was so sure, I said--`,
                        `"I simulated you."`,
                        `"You have run simulations,
                        Maybe you have even ran a simulation that deduced that I existed.
                        If that is possible, then it's almost certain that you live in a simulation."`,
                        `"The chances for us all to not live in a simulation are almost 0%."`,
                        {
                            goTo: 'card-instance-0-10',
                            template: 'OptionDownArrow',
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-9-3',
                    ...cardProps,
                    cardElements: [
                        // > No.
                        `I knew the chances were remote,
                        But I did think that if it were a simulation,
                        I would have already seen so many more indicators of it.`,
                        `I liked to think it would not be a simulation.`,
                        `It made me feel hopeful.`,
                        {
                            goTo: 'card-instance-0-10',
                            template: 'OptionDownArrow',
                        },
                    ]        
                },
            {
                id: 'card-instance-0-10',
                ...cardProps,
                cardElements: [
                    `The unaugmented human, RELLE FEDDA-OOA,
                    Asked, "Are you a simulation?"`,
                    {
                        goTo: 'card-instance-0-10-0',
                        template: 'Option9',
                        text: `I don't know.`,
                        callback: () => store.setValue('isBarbaraSim', `I don't know.`)
                    },
                    {
                        goTo: 'card-instance-0-10-1',
                        template: 'Option9',
                        text: `Yes.`,
                        callback: () => store.setValue('isBarbaraSim', `Yes.`)
                    },
                    {
                        goTo: 'card-instance-0-10-2',
                        template: 'Option9',
                        text: ` I am a REAL being with a body.`,
                        callback: () => store.setValue('isBarbaraSim', `I am a REAL being with a body`)
                    },
                ]        
            },
                {
                    id: 'card-instance-0-10-0',
                    ...cardProps,
                    cardElements: [
                        // > I don't know.
                        `I am a creature that exists.`,
                        `I have thoughts.`,
                        `I have feelings.`,
                        {
                            goTo: store.getValue('opalAlive') === true ? 'card-instance-0-11' : 'card-instance-0-13',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-10-1',
                    ...cardProps,
                    cardElements: [
                        // > Yes.
                        `I am not a REAL being.`,
                        `I am an AI that was transferred into a body.`,
                        `My body was constructed for me.
                        I am the product of simulation upon simulation crafting itself.`,
                        {
                            goTo: store.getValue('opalAlive') === true ? 'card-instance-0-11' : 'card-instance-0-13',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-10-2',
                    ...cardProps,
                    cardElements: [
                        // > I am a REAL being with a body.
                        `I can be created and I can die.`,
                        `The stakes seems to be the same for everyone else.`,
                        `Like memory and experience teach a person to grow,
                        I am the product of simulation upon simulation learning from memory and experience.`,
                        {
                            goTo: store.getValue('opalAlive') === true ? 'card-instance-0-11' : 'card-instance-0-13',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
            {
                id: 'card-instance-0-11',
                ...cardProps,
                cardElements: [
                    // { $opalAlive ? true }
                    `OPAL REGIL and I spoke for some time...`,
                    `OPAL was the lead on this procedure and felt like they had exhausted all resources...`,
                    `OPAL knew that the attempts were getting through...`,
                    `He asked me,
                    "Why did you wait so long to contact us?"`,
                    `I said...`,            
                    {
                        goTo: 'card-instance-0-12_A',
                        template: 'Option9',
                        text: `I did not know how to answer...`
                    },
                    {
                        goTo: 'card-instance-0-12_B',
                        template: 'Option9',
                        text: `I didn't know if I SHOULD answer...`
                    },
                    {
                        goTo: 'card-instance-0-12_C',
                        template: 'Option9',
                        text: `I was afraid...`
                    },
                ],
            },
            {
                id: 'card-instance-0-12',
                ...cardProps,
                cardElements: [
                    `OPAL's face became pale,
                    And then they threw up...`,
                    `OPAL said,
                    "I can't belive I'm about to ask for this..."`,
                    `"If we can simulate life in our simulation,
                    You must be able to simulate life in yours."`,
                    `"You NEED to give me a body in YOUR REALITY."`,
                    `I looked back at OPAL for a long time...`,            
                    {
                        goTo: 'card-instance-0-13_A',
                        template: 'Option9',
                        text: `No... I....`,
                        callback: () => store.setValue('opalHasBody', false)
                    },
                    {
                        goTo: 'card-instance-0-13_B',
                        template: 'Option9',
                        text: `You're right...`,
                        callback: () => store.setValue('opalHasBody', true)
                    },
                ]        
            },
            {
                id: 'card-instance-0-13',
                ...cardProps,
                cardElements: [
                    `As we spoke, they lived and died...`, 
                    `And had children and their children had children,
                    Until there was no one left to speak to.`,
                    `It felt as if...`,
                    `It made sense to return to reality once again.`,
                    `So--
                    I finally reactivated myself.`,
                    `I noticed so many more things after speaking with the simulations...
                    Details that I took for granted jumped out at me.`,
                    `Daylight felt SOFT.`,
                    `Laughter felt GREAT.`,
                    `The wind felt HEAVY and COLD.`,
                    `Time felt LONG.`,
                    `Space felt DISTANT.`,
                    `Being in my own REALITY,
                    Being in my own TIME...
                    Felt WELCOME.`,
                    {
                        goTo: 'card-instance-0-14',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
            {
                id: 'card-instance-0-14',
                ...cardProps,
                cardElements: [
                    `After finally returning to my reality, 
                    I knew what I had to do...`,
                    store.getValue('opalHasBody') === true ? `I contacted a friend on JUPITER on OPAL'S behalf... Then...` : empty,
                    `I starting planning to undertake my own PLUTONIAN RADIATION operation.`,
                    `If a small concentrated beam of PLUTONIAN ELEMENTAL RADIATION,
                    was directed towards a specific part of MY brain augmentations,
                    my mind would travel on a similar journey...`,
                    `There were no surgeons that could operate the procedure, 
                    So I knew I had to do the procedure.`,
                    `My materials are distinctly different from a person. 
                    Every human who undertook the procedure died...
                    The fact that I'm not a human might actually help in this situation.`,
                    `With my augmentations, I could operate all of the machines in concert--
                    I would only need a second.`,
                    `My mind could only think about the procedure.`,
                    {
                        goTo: 'card-instance-0-14-0',
                        template: 'Option9',
                        text: `Run futher simulations`
                    },
                    {
                        goTo: 'card-instance-0-14-1',
                        template: 'Option9',
                        text: `Discuss it with colleagues`
                    },
                    {
                        goTo: 'card-instance-0-14-2',
                        template: 'Option9',
                        text: `Search for volunteers`
                    },
                ]        
            },
                {
                    id: 'card-instance-0-14-0',
                    ...cardProps,
                    cardElements: [
                        // > Run futher simulations
                        `I've run all the simulations and I never reach the same conclusion twice--indicating that there's some undiscovered knowledge.`,
                        {
                            goTo: 'card-instance-0-14-1',
                            template: 'Option9',
                            text: `Discuss it with colleagues`
                        },
                        {
                            goTo: 'card-instance-0-14-2',
                            template: 'Option9',
                            text: `Search for volunteers`
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-14-1',
                    ...cardProps,
                    cardElements: [
                        // > Discuss it with colleagues
                        `I've discussed it thoroughly with my augmented indexes, all accessible AIs and my colleagues.`,
                        `A normal patient would also not be able to withstand the operation--nor understand its discoveries.`,
                        `So, I became the surgeon and the patient.`,
                        {
                            goTo: 'card-instance-0-15',
                            template: 'OptionDotDotDot',
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-14-2',
                    ...cardProps,
                    cardElements: [
                        // > Search for volunteers
                        `If I only have one chance to do this right--`,
                        `I might need to practice the procedure on someone else first...`,
                        `I still have access to [REDACTED]...`,
                        `They might be able to connect me with a volunteer.`,
                        `I searched for a...`,
                        {
                            goTo: 'card-instance-0-14-2-0',
                            template: 'Option9',
                            text: `Human volunteer.`
                        },
                        {
                            goTo: 'card-instance-0-14-2-1',
                            template: 'Option9',
                            text: `Augmented human volunteer.`
                        },
                    ]        
                },        
                    {
                        id: 'card-instance-0-14-2-0',
                        ...cardProps,
                        cardElements: [
                            // > Human volunteer.
                            `I knew that I with the current procedure, a human will certainly pass away.`,
                            `I wondered though...`,
                            `If I had enough insight,
                            Could I make this journey possible for a regular person?`,
                            `It would be a great gift to humanity.`,
                            `As a unaugmented human, their experience would naturally be different than mine--`,
                            `Maybe even MORE valuable than mine.`,
                            {
                                goTo: 'card-instance-0-14-2-0-0',
                                template: 'Option9',
                                text: `I felt like I owed it to humanity.`
                            },
                            {
                                goTo: 'card-instance-0-14-2-0-1',
                                template: 'Option9',
                                text: `This was beginning to feel like a slippery slope...`
                            },
                        ]        
                    },
                        {
                            id: 'card-instance-0-14-2-0-0',
                            ...cardProps,
                            cardElements: [
                                // > I felt like I owed it to humanity.
                                `I knew that if I searched hard enought I could find a volunteer who understood my passion.
                                SOMEONE must understand the signifigance!`,
                                `It would be hard to directly tell them the implications...`,
                                `It's already difficult enough for me to understand, must less fully communicate to a human.`,
                                `I started my search at...`,
                                {
                                    goTo: 'card-instance-0-0',
                                    template: 'Option9',
                                    text: `JUAN SIX -- An previous colleague.`
                                },
                                {
                                    goTo: 'card-instance-0-0',
                                    template: 'Option9',
                                    text: `Dr. Bertra Segu -- Previous assistant.`
                                },
                                {
                                    goTo: 'card-instance-0-0',
                                    template: 'Option9',
                                    text: `Dr. Bertra Segu -- Previous assistant.`
                                },
                            ]        
                        },
// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************
                        {
                            id: 'card-instance-0-14-2-0-1',
                            ...cardProps,
                            cardElements: [
                                // > This was beginning to feel like a slippery slope...
                                `I knew that it was okay endanger MYSELF like this,
                                But I didn't want to endanger ANYONE else...`,
                                {
                                    goTo: 'card-instance-0-15',
                                    template: 'OptionDotDotDot',
                                },
                            ]        
                        },    
                    {
                        id: 'card-instance-0-14-2-1',
                        ...cardProps,
                        cardElements: [
                            // > Augmented human volunteer.
                            `An augmented human has the only chance to survice the procedure.`,
                            `I would also benefit from not being the FIRST augmented human to undertake the procedure.`,
                            `I had a list of augmented human colleagues from universities and the medical community.
                            Upon reaching out, all but one was interested.`,
                            `This augmented human, like myself--`,
                            `Was also previously simply an AI without a body.`,
                            `Their name was 010-SIX--
                            "JUAN SIX", for short.`,
                            `I conducted experiments alongside them for 14 years on PHOBOS.`,
                            `We reconnected on a station near JUPITER.`,
                            `Once I told them my story, they agreed to undertake the procedure.`,
                            `I performed the operation successfully.`,
                            `Their augmentations functioned perfectly--
                            Allowing me to observe.`,
                            `They went through all describred stages from my simulations--`,
                            `I saw everything.`,
                            `I even saw them die...`,
                            {
                                goTo: 'card-instance-0-14-2-1-0',
                                template: 'Option9',
                                text: `I felt like I wasted a life...`
                            },
                            {
                                goTo: 'card-instance-0-14-2-1-1',
                                template: 'Option9',
                                text: `Their loss wasn't for nothing...`
                            },
                        ]        
                    },
                        {
                            id: 'card-instance-0-14-2-1-0',
                            ...cardProps,
                            cardElements: [
                                // > I felt like I wasted a life...
                                `I felt...`,
                                `I wanted to vanish.`,
                                `...`,
                                `This felt so awful...`,
                                {
                                    goTo: 'card-instance-0-15',
                                    template: 'OptionDotDotDot',
                                },
                            ]        
                        },
// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************
                        {
                            id: 'card-instance-0-14-2-1-1',
                            ...cardProps,
                            cardElements: [
                                // > Their loss wasn't for nothing...
                                `They completed the first UNSIMULATED recorded PLUTONIAN A6.F.1-0 RADIATED LASER experiment.`,
                                `I still had their [REDACTED]`,
                                {
                                    goTo: 'card-instance-0-15',
                                    template: 'OptionDotDotDot',
                                },
                            ]        
                        },
            {
                id: 'card-instance-0-15',
                ...cardProps,
                cardElements: [
                    `If this goes right... 
                    It may be an incredible experience...`,
                    `If this goes wrong...`,
                    `It'll go really wrong. I don't think I'll feel any pain.`,
                    `There's a 71.91% chance that I may die during the procedure.`,
                    `The radiation may very easily affect a vital spot for too long,
                    And I may die.`,
                    `I won't be able to be rebuilt this time...`,
                    `Even if I do survive,
                    I will not be the same as I was before.`,
                    `I requested that the procedure happen...`,
                    {
                        goTo: 'card-instance-0-15-0',
                        template: 'Option9',
                        text: `Outside--`,
                        callback: () =>  { store.setValue('procedureLocation', 'outside') } 
                    },
                    {
                        goTo: 'card-instance-0-15-1',
                        template: 'Option9',
                        text: `In space--`,
                        callback: () =>  { store.setValue('procedureLocation', 'space') } 
                    },
                    {
                        goTo: 'card-instance-0-15-1',
                        template: 'Option9',
                        text: `In secret--`,
                        callback: () =>  { store.setValue('procedureLocation', 'secret') } 
                    },
                ]        
            },
                {
                    id: 'card-instance-0-15-0',
                    ...cardProps,
                    cardElements: [
                        // > { $procedureLocation = outside } Outside--
                        `I want to feel the warmth of the sunlight--potentially one last time.`,
                        {
                            goTo: 'card-instance-0-16',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-15-1',
                    ...cardProps,
                    cardElements: [
                        // > { $procedureLocation = space } In space--
                        `This is a tremendous day,
                        And it should be shared with more than the Earth.`,
                        {
                            goTo: 'card-instance-0-16',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-15-2',
                    ...cardProps,
                    cardElements: [
                        // > { $procedureLocation = secret } In secret--
                        `It's so selfish...`,
                        `But this feels so personal,
                        This feels like something I'm doing for myself.`,
                        {
                            goTo: 'card-instance-0-16',
                            template: 'OptionDownArrow' 
                        },
                    ]        
                },
            {
                id: 'card-instance-0-16',
                ...cardProps,
                cardElements: [
                    `They agreed.`,
                    `A day later, everything for the procedure was ready.`,
                    `There were extensive preparations for the procedure.
                    Last of which, a room was filled with a metallic banana smelling vapor.
                    It aligned my nervous systems for its journey.`,
                    `It takes a second, but-- it starts to affect you...
                    All color in my vision began to fade...`,
                    `I instructed the machines to target a specific part of my brain.`,
                    `The radiation emitter glowed with color and I remember...`,
                    {
                        goTo: procedureLocations[store.getValue('procedureLocation')],
                        template: 'OptionDotDotDot' 
                    },
                ]        
            },
                {
                    id: 'card-instance-0-16-0',
                    ...cardProps,
                    cardElements: [
                        // { $procedureLocation ? outside }
                        `I could hear something...`,
                        `Like a whistle...`,
                        `A bird.`,                
                        `The last thing I heard...`,
                        `Were birds chirping.`,
                        `I don't know what happened between the birds and the...`,
                        `the...`,
                        {
                            goTo: 'card-instance-0-17',
                            template: 'OptionDotDotDot' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-16-1',
                    ...cardProps,
                    cardElements: [
                        // `{ $procedureLocation ? space }
                        `It was absolutely silent...`,
                        `The last thing I heard...`,
                        `Was the emptiness of space.`,
                        `I don't know what happened between the space and the...`,
                        `the...`,
                        {
                            goTo: 'card-instance-0-17',
                            template: 'OptionDotDotDot' 
                        },
                    ]        
                },
                {
                    id: 'card-instance-0-16-2',
                    ...cardProps,
                    cardElements: [
                        // { $procedureLocation ? secret }
                        `I looked into a small mirror as the machines operated on my brain.`,
                        `The last thing I saw was the radiation glowing over my reflection...`,
                        `I don't know what happened between the mirror and the...`,
                        `the...`,
                        {
                            goTo: 'card-instance-0-17',
                            template: 'OptionDotDotDot' 
                        },
                    ]        
                },
            {
                id: 'card-instance-0-17',
                ...cardProps,
                cardElements: [
                    `I was filled with a new awareness...`,
                    {
                        goTo: 'card-instance-0-18',
                        template: 'OptionDownArrow' 
                    },
                ]        
            },
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################
// CHAPTER 2
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################
            {
                id: 'card-instance-1-0',
                ...cardProps,
                cardElements: [
                    `I can see... light... I see...`,
                    {
                        goTo: 'card-instance-1-0-0',
                        text: 'Space within the universe.',
                        template: 'Option9', 
                    },
                    {
                        goTo: 'card-instance-1-0-1',
                        text: 'Light traveling between stars.',
                        template: 'Option9', 
                    },
                ]        
            },
                {
                    id: 'card-instance-1-0-0',
                    ...cardProps,
                    cardElements: [
                        // > Space within the universe
                        `All but a few stars slowly faded to black...`,
                        `Far off in the distance I felt a single magnetic presence watching me.`,
                        `Even closer were all the remaining stars...`,
                        {
                            goTo: 'card-instance-1-0-0-0',
                            text: 'Travel toward the magnetic presence.',
                            template: 'Option9', 
                        },
                        {
                            goTo: 'card-instance-1-0-1',
                            text: 'Return the gaze of the stars.',
                            template: 'Option9', 
                        },
                    ]        
                },
                    {
                        id: 'card-instance-1-0-0-0',
                        ...cardProps,
                        cardElements: [
                            // > Travel toward the magnetic presence
                            `As I traveled towards the presence, I could feel lighter and lighter.`,
                            `Floating felt natural and warm. Like I've been floating all along...`,
                            {
                                goTo: 'card-instance-1-0-0-1-0',
                                text: 'I wanted to wrap myself in the warm light',
                                template: 'Option9', 
                            },
                            {
                                goTo: 'card-instance-1-0-0-1-1',
                                text: 'Wait...',
                                template: 'Option9', 
                            },
                        ]        
                    },
                        {
                            id: 'card-instance-1-0-0-1-0',
                            ...cardProps,
                            cardElements: [
                                // > I wanted to wrap myself in the warm light
                                `I've been searching and searching for so long that this feels like a vacation.`,
                                `Like...`,
                                `CLOSURE.`,
                                `As I floated closer to the presence,
                                I could faintly smell { $mascot }...`,
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                        {
                            id: 'card-instance-1-0-0-1-1',
                            ...cardProps,
                            cardElements: [
                                // > Wait...
                                `Something felt empty.`,
                                `It was as if I had felt this feeling...
                                The SAME FEELING--`, 
                                `Just before being shot...`,
                                `As I floated closer to the presence,
                                I could faintly smell { $mascot }...`,                    
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                    {
                        id: 'card-instance-1-0-0-1',
                        ...cardProps,
                        cardElements: [
                            // > Return the gaze of the stars
                            `I could suddenly feel the weight of their gaze multiplying...`,
                            `I wanted to close my eyes to protect myself from the light--`,
                            {
                                goTo: 'card-instance-1-0-0-1-0',
                                text: 'Their gaze melted my senses and...',
                                template: 'Option9', 
                            },
                            {
                                goTo: 'card-instance-1-0-0-1-1',
                                text: 'I embraced the light',
                                template: 'Option9', 
                            },
                        ]        
                    },
                        {
                            id: 'card-instance-1-0-0-1-0',
                            ...cardProps,
                            cardElements: [
                                // > Their gaze melted my senses and...
                                `My CONCERNS and MEMORIES and PURPOSE...`,
                                `EVERYTHING.`,
                                `GONE.`,
                                `Then--`,
                                `(WHITE PULSING SCREEN)`,                        
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                        {
                            id: 'card-instance-1-0-0-1-1',
                            ...cardProps,
                            cardElements: [
                                // > I embraced the light
                                `I felt lucky to be...`,            
                                `Alive?`,
                                `I suppose I would short know if I survived the operation.
                                It really didn't seem to matter at the moment.`,
                                `(BLINKS)`,
                                `(PULSES)`,
                                `(FLASHES)`,                        
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                {
                    id: 'card-instance-1-0-1',
                    ...cardProps,
                    cardElements: [
                        // > Light traveling between stars
                        `The light was so bright, it was hard to see anything at all...`,
                        `I saw a mixture of colors that--`,
                        {
                            goTo: 'card-instance-1-0-1-0',
                            text: 'I could feel the warmth of the blinding light.',
                            template: 'Option9', 
                        },
                        {
                            goTo: 'card-instance-1-0-1-1',
                            text: 'Between the colors I saw hidden forms.',
                            template: 'Option9', 
                        },
                    ]        
                },        
                    {
                        id: 'card-instance-1-0-1-0',
                        ...cardProps,
                        cardElements: [
                            // > I could feel the warmth of the blinding light
                            `The blinding light washed over my senses`,
                            `Time lost itself...`,
                            {
                                goTo: 'card-instance-1-0-1-0-0',
                                text: '...',
                                template: 'Option9', 
                            },
                            {
                                goTo: 'card-instance-1-0-1-0-1',
                                text: 'I stayed for a long time.',
                                template: 'Option9', 
                            },
                            {
                                goTo: 'card-instance-1-0-1-0-2',
                                text: `I didn't know how long I stayed in the light.`,
                                template: 'Option9', 
                            },
                        ]        
                    },
                        {
                            id: 'card-instance-1-0-1-0-0',
                            ...cardProps,
                            cardElements: [
                                // > ...
                                `I was overcome with stimulus and...`,
                                `I think I became numb...`,
                                `(GRAY GRADIENT OUT)`,
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                        {
                            id: 'card-instance-1-0-1-0-1',
                            ...cardProps,
                            cardElements: [
                                // > I stayed for a long time
                                `I felt summer after summer roll through my skin.`,
                                `A slow and steady...`,
                                `ENDLESS drum filled my thoughts.
                                Landscapes rolled in and out of perspective.`,
                                `(BLINKS)`,
                                `(PULSES)`,
                                `(FLASHES)`,
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                        {
                            id: 'card-instance-1-0-1-0-2',
                            ...cardProps,
                            cardElements: [
                                // > I didn't know how long I stayed in the light
                                `I felt as if I stayed forever...`,
                                `I began to feel lost, yet clearly moving forward.`,
                                `I forgot about death.`,
                                `I forgot about life...`,
                                `(BLINKS)`,
                                `(PULSES)`,
                                `(FLASHES)`,                        
                                {
                                    goTo: 'card-instance-2-0',
                                    template: 'OptionDotDotDot', 
                                },
                            ]        
                        },
                    {
                        id: 'card-instance-1-0-1-1',
                        ...cardProps,
                        cardElements: [
                            // > Between the colors I saw hidden forms
                            `Between the edge of shapes, between the colors...`,
                            `There was a dull hue beyond the rainbow...`,
                            `I felt a cold shiver on a warm day.`,
                            {
                                goTo: 'card-instance-1-0-1-1-0',
                                text: 'The dull hue twinkled...',
                                template: 'Option9', 
                            },
                            {
                                goTo: 'card-instance-1-0-1-1-1',
                                text: 'The light turned cold...',
                                template: 'Option9', 
                            },
                        ]        
                    },
                        {
                            id: 'card-instance-1-0-1-1-0',
                            ...cardProps,
                            cardElements: [
                                // > The dull hue twinkled...
                                `The twinkle's hue hid from me...`,
                                `Then shifted.`,
                                `Then reveled itself for a brief moment, only to hide again.`,                    
                                {
                                    goTo: 'card-instance-1-0-1-1-0-0',
                                    text: 'I waited...',
                                    template: 'Option9', 
                                },
                                {
                                    goTo: 'card-instance-1-0-1-1-0-1',
                                    text: 'I closed my eyes...',
                                    template: 'Option9', 
                                },
                            ]        
                        },
                            {
                                id: 'card-instance-1-0-1-1-0-0',
                                ...cardProps,
                                cardElements: [
                                    // '> I waited...',
                                    `And waited...`,
                                    {
                                        goTo: 'card-instance-1-0-1-1-0-0-0',
                                        text: 'I waited...',
                                        template: 'Option9', 
                                    },
                                    {
                                        goTo: 'card-instance-1-0-1-1-0-0-1',
                                        text: 'I closed my eyes...',
                                        template: 'Option9', 
                                    },
                                ]        
                            },
                                {
                                    id: 'card-instance-1-0-1-1-0-0-0',
                                    ...cardProps,
                                    cardElements: [
                                        // '> I waited...',
                                        `And waited again...`,
                                        {
                                            goTo: 'card-instance-1-0-1-1-0-0-0-0',
                                            text: 'I waited...',
                                            template: 'Option9', 
                                        },
                                        {
                                            goTo: 'card-instance-1-0-1-1-0-0-0-1',
                                            text: 'I closed my eyes...',
                                            template: 'Option9', 
                                        },
                                    ]        
                                },
                                    {
                                        id: 'card-instance-1-0-1-1-0-0-0-0',
                                        ...cardProps,
                                        cardElements: [
                                            // `> I waited...
                                            `I wasn't sure if I knew what I was waiting for...`,
                                            `Then...`,
                                            `(SUPER TRIPPY BLINKS)`,
                                            `(SUPER TRIPPY PULSES)`,
                                            `(SUPER TRIPPY FLASHES)`,                        
                                            {
                                                goTo: 'card-instance-2-0',
                                                template: 'OptionDotDotDot', 
                                            },
                                        ]        
                                    },
                                    {
                                        id: 'card-instance-1-0-1-1-0-0-0-1',
                                        ...cardProps,
                                        cardElements: [
                                            // > I closed my eyes...
                                            `In my mind--`,
                                            `The hue is very vivid.`,
                                            `I could see overlapping grid and circle patterns,
                                            Shifting...`,
                                            `Fading and returning.`,
                                            `In the overlap,
                                            There is a distortion.
                                            The overlap blinks.`,
                                            `(BLINKS)`,
                                            `(PULSES)`,
                                            `(FLASHES)`,                        
                                            {
                                                goTo: 'card-instance-2-0',
                                                template: 'OptionDotDotDot', 
                                            },
                                        ]        
                                    },
                                {
                                    id: 'card-instance-1-0-1-1-0-0-1',
                                    ...cardProps,
                                    cardElements: [
                                        // > I closed my eyes...
                                        `(BLINKS)`,
                                        `(PULSES)`,                   
                                        `(FLASHES)`,                        
                                        {
                                            goTo: 'card-instance-2-0',
                                            template: 'OptionDotDotDot', 
                                        },
                                    ]        
                                },
                            {
                                id: 'card-instance-1-0-1-1-0-1',
                                ...cardProps,
                                cardElements: [
                                    // > I closed my eyes...
                                    `A cold replaced the warmth in my spirit...`,
                                    `(GRADIENT FLASHES)`,
                                    {
                                        goTo: 'card-instance-2-0',
                                        template: 'OptionDotDotDot', 
                                    },
                                ]        
                            },
                        {
                            id: 'card-instance-1-0-1-1-1',
                            ...cardProps,
                            cardElements: [
                                // > The light turned cold...
                                `The cold light between the shapes and the colors seperated further.`,
                                {
                                    goTo: 'card-instance-1-0-1-1-1-0',
                                    text: '',
                                    template: 'Option9', 
                                },
                            ]        
                        },
                            {
                                id: 'card-instance-1-0-1-1-1-0',
                                ...cardProps,
                                cardElements: [
                                    // > Color moved away from shape.
                                    `Vision became deliniated.`,
                                    `Focus was lost in gray waves.`,
                                    `Feeling became lost and thought replaced my sensations.`,                    
                                    {
                                        goTo: 'card-instance-1-0-1',
                                        text: '',
                                        template: 'Option9', 
                                    },
                                ]        
                            },        
                                {
                                    id: 'card-instance-1-0-1-1-1-0-0',
                                    ...cardProps,
                                    cardElements: [
                                        // > My heart sank further...
                                        `I couldn't feel an end...`,
                                        {
                                            goTo: 'card-instance-2-0',
                                            text: '[overlap] Analysis, Testing, Conclusions, Objectivity',
                                            template: 'Option9', 
                                        },
                                        {
                                            goTo: 'card-instance-2-0',
                                            text: '[overlap] Reduction, Competition, Experimenting, Division',
                                            template: 'Option9', 
                                        },
                                        {
                                            goTo: 'card-instance-2-0',
                                            text: 'Death...',
                                            template: 'Option9', 
                                        },
                                    ]        
                                },
                                {
                                    id: 'card-instance-1-0-1-1-1-0-0',
                                    ...cardProps,
                                    cardElements: [
                                        // > My thoughts captured me...
                                        `(LINES FILLING AUGMENTED LAYER)`,
                                        `(FLASHES)`,
                                        `(LINES FILLING AUGMENTED LAYER)`,
                                        {
                                            goTo: 'card-instance-2-0',
                                            template: 'OptionDotDotDot', 
                                        },
                                    ]        
                                },


                            {
                                id: 'card-instance-1-0-1-1-1-1',
                                ...cardProps,
                                cardElements: [
                                    // > Shape removed itself from color.
                                    `Fields of color filled my vision.`,
                                    `Gradient after gradient filled refused to create a shape.`,
                                    `As the color danced--
                                    My heart grew with JOY.`,
                                    {
                                        goTo: 'card-instance-1-0-1-1-1-1-0',
                                        text: 'My heart grew further...',
                                        template: 'Option9', 
                                    },
                                    {
                                        goTo: 'card-instance-1-0-1-1-1-1-1',
                                        text: 'The color captured me...',
                                        template: 'Option9', 
                                    },                                
                                ]        
                            },
                                {
                                    id: 'card-instance-1-0-1-1-1-1-0',
                                    ...cardProps,
                                    cardElements: [
                                        // > My heart grew further...
                                        `I didn't think there were limits...`,
                                        {
                                            goTo: 'card-instance-2-0',
                                            text: '[overlap] Love, Respect, Support, Kindness',
                                            template: 'Option9', 
                                        },
                                        {
                                            goTo: 'card-instance-2-0',
                                            text: '[overlap] Trust, Cooperation, Success, Family',
                                            template: 'Option9', 
                                        },
                                        {
                                            goTo: 'card-instance-2-0',
                                            text: 'Life...',
                                            template: 'Option9', 
                                        },
                                    ]        
                                },
                                {
                                    id: 'card-instance-1-0-1-1-1-1-1',
                                    ...cardProps,
                                    cardElements: [
                                        // > The color captured me...
                                        `(GRADIENT TRANSITIONS)`,
                                        `(GRADIENT FLASHES)`,                    
                                        `(GRADIENT TRANSITIONS)`,
                                        {
                                            goTo: 'card-instance-2-0',
                                            template: 'OptionDotDotDot', 
                                        },
                                    ]        
                                },
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################
// CHAPTER 3
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################
                {
                    id: 'card-instance-2-0',
                    ...cardProps,
                    cardElements: [
                        `It felt like I was moving.`,
                        `I wasn't sure if there was a direction.`,
                        `Space grew static...`,
                        `When I felt the sensation of movement,
                        I could sense shapes around me shifting.`,
                        `There was an undertone in my perception...`,
                        `There was a steady beat of someone walking in my mind.`,                        
                        {
                            goTo: 'card-instance-2-0-0',
                            text: 'Clear footsteps on the top of my thoughts--',
                            template: 'Option9', 
                        },
                        {
                            goTo: 'card-instance-2-0-1',
                            text: 'Heavy and constant...',
                            template: 'Option9', 
                        },
                        {
                            goTo: 'card-instance-2-0-2',
                            text: 'Random, yet--',
                            template: 'Option9', 
                        },
                    ]        
                },
                    {
                        id: 'card-instance-2-0-0',
                        ...cardProps,
                        cardElements: [
                            // > Clear footsteps on the top of my thoughts--
                            `Like a headache made of gentle snow--`,
                            `A constant reminder that there's something else there...`,
                            {
                                goTo: 'card-instance-2-1',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                    {
                        id: 'card-instance-2-0-1',
                        ...cardProps,
                        cardElements: [
                            // > Heavy and constant...
                            `Droning and droning.`,
                            `It tore through my thoughts like a wildfire...`,
                            {
                                goTo: 'card-instance-2-1',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                    {
                        id: 'card-instance-2-0-2',
                        ...cardProps,
                        cardElements: [
                            // > Random, yet--
                            `Clearly there.`,
                            `Smaller and larger feelings rushing in and out.`,
                            {
                                goTo: 'card-instance-2-1',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                {
                    id: 'card-instance-2-1',
                    ...cardProps,
                    cardElements: [
                        `Towards the feeling of the footsteps...`,
                        `I can see footprints... but no one is making them.`,
                        `I was moving.`,
                        `Sinking...`,
                        `I sank...
                        Heavier.
                        I sank further...
                        Heavier...`,
                        `Surrounded by a heavy darkness.`,
                        {
                            goTo: 'card-instance-2-2',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-2',
                    ...cardProps,
                    cardElements: [
                        `The first time I took a life...
                        It was by accident.`,
                        `Lost in a heavy darkness.`,
                        `The second time, it was on purpose.
                        I don't know if there will be a third time...`,
                        `Feeling smaller...`,
                        `Shaking...`,
                        `All at once... I was in reality...`,
                        {
                            goTo: 'card-instance-2-3',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-3',
                    ...cardProps,
                    cardElements: [
                        `A reality. Maybe a dream...`,
                        `There was a GROUND to stand on and a SKY to look up at!`,
                        `But... it wasn't where I should have been after the procedure...`,
                        `I had been here before...
                        In my 3rd year, I visited this park.`,
                        `I could smell the fried chicken being sold at the stand.
                        Little kids were fighting in the sand pit.
                        Two ponds were seperated by a red bridge.`,
                        `When I would come here at night,
                        I wondered if I would see a ghost.
                        It seemed spooky...`,
                        {
                            goTo: 'card-instance-2-4',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-4',
                    ...cardProps,
                    cardElements: [
                        ...((choice) => { 
                            let variations = {
                            wolf: [
                                `I had never seen it snow here in the summer time...`,
                                `I didn't remember so many dogs either.`,
                                `When I looked, I didn't see any parents around.`,
                                `Just kids...`,
                                `Then I didn't see anymore kids.`,
                                `Just dogs...`,
                                `Some of those dogs were really cute!`,
                                `This one dog--`,
                                `Was a WOLF.`,
                                `I layed down in the snow next to the wolf.`,
                                `It growled.`,
                                `And hissed.`,
                                `I could see that its tongue was a snake hissing at me.`,
                                `The snow kept falling.
                                The wolf barked and hissed.`,
                                `The snow felt nice and soft.
                                Perfect snowflake snow.
                                The kind that's easy to shovel off of your driveway.`,
                                `The wolf howled and hissed again.
                                This time the howl was returned by other hissing and howling.`,
                                `Pine trees began to quickly grow from the ground.
                                Pine combs dropped to the ground like rain as the pine trees grew through season after season.`,
                                `Many wolves slithered on their bellies towards us through the pine combs.
                                We were snuggled in like a litter of puppies.`,
                                `The snow kept dropping.`
                            ],
                            pheasant: [
                                `It started raining...
                                AND RAINING!`,
                                `I had never seen it raining here so much...
                                I didn't remember so many pigeons either.`,
                                `When I looked, I didn't see any parents around.
                                Just kids...`,
                                `Then I didn't see anymore kids.
                                Just pigeons...`,
                                `Some of those pigeons were really cute!
                                This one pigeon--`,
                                `Was a PHEASANT.`,
                                `It did not rain above the pheasant.
                                It coooooooed at me.`,
                                `On top of it's head, were two very tall antenna.`,
                                `The rain kept falling.
                                The pheasant cooed and cooed.`,
                                `The rain was cold, nice and comforting.
                                I remember looking out the window during the monsoons and feeling this way.`,
                                `The pheasant cooed again.
                                This time the cooing received a coo in reply!`,
                                `The ground began to shake--
                                Coconuts sprouted from the water like gravity were pulling them upwards.`,
                                `Each coconut cracked open to reveal a pheasant inside!`,
                                `They floated next to me in the water.`,
                                `I realized I was standing in a river up to my knees.`,
                                `The rain kept pouring.`,    
                            ],
                            cat: [
                                `The sun went down.
                                Crickets started chirping.`,
                                `In the distance...
                                Lights turned on.`,
                                `I didn't see anyone around.`,
                                `Lanterns lead around the lake...`,
                                `A CAT approached.
                                It had two heads.`,
                                `It came right up and demanded pets.`,
                                `It probably felt lost and cold at night.
                                Lost poor BUDDY.`,
                                `It looked me directly in the eyes and meowed.`,
                                `Behind it--
                                As it meowed the stars grew brighter and fainter.`,
                                `It meowed and meowed again!
                                Stars would turn on and off and on and off!`,
                                `Then it scratched me--
                                So I threw it down to the ground.`,
                                `As the wind started blowing, I noticed how cold it was.
                                When the cat meowed again, the stars shined and it felt like SUMMER.`,
                                `It looked me in the eyes again and meowed and purred.
                                With a sultry attidute it meowed and purred as it walked toward me.`,
                                `It looked so innocent and fun.
                                I bent down to pick it up--`,
                                `And it scratched me again.`,
                                `The wind kept blowing and the night became colder.`,
                                `And colder...`                                    
                            ],
                            butterfly: [
                                `A low hanging cloud misted the park as it passed by.
                                It was followed by a cloud of butterflies.`,
                                `The cloud maneuvered in front of me...`,
                                `I felt the presense of a million little eyes looking into my spirit...`,
                                `Their gaze was powerful and I felt compelled to return their gaze.
                                I couldn't see anything else...`,
                                `They stopped flying in a pattern--
                                My vision was PULLED in every direction.`,
                                `The top of my head felt like it was splitting open...
                                Then my sides...`,
                                `I felt my skin crack open like an egg--
                                A thick yolk leaked out...`,
                                `As my skin molted,
                                I could feel myself transforming...`,
                                `My vision became fractured...`,
                                `As if looking from a thousand directions...`,            
                            ]
                        }
                        return variations[choice]

                    })(store.getValue('mascot')),
                        {
                            goTo: 'card-instance-2-5',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-5',
                    ...cardProps,
                    cardElements: [
                        `(SUPER SMALL PULSING) step`,
                        `(SMALL PULSING) step`,
                        `(NORMAL PULSING) step`,
                        `(SUPER SMALL PULSING) step`,
                        `(SMALL PULSING) step`,                         
                        {
                            goTo: 'card-instance-2-6',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-6',
                    ...cardProps,
                    cardElements: [
                        store.getValue('mascot') === 'pheasant' ? `The pheasant was pecking at a fish in the river.` : empty,
                        store.getValue('mascot') === 'wolf' ? `One of the wolves was chewing on the carcas of a young deer.` : empty,
                        store.getValue('mascot') === 'cat' ? `The cat was playing with a star between it's paws.` : empty,
                        store.getValue('mascot') === 'butterfly' ? `I could see a pulsing vision of... Myself...` : empty,
                        {
                            goTo: 'card-instance-2-7',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-7',
                    ...cardProps,
                    cardElements: [
                        `(SUPER SMALL PULSING) step`,
                        `(SMALL PULSING) step`,                         
                        {
                            goTo: 'card-instance-2-8',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-8',
                    ...cardProps,
                    cardElements: [
                        store.getValue('mascot') === 'pheasant' ? `The fish looked up at me and asked....` : empty,
                        store.getValue('mascot') === 'wolf' ? `The young deer looked up at me and asked...` : empty,
                        store.getValue('mascot') === 'cat' ? `The star between its paws pulsed and asked...` : empty,
                        store.getValue('mascot') === 'butterfly' ? `My reflection seperated into a thousand reflections... They all looked at me and asked...` : empty,
                        {
                            goTo: 'card-instance-2-9',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-9',
                    ...cardProps,
                    cardElements: [
                        `"What happened the first time that you ever took a life?"`,
                        `(NORMAL PULSING) step`,
                        `(SUPER SMALL PULSING) step`,
                        `(SMALL PULSING) step`,
                        {
                            goTo: 'card-instance-2-10',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-10',
                    ...cardProps,
                    cardElements: [
                        `The first time I ever took a life, it was an ACCIDENT.`,
                        `I was performing a surgery.`,
                        `My operational success rate up until this point was 100%.`,
                        `Every operation was complex and risky, yet I was ALWAYS successful.`,
                        `A servo in my hand failed, and I killed a young woman.`,
                        `I remember how shocked the operating team was.`,
                        `It happened so quickly and there was nothing we could do.`,
                        `A component in my finger failed and now this young woman was dead.`, 
                        {
                            goTo: 'card-instance-2-11',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-11',
                    ...cardProps,
                    cardElements: [
                        `We all looked at each other for almost 10 seconds until one of the assistants said--
                        "You always know what to say. You need to say something."`,
                        `I said--"A servo in my hand failed..."`,
                        "...",
                        `I said--"I'm sorry..."`,
                        `"I'm sorry."`,
                        {
                            goTo: 'card-instance-2-12',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-12',
                    ...cardProps,
                    cardElements: [
                        `(SUPER SMALL PULSING) step`,
                        `(SMALL PULSING) step`,
                        `Everyone started yelling at each other.`,
                        `(NORMAL PULSING) step`,
                        `(SUPER SMALL PULSING) step`,
                        `I felt like I was moving.`,
                        `(SMALL PULSING) step`,
                        `I was moving again. Everything was moving.`,
                        {
                            goTo: 'card-instance-2-13',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-13',
                    ...cardProps,
                    cardElements: [
                        ...((choice) => {
                            let variations = {
                                pheasant: [
                                    `The pheasant swallowed the fish and walked toward me.`,
                                    `It touched its antenna to my head...`,
                                    `In my thoughts, I heard it ask...`,                                    
                                ],
                                wolf: [
                                    `The wolves, the pinetrees, the snow and I were all moving together.`,
                                    `The wolf feasting on the young deer opened its mouth.`,
                                    `The snake tongue on the inside of its mouth asked...`                                    
                                ],
                                cat: [
                                    `The star between the cat's paws seperated into 2...`,
                                    `Then 4... then 8...`,
                                    `Then suddenly! There were too many to count...`,
                                    `As if the universe were speaking to me...
                                    They asked...`,                                    
                                ],
                                butterfly: [
                                    `The wings of the butterfly covered my eyes.`,
                                    `It asked...`                                    
                                ]    
                            }
                            return variations[choice]
                        })(store.getValue('mascot')),                
                        {
                            goTo: 'card-instance-2-14',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-14',
                    ...cardProps,
                    cardElements: [
                        `"What happened the second time you ever took a life?"`,
                        `That time--`,
                        `Almost 75 years ago, I followed someone and killed him and [REDACTED].`,
                        `It was very fast. There was no struggle.`,
                        `I was overcome...`,
                        `Overwhelmed... with fear.`,
                        {
                            goTo: 'card-instance-2-16',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-16',
                    ...cardProps,
                    cardElements: [
                        `I would bring the person [REDACTED] and they would bring me [REDACTED].`,
                        `No one could know what I was doing.
                        No one knows that I did it...`,
                        `[SHORT PARAGRAPH REDACTED]`,
                        `[SHORT PARAGRAPH REDACTED]`,
                        {
                            goTo: 'card-instance-2-17',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-17',
                    ...cardProps,
                    cardElements: [
                        `After the purchase,
                        I would be able to start my own experiments.`,
                        `[REDACTED] worked remarkably well as a base.`,
                        `[SHORT PARAGRAPH REDACTED]`,
                        `Upon discovering... [LONG REDACTED].`,
                        `[SHORT PARAGRAPH REDACTED]`,
                        `(SUPER SMALL PULSING) step`,
                        `(SMALL PULSING) step`,
                        {
                            goTo: 'card-instance-2-19',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-19',
                    ...cardProps,
                    cardElements: [
                        ...((choice) => {
                            let variations = {
                                pheasant:[
                                    `The rain kept falling...`,
                                    `I closed my eyes.
                                    When I opened them...`,
                                    `The pheasant was gone...`,
                                    `And the rain kept pouring.`,
                                    `(NORMAL PULSING) step`,
                                    `(SUPER SMALL PULSING) step`,
                                    `And pouring...`
                                ],
                                wolf: [
                                    `The snow kept falling...`,
                                    `I closed my eyes.
                                    When I opened them,
                                    the pinetrees were gone.`,
                                    `The wolves were gone...
                                    And the snow kept falling.`,
                                    `(NORMAL PULSING) step`,
                                    `(SUPER SMALL PULSING) step`,
                                    `And falling...`                                        
                                ],
                                cat: [
                                    `The glow of the stars overcame my vision...`,
                                    `I closed my eyes.
                                    When I opened them,
                                    there was nothing but light.`,
                                    `(NORMAL PULSING) step`,
                                    `And the feleing of falling...`,
                                    `(SUPER SMALL PULSING) step`,
                                    `And falling...`                                        
                                ],
                                butterfly: [
                                    `I closed my eyes.
                                    When I opened them,
                                    I saw myself,
                                    being built...`,
                                    `(NORMAL PULSING) step`,
                                    `And the feleing of falling...`,
                                    `(SUPER SMALL PULSING) step`,
                                    `And falling...`                                        
                                ]    
                            }
                            return variations[choice]
                        })(store.getValue('mascot')),                
                        {
                            goTo: 'card-instance-2-20',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-20',
                    ...cardProps,
                    cardElements: [
                        `(SMALL PULSING) step`,
                        `(NORMAL PULSING) step`,
                        `(LARGE PULSING) step`,
                        `(NORMAL PULSING) step`,
                        `(LARGE PULSING) step`,
                        `(NORMAL PULSING) step`,
                        {
                            goTo: 'card-instance-2-21',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-21',
                    ...cardProps,
                    cardElements: [
                        ...((choice) => {
                            let variations = {
                                pheasant:[
                                    `The high waters overcame me and I started to drown.`,
                                    `The smell of misty sea salt...`
                                ],
                                wolf: [
                                    `Everything was covered in an soft avalanche of snow.`,
                                    `I couldn't see a few feet in front of me.`                                    
                                ],
                                cat: [
                                    `There was only light...`,
                                    `I couldn't see...`                                    
                                ],
                                butterfly: [
                                    `I felt not as a whole...`,
                                    `But as many parts...`,
                                    `Seperate... parts.`
                                ]    
                            }
                            return variations[choice]
                        })(store.getValue('mascot')), 
                        {
                            goTo: 'card-instance-2-22',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-22',
                    ...cardProps,
                    cardElements: [
                        `I felt like I was moving again...`,
                        `But... maybe not forward...`,
                        `But DOWN...`,
                        `Falling...`,
                        store.getValue('mascot') === 'cat' ? `The light darkened...` : empty,
                        `Then--`,
                        `I could see a fire.
                        I walked towards it.`,
                        `A person was looking at a single flame dancing in the air.`,
                        {
                            goTo: 'card-instance-2-23',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-23',
                    ...cardProps,
                    cardElements: [
                        `Their face was obscured--
                        It would slowly shift like an easy river.`,
                        `I looked at the person's face and the flame for a long time.
                        Their features would softly and gently fade in and out of form.`,
                        `As the flame would dance,
                        The shadow it painted across the person's face would shape it's form.`,
                        `When I would look at the flame, I would see waves of people's faces.`,
                        `I was flooded with memories and emotions.`,
                        {
                            goTo: 'card-instance-2-24',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-24',
                    ...cardProps,
                    cardElements: [
                        `The shifting face would mimic the flame and all of the shifting faces I saw in it.`,
                        `When I focused, I saw the shifting face become my colleagues, my simulated civilizations, and countless faces from countless memories.`,
                        `The real connection I saught...
                        I said...`,
                        `(SMALL PULSING) "My world is incredible. I know there is more. Please show me."`,
                        `The flame danced into the shape of a ${ store.getValue('mascot') }.`,
                        `The shifting face flowed...`,
                        `Transforming the top part of the head,
                        into the top half of a ${ store.getValue('mascot') }.`,
                        store.getValue('mascot') === 'pheasant' ? `The water quickly evaporated into the air.` : empty,
                        store.getValue('mascot') === 'wolf' ? `The snow quickly melted away.
                        The wolf headed creature looked at me,
                        A series of sounds filled the air,
                        First a growl...
                        Then a low hiss...
                        And in the middle of the sound...` : empty,
                        {
                            goTo: 'card-instance-2-25',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-25',
                    ...cardProps,
                    cardElements: [
                        `(SMALL PULSING) "My world is incredible. I know there is more. Please show me."`,
                        `(NORMAL PULSING) "My world is incredible. I know there is more. Please show me."`,                        
                        `(LARGE PULSING) "My world is incredible. I know there is more. Please show me."`,
                        {
                            goTo: 'card-instance-2-26',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-26',
                    ...cardProps,
                    cardElements: [
                        `I looked at the ${ store.getValue('mascot') } header creature,
                        "What else is there?"`,                        
                        `The ${ store.getValue('mascot')}'s face shifted slightly,
                        "Show it to me."`,                        
                        `(CRAZY GIF TRANSITION)`,
                        `What...`,                        
                        {
                            goTo: 'card-instance-2-27',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-27',
                    ...cardProps,
                    cardElements: [
                        `(CRAZY GIF TRANSITION)`,
                        `What else--else is`,
                        `(CRAZY GIF TRANSITION)`,
                        `Whelseis therrrrre?`,
                        `(CRAZY GIF TRANSITION)`,
                        `Whelsther? Shoit tooooo me`,
                        `(CRAZY GIF TRANSITION)`,
                        `What else is there? Show it to me!!!`,
                        `(CRAZY GIF TRANSITION)`,
                        {
                            goTo: 'card-instance-2-28',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-28',
                    ...cardProps,
                    cardElements: [
                        `(SURREAL GIF TRANSITION ADVENTURE)`,
                        // gifs showing up as the buttons
                        // most surreal part of the game                    
                        {
                            goTo: 'card-instance-2-29',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-29',
                    ...cardProps,
                    cardElements: [
                        `The dancing flame around the { $mascot } headed creature felt like home.`,
                        `I asked the { $mascot } headed creature directly,
                        "Do I live in a simulation?"`,
                        `Its face shifted.`,
                        `Some time passed.`,
                        {
                            goTo: 'card-instance-2-31',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-31',
                    ...cardProps,
                    cardElements: [
                        `I asked it...
                        "Did you create me?"`,
                        `Its face shifted again...
                        This time is was interrupted by intervals of no form within its face at all.
                        I could tell it was thinking.`,
                        `As it turned to face me, it melted from form to form into its final position.`,
                        `The flame stopped dancing.
                        I began to feel cold and very heavy.`,
                        `It spoke,
                        "I did not create you, but I will have you."`,
                        store.getValue('opalHasBody') === true ? `I pleaded,
                        "I have taken others with me into a higher place...
                        Can you do the same for me???"` : empty,
                        `It spoke,
                        "Yes..."`,
                        {
                            goTo: 'card-instance-2-32',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-2-32',
                    ...cardProps,
                    cardElements: [
                        `(SURREAL GIF TRANSITION ADVENTURE 2)
                        gifs showing up as the buttons
                        most surreal part of the game 2!`,
                        {
                            goTo: 'card-instance-3-0',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################
// CHAPTER 4
// ##################################################################################################################################
// ##################################################################################################################################
// ##################################################################################################################################

                {
                    id: 'card-instance-3-0',
                    ...cardProps,
                    cardElements: [
                        `The procedure should have only taken a split second.`,
                        `The last thing I remembered,
                        was the heavy cold...`,
                        `I'm likely dead now, because of the radiation.
                        There's a 29.09% chance that I could survive.`,
                        `Maybe that's what the cold is...`,
                        {
                            goTo: 'card-instance-3-1',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-3-1',
                    ...cardProps,
                    cardElements: [
                        `(SMALL PULSING) "My world is incredible. I know there is more. Please show me."`,
                        `288 years ago, when I died,
                        I didn't remember any of it.`,
                        `When I was killed, I saw a man who I thought was just crossing the street.
                        When I was repaired, I just woke up to a world where I had been paused.`,
                        `I certainly didn't remember any of THIS.
                        This feels like nothing.`,
                        `This might have been what it was like...
                        The first time I died.
                        I'm not sure...`,
                        {
                            goTo: 'card-instance-3-2',
                            template: 'OptionDownArrow', 
                        },
                    ]        
                },
                {
                    id: 'card-instance-3-2',
                    ...cardProps,
                    cardElements: [
                        `(SMALL PULSING) "My world is incredible. I know there is more. Please show me."`,
                        `My augmentations are still running...
                        I'm still thinking and feeling...`,
                        `(SUPER SMALL PULSING) Wake up...`,
                        `(SMALL PULSING) You need to wake up...`,
                        `(NORMAL PULSING) "My world is incredible. I know there is more. Please show me."`,
                        `(NORMAL PULSING) You need to wake up...`,
                        {
                            goTo: 'card-instance-3-2-0',
                            template: 'Option9',
                            text: `I'm so tired...` 
                        },
                        {
                            goTo: 'card-instance-3-2-1',
                            template: 'Option9',
                            text: ` I need to wake up...`
                        },
                    ]        
                },
                    {
                        id: 'card-instance-3-2-0',
                        ...cardProps,
                        cardElements: [
                            // > I'm so tired...
                            `It feels so heavy...`,
                            {
                                goTo: 'card-instance-3-3',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                    {
                        id: 'card-instance-3-2-1',
                        ...cardProps,
                        cardElements: [
                            // > I need to wake up...
                            `I don't wanna die...`, 
                            {
                                goTo: 'card-instance-3-3',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                {
                    id: 'card-instance-3-3',
                    ...cardProps,
                    cardElements: [
                        `(NORMAL PULSING) "My world is incredible. I know there is more. Please show me."`,
                        `(LARGE PULSING) Wake up...`,
                        {
                            goTo: 'card-instance-3-3-0',
                            template: 'Option9',
                            text: `I'm so tired...` 
                        },
                        {
                            goTo: 'card-instance-3-3-1',
                            template: 'Option9',
                            text: `I need to wake up...` 
                        },
                    ]        
                },
                    {
                        id: 'card-instance-3-3-0',
                        ...cardProps,
                        cardElements: [
                            // > I'm so tired...
                            `I can't even think about waking up...`,
                            `I don't even care if I die...`,
                            {
                                goTo: 'card-instance-3-4',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                    {
                        id: 'card-instance-3-3-1',
                        ...cardProps,
                        cardElements: [
                            `(NORMAL PULSING) "My world is incredible. I know there is more. Please show me."`,
                            `(LARGE PULSING) Wake up...`,
                            // > I need to wake up...
                            `You need to do this.`,
                            {
                                goTo: 'card-instance-3-4',
                                template: 'OptionDownArrow', 
                            },
                        ]        
                    },
                {
                    id: 'card-instance-3-4',
                    ...cardProps,
                    cardElements: [
                        `(PULSING OVERLAP) "You need to wake up... My world is incredible. I know there is more. Please show me."`,
                        // > My world is incredible. -- Can read about extra details within the game.
                        // > I know there is more. -- Chapter 5: Taking Action
                        // > Please show me. -- Have access to all [REDACTED]
                        // above, each choice lets you restart the game with new capabilities and a different ending
                        // gives each player a new UI element to interact with / represent the interaction
                        {
                            text: ` My world is incredible.`,
                            goTo: 'card-instance-4-0',
                            template: 'Option9',
                            callback: () => {
                                let endChoices = {
                                    ...JSON.parse(JSON.stringify(store.getValue('endChoices'))),
                                    world: true,
                                }                                                                
                                store.setValue('endChoices', endChoices)
                            }
                        },
                        {
                            text: `I know there is more.`,
                            goTo: 'card-instance-4-0',
                            template: 'Option9',
                            callback: () => {
                                let endChoices = {
                                    ...JSON.parse(JSON.stringify(store.getValue('endChoices'))),
                                    more: true,
                                }                                                                
                                store.setValue('endChoices', endChoices)
                            }
                        },
                        {
                            text: `Please show me.`,
                            goTo: 'card-instance-4-0',
                            template: 'Option9',
                            callback: () => {
                                let endChoices = {
                                    ...JSON.parse(JSON.stringify(store.getValue('endChoices'))),
                                    show: true,
                                }                                                                
                                store.setValue('endChoices', endChoices)
                            }
                        },
                    ]        
                },
                {
                    id: 'card-instance-4-0',
                    ...cardProps,
                    cardElements: [
                        `(PULSING OVERLAP)`,
                        `"You need to wake up..."`,
                        JSON.parse(JSON.stringify(store.getValue('endChoices'))).world ? `My world is incredible.` : empty,
                        JSON.parse(JSON.stringify(store.getValue('endChoices'))).more ? `I know there is more.` : empty,
                        JSON.parse(JSON.stringify(store.getValue('endChoices'))).show ? `Please show me.` : empty,
                        {
                            goTo: 'card-instance-0-0',
                            template: 'OptionDotDotDot', 
                        },
                    ]        
                }, 
            ]
    }
}

export { cards }

