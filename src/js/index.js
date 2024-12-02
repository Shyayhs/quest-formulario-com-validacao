var camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
var mensagensDeCampoObrigatorio = document.querySelectorAll(".mensagem-campo-obrigatorio");

function validarFormulario() {
    camposObrigatorios.forEach(function(item,index) {
        if (item.value) {            
            item.style.border = "solid 1px #00C22B";
            item.style.background = "none";
            
            mensagensDeCampoObrigatorio[index].style.display = "none";
        }
        else {
            item.style.border = "solid 1px #F52E2E"
            mensagensDeCampoObrigatorio[index].style.display = "block";
        }
    });
}