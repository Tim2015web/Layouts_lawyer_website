// Функционал бургера
document.querySelector('#showModal').addEventListener('click', () => {
    document.querySelector('#modal').classList.add('header-modal-menu_show');
});
document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('#modal').classList.remove('header-modal-menu_show');
});