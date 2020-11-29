function modal() {
    // Modal window

    const modalOpen = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
    
    function openModal(){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';// когда открывается окно, нельзя прокрутить страницу

        clearInterval(modalTimerId);
    }
    
    modalOpen.forEach(btn =>{
        btn.addEventListener('click', openModal);
    });
    
    function closeModal (){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
   
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == ''){//если клик попадает точно на фон - тогда закрываем
            closeModal ();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" ){ 
            closeModal();  
        }
    });

    const modalTimerId = setTimeout(openModal, 50000); // окно откроется через 50 секунд

    function showModalByScroll(){ //откроет модальное окно когда долистаем до конца
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal();
        window.removeEventListener('scroll', showModalByScroll);//назначаем удаление уточняя назначение(оно ниже)
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;