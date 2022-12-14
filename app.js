const openModalBtn = document.getElementById('open-modal')
const modalWindow = document.querySelector('.modal-window')
const closeModalBtn = document.querySelector('#footer button')

function openModal(){
  modalWindow.classList.remove('hide')
  modalWindow.style.display = "block"
  modalWindow.classList.add('show')
}
function closeModal(){
  modalWindow.classList.remove('show')
  modalWindow.classList.add('hide')
  setTimeout(() => {
    modalWindow.style.display = 'none'
  }, 400)
}

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

