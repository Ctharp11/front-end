$('#inventory').on('click', toggleNav);
$('.feedback-button').on('click', toggleModal)
$('.close').on('click', toggleModal) 

function toggleNav() {
    $('.nav-drop').toggleClass('hide');
}

function toggleModal() {
    $('.feedback-modal-background').toggleClass('super-hide');
}

