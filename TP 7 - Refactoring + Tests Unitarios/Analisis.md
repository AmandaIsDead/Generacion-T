# Trabajo Práctico – Refactoring + Tests Unitarios

<br>

# Nombre del proyecto: GameTracker

Código anterior --> [Acá](https://github.com/AmandaIsDead/Generacion-T/tree/main/TP%206%20-%20Tu%20propia%20aplicacion/GameTracker)

Código refactorizado --> [Acá](https://github.com/AmandaIsDead/Generacion-T/tree/main/TP%207%20-%20Refactoring%20%2B%20Tests%20Unitarios/GameTracker%20(Actualizado))

<br>

## Funcionalidad elegida: validateForm(), ubicada en app.js.
Esta función se encarga de comprobar que los datos ingresados en el formulario sean correctos antes de guardar un videojuego.

| Aspecto	| Observación |
| :--- | ---: |
| Duplicación | Se repite el patrón de mostrar errores para distintos campos. |
| Función extensa | Tiene varias comprobaciones dentro de una misma función. |
| Responsabilidades mezcladas | Comprueba los datos y también modifica elementos del HTML. |
| Nombres | Los nombres son bastante claros y descriptivos. |
| Simplificación | 	Se podría separar la validación de la presentación de errores. |

<br>

## Mejora propuesta
Separar la lógica de validación de la manipulación del HTML.

Actualmente, validateForm() realiza ambas tareas. La propuesta es dividirlas en:
- validateGameData(): recibe los datos y comprueba si son válidos.
- validateForm(): obtiene los datos del formulario y muestra los errores correspondientes.

<br>

## Tests unitarios:

### Se realizaron cuatro pruebas:
- Caso correcto: comprueba que un videojuego con datos válidos sea aceptado.
- Caso inválido: verifica que se detecten un nombre y una plataforma vacíos.
- Caso límite: comprueba que se acepte un nombre de dos caracteres y cero horas jugadas.
- Horas inválidas: verifica que no se permitan cantidades negativas.

### Resultado:
- Los cuatro tests fueron ejecutados correctamente. Se obtuvieron 4 pruebas aprobadas y 0 fallidas.
- El comportamiento original de la validación se mantiene, pero ahora el código tiene responsabilidades mejor separadas y resulta más sencillo de probar y mantener.
