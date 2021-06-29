// Explicar que hace y encontrar el error en el script, resolver al menos uno:

/*

<!DOCTYPE html>
<html>
<body>
<script>
  function myFunction() {
    var tt = []
    tt['1']=1;
    tt['100']=2;
    document.getElementById("resultado").innerHTML =
tt['100'];
}
myFunction();
</script>

Mensaje:
<div id="resultado"><div></div>


  </body>
</html>

*/

//Respuesta

//El script crea una función en la cual se declaran un array vacio ,
// al cual se le asigna un 1 en la posicion 1 y un 2 en la posicion 100
// se obtiene una referencia del objeto del DOM con id=resultado
// donde mediante innerHTML se cambia su contenido a el contenido en la posicion 100 del array

//El error esta en llamar el script antes de que el elemento del DOM con id=resultado
//es creado , se puede solucionar pasando el script a la parte inferior del body o con
//el metodo window.onload.
