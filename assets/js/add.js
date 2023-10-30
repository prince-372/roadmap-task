function opentabs(Tabid) {
    const tabself = document.querySelectorAll(".my-tab");
    tabself.forEach((Tabsapce) => {
        Tabsapce.classList.add("d_none");
        Tabsapce.classList.remove("d_block");
    });
    const mytabshow = document.getElementById(Tabid);
    mytabshow.classList.add("d_block");
    mytabshow.classList.remove("d_none");
}
function closetab() {
    const tabcontent = document.querySelectorAll(".my-content");
    tabcontent.forEach((Tabcontent) => {
        Tabcontent.classList.add("d_none");
        Tabcontent.classList.remove("d_block");
    });
    const tabself = document.querySelectorAll(".my-tab");
    tabself.forEach((Tabsapce) => {
        Tabsapce.classList.add("d_block");
        Tabsapce.classList.remove("d_none");
    });
}   

