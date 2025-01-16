import { proxy, subscribe } from 'valtio'

const state = proxy(JSON.parse(localStorage.getItem('lucas-portfolio-cache') || '{}') || {
    darkmode: false,
    currentSection: 0,
})


subscribe(state, () => {
    localStorage.setItem('lucas-portfolio-cache', JSON.stringify(state))
})

export { state }
