const generarNumeroAleatorio = () => { //verificarAdivinanza: Es una función que recibe dos parámetros: 
    //numeroSecreto (el número secreto a adivinar) y numeroAdivinado (el número propuesto para adivinar). 
    //Compara estos dos números y muestra mensajes por consola según la situación.
    return Math.floor(Math.random() * 100) + 1; // Utiliza Math.random() para generar un número decimal entre 0 y 1 (sin incluir el 1)
    }; //Math.floor() para redondear hacia abajo y obtener un número entero entre 0 y 99

    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) { /**El operador === (igualdad estricta) es más estricto
     y requiere que tanto el valor como el tipo de los operandos sean iguales para que la condición sea verdadera.
      Por otro lado, el operador == (igualdad no estricta) intenta convertir los operandos a un tipo común antes 
      de realizar la comparación, lo que a veces puede conducir a resultados inesperados. Ocurria un error al usar el operador === 
      pero se soluciono usando "numeroAdivinado = Math.floor(obtenerNumeroUsuario())" math.floor cambio el tipo de dato 
      que daba obtenernumerousuario para que coincidieran, ya que la funcion obtenernumerousuario daba una cadena de caracteres */
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
    };
    module.exports = { /* utiliza module.exports para exportar ambas funciones (generarNumeroAleatorio y verificarAdivinanza) como un objeto. 
    Esto sugiere que este código probablemente sea parte de un entorno de Node.js o algún otro entorno que use CommonJS para exportar módulos. */
    generarNumeroAleatorio,
    verificarAdivinanza
    };