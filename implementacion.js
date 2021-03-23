const EsUnAFDFinito = require("./declaracionDeFunciones");


// Es finito
const tablaTransiciones1 = [
         // a  // b  
  /*q0*/ ["q1", "q1"],
  /*q1*/ ["q2", "q2"],
  /*q2*/ ["q3", "q3"],
  /*q3*/ ["q3", "q3"],
]

const conjuntoEstados1 = ["q0", "q1", "q2", "q3"]
const estadosAceptacion1 = ["q2"]

console.log("\nLenguaje: (aa ∪ ab ∪ ba ∪ bb)")
console.log( "Es un AFD finito? ", EsUnAFDFinito(tablaTransiciones1, conjuntoEstados1, estadosAceptacion1) , "\n");

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// No es finito
const tablaTransiciones2 = [
         // a  // b
  /*q0*/ ["q1", "q2"],
  /*q1*/ ["q2", "q0"],
  /*q2*/ ["q2", "q2"],
]

const conjuntoEstados2 = ["q0", "q1", "q2"]
const estadosAceptacion2 = ["q0"]

console.log("Lenguaje: (ab)*")
console.log( "Es un AFD finito? ", EsUnAFDFinito(tablaTransiciones2, conjuntoEstados2, estadosAceptacion2) , "\n");

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// No es finito
const tablaTransiciones3 = [
           // a  // b
    /*q0*/ ["q1", "q2"],
    /*q1*/ ["q1", "q3"],
    /*q2*/ ["q3", "q2"],
    /*q3*/ ["q3", "q3"],
  ];
  
  const conjuntoEstados3 = ["q0", "q1", "q2", "q3"];
  const estadosAceptacion3 = ["q1", "q2"];
  

console.log("Lenguaje: a* ∪ b*")
console.log( "Es un AFD finito? ", EsUnAFDFinito(tablaTransiciones3, conjuntoEstados3, estadosAceptacion3) , "\n");

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  
// No es finito
const tablaTransiciones4 = [
         // a  // b  
  /*q0*/ ["q1", "q0"],
  /*q1*/ ["q0", "q1"],
]

const conjuntoEstados4 = ["q0", "q1"]
const estadosAceptacion4 = ["q0"]

console.log("Lenguaje: (b*∪(ab*a)*)*")
console.log( "Es un AFD finito? ", EsUnAFDFinito(tablaTransiciones4, conjuntoEstados4, estadosAceptacion4) , "\n");
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// Es finito (ϵ)
const tablaTransiciones5 = [
  /*q0*/    [],
]

const conjuntoEstados5 = ["q0"]
const estadosAceptacion5 = ["q0"]

console.log("Lenguaje: ϵ")
console.log( "Es un AFD finito? ", EsUnAFDFinito(tablaTransiciones5, conjuntoEstados5, estadosAceptacion5) , "\n");

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// Es finito
const tablaTransiciones6 = [
  /*q0*/ ["q1", "q4", "q3"],
  /*q1*/ ["q4", "q2", "q4"],
  /*q2*/ ["q4", "q4", "q4"],
  /*q3*/ ["q4", "q4", "q4"],
  /*q4*/ ["q4", "q4", "q4"],
]

const conjuntoEstados6 = ["q0", "q1", "q2", "q3", "q4"]
const estadosAceptacion6 = ["q2", "q3"]

console.log("Lenguaje:  (ab ∪ c)")
console.log( "Es un AFD finito? ", EsUnAFDFinito(tablaTransiciones6, conjuntoEstados6, estadosAceptacion6) , "\n");
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


