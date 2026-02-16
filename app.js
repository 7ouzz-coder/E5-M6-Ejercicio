// Importamos Yargs
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Configuramos nuestro comando 'crear'
const argv = yargs(hideBin(process.argv))
  .command('crear', 'Crea una nueva tarea', {
    // Aquí definimos qué parámetros necesita el comando
    titulo: {
      describe: 'El título de la tarea',
      demandOption: true,  // Este campo es obligatorio
      type: 'string'
    }
  }, (argv) => {
    // Esta función se ejecuta cuando alguien usa el comando
    try {
      // Si todo sale bien, mostramos un mensaje de éxito
      console.log(`Tarea "${argv.titulo}" creada exitosamente.`);
    } catch (error) {
      // Si algo sale mal, capturamos el error aquí
      console.error('Ha ocurrido un error inesperado.');
      console.error('Detalles:', error.message);
    }
  })
  .demandCommand(1, 'Debes especificar un comando. Usa --help para ver las opciones.')
  .help()  // Esto agrega el menú de ayuda automático
  .alias('help', 'h')  // Permite usar -h como atajo
  .argv;