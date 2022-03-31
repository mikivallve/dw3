# Sass 101

## Con Live Sass Compiler (VSC)

```
	"liveSassCompile.settings.generateMap": true,

	"liveSassCompile.settings.formats": [
		{
			"format": "compressed",
			"extensionName": ".min.css",
			"savePath": "/css/"
		}
	],

	"liveSassCompile.settings.excludeList": [
		"**/node_modules/**",
		".vscode/**",
		"**/bootstrap/scss/**"
	],

	"liveSassCompile.settings.autoprefix": [
			"> 1%",
			"last 2 versions"
		],
```
## Con NPM
Instalación global de Sass en el sistema (node)
``` 
npm install -g sass
```
Sintaxis 
```
sass --watch input.scss:output.css
```
Ejemplos
```
$ sass --watch src/scss/estilos.scss:css/estilos.css
>>> Sass is watching for changes.
>>> Change detected to: src/scss/estilos.scss
      write css/estilos.css
      write css/estilos.css.map
```

```
sass --watch src/scss/estilos.scss:css/estilos.min.css --style compressed
>>> Sass is watching for changes. 
>>> Change detected to: src/scss/estilos.scss
      write css/estilos.min.css
      write css/estilos.min.css.map
```
# 
## Letra
Descargar el [ejercicio de DW1](https://drive.google.com/open?id=1h5-mBZatd2F5cpWu5gpiR385dhE3HuVO&authuser=mvallve%40ameba.com.uy&usp=drive_fs) realizado por un alumno y convertirlo en un proyecto que utilice parciales de Sass según la siguiente estructura.


### Estructura
```
04. Sass 101
	-> img/
	-> css/
		-> estilos.min.css
		-> estilos.min.css.map
	-> scss/
		-> _menu.scss
		-> _body.scss
		-> _footer.scss
		-> estilos.scss
	-> index.html
```
El css y su mapeo deberán generarse automaticamente utilizando uno de los métodos vistos.
