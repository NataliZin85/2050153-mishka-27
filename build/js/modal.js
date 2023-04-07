const modalContainer=document.querySelector(".modal"),modalCloseButton=document.querySelector(".modal__button"),openModal=()=>{modalContainer.classList.add("is-open"),document.addEventListener("keydown",onDocumentKeydown),modalContainer.addEventListener("click",onModalClick)},closeModal=()=>{modalContainer.classList.remove("is-open"),document.removeEventListener("keydown",onDocumentKeydown),modalContainer.removeEventListener("click",onModalClick)};modalCloseButton.addEventListener("click",(e=>{e.preventDefault(),modalContainer.classList.remove("is-open")})),document.addEventListener("click",(e=>{e.target.closest(".button__modal")&&(modalContainer.classList.add("is-open"),document.addEventListener("keydown",onDocumentKeydown),modalContainer.addEventListener("click",onModalClick))}));const onDocumentKeydown=e=>{"Escape"===e.key&&closeModal()},onModalClick=e=>{e.target.closest(".modal__container")||closeModal()};