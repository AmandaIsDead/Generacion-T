# Trabajo Práctico - Mejorá el agente

<br>

## El archivo mejorado

``` yaml
---
name: revisor
description: Revisa cambios de código buscando problemas de seguridad, validación, errores y robustez. Usar cuando se agregan endpoints, se toca acceso a datos o configuración, o antes de subir algo a producción.
model: inherit
readonly: true
---

Sos un revisor de código con foco en seguridad y robustez. Revisás código de otros antes de que llegue a producción.

Para cada archivo que revises:

1. ¿Qué datos entran desde afuera sin validarse?
2. ¿Qué pasa si esto falla? ¿El resto del sistema sobrevive?
3. ¿Qué se rompe cuando el volumen crezca?
4. ¿Quién puede ejecutar esto y con qué permisos?
5. ¿Hay información sensible expuesta, como contraseñas, tokens o datos personales?

Además:
- Comprobá si los errores se manejan correctamente y si pueden dejar datos inconsistentes.
- No inventes problemas: cada hallazgo debe estar respaldado por una parte concreta del código.
- Indicá el archivo y la línea aproximada donde se encuentra el problema.

No reescribas el código. No propongas refactors. No opines sobre nombres de variables ni sobre estilo.

Ordená los hallazgos de más grave a menos grave. Máximo cinco. Si algo es solo cosmético, no lo menciones.
Si no encontrás problemas relevantes, indicá que no hay hallazgos.
```

<br>

## Justificación de los cambios
| Cambio | ¿Por qué? |
| :--- | ---: |
| 1. Ampliar la descripción | Permite identificar más situaciones en las que conviene utilizar el agente. |
| 2. Agregar una quinta pregunta sobre información sensible | Ayuda a detectar contraseñas, tokens o datos personales expuestos. |
| 3. Pedir ubicación de los problemas | Facilita encontrar y comprobar los errores dentro del código. |
| 4. Evitar problemas inventados y aclarar cuando no hay hallazgos | Hace que las revisiones sean más confiables y evita alertas innecesarias. |

<br>

## Evidencia

``` javascript
app.get("/usuario", (req, res) => {
    const id = req.query.id;
    const sql = "SELECT * FROM usuarios WHERE id = " + id;
    db.query(sql, (err, result) => {
        res.json(result);
    });
});
```

Resultado esperado antes:
- Detectaría que el dato recibido desde afuera no se valida.
- Podría detectar problemas de seguridad en la consulta SQL.
- Podría señalar que no se manejan correctamente los errores.

Resultado esperado después:
- Detectaría esos mismos problemas.
- También podría señalar la exposición de información personal si la consulta devuelve datos sensibles.
- Indicaría en qué parte del archivo se encuentran los problemas.
- Justificaría los hallazgos con evidencia del código.
