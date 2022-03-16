# [DW3 Landing con Sass + Bootstrap](https://www.figma.com/proto/Rkdbp7AhPYvUDcLB4sTLy0/Dise%C3%B1o-Web-3?node-id=0%3A3&scaling=contain/)

## Letra

* Descargar zip de Material Clases (gdrive). * Seguir las instrucciones de este README.md.
* Guardar un espacio de trabajo de VSC para este proyecto.
* Generar al menos 4 snippets de código que solamente estén disponibles en este espacio de trabajo.



## ¿Qué descargué?

Una vez descargado el zip deberás ver una carpeta scss y 6 archivos:

-   `.browserslistrcAfter`
-   `.travis.yml`
-   `gulpfile.js`
-   `index.html`
-   `package.json`
-   `README.md`

## Instalación

Para comenzar a trabajar corre `npm install` en la carpeta. Este comando va a leer todas las dependencias listadas en `package.json` y procederá a instalarlas.

Al finalizar la instalación podrás ver la carpeta `node_modules` y un archivo `package-lock.json`.

Para finalizar la instalación corre `npm start` en la terminal. Este comando va a seguir las especificaciones descriptas en `package.json`

-   Levantar un servidor con `browsersync`
-   Copiar archivos desde `node_modules` la la raíz del sitio.
-   Compilar `landing-page.scss` en `landing-page.min.css`

Algunas de estas especificaciones son tareas de `gulp` definidas en `gulpfile.js`.

## Tareas de Gulp

-   `gulp watch` usa browserSync para abrir el proyecto y queda pendiente de cambios para recargar automaticamente el sitio con cada cambio. Basicamente un `Live Server` del propio proyecto.
-   `gulp css` compila los archivos SCSS files en CSS minificados (y crea mapeo).
-   `gulp js` minifica el JS
-   `gulp vendor` copia las dependencias desde node_modules a las carpetas `fonts` y `js`

## Copyright and License

Extiende el copyright de [Bootstrap Landing Page](https://startbootstrap.com/theme/landing-page/)


Basado en [Bootstrap Landing Page](https://startbootstrap.com/theme/landing-page/) y como ejemplo del poder de npm.

## Preview

[![Landing Page Preview](https://assets.startbootstrap.com/img/screenshots/themes/landing-page.png)](https://startbootstrap.github.io/startbootstrap-landing-page/)

**[Landing Original](https://startbootstrap.github.io/startbootstrap-landing-page/)**