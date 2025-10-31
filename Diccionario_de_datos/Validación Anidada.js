const diccionarioEmpleado = {
  "domicilio": {
    "dataType": "object",
    "fields": {
      "calle": { "dataType": "string" },
      "numero": { "dataType": "integer" } 
    }
  }
};

const registroPrueba = {
    nombre: "Ana",
    domicilio: {
        calle: "Avenida Central 123",
        numero: 45 
    }
};

function validarNumeroAnidado(registro) {
    const valor = registro.domicilio.numero;
    const metadataTipo = diccionarioEmpleado.domicilio.fields.numero.dataType;

    if (metadataTipo === 'integer' && !isNaN(valor) && Number.isInteger(valor)) {
        return true;
    }
    return false;
}

const esValido = validarNumeroAnidado(registroPrueba);
console.log(`\nEl campo 'numero' es válido y entero (según la metadata): ${esValido}`);