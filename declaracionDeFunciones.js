/*
 * Idea General:
 *  Un bucle itera sobre cada estado de aceptación llamando la funcion 'recorridoSinBucles()'
 *  la cual retorna true si el recorrido llega hasta el estado inicial sin recorrer bucles
 *  y retorna false en caso contrario
 */

function EsUnAFDFinito(tablaTransiciones, conjuntoEstados, estadosAceptacion) {
  return estadosAceptacion
    .map((estadoAceptacion) => recorridoSinBucles(estadoAceptacion, tablaTransiciones, conjuntoEstados))
    .reduce((acumulador, estadoEvaluado) => acumulador && estadoEvaluado);
}


/*
 *  La funcion 'recorridoSinBucles()' retorna true si el recorrido llega hasta el estado
 *  inicial sin recorrer bucles y retorna false en caso contrario
 */

function recorridoSinBucles(estado, tablaTransiciones, conjuntoEstados, estadosVisitados = []) {
  if (apuntaASiMismo(estado, tablaTransiciones, conjuntoEstados)) return false;

  if (estadosVisitados.some((estadoVisitado) => estadoVisitado === estado))
    return false;

  const estadosPrevios = estadosQueApuntanAEsteEstado(estado, tablaTransiciones, conjuntoEstados);

  if (estadosPrevios.length > 0)
    for (let indice = 0; indice < estadosPrevios.length; indice++)
      return recorridoSinBucles(estadosPrevios[indice], tablaTransiciones, conjuntoEstados, [...estadosVisitados, estado]);

  return true;
}


/**
 *  La funcion apuntaASiMismo() retorna true en caso de que la siguiente transicion de un estado
 *  pueda llevar a ese mismo estado, en caso contrario retorna false
 */

function apuntaASiMismo(estado, tablaTransiciones, conjuntoEstados) {
  let respuesta = false;
  const indiceEstado = conjuntoEstados.indexOf(estado);
  respuesta = tablaTransiciones[indiceEstado].some((x) => x === estado);
  return respuesta;
}


/**
 *  La funcion estadosQueApuntanAEsteEstado() recibe como argumento un estado y retorna un arreglo
 *  con los estados que en alguna de sus siguientes transiciones apuntan a este estado, en caso de
 *  no encontrar ningun estado que referencie al argumento estado retornará un arreglo vacio
 */

function estadosQueApuntanAEsteEstado( estado, tablaTransiciones, conjuntoEstados) {
  let estados = [];
  const indiceEstado = conjuntoEstados.indexOf(estado);

  tablaTransiciones.map((transiciones, indice) => {
    if (indiceEstado != indice) {
      if (transiciones.some((x) => x === estado)) {
        estados.push(conjuntoEstados[indice]);
      }
    }
  });

  return estados;
}

module.exports = EsUnAFDFinito;