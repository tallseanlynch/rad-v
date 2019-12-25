/**
 * The entry point
 */

import App from './components/app'

window.addEventListener('load', () => {
    const app = new App(document.getElementById('app'))
    window.radApp = app

    // A very simple component setup
    app.render()

    // Render the time every 1s
    // setInterval(() => {
    //   app.render()
    // }, 1000)

})