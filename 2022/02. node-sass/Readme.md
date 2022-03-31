## Instrucciones

### 1- clonar este repositorio
### 2- inicializar npm con `npm init`
### 3- instalar sass a nivel global `npm i -g sass`
### 4- empezar a "observar" el archivo controlador.scss y compilar los cambios en estilos.css 
### ```sass --watch src/scss/controlador.scss:css/estilos.css```

La sintaxis es ```sass --watch orignen:destino``` 

Revisar la documentación de sass para lograr que estilos.css esté minificado

## Comandos de sass

`-w, --watch` 
Watch a directory or file\
`-r, --recursive`
Recursively watch directories or files\
`-o, --output`
Output directory\
`-x, --omit-source-map-url`
Omit source map URL comment from output\
`-i, --indented-syntax`
Treat data from stdin as sass code (versus scss)\
`-q, --quiet`
Suppress log output except on error\
`-v, --version`
Prints version info\
`--output-style`
 CSS output style (nested | expanded | compact | compressed)\
`--indent-type`
Indent type for output CSS (space | tab)\
`--indent-width`
 Indent width; number of spaces or tabs (maximum value: 10)\
`--linefeed`
Linefeed style (cr | crlf | lf | lfcr)\
`--source-comments`
Include debug info in output\
`--source-map`
 Emit source map\
`--source-map-contents`
Embed include contents in map\
`--source-map-embed Embed sourceMappingUrl as data URI\
`--source-map-root Base path, will be emitted in source-map as is\
`--include-path`
 Path to look for imported files\
`--follow`
Follow symlinked directories\
`--precision`
The amount of precision allowed in decimal numbers\
`--error-bell`
 Output a bell character on errors\
`--importer`
 Path to .js file containing custom importer\
`--functions`
Path to .js file containing custom functions\
`--help`
 Print usage info\
