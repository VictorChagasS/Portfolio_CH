ScrollReveal().reveal('.my_bio', { delay: 700 });
ScrollReveal({ reset: true });
ScrollReveal().reveal('.story', { delay: 700 });
ScrollReveal({ reset: true });
ScrollReveal().reveal('.skills', { delay: 700 });
ScrollReveal({ reset: true });
ScrollReveal().reveal('.contact', { delay: 700 });
ScrollReveal({ reset: true });



var menu_active = false

function openMenu(){
    
        var menu = document.querySelector('.menu_responsive')
        let body = document.querySelector('body')
        let clicado = 1
        if (menu_active == false){
            menu.classList.add('active_menu')   
            
        }
        else {
            menu.classList.remove('active_menu')      
        }

        interruptMenu()

        /*MENU OUT CLICKED*/
        
        body.addEventListener('click', function(e) {
            let classe_menu=".menu_responsive"
            let classe_clicada=e.target.className;
            let classe_clicada_filhos=e.target.closest(classe_menu)
            let classe_clicada_filhos_btn=e.target.closest(".btn_menu")

           if (classe_clicada != classe_menu && classe_clicada_filhos == null && classe_clicada != "btn_menu" && classe_clicada_filhos_btn == null){
               menu_opened = true
               menu.classList.remove('active_menu')
               menu_active = false
           
        }
        })
    }
           

    function interruptMenu(){
        menu_active = false ? menu_active == true : menu_active == false
    }


   
  


var menu_itens=document.querySelectorAll('.menu_itens a')
menu_itens.forEach(item =>{
   item.addEventListener('click', scrollToItem)
   
})





function scrollToItem(event){
    event.preventDefault();
    let element = event.target;
    let id_element = element.getAttribute('href')
    let session = document.querySelector(id_element).offsetTop;
    window.scroll({
        top: session - 80,
        behavior:"smooth"
    });
    
    var menu = document.querySelector('.menu_responsive')
    var menu_itens=document.querySelectorAll('.menu_itens a')
    menu_itens.forEach(item => {
        item.classList.remove("active")
    })
    element.classList.add("active")
    menu.classList.remove('active_menu')
    interruptMenu()
}




function clickedImg(){
    var img=document.querySelector('.img_icon img')
    img.classList.add('clicked')
    setTimeout(function(){
        img.classList.remove('clicked')
    },2000);
   

}
