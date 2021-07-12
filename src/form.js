
function obtenerDatos(){
    var nombrePersona = document.getElementById("personalName").value;
    var apellidoPersona = document.getElementById("personalLastName").value;
    var edadPersona = document.getElementById("personalAge").value;
    var generoPersona = document.getElementById("personalGender").value;
    var profesionPersona = document.getElementById("personalProfession").value;
    var provinciaPersona = document.getElementById("personalProvince").value; 
    var cantonPersona = document.getElementById("personalCanton").value;
    var distritoPersona = document.getElementById("personalDistrict").value;

    const persona = [
        nombrePersona, 
        apellidoPersona, 
        edadPersona, 
        generoPersona, 
        profesionPersona, 
        provinciaPersona,
        cantonPersona,
        distritoPersona
    ];

    imprimirDatos(persona);

    return persona


    
}

function imprimirDatos(persona){
    document.getElementById("person1").innerHTML= persona[0]+ ' '+ persona[1]+' ' + persona[2];

}

// function crearPersona(persona){
//     const Persona

// }