var alreadyScrolled = false

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY || 0
    const mainNav = document.getElementById('main_nav')
    const navTwo = document.getElementById('nav_two')
    console.log(mainNav)

    if(scrollPos > 80 && !alreadyScrolled){
        alreadyScrolled = true
    }

    if(scrollPos > 80){
        mainNav.style.height = '28%'
        navTwo.style.display = 'flex'
        mainNav.style.position = 'sticky'
        mainNav.style.top = '0'
        navTwo.style.borderBottom = '2px solid #E5E7EB'
    }

    if(scrollPos < 80 && alreadyScrolled){
        navTwo.style.display = 'none'
        mainNav.style.height = '52%'
    }

});
