let new_rule_index = -1;
let css = document.styleSheets[0];

function add_rule(){
    css.insertRule("h1{ text-shadow: 2px 2px 5px #2F23FA;}");
    for (let i = 0; i < css.cssRules.length; i++)
        if (css.cssRules[i].selectorText === "h1")
            new_rule_index=i;
}
function change_rule(){
    css.cssRules[new_rule_index].style.setProperty("text-shadow-color", "rgb(250, 35, 92)");
}
function delete_rule(){
    css.deleteRule(new_rule_index);
    new_rule_index=-1;
}
