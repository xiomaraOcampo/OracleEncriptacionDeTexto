/* e - enter  
o - ober 
i - imes 
a-ai 
u - ufat   */ 

function encriptar(){

    //i es para que afecte tanto a mayusculas como a minusculas
    //g es para toda la linea u oracion
    //m  es para que afecte a multiples lineas o parrafos

    var texto = document.getElementById("chart-text").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    

    document.getElementById("image-message").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("b_copiar").style.display = "show";
    document.getElementById("b_copiar").style.display = "inherit";
}

function desencriptar(){

    //i es para que afecte tanto a mayusculas como a minusculas
    //g es para toda la linea u oracion
    //m  es para que afecte a multiples lineas o parrafos

    var texto = document.getElementById("chart-text").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("image-message").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("b_copiar").style.display = "show";
    document.getElementById("b_copiar").style.display = "inherit";

}










