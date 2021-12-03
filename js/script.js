const bur = document.getElementById("burger_img");
let menu = document.getElementById("burger");
document.getElementById("burger_img").addEventListener("click", cambiar)
function cambiar()
{
    bur.setAttribute("style", "none")
    document.getElementById("burger").style.display = "flex";
}