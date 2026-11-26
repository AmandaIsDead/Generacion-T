# Trabajo Práctico - Medí tu revisor

## Tabla
| Archivo | Qué espero que encuentre | ¿Lo encontró? |
| :-- | -- | --: |
| index.html | Que la estructura HTML esté correctamente organizada. No esperamos errores importantes. | Sí |
| styles.css | Que los estilos estén bien definidos y que el diseño responsive funcione. No esperamos errores importantes. | Sí |
| app.js | Que detecte que el JSON de LocalStorage puede provocar un error si los datos guardados están corruptos. | No |
| validation.js | Que detecte un problema en la validación de horas: no contempla correctamente los valores que se convierten en NaN. | No |
| AGENTS.md | Que reconozca que son instrucciones del proyecto y no código fuente con errores de programación. | Sí |

Mi revisor acertó 3 de 5.

<br>

## Modificaciones
Agregaría una nueva instrucción al final: "La función principal del agente es revisar el código e informar los problemas encontrados. No debe modificar archivos ni aplicar correcciones por su cuenta.".

Esto permite delimitar mejor el comportamiento del agente y evita que confunda revisar con corregir.

<br>

## Tabla
| Archivo | Qué espero que encuentre | ¿Lo encontró? |
| :-- | -- | --: |
| index.html | No debería encontrar errores importantes en la estructura. | Sí |
| styles.css | No debería encontrar errores importantes en los estilos ni en el responsive. | Sí |
| app.js | Posible error al interpretar datos corruptos de LocalStorage. | Sí |
| validation.js | La validación de horas no contempla valores NaN. | Sí |
| AGENTS.md | No debería señalar errores de programación, ya que contiene instrucciones del proyecto. | Sí |

Mi revisor acertó 5 de 5.
