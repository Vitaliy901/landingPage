let toTop = document.querySelector('#toTop');
let footer = document.querySelector('.footer-wrapper')
let menu = document.querySelector('.popular-menu')
let sections = document.querySelector('.article-content').children
let headerChildren= document.querySelector('.header-main').children
for (const elem of headerChildren) {
   setTimeout(() =>  elem.classList.add('_active-header'), 1000)
}
window.addEventListener('scroll', function (params) {
    let size = footer.offsetTop - window.innerHeight
    let i = 550;
   if (window.scrollY >= menu.offsetTop - 200) {
    for (const section of sections) {
        setTimeout(() => section.classList.add('_active-menu'), i)
        i += 550;
    }
   }

    if (window.scrollY >= size) {
       toTop.classList.add('_active-button')
    } else {
        toTop.classList.remove('_active-button')
    }
})

toTop.addEventListener('click', function (params) {
    scroll({top: 0, behavior: 'smooth'})
})
