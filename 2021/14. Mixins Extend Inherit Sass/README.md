# Mixins & Extends

* Analizar los `mixins` y `extends` presentados en `estilos.scss`

* Crear un mixin que permita crear un overlay de color en cualquier elemento. El color debe ser una variable y su valor por defecto sera `#000`

* En `:hover` el overlay debe desaparecer con algun efecto. Se debe utilizar el `mixin anima`



&nbsp;
#
## Lecturas
- https://sass-lang.com/documentation/at-rules/mixin
- https://www.w3schools.com/sass/sass_mixin_include.asp
- https://scotch.io/tutorials/how-to-use-sass-mixins
- https://bryanlrobinson.com/blog/how-to-css-after-elements-for-background-overlays/


#

### Se recomienda produndizar sobre `funciones`, `directivas`, `condicionales`, `loops` y `map`

```
$breakpoints:(
    'celu':575,
    'tablet':991,
    'pc': 1440,
    'pc-xl': 1919,
);

$paddings: 20;

@each $dispositivo, $ancho in $breakpoints {
    .visible-#{$dispositivo}{display:none}
    @media screen and (min-width: #{$ancho}px) {
        .contenedor{ max-width: $ancho - $paddings*2}
        .visible-#{$dispositivo}{display:block}
    }
}
```

```
$width-large:991px;
$width-small:575px;

@mixin respond-to($breakpoint) {
  @if $breakpoint == tablet-large {
    @media only screen and (max-width: $width-large) {
      @content;
    }
  } @else if $breakpoint == mobile-large {
    @media only screen and (max-width: $width-small) {
      @content;
    }
  }
}

.sidebar {
  width: 35%;
  @include respond-to(tablet-large) {
    width: 25%;
  }
  @include respond-to(mobile-large) {
    width: 100%;
    a { display: block; }
  }
}
```