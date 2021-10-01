const d = document;

const toggleMenu = (button, menu)=>{

   


   d.addEventListener('click', e =>{
     
      const $button = d.querySelector(button),
            $menu = d.querySelector(menu)
      
      if(e.target === button || e.target.matches(`${button} *`)){
         console.log(e.target)
         $button.classList.toggle('is-active');
         $menu.classList.toggle('is-active');
      }

      if(e.target.matches(`${menu} a`)){
         console.log(e.target)
         $button.classList.remove('is-active');
         $menu.classList.remove('is-active');
      }



   })      

}

d.addEventListener('DOMContentLoaded', toggleMenu('.hamburger', '#nav-bar'));