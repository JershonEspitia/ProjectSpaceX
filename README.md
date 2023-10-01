# Space X Project Queries

## About

Este proyecto contiene un conjunto de consultas a la API de Space X para obtener información sobre lanzamientos, cohetes, naves espaciales y cápsulas.

## Descripción general

El proyecto consta de los siguientes archivos:

- `storage`: Una carpeta que contiene los ficheros:
  - `storage/v3.js`: Un archivo JavaScript que contiene las funciones para realizar las consultas a la API de Space X versión 3.
  - `storage/v4.js`: Un archivo JavaScript que contiene las funciones para realizar las consultas a la API de Space X versión 4.
- `index.html`: Una página web simple que muestra los resultados de las consultas.
- `instrucciones.txt`: Un documento que contiene información sobre relevante sobre las consultas y el enlace a las API's.
- `main.js`: Un archivos JavaScript que hace el llamado a las funciones contenidas en los archivos `v3.js` y `v4.js`.
- `style.css`: Archivo vacío disponible para darle estilo a la página.

## Tecnologías Utilizadas

- HTML5
- JavaScript
  
## Uso

1. Clona este repositorio en tu máquina local con el siguiente comando: `git clone https://github.com/JershonEspitia/ProjectSpaceX.git`
2. Abre el archivo `index.html` en tu navegador web
3. Presiona la tecla `F12` o `click derecho -> inspeccionar` sobre la página
4. Seleccionar `Console`
5. Visualizar los resultados de las consultas hechas en el archivo `main.js`

## Consultas

### Versión 3:

### 1. Consulta para obtener los parches de cada una de las misiones.

**Method** : `GET`

**Version** : `v3`

**URL** : `https://api.spacexdata.com/v3/launches`

**Storage**   :  `v3.js`

**Modulo** :  `getAllLaunchesImgLinks`

**Query** :  

```
```

**Auth required** : `False`

**Success Responses:**

**Code** : `200 OK`

```json
[    
    
    {
        img: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png', 
        img_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
    },
    ...
]
```

### 2. Consulta para obtener las fotos de los cohetes.

**Method** : `GET`

**Version** : `v3`

**URL** : `https://api.spacexdata.com/v3/rockets`

**Storage**   :  `v3.js`

**Modulo** :  `getAllRocketsImg`

**Query** :  

```
```

**Auth required** : `False`

**Success Responses:**

**Code** : `200 OK`

```json
[    
    [
        'https://imgur.com/DaCfMsj.jpg', 
        'https://imgur.com/azYafd8.jpg'
    ],
    ...
]
```

### 3. Consulta para obtener las fotos de los barcos.

**Method** : `GET`

**Version** : `v3`

**URL** : `https://api.spacexdata.com/v3/rockets`

**Storage**   :  `v3.js`

**Modulo** :  `getAllRocketsImg`

**Query** :  

```
```

**Auth required** : `False`

**Success Responses:**

**Code** : `200 OK`

```json
[    
    "https://i.imgur.com/woCxpkj.jpg", 
    "https://i.imgur.com/jmj8Sh2.jpg",
    ...
]
```

#
### Versión 4:

### 1. Consulta para obtener todas las capsulas que tiene como tipo Dragon 1.0 y su estado es unknown.

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/capsules/query`

**Storage**   :  `v4.js`

**Modulo** :  `getAllCapsulesSerialAndStatus`

**Query** :  

```js
{
    options: {
        select: {
            status: "unknown",
            type: "Dragon 1.0",
        },
    },
}
```

**Auth required** : `False`

**Success Responses:**

**Code** : `200 OK`

```json
[    
    {
        status: 'unknown', 
        type: 'Dragon 1.0', 
        id: '5e9e2c5bf35918ed873b2664'
    },
    ...
]
```

### 2. Consulta para obtener todas las imagenes de los Dragons.

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/dragons/query`

**Storage**   :  `v4.js`

**Modulo** :  `getAllDragonsImg`

**Query** :  

```js
{
    options: {
        select: {
          flickr_images: 1,
        },
    },
}
```

**Auth required** : `False`

**Success Responses:**

**Code** : `200 OK`

```json
[    
    [
        'https://i.imgur.com/9fWdwNv.jpg', 
        'https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg', 
        'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg', 
        'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg'
    ],
    [
        'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg', 
        'https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg', 
        'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg'
    ]
]
```

### 3. Consulta para obtener todo el historial de artículos.

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/history/query`

**Storage**   :  `v4.js`

**Modulo** :  `getAllHistoryArticles`

**Query** :  

```js
{
    options: {
        select: {
            links: {
                article: 1,
            },
        },
    },
}
```

**Auth required** : `False`

**Success Responses:**

**Code** : `200 OK`

```json
[    
    "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
    "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
    ...
]
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas de mejoras o correcciones, no dudes en crear una solicitud de extracción (pull request) o informar sobre problemas (issues).

## Contacto
Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con el equipo de desarrollo.

## Autor

[By @JershonEspitia](https://github.com/JershonEspitia)