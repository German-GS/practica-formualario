const listaPersonas = document.getElementById("listaPersonas");

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
    const template = document.getElementById("template-li")
    console.log(template);
    const fragment = createDocumentFragment()

    persona.array.forEach(element => {
        template.querySelector('.list-group-item').textContent=element;
        const clone=template.cloneNode(true);

        
    });
    fragment.appendChild(fragment)

}

// function crearPersona(persona){
//     const Persona

// }