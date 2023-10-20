let i = 0;

function go(e) {

    let gallery = e.parentElement;
    let items = gallery.getElementsByTagName('img');
    const length = items.length;

    if ( e.classList.contains('fa-right') ) {
        items[i].classList.remove('active');
        i = (i + 1) % length;
        items[i].classList.add('active');
    } else {
        items[i].classList.remove('active');
        i = (i - 1 + length) % length;
        items[i].classList.add('active');
    }
    
}