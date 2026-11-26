# Proyecto Final - PetCare: Sistema de Gestión Veterinaria Inteligente

## SPEC

## 1. Descripción general
PetCare es un sistema de gestión veterinaria que incorpora una inteligencia artificial conversacional para facilitar la atención de los clientes y optimizar las tareas administrativas de una clínica veterinaria.

La plataforma permitirá a los clientes registrar sus mascotas, solicitar turnos, seleccionar veterinarios según su especialidad, consultar historiales clínicos, revisar calendarios de vacunación y recibir recordatorios sobre tratamientos y controles.

La inteligencia artificial funcionará como asistente virtual principal, permitiendo que los usuarios interactúen con el sistema mediante lenguaje natural. Podrá consultar información almacenada, orientar a los clientes y asistirlos durante la realización de diferentes operaciones.

El sistema contará con veterinarios de distintas especialidades, cada uno con sus propios horarios y disponibilidad.

También dispondrá de un panel administrativo desde el cual se podrán gestionar los usuarios, mascotas, profesionales, turnos y servicios de la clínica.

La IA no reemplazará la atención profesional ni realizará diagnósticos médicos definitivos. Su función será brindar orientación general y facilitar el acceso a los servicios veterinarios.

<br>

## 2. Objetivo principal
Desarrollar un sistema inteligente que centralice la gestión de una clínica veterinaria y facilite la comunicación entre clientes, veterinarios y personal administrativo.

El objetivo será automatizar tareas habituales, reducir los tiempos de gestión y mejorar el seguimiento de la salud de las mascotas.

PetCare buscará ofrecer una experiencia sencilla e intuitiva, permitiendo que los clientes puedan gestionar las necesidades de sus animales mediante un asistente virtual disponible las 24 horas.

<br>

## 3. Tipos de usuarios
- Visitante: puede consultar información general sobre la clínica, sus servicios, especialidades y veterinarios disponibles.
- Cliente registrado: puede registrar sus mascotas, solicitar y administrar turnos, consultar historiales clínicos, revisar vacunas y utilizar el asistente virtual.
- Veterinario: puede consultar sus turnos asignados, acceder a los historiales clínicos de sus pacientes y registrar consultas, diagnósticos profesionales, tratamientos y vacunas.
- Administrador: posee acceso a la gestión general del sistema. Puede administrar usuarios, veterinarios, especialidades, horarios, turnos y servicios.

<br>

## 4. Funcionalidades principales
### 4.1. Atención mediante inteligencia artificial
La IA será el principal medio de interacción entre los clientes y PetCare.

Deberá permitir:
- Responder consultas generales sobre el funcionamiento de la clínica.
- Informar las especialidades veterinarias disponibles.
- Recomendar profesionales según el motivo de consulta.
- Consultar los datos de las mascotas registradas por el usuario.
- Asistir durante la solicitud de turnos.
- Consultar horarios y disponibilidad de veterinarios.
- Informar sobre vacunas y controles pendientes.
- Consultar información de historiales clínicos autorizados.
- Recordar turnos y tratamientos registrados.
- Derivar situaciones que requieran evaluación profesional.
- Reconocer cuándo una consulta puede representar una urgencia veterinaria.

La IA deberá utilizar información real almacenada en el sistema para responder consultas relacionadas con usuarios, mascotas, turnos y registros médicos.

No podrá inventar información, modificar historiales clínicos por cuenta propia ni indicar diagnósticos o medicamentos como si fuera un profesional veterinario.

### 4.2. Gestión de usuarios
El sistema permitirá:
- Registrar nuevos clientes.
- Iniciar y cerrar sesión.
- Modificar datos personales.
- Consultar información de la cuenta.
- Administrar las mascotas asociadas a cada usuario.
- Consultar el historial de operaciones realizadas.
- Gestionar permisos según el tipo de usuario.

### 4.3. Gestión de mascotas
Cada cliente podrá registrar una o varias mascotas.

El sistema deberá permitir:
- Registrar nombre, especie, raza, fecha de nacimiento y sexo.
- Registrar peso y características particulares.
- Agregar fotografías de las mascotas.
- Modificar información.
- Consultar el perfil de cada animal.
- Consultar su historial clínico.
- Consultar vacunas y tratamientos.
- Registrar observaciones importantes, como alergias o antecedentes médicos.

Cada mascota tendrá un identificador único y estará asociada a un cliente registrado.

### 4.4. Gestión de veterinarios y especialidades
La clínica contará con profesionales de distintas especialidades.

El sistema permitirá:
- Consultar los veterinarios disponibles.
- Visualizar sus perfiles profesionales.
- Consultar sus especialidades.
- Informar sus horarios de atención.
- Consultar su disponibilidad.
- Seleccionar un veterinario al solicitar un turno.
- Recomendar profesionales según el motivo de consulta.
- Permitir al administrador registrar, modificar o desactivar veterinarios.

Algunas especialidades posibles serán:
- Clínica médica general.
- Dermatología veterinaria.
- Cardiología veterinaria.
- Oftalmología veterinaria.
- Traumatología.
- Odontología veterinaria.
- Cirugía.

Cada veterinario podrá contar con una o varias especialidades.

### 4.5. Sistema de turnos
Los clientes podrán solicitar turnos mediante la plataforma o el asistente virtual.

El procedimiento será:
- Seleccionar una mascota.
- Indicar el motivo de consulta.
- Consultar las especialidades disponibles.
- Seleccionar un veterinario.
- Consultar sus horarios disponibles.
- Elegir una fecha y horario.
- Revisar los datos del turno.
- Confirmar la solicitud.
- Recibir la confirmación correspondiente.

El sistema también permitirá:
- Consultar turnos próximos y anteriores.
- Modificar turnos existentes.
- Cancelar turnos según las políticas de la clínica.
- Consultar la disponibilidad actualizada.
- Evitar reservas duplicadas.
- Registrar el estado de cada turno.
- Los turnos tendrán estados como pendiente, confirmado, realizado y cancelado.

### 4.6. Historial clínico
Cada mascota contará con un historial clínico donde se almacenará la información de sus consultas veterinarias.

El sistema permitirá:
- Consultar consultas anteriores.
- Registrar fechas de atención.
- Registrar motivos de consulta.
- Registrar observaciones profesionales.
- Incorporar diagnósticos realizados por veterinarios.
- Registrar tratamientos indicados.
- Consultar antecedentes médicos.
- Consultar la evolución del paciente.

Los registros clínicos solamente podrán ser creados o modificados por profesionales autorizados.

Los clientes podrán consultar la información de sus propias mascotas, pero no modificar los registros médicos realizados por los veterinarios.

### 4.7. Gestión de vacunas
El sistema permitirá llevar un seguimiento de las vacunas y tratamientos de cada mascota.

Deberá permitir:
- Registrar vacunas aplicadas.
- Registrar fechas de aplicación.
- Consultar próximas dosis.
- Registrar tratamientos indicados por veterinarios.
- Consultar fechas de inicio y finalización.
- Registrar indicaciones profesionales.
- Generar recordatorios de vacunas y controles.
- Informar sobre tratamientos próximos a finalizar.

La IA podrá consultar estos registros y comunicar al cliente las fechas importantes.

No podrá indicar nuevas vacunas, cambiar dosis ni modificar tratamientos por iniciativa propia.

### 4.8. Notificaciones y recordatorios
El sistema enviará notificaciones relacionadas con las actividades de la clínica.

Podrá notificar sobre:
- Confirmaciones de turnos.
- Modificaciones y cancelaciones.
- Próximas consultas.
- Vacunas pendientes.
- Próximos controles.
- Tratamientos registrados.
- Cambios en los horarios de atención.
- Nuevos servicios disponibles.

Las notificaciones podrán visualizarse dentro de la plataforma y, si se implementa la integración correspondiente, enviarse mediante correo electrónico.

### 4.9. Panel administrativo
El administrador contará con un panel para gestionar el funcionamiento general de PetCare.

Deberá permitir:
- Consultar clientes registrados.
- Consultar mascotas.
- Registrar y administrar veterinarios.
- Gestionar especialidades.
- Configurar horarios de atención.
- Consultar y administrar turnos.
- Gestionar servicios veterinarios.
- Consultar estadísticas generales.
- Administrar permisos de usuarios.

### 4.10. Gestión de consultas veterinarias
Los veterinarios podrán administrar las consultas realizadas en la clínica.

El sistema permitirá:
- Consultar la agenda de atención.
- Visualizar los datos del paciente.
- Consultar sus antecedentes clínicos.
- Registrar el motivo de consulta.
- Incorporar observaciones.
- Registrar diagnósticos profesionales.
- Indicar tratamientos.
- Registrar vacunas aplicadas.
- Finalizar una consulta y actualizar el historial clínico.

<br>

## Requisitos funcionales
| Código | Requisito |
| :-- | --: |
| RF01 | Registrar clientes en el sistema. |
| RF02 | Permitir el inicio y cierre de sesión. |
| RF03 | Registrar una o varias mascotas por cliente. |
| RF04 | Consultar y modificar los datos de las mascotas. |
| RF05 | Consultar las especialidades veterinarias. |
| RF06 | Consultar los perfiles de los veterinarios. |
| RF07 | Consultar horarios y disponibilidad profesional. |
| RF08 | Solicitar turnos veterinarios. |
| RF09 | Modificar o cancelar turnos. |
| RF10 | Evitar la asignación de turnos superpuestos. |
| RF11 | Generar identificadores únicos para los turnos. |
| RF12 | Consultar el historial de turnos. |
| RF13 | Registrar consultas veterinarias. |
| RF14 | Registrar diagnósticos y observaciones profesionales. |
| RF15 | Consultar historiales clínicos. |
| RF16 | Registrar vacunas y sus fechas de aplicación. |
| RF17 | Registrar tratamientos indicados por veterinarios. |
| RF18 | Consultar vacunas y tratamientos pendientes. |
| RF19 | Generar recordatorios automáticos. |
| RF20 | Enviar notificaciones sobre turnos y controles. |
| RF21 | Permitir que la IA responda consultas generales. |
| RF22 | Permitir que la IA consulte información almacenada. |
| RF23 | Asistir a los clientes durante la solicitud de turnos. |
| RF24 | Recomendar veterinarios según la especialidad requerida. |
| RF25 | Derivar consultas médicas complejas a un profesional. |
| RF26 | Permitir al administrador gestionar usuarios y veterinarios. |
| RF27 | Permitir al administrador gestionar horarios y especialidades. |
| RF28 | Permitir al veterinario administrar las consultas asignadas. |
| RF29 | Restringir el acceso a la información según los permisos de cada usuario. |
| RF30 | Registrar el historial de operaciones relevantes del sistema. |

<br>

## 6. Requisitos no funcionales
- Disponibilidad: el asistente virtual deberá estar disponible las 24 horas, siempre que los servicios necesarios se encuentren operativos.
- Seguridad: proteger los datos personales y clínicos de los usuarios y sus mascotas.
- Rendimiento: procesar consultas y operaciones en tiempos razonables.
- Usabilidad: ofrecer una interfaz sencilla e intuitiva.
- Escalabilidad: permitir incorporar nuevos veterinarios, especialidades y servicios.
- Integridad: evitar turnos duplicados y garantizar la consistencia de los registros.
- Confiabilidad: proporcionar información basada en datos reales del sistema.
- Privacidad: restringir el acceso a la información personal y clínica.
- Mantenibilidad: mantener el código organizado, documentado y modular.
- Compatibilidad: permitir el acceso desde navegadores web y distintos dispositivos.

<br>

## 7. Reglas de negocio
1. Cada cliente podrá registrar varias mascotas.
2. Cada mascota deberá estar asociada a un cliente.
3. Un veterinario podrá contar con una o varias especialidades.
4. Cada veterinario tendrá horarios de atención configurados.
5. Los clientes podrán seleccionar libremente entre los veterinarios disponibles.
6. Los turnos dependerán de la disponibilidad del profesional seleccionado.
7. No se podrán asignar dos turnos al mismo veterinario en horarios superpuestos.
8. Cada turno estará asociado a una mascota, un cliente y un veterinario.
9. Los turnos deberán contar con un identificador único.
10. Las modificaciones y cancelaciones deberán respetar las políticas de la clínica.
11. Cada mascota tendrá un historial clínico independiente.
12. Solamente los veterinarios autorizados podrán registrar o modificar información clínica.
13. Los clientes únicamente podrán consultar los historiales de sus propias mascotas.
14. Los tratamientos deberán ser registrados por un profesional veterinario.
15. La IA no podrá modificar diagnósticos ni tratamientos.
16. Las vacunas deberán contar con una fecha de aplicación y, cuando corresponda, una fecha de próxima dosis.
17. Los recordatorios se generarán a partir de fechas registradas en el sistema.
18. Los usuarios tendrán permisos diferentes según su rol.
19. El administrador podrá gestionar veterinarios, especialidades y horarios.
20. La IA no podrá inventar disponibilidad, información clínica ni datos personales.
21. Ante síntomas graves o situaciones de urgencia, la IA deberá recomendar atención veterinaria inmediata.
22. La información de cada usuario deberá mantenerse protegida y separada de la de otros clientes.

<br>

## 8. Entidades principales
- Usuario: almacena los datos personales, credenciales y rol de cada usuario.
- Mascota: contiene los datos de los animales registrados y su información general.
- Veterinario: almacena los datos profesionales de cada veterinario.
- Especialidad: contiene las especialidades ofrecidas por la clínica.
- Veterinario_Especialidad: relaciona a los veterinarios con sus especialidades.
- Horario: registra los días y horarios de atención de cada profesional.
- Turno: almacena las solicitudes de atención, fechas, horarios y estados.
- Consulta: registra las atenciones veterinarias realizadas.
- Historial_Clinico: almacena los antecedentes médicos de cada mascota.
- Diagnostico: registra los diagnósticos realizados por los veterinarios.
- Tratamiento: almacena los tratamientos indicados para cada mascota.
- Vacuna: contiene información sobre las vacunas disponibles.
- Vacunacion: registra las vacunas aplicadas a cada mascota y sus próximas dosis.
- Notificacion: almacena los avisos generados para los usuarios.
- Servicio: contiene los servicios ofrecidos por la clínica.
- Registro_Actividad: almacena las operaciones relevantes realizadas dentro del sistema.

<br>

## 9. Flujo general de interacción con IA
1. El usuario ingresa a PetCare.
2. Inicia una conversación con el asistente virtual.
3. La IA identifica la intención del usuario.
4. El sistema verifica su identidad y los permisos correspondientes cuando la operación requiere autenticación.
5. La IA determina qué información necesita consultar.
6. El sistema obtiene los datos correspondientes de la base de datos mediante herramientas autorizadas.
7. La IA presenta la información al usuario.
8. Si el usuario desea realizar una operación, la IA solicita los datos necesarios.
9. El sistema valida que la operación cumpla las reglas de negocio.
10. La IA presenta un resumen de la operación.
11. El usuario confirma la acción.
12. El sistema ejecuta la operación correspondiente.
13. Se registra el resultado.
14. La IA comunica la confirmación al usuario.

<br>

## 10. Alcance general del proyecto
El sistema abarcará los siguientes módulos:
- Asistente virtual inteligente.
- Gestión de usuarios y autenticación.
- Gestión de mascotas.
- Gestión de veterinarios y especialidades.
- Gestión de horarios y turnos.
- Gestión de consultas veterinarias.
- Historiales clínicos.
- Gestión de vacunas y tratamientos.
- Notificaciones y recordatorios.
- Panel administrativo.
- Herramientas de consulta y gestión utilizadas por los agentes de IA.

El proyecto estará orientado a una única clínica veterinaria. No contemplará la administración de múltiples sucursales ni la conexión entre distintas clínicas.

La inteligencia artificial funcionará como una capa de asistencia sobre el sistema, utilizando herramientas para consultar y ejecutar operaciones autorizadas. Las decisiones médicas y los diagnósticos definitivos serán responsabilidad exclusiva de los veterinarios.

El desarrollo priorizará la modularidad, la seguridad, la organización del código y la posibilidad de incorporar nuevas funcionalidades en el futuro.
