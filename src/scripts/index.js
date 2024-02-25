function handleModal() {
    const button = document.querySelector("#showModal");
    const button2 = document.querySelector("#showModal2");
    const modalContainer = document.querySelector("#modalController");
  
    button.addEventListener("click", () => {
      modalContainer.showModal();
  
      closeModal();
    });

    button2.addEventListener("click", () => {
      modalContainer.showModal();
      closeModal();
    })
  }
  
  function closeModal() {
    const button = document.querySelector("#closed");
    const modalContainer = document.querySelector("#modalController");
  
    button.addEventListener("click", () => {
      modalContainer.close();
    });
  }
  
  handleModal();