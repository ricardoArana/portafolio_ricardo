
setInterval(() => {
    var img = document.getElementById("img");
    var bur = document.getElementById("burger_img");
    var menu = document.getElementById("burger");

    if (img.getAttribute("src").match("burger")){
        bur.addEventListener("click", abrir);
        function abrir()
        {
            img.setAttribute("src", "/img/cerrar.png");
            menu.style.display = "flex";
            bur.setAttribute("id", "cerrar");
        }
    }
    else{
        bur = document.getElementById("cerrar");
        bur.addEventListener("click", cerrar);
        function cerrar() 
        {
            img.setAttribute("src", "/img/burger.png");
            menu.style.display = "none";
            bur.setAttribute("id", "burger_img");
        }
    }}, 100)