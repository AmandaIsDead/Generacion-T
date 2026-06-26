# Anti Vibe Coding Challenge - Amanda Linale

<br>

 ## Caso 1 - Pokédex con favoritos
 
 ### Prompt original
 "Haceme una app de Pokémon con favoritos."
 
 ### Prompt mejorado
"Haceme una app de Pokémon en HTML, CSS y JS que utilice la PokéAPI. Que permita guardar favoritos (y también quitarlos) utilizando localStorage. Que tenga un diseño responsive, un estilo retro y un menú para buscar y filtrar (Por región y por tipo). Que se muestre un mensaje en pantalla (también con el estilo retro de la página) si se produce algún error, como un fallo en la API o la búsqueda de un Pokémon inexistente.
<br>
Generame los tres códigos: el index en HTML, el style en CSS y el script en JS."
 
 ### Qué información agregué
 Agregué varias funcionalidades que el código original no tenía, como:
 - **Estilo:** A diferencia del original, le agregué un estilo retro (tanto en la fuente como en la interfaz) porque sentía que era muy básico y había que darle una estética, también le pedí un diseño responsive.
 - **Favoritos:** Aunque en el original ya lo había hecho, en el prompt mejorado le aclaré que era necesario.
 - **Filtro:** Le pedí que agregara un buscador con un filtro (por región y por tipo) para que sea mucho más cómodo buscar a un Pokémon.
 - **Manejo de errores:** Le pedí que muestre un mensaje si se produce algún error.
 - **Lenguaje:** Le aclaré los lenguajes en los que debía hacerlo.
 
 ### Riesgos del prompt original
 El prompt original es muy simple, por lo que puede tener muchos riesgos, ya que no le aclaramos casi nada a la IA. Algunos de estos riesgos son, por ejemplo; un diseño poco estético o muy simple, un programa en un lenguaje que no queríamos, un mal manejo de errores (como que la página no te avise y te quedes mirando una pantalla en blanco), o que no haya ninguno en absoluto, etc.
 
 ### Código generado
 Código original ---> [Ver](https://github.com/AmandaIsDead/Generacion-T/tree/main/TP%201%20-%20Anti-Vibe%20Coding%20Challenge/Caso%201%20-%20Pok%C3%A9dex/C%C3%B3digo%20Original)
 <br>
 Código mejorado ---> [Ver](https://github.com/AmandaIsDead/Generacion-T/tree/main/TP%201%20-%20Anti-Vibe%20Coding%20Challenge/Caso%201%20-%20Pok%C3%A9dex/C%C3%B3digo%20Mejorado)
 
 ### Validación personal 
 A pesar de no tener tantos conocimientos sobre JS, puedo entender como funciona el código, ya que la IA también fue clara y lo estructuró de forma muy ordenada, agregó títulos a los bloques y funciones del mismo. 
 <br>
 Para validar el código, lo que haría sería ver si estan todos los Pókemon, utilizar el filtro, agregar un Pokémon a favoritos y ver si se guarda al cerrar la página (localStorage), generar algún error (como buscar un nombre inexistente) para ver si cumplió con el manejo de errores, etc.


<br> <br>

 ## Caso 3: App Star Wars para estudiantes
 
 ### Prompt original
"Haceme una página de Star Wars"
 
 ### Prompt mejorado
Haceme una página de Star Wars en HTML, CSS y JS utilizando SWAPI y Star Wars Visual Guide. Que sea una como una wiki, con un diseño responsive y una estética oscura, futurista y espacial, dividida en categorías, cada ítem con su respectiva información, personajes (planeta natal, año de nacimiento, etc), planetas (clima, etc), especies, naves, vehículos y películas. Que tenga una función para buscar personajes y que se puedan filtrar (por ejemplo, filtrar por género o por especie). Quiero que mientras se busquen datos, aparezca un mensaje que indique que la página está cargando, y, otro cuando ocurra un error.
<br>
Generame los tres códigos: el index en HTML, el style en CSS y el script en JS.
 
 ### Qué información agregué
  Agregué varias funcionalidades que el código original no tenía, como:
 - **APIs**: Aunque en la consigna no estaba, investigando, descubrí que existían APIs de Star Wars (SWAPI y Star Wars Visual Guide), así que claramente las incorporé al prompt.
 - **Estilo:** A diferencia del original, le agregué un estilo más futurista y espacial, para darle la ambientación de la franquicia, también le pedí un diseño responsive.
 - **Organización:** Le pedí a la IA que fuera una una página Wiki. Tambiénm que divida la página en categorías (Personajes, planetas, especies, etc).
 - **Filtro:** Le pedí que agregara un buscador, junto a un filtro (de género y especie) para que encontrar personajes sea más fácil.
 - **Manejo de errores:** Agregué un mensaje para cuanmdo ocurren errores, y otro para cuando la página está cargando.

 ### Riesgos del prompt original
El prompt original es muy básico, no se le aclara nada, ni siquiera el lenguaje. La IA no sabría, por ejemplo; cómo dividir la información, qué hacer/mostrar cuando ocurre un error, etc. Así terminaríamos teniendo un diseño poco estético, una página desordenada, muy simple y con poca información chequeable (al no pedirle que use APIs, la IA podría inventar algunos pedazos de información).
 
 ### Código generado
 Código original ---> [Ver](https://github.com/AmandaIsDead/Generacion-T/tree/main/TP%201%20-%20Anti-Vibe%20Coding%20Challenge/Caso%203%20-%20Star%20Wars/C%C3%B3digo%20Original)
 <br>
 Código mejorado ---> [Ver](https://github.com/AmandaIsDead/Generacion-T/tree/main/TP%201%20-%20Anti-Vibe%20Coding%20Challenge/Caso%203%20-%20Star%20Wars/C%C3%B3digo%20Mejorado)
 
 ### Validación personal
 Para empezar, el código generado no funciona correctamente, por lo que yo corregiría algunas cosas antes de usarlo:
 - Arreglar las categorías "Naves", "Vehículos" y "Películas", ya que no tienen contenido.
 - Solucionar el problema con SWVG (Star Wars Visual Guide), ya que las imágenes no cargan.
 - Permitir que todos los personajes carguen al entrar a la página, y que no solo aparezcan 12 (como ahora).
 - Renombrar las especies en la opción de filtrar por especies, al abrir el menú desplegable del filtro, estas aparecen como vínculos y no con su respectivo nombre (Humanos, Hutts, Ewoks, etc).
 - Corregir algunos datos erróneos, hay un par de datos que no son correctos (por ejemplo, la altura de Padmé, de Leia, etc).
 - Eliminar el botón de "Ver más", actualmente no funciona, y si se quiere tener una sola página principal (el index), menos uso tendrá todavía.
<br>
Por lo demás considero que es estéticamente muy atractivo y tiene potencial para ser muy profesional si se lo mejora, pero actualmente tiene muchos errores.
