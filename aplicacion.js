const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza'); /*require() para importar dos 
funciones (generarNumeroAleatorio y verificarAdivinanza) desde un módulo llamado './adivinanza'. */
const obtenerNumeroUsuario = () => {
return readlineSync.question('Ingresa un numero: '); /* se utiliza readlineSync.question() para solicitar 
al usuario que ingrese un número y luego devuelve ese número ingresado. asegúrate de haber instalado la biblioteca 
readline-sync en tu proyecto con el comando "npm install readline-sync". ya que readlineSync.question() 
no es una función nativa de JavaScript. Esta función generalmente se utiliza en Node.js para leer la entrada del usuario desde la consola de manera síncrona.*/
};
const juegoAdivinanza = () => {
const numeroSecreto = generarNumeroAleatorio();
let numeroAdivinado = 0;
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
while (numeroAdivinado !== numeroSecreto) { /**utilizamos la sentencia iterativa “while” para que la
aplicación continúe ejecutándose hasta que el usuario adivine el número. */
numeroAdivinado = Math.floor(obtenerNumeroUsuario());
verificarAdivinanza(numeroSecreto, numeroAdivinado);
}
};
juegoAdivinanza();
process.exit(0);