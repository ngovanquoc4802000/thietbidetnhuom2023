const bars = document.querySelector(".form .fa-bars");
const sidebar = document.querySelector(".sidebar");

const white = document.querySelector(".white");
const sidebarTitle = document.querySelector(".sidebar-title .fa-times");

const search = document.querySelector(".form .fa-search");
const sidebarRight = document.querySelector(".siderbarRIGHT");
const height = document.querySelector(".height");

const close = document.querySelector(".sidebar .sidebar-title .fa-times");
const barsHeader = document.querySelector(".list-header .fa-bars");
const searchHeader = document.querySelector(".list-header .fa-search");
//console.log(bars,sidebar);

search.addEventListener("click",function() {
    sidebarRight.classList.toggle("height");
});
sidebarTitle.addEventListener("click",function() {
    sidebarRight.classList.remove("height");
});
bars.addEventListener("click",function() {
    sidebar.classList.toggle("white");
});
close.addEventListener("click",function() {
    sidebar.classList.remove("white");
});
barsHeader.addEventListener("click",function() {
    sidebar.classList.toggle("white");
});

searchHeader.addEventListener("click",function() {
    sidebarRight.classList.toggle("height");
});