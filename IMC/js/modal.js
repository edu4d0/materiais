export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal.tittle span'),
    buttonClose: document.querySelector('.modal.button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => { 
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
    console.log(event.key)

    if(event.key === 'Escape'){
        Modal.close()
    }
}


