
setInterval(() => { //Vamos comprobando si el menú está abierto o cerrado, para saber que debe hacer el click.
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

    //Formulario
    let env = document.getElementById("enviar")
    let n = document.forms[0].nombre
    let e = document.forms[0].email
    n.addEventListener("focusout", validar);
    e.addEventListener("focusout", validar);

    function validar(){ //Podemos ver que de esta forma no se puede acceder al text area hasta que no estén rellenos los otros dos campos
        if(!n.checkValidity())
        {
            n.reportValidity()
        }
        else if(!e.checkValidity())
        {
            e.reportValidity()
        }
}
    