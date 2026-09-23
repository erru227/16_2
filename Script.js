//Collecting elements for easier reading later
//getElementsByTagName gets a list; we only want the FIRST object of the list
var header = document.getElementsByTagName("h1")[0];

let css_g = document.styleSheets[0];

function add_rule(){
    //header.textContent="Working";
    css_g.insertRule("h1{ text-shadow: 2px 2px 5px #2F23FA;}");
}
function change_rule(){
}
function delete_rule(){
}
