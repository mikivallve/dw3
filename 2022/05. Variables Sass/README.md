# Variables en Sass

Refactorear el código generado en el ejercicio anterior para que el proyecto acepte variables que vemos repetidas en el código original.

Ejemplos
* `#f75940` -> $primary
* `0 0 2px black` -> $shadows
* `3px` -> $border_radius

### Estructura
```
04. Sass 101
	-- img/
	-- css/
		-- estilos.min.css
		-- estilos.min.css.map
	-> scss/
		-- _menu.scss
		-- _body.scss
		-- _footer.scss
		-> _variables.scss
		-- estilos.scss
	-- index.html
```
El css y su mapeo deberán generarse automaticamente utilizando uno de los métodos vistos.

## &nbsp;
# Thememing (opcional)

Crear un segundo archivo de variables llamado `_variables_organicas.scss` donde se redefinan las variables principales del sitio buscando un diseño más orgánico. 


### Estructura
```
04. Sass 101
	-- img/
	-- css/
		-- estilos.min.css
		-- estilos.min.css.map
	-> scss/
		-- _menu.scss
		-- _body.scss
		-- _footer.scss
		-- _variables.scss
		-> _variables_organicas.scss
		-- estilos.scss
	-- index.html
```

Crear una variable `$sustentable` en `estilos.scss` y utilizar la estructura de control `@if` para determinar si el sitio debe utilizar la versón orgánica o la versión regular.
