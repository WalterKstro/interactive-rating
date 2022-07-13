const wrapperRaiting = document.querySelector('#raiting');
const btnSubmit = document.querySelector('#submit');
let prev = null
let next = null

const selectRaiting = ({target}) => {
    toogleActive(target)
    const {textContent} = target;
    sessionStorage.setItem('r', textContent)
}
const toogleActive = (target) => {
    if( prev ){
        next = prev
        prev = target
        next.classList.remove('active')
        prev.classList.add('active')
    }else {
        prev = target
        target.classList.add('active')
    }
}
const sendRaiting = () => {
    const currentComponent = document.querySelector('#contratulations')
    const spiner = document.querySelector('#spiner')
    promiseTransition()
        .then(response => {
            if(response) {
                spiner.remove()
                currentComponent.classList.remove('d-none')
            }
        })
}
const promiseTransition =  () => {
    const beforeComponent = document.querySelector('#selector');
    const spiner = document.querySelector('#spiner')
    beforeComponent.remove()
    spiner.classList.remove('d-none')

    return new Promise( resolve => {
        setTimeout(() => {
            changeDefaultRaiting()
            resolve(true)
        },2000)
    })
}
const changeDefaultRaiting = () => {
    const setRaiting = document.querySelector('#setRaiting')

    const raiting = sessionStorage.getItem('r');
    setRaiting.textContent = raiting
}

wrapperRaiting.addEventListener('click', selectRaiting)
btnSubmit.addEventListener('click', sendRaiting)