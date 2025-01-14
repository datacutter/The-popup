function Bopup(btn, popup) {
  const closePopup = document.querySelectorAll('.bopup-close-button');
 
  if (btn.length > 1) {
    btn.forEach(item => {
      item.addEventListener('click', () => {
        popup.classList.add('open');
        document.body.style.overflow = "hidden";
      })
    })
  } else {
    btn.addEventListener('click', () => {
      popup.classList.add('open');
      document.body.style.overflow = "hidden";
    })
  }


  closePopup.forEach(item => {
    item.addEventListener('click', closeModal);
  })

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      closeModal()
    }
  })

  function closeModal() {
    popup.classList.remove('open');
    document.body.style.overflow = "";
  }

}

export default Bopup



