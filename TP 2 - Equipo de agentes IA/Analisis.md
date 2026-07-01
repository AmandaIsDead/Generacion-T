# Trabajo Práctico – Diseñando un Equipo de Agentes IA

<br>

## Proyecto: Aplicación para gestionar turnos médicos online

### 1. ¿Qué agentes crearías?

Diseñé un equipo de 5 agentes especializados para hacer la aplicación:

* Agente Orquestador
* Agente de Interfaz y Atención al Paciente
* Agente de Derivación
* Agente de Gestión de Agendas
* Agente de Notificaciones y Recordatorios

<br>

### 2. ¿Cuál sería la función de cada agente?

* **Agente Orquestador:** Su función es centralizar el flujo de trabajo. Asignar las tareas al resto del equipo, recibir los reportes y gestionar las dependencias para asegurar que el proceso de reserva sea fluido y sin errores.
* **Agente de Interfaz y Atención al Paciente:** Su función es interactuar directamente con el usuario. Se encarga de solicitar los datos personales del paciente, comprender qué tipo de turno necesita y responder preguntas frecuentes.
* **Agente de Derivación** Su función es analizar el motivo de la consulta haciendo preguntas sencillas sobre los síntomas. Con esta información, asiste al paciente sugiriendo la especialidad médica correcta antes de buscar si hay disponibilidad.
* **Agente de Gestión de Agendas:** Su función es administrar los calendarios médicos. Se conecta con las bases de datos para buscar disponibilidad de profesionales, bloquea los horarios una vez que el paciente elige una opción y gestiona cancelaciones.
* **Agente de Notificaciones y Recordatorios:** Su función es gestionar la comunicación externa posterior a la reserva. Envía correos electrónicos o mensajes para confirmar el turno y emite recordatorios 24 horas antes de la cita.

<br>

### 3. ¿Cómo se comunicarían?

El proceso de comunicación se divide en:

* **Emisión de instrucciones:** Cada agente del equipo recibe instrucciones claras y directivas específicas únicamente por parte del Orquestador. No se comunican entre ellos directamente.
* **Autonomía en la tarea:** Una vez recibida la instrucción, cada agente trabaja de forma completamente autónoma enfocándose en su especialidad.
* **Reporte de avances:** Al finalizar su proceso, el agente reporta sus resultados de vuelta al Orquestador.
* **Integración y gestión de dependencias:** El Orquestador recibe la información, integra todos los resultados y gestiona las dependencias entre tareas.
