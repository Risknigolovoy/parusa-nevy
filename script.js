document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const closeButton = document.querySelector('.close-button');

    // Открытие модального окна при клике на картинку
    galleryImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        }
    });

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = 'none';
    }

    // Закрытие по клику на крестик
    closeButton.onclick = closeModal;

    // Закрытие по клику вне изображения
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
});
