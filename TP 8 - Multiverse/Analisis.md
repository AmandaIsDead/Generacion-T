# Trabajo Práctico - Multiverse

## Consigna:
Una empresa quiere crear Multiverse, una aplicación para registrar personajes de universos ficticios: anime, películas, videojuegos, cómics, etc. La aplicación debe permitir registrar personajes con su información básica y saber a qué universo pertenecen. También se quiere registrar qué poderes tienen los personajes y clasificarlos según su nivel de peligrosidad.

<br>

## Entidades

### Universos
| Atributo | Tipo de dato |
| :--- | ---: |
| id_universo | INT |
| Nombre | VARCHAR |
| Tipo | VARCHAR |
| Descripción | VARCHAR |

PK: id_universo.

<br>

### Personajes
| Atributo | Tipo de dato |
| :--- | ---: |
| id_personaje | INT |
| Nombre | VARCHAR |
| Alias | VARCHAR |
| NivelDePeligro | INT |
| id_universo | INT |

PK: id_personaje.

FK: id_universo.

NivelDePeligro se maneja en una escala del 1 al 10.

<br>

### Poderes
| Atributo | Tipo de dato |
| :--- | ---: |
| id_poder | INT |
| Nombre | VARCHAR |
| Descripción | VARCHAR |

PK: id_poder.

<br>

### PersonajePoder (Entidad débil)
| Atributo | Tipo de dato |
| :--- | ---: |
| id_personaje | INT |
| id_poder | INT |

Esta es una entidad débil que utiliza los atributos "id_personaje" e "id_poder" como Primary Key compuesta, además, estas son FKs.

<br>

### Relaciones
| Entidades | Relación | Explicación |
| :--- | :---: | ---: |
| Universo - Personaje | 1 : N | Un universo puede tener muchos personajes, pero cada personaje pertenece a un universo. |
| Personaje - Poder | N : M | Un personaje puede tener varios poderes y un poder puede pertenecer a varios personajes. |
| Personaje - PersonajePoder | 1 : N | Un personaje puede tener varios registros de poderes asociados. |
| Poder - PersonajePoder | 1 : N | Un poder puede aparecer en varios registros de personajes. |

