                                                                       
//Escalera
    let texto = "";

  for (let n = 0; n  <= 100; n++)
   {
    texto = texto + "*";
    console.log(texto)
    
  }


  //Libro

  function calcularVueltas(numeroPaginas, paginaObjetivo) {
    if (paginaObjetivo < 1 || paginaObjetivo > numeroPaginas) {
      return "Página objetivo fuera de rango";
    }
  
    const vueltasFrente = Math.floor((paginaObjetivo - 1) / 2);
    const vueltasAtras = Math.floor((numeroPaginas - paginaObjetivo) / 2);
    const totalVueltas = vueltasFrente + vueltasAtras;
    return totalVueltas;
  }
  const totalPaginas = 10;
  const paginaObjetivo = 6;
  
  const vueltas = calcularVueltas(totalPaginas, paginaObjetivo);
  console.log("Número de vueltas necesarias: " + vueltas);

//aves
var aves = [4,4,2,2,3];
console.log("tipos de aves ");

for(var i =0; i <aves.length; i++){
  console.log(aves[i] + " tipos de aves");
}
console.log(" id de aves  mas repetidos ");
for(var j = 0; j <aves.length; j++){
  for(var l = j +1; l < aves.length; l++){
    if(aves[j] == aves[l]){
      console.log(aves[l] + " id de aves mas repetidos ");
    }
  }
}
