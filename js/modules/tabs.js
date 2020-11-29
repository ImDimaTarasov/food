function tabs(){
     //TABS
     const tabs = document.querySelectorAll('.tabheader__item'),
     tabsContent = document.querySelectorAll('.tabcontent'),
     tabsParent = document.querySelector('.tabheader__items');
 
     function hideTabContent() {
         tabsContent.forEach(item => {
 
         
             item.classList.add('hide');
             item.classList.remove('show', 'fade');
         });
 
         tabs.forEach (item => {
             item.classList.remove('tabheader__item_active');//удалем клас
         });
     }
 
 
     function showTabContent(i = 0){// по умолчанию значение 0
 
         tabsContent[i].classList.add('show', 'fade');
         tabsContent[i].classList.remove('hide');
 
         tabs[i].classList.add('tabheader__item_active');//добавляем клас к нему
     }
 
     hideTabContent();
     showTabContent();
 
 
     tabsParent.addEventListener('click', (event) => { //назначам клик
         const target = event.target; // что бы не писать каждый раз два слова
         //event.target используем дл того что бы навесить обработчик на все элементы(детей одного элемента)
         if(target && target.classList.contains('tabheader__item')){//определем точно ли кликнули в таб
             tabs.forEach((item, i) => {//когда кликнули в пункт, определяем номер и показываем его
                 if(target == item){
                     hideTabContent();
                     showTabContent(i);
                 }
             });
         }
     });
}

module.exports = tabs;