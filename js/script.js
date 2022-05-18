/***** TYPING */


var typed2 = new Typed('#typed', {
    strings: ['Front-end kodér', 'Online Marketing Manager'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });


  /*********** PAGINATION */


  window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.active').classList.remove('active');
            tab_switcher.parentNode.classList.add('active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.content-box .content-box-inner.active');
    current_page.classList.remove('active');

    const next_page = document.querySelector(`.content-box .content-box-inner[data-page="${page_id}"]`);
    next_page.classList.add('active');
}

/**************** UNPACKING */

const unpack = document.querySelectorAll(".portfolio-card")

unpack.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("is-active")
  } )
})
