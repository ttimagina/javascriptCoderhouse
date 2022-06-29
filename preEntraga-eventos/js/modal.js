const dialog = document.querySelector('dialog')
const cancel = document.querySelector('#cancel')
const show = document.querySelector('#show')

show.addEventListener('click', () => dialog.showModal())
cancel.addEventListener('click',() => dialog.close())