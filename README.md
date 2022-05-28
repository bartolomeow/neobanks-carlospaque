# CAIXABANK TECH | React Hackathon

Este repositorio se ha desarrollado durante la Hackathon organizada por NUWE y CAIXABANK TECH el día 28/05,
donde se nos ha planteado el caso de una empresa ficticia llamada NeoBANKS, la cual quiere empezar a desarrollar 
toda su nueva infraestructura utilizando el ecosistema React y ofrecer una solución multidispositivo.

## Reto React Cross-Platform

Se espera desarrollar lo siguiente:

<details>
    <summary>Click para expandir</summary>

    El reto consiste en desarrollar una aplicación móvil y web cross platform en React siguiendo una de las tres opciones 
    planteadas arriba y que siga el diseño que se muestra en el Figma (el diseño podéis modificarlo tanto como queráis siempre y cuando aparezcan como mínimo los datos y gráficos que se muestran).

</details>
<br>

## Enfoque de la solución implementada

Al requerirse una solución que fuera completamente Cross Platform usando React, se ha optado por desarrollar una aplicación web con `tecnología ReactJS y transformarla en una PWA`, de esta forma podemos instalarnos la aplicación web en el propio móvil desde la página web sin importar si accedemos desde un PC o un smartphone o tablet, además de mejorar en tiempos de carga, permitir el funcionamiento sin cobertura con contenidos cacheados previamente, etc. Se puede identificar que nuestra solución es de este tipo con el siguiente icono si visitamos la página desde un navegador como Chrome o Edge:

![Captura de pantalla de la instalación de una PWA]
(https://raw.githubusercontent.com/bartolomeow/neobanks-carlospaque/master/src/assets/InstallPWA.jpg)

Con ello `solucionamos dos problemas` que se está encontrando ahora mismo CAIXABANK TECH:
<ul>
    <li>Evitamos la duplicidad de aplicaciones desarrolladas para Android y iOS, abaratando costes de desarrollo al centralizar todo en una única aplicación.</li>
    <li>Mejoramos el acceso a nuestra PWA, ya que no es necesario que para instalar la aplicación el usuario deba pasar por la tienda de aplicaciones. Simplemente, cuando el usuario acceda a nuestra aplicación vía PC o móvil, será el propio navegador de su teléfono móvil el que le dará la posibilidad de instalar la aplicación.</li>
</ul>

Para mostrar el funcionamiento de la PWA, hemos rellenado los datos de gráficos con datos históricos del IBEX35 descargados de Yahoo Finance, estos datos se pueden encontrar en la carpeta `src/assets/ibex_daily.txt` y `src/assets/ibex_monthly.txt`.

## Herramientas de validación del código

Se valida que nuestro código es correcto con la herramienta Sonarcloud.io

https://sonarcloud.io/summary/overall?id=bartolomeow_neobanks-carlospaque

![Captura de pantalla de la revisión de código]
(https://raw.githubusercontent.com/bartolomeow/neobanks-carlospaque/master/src/assets/CodeReview.jpg)

Los code smells y vulnerabilidades detectadas son detectadas al usar un service-worker para nuestra PWA.


## Árbol de archivos

```
neobanks-carlospaque
├───public
└───src
    ├───assets
    ├───components
    │   ├───graphic-conversions
    │   ├───graphic-expenses
    │   ├───graphic-transactions
    │   ├───header
    │   ├───navbar
    │   └───transactions-count
    └───pages
        └───home
```
<br>

## Stack

| Package         | Version |
| --------------- | ------- |
| react           | 18.1.0  |
| react-icons     | 4.3.1   |
| recharts        | 2.1.10  |
<br>

## Project setup

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!