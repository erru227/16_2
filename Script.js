let header = document.getElementById("header");
let css = document.styleSheets[0];

function add_rule(){
    css.insertRule("h1{ text-shadow: 2px 2px 5px #2F23FA;}");
}
function change_rule(){
    header.style.setProperty("text-shadow", "2px 2px 5px rgb(250, 35, 92)");
}
function delete_rule(){
    for (let i = 0; i < css.cssRules.length; i++)
        if (css.cssRules[i].selectorText === "h1")
            css.deleteRule(i);
}
