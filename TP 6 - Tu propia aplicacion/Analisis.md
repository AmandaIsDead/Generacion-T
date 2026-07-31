# Trabajo Práctico – Tu propia aplicación

<br>

# Nombre del proyecto: GameTracker

<br>

## Problema
A día de hoy, la gente disfruta de jugar muchos juegos, los cuales están repartidos en distintas tiendas (Steam, Epic) y distintos dispositivos (Computadora, consola, etc),
lo que hace difícil recordar cuáles se quieren jugar, cuáles se están jugando y cuáles ya se terminaron.
Esta aplicación está pensada para esos jugadores que prefieren tener su biblioteca de juegos ordenada, registrando el progreso y el estado de cada uno.

<br>

## Funcionalidades
* Agregar videojuegos.
* Editar la información de un videojuego.
* Eliminar videojuegos.
* Buscar juegos por nombre.
* Filtrar por estado (Jugando, Pendiente, Completado).
* Marcar juegos como favoritos.
* Ordenar por fecha de agregado o calificación.

<br>

## Datos
Cada videojuego debe tener:
ID
Nombre
Plataforma
Género
Estado
Horas jugadas
Fecha de agregado
Calificación (1-10)
Favorito (Sí/No)
Observaciones

<br>

## SPEC
#### Objetivo
Crear una aplicación web que permita organizar una biblioteca personal de videojuegos.
El usuario podrá registrar los juegos que tiene, llevar un seguimiento de su progreso y encontrar fácilmente cualquier título.

#### Usuario
Está dirigida a personas que juegan videojuegos y quieren mantener organizada su colección,
ya sea para recordar qué juegos terminaron, cuáles están jugando o cuáles tienen pendientes.

#### Funcionalidades
* Agregar, editar y eliminar videojuegos.
* Buscar juegos por nombre.
* Filtrar por estado (Pendiente, Jugando, Completado).
* Marcar juegos como favoritos.
* Ver información detallada de cada juego.

#### Restricciones
* Debe ser una aplicación sencilla y fácil de usar.
* No requiere crear una cuenta.
* La información debe guardarse aunque se cierre la página.
* Debe funcionar correctamente tanto en computadora como en celular.

#### Tecnología elegida
HTML, CSS y JavaScript, utilizando LocalStorage para guardar los datos.

<br>

## Prompt profesional
Quiero desarrollar una aplicación web llamada **"GameTracker"**, destinada a organizar una biblioteca personal de videojuegos.
La aplicación debe desarrollarse utilizando HTML, CSS y JavaScript, almacenando los datos mediante LocalStorage.
Debe permitir crear, editar, eliminar, buscar y filtrar videojuegos. Cada videojuego tendrá nombre, plataforma, género, estado, horas jugadas, fecha de agregado, calificación, favorito y observaciones.
La interfaz debe ser moderna, con un diseño responsive y sencilla de utilizar.
El código debe estar correctamente dividido, comentado cuando sea necesario y separado en archivos HTML, CSS y JavaScript.
Se deben validar los datos ingresados y mostrar mensajes de error amigables y fáciles de entender cuando corresponda.
El proyecto debe seguir buenas prácticas de programación para facilitar futuras ampliaciones.

<br>

## Challenge de validación
Antes de aceptar el código generado se debe verificar que:
* Todas las funcionalidades funcionen correctamente.
* Los videojuegos puedan agregarse, editarse y eliminarse.
* La búsqueda encuentre resultados correctos.
* Los filtros funcionen correctamente.
* Los datos permanezcan guardados luego de cerrar la página.
* La interfaz sea clara y fácil de usar.
* Exista validación de datos.
* El código esté organizado y sea fácil de mantener.
