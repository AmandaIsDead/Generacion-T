# Trabajo Práctico - Analizar antes de pedir

<br>

## Los tres problemas

- <b>No se limita la cantidad de tickets que consulta.</b>

Actualmente hay solamente 5 tickets, pero si en el futuro la base de datos tiene miles, cada petición GET /tickets traerá todos los registros. Esto puede hacer que las consultas tarden más, consuman más memoria y la aplicación se vuelva lenta.

- <b>Se utiliza SELECT * en lugar de especificar las columnas necesarias.</b>

La función trae todas las columnas de la tabla, incluso aquellas que quizás no se necesitan para mostrar los tickets. Si más adelante se agregan campos con información extensa, como descripciones o comentarios, las respuestas pueden ocupar mucho más espacio y tardar más en procesarse.

- <b>No se validan ni controlan los datos de conexión de manera completa.</b>

La función comprueba que exista DB_SERVER, pero no verifica que DB_DATABASE tenga un valor. Si falta esa variable o está mal configurada, la consulta puede fallar cuando se intente acceder a la base de datos.

<br>

## Prompt
"Quiero que refactorices la función queryTicketRows para mejorar su rendimiento y facilitar su mantenimiento a medida que crezca el sistema.

Tené en cuenta los siguientes objetivos:
- Evitar consultar todos los registros de la tabla cuando la cantidad de tickets sea muy grande. Implementá un mecanismo de paginación para poder recuperar los tickets por grupos.
- Reemplazar el uso de SELECT * por una selección explícita de las columnas necesarias.
- Validar las variables de entorno necesarias para conectarse a SQL Server, incluyendo DB_SERVER y DB_DATABASE, mostrando errores claros si falta alguna.

Límites que debés respetar:
- Mantener el uso de SQL Server y sqlcmd.
- Conservar la ejecución asíncrona mediante promisify y execFile.
- Mantener el formato JSON de respuesta.
- No modificar otras partes del proyecto ni agregar dependencias innecesarias.

Antes de realizar los cambios, explicá brevemente qué modificaciones vas a implementar y por qué."

<br>

## Justificación del prompt
Incluimos en el prompt el contexto de que el sistema puede crecer porque la función actualmente trabaja con pocos registros, pero podría tener que procesar miles de tickets en el futuro.

Elegimos pedir paginación para evitar que cada consulta tenga que recuperar todos los registros. También indicamos que se seleccionen únicamente las columnas necesarias para reducir la cantidad de información transferida.

Además, pedimos validar todas las variables de entorno necesarias para evitar errores de configuración difíciles de identificar.

Decidimos establecer límites para que la IA no cambie tecnologías ni modifique otras partes del proyecto. Por eso indicamos que debe conservar SQL Server, sqlcmd, la ejecución asíncrona y el formato JSON.

De esta manera, la IA tiene instrucciones concretas sobre qué mejorar y qué debe conservar, sin dejar que tome decisiones importantes sobre la estructura del sistema.
