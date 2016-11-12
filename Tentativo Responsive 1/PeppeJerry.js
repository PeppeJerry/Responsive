function NBResponsive(){
    var NAME = document.getElementById("JSC");
    var currentClass = NAME.className;
    if (currentClass == "NCN") {
        NAME.className = "NCY";
    } else {
        NAME.className = "NCN";
    }
} 