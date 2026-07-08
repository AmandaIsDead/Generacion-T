# Trabajo Práctico – Diseñando una Automatización con IA

<br>

## Caso 1 - StreamFlix: Recomendador Inteligente de Películas

### 1. ¿Por qué elegí este caso?
Elegí este caso porque me pareció interesante, es un problema muy real a día de hoy.
Las plataformas de streaming tienen catálogos muy grandes y muchas veces los usuarios tardan demasiado en encontrar algo para ver.
Un recomendador inteligente ayudaría a ahorrar tiempo y ofrecer contenido adaptado a los gustos de cada persona, mejorando su experiencia.

### 2. Problema a resolver
Los usuarios pasan varios minutos buscando una película o serie entre miles de opciones y muchas veces terminan viendo siempre lo mismo o abandonando la plataforma sin elegir nada.
El objetivo es utilizar la Inteligencia Artificial para analizar los gustos de cada usuario y recomendar contenido personalizado.

### 3. Diagrama de flujo
Diagrama de flujo ---> [Ver](https://github.com/AmandaIsDead/Generacion-T/blob/main/TP%203%20-%20Automatizacion%20con%20IA/Diagrama.png)

### 4. Herramientas utilizadas
* Inteligencia Artificial: Para analizar los gustos del usuario y generar recomendaciones.
* Base de datos: Para guardar el historial de visualización, preferencias y calificaciones.
* API de películas - TMDB (The Movie Database): Para obtener información actualizada sobre películas y series, como imágenes, géneros, sinopsis y estrenos.
* Aplicación o sitio web "StreamFlix": Nuestra app/página de streaming, allí es donde se muestran las recomendaciones al usuario.

### 5. Explicación paso a paso
* El usuario inicia sesión.
* El sistema consulta su historial y preferencias.
* La IA analiza toda esa información.
* También compara usuarios con gustos similares.
* Busca películas o series compatibles con esos intereses.
* Genera un ranking de recomendaciones.
* Muestra las sugerencias en la pantalla principal.
* Cada nueva acción del usuario sirve para seguir entrenando el sistema y mejorar las próximas recomendaciones.

### 6. Beneficios esperados
#### Para los usuarios:
- Menos tiempo buscando qué mirar.
- Recomendaciones más acertadas.
- Descubrimiento de nuevo contenido.
- Experiencia más personalizada.
#### Para StreamFlix:
- Mayor tiempo de uso de la plataforma.
- Más visualizaciones.
- Mayor fidelización de clientes.
- Incremento en las suscripciones.
- Mayor conocimiento de las preferencias de los usuarios.

### 7. Posibles mejoras futuras
* Recomendaciones según el estado de ánimo (por ejemplo, algo divertido, algo para llorar, etc).
* Recomendaciones basadas en la época del año (Halloween, Navidad, vacaciones, etc).
* Explicar por qué se recomienda cada película (por ejemplo: "Te recomendamos esta película porque viste esta otra", o "Te recomendamos esta serie porque viste mucho de este género").
* Integrar un chatbot con IA para que el usuario pueda escribir cosas como "Quiero una comedia romántica de menos de dos horas" y recibir sugerencias instantáneas.
* Crear perfiles más precisos que distingan los gustos de diferentes personas que comparten una misma cuenta.
