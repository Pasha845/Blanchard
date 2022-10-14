document.addEventListener('DOMContentLoaded', function () {
    $( ".catalog__accordeon" ).accordion({
        collapsible: true,
        active: 0,
        icons: false,
        heightStyle: 'content'
    });
    document.querySelectorAll(".catalog__item").forEach(function(t) {
        t.addEventListener("click",function(t) {
            const e=t.currentTarget.dataset.path;
            
            document.querySelectorAll(".catalog__content").forEach(function(t) {
                t.classList.remove("catalog__content-active")}),
            
            document.querySelector(`[data-target="${e}"]`).classList.add("catalog__content-active")
        })
    })
})