# Trabajo Práctico - Diseñando el backend de mi aplicacion

<br>

## Nombre del proyecto: GameTracker

<br>

### Descripción:
GameTracker es una aplicación web que permite organizar una biblioteca personal de videojuegos y llevar un registro del progreso de cada uno.

<br>

### Entidades principales:
La entidad principal es Videojuego, con estos datos:

| Atributo | Descripción |
| :--- | ---: |
| id | Identificador único |
| Nombre | Nombre del videojuego |
| Plataforma | PC, PlayStation, Xbox, etc. |
| Género | Género del juego |
| Estado | Pendiente, Jugando o Completado |
| HorasJugadas | Cantidad de horas jugadas |
| FechaAgregado | Fecha en que se agregó |
| Calificación | Puntuación personal |
| Favorito | Si está marcado como favorito |
| Observaciones | Notas adicionales |

<br>

### Funcionalidades actuales:
- Agregar, editar y eliminar videojuegos.
- Buscar juegos por nombre.
- Filtrar por estado, plataforma y género.
- Marcar videojuegos como favoritos.
- Consultar los detalles de cada juego.

Persistencia actual: utiliza LocalStorage, que permite guardar los datos en el navegador, pero no en un servidor.

<br>

### Separación de responsabilidades:
| Frontend | Backend |
| :--- | ---: |
| Mostrar videojuegos y formularios. | Guardar y recuperar videojuegos. |
| Mostrar filtros y resultados. | Aplicar reglas de validación. |
| Gestionar interacciones y mensajes. | Crear, editar y eliminar registros. |
| Mostrar errores al usuario. | Controlar que los datos sean válidos. |

La idea es que el frontend deje de encargarse directamente del almacenamiento y empiece a comunicarse con el backend mediante peticiones HTTP.

<br>

### Endpoints propuestos:
Los endpoints son las direcciones que utiliza el frontend para comunicarse con el backend.
| Método | Endpoint | Función |
| :--- | :---: | ---: |
| GET | /api/games | Obtener todos los videojuegos. |
| GET | /api/games/:id | Obtener un videojuego específico. |
| POST | /api/games | Agregar un videojuego. |
| PUT | /api/games/:id | Modificar un videojuego. |
| DELETE | /api/games/:id | Eliminar un videojuego. |

<br>

### Arquitectura propuesta:
      Controller: Recibe las peticiones y devuelve las respuestas.
           ↓
      Service: Maneja las reglas de negocio y las validaciones.
           ↓
      Repository: Se ocupa de guardar y recuperar los datos.

Elegí separar el backend en Controller, Service y Repository porque cada capa tiene una responsabilidad diferente. Esto permite mantener el código ordenado, facilita los cambios y evita mezclar las reglas del negocio con el almacenamiento de datos.

<br>

### Una decisión de la IA que podemos cuestionar:

La IA sugirió agregar un sistema de registro e inicio de sesión con contraseñas.

Aunque podría ser útil en una aplicación con varios usuarios, GameTracker fue pensado como una biblioteca personal y no necesita cuentas para cumplir su objetivo. Agregar esa funcionalidad aumentaría innecesariamente la complejidad del proyecto.

<br>

### Una funcionalidad implementada:
Se implementó la funcionalidad de que usuario puede agregar juegos, en donde:
1. El usuario completa el formulario en GameTracker.
2. El frontend envía los datos al endpoint POST /api/games.
3. El Controller recibe la petición.
4. El Service valida los datos.
5. El Repository guarda el videojuego.
6. El backend devuelve una respuesta indicando si se pudo guardar.
