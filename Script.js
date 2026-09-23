let header = document.getElementById("header");
let css = document.styleSheets[0];

function add_rule(){
    css.insertRule("h1{ text-shadow: 2px 2px 5px #2F23FA;}");
}
function change_rule(){
    header.style.setProperty("text-shadow", "2px 2px 5px rgb(250, 35, 92)");
}
function delete_rule(){
    let new_rule_index = css.cssRules.length-1;
    header.textContent=new_rule_index+" "+css.cssRules[new_rule_index].selectorText;
    if (css.cssRules[new_rule_index].selectorText === "h1")
        css.deleteRule(new_rule_index);
}
