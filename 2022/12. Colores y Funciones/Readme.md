# Modo Dark y Modo Peach

* Refactorear esta mini aplicación para que la hoja de estilos se genere automaticamente a partir de un archivo *.scss

* Explorar las funciones de color para generar las diferentes versiones de modos.

# 

## Algunas funciones que pueden ser de utilidad

## &nbsp;
Convierte un HEX a RGBA y le pasa canal alpha (opacidad)
```
rgba($hex, $alpha)
```
Aclara un color un determinado porcentaje
```
lighten($color, $percent)
```

Oscurece un color un determinado porcentaje
```
darken($color, $percent)
```
Satura un color un determinado porcentaje
```
saturate($color, $percent)
```
Desatura un color un determinado porcentaje
```
desaturate($color, $percent)
```
Mezcla dos colores
```
mix($color1, $color2)
```
Pasa un color a escala de grises
```
grayscale($color)
```
Convierte un color en su inverso cromático
```
invert($color)
```
Genera el color complementario
```
complement($color)
```
