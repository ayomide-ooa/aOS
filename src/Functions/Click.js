
//This function has to do with click events
const ontop = (x) => x.style.zIndex = 1 ? x.style.zIndex += 1 : x.style.zIndex -= 1;

const show = (xy) => {
    xy.style.display ="block"
    ontop(xy)
}
        
const hide = (y) => { y.style.display ="none" }

const Show_Hide = (elem) => {
    elem.style.display === "block" ? hide(elem) : show(elem)
}

function rightClick(e) {
    e.preventDefault();

        var menu = document.getElementById("contextMenu");
        menu.style.display = "block";
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
}
//window.onclick = hide(document.getElementById("contextMenu"))

export { show, hide, Show_Hide, rightClick }