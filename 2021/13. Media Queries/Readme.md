# Media Queries en Sass

Tomar [este ejercicio](https://codepen.io/mvallve/pen/JjjEwdN) y refactorear el código para que admita sass. 

* Utilizar media queries con el poder de sass

```
$celu: "screen and (min-width: 575px)";
$tablet: "screen and (min-width: 991px)";

.sidebar {
  float: left;
  width: 35%;

  @media #{$tablet} {
    width: 25%;
  }

  @media #{$celu} {
    float: none;
    width: 100%;

    a { display: block; }
  }
}
```

#
Tomar [este ejercicio](https://codepen.io/mvallve/pen/PooBWNZ) y refactorear el código para que admita sass. 

* Potenciar con interpolación de varialbes
* Optimizar el código utilizando @each / @for permitiendo que tanto los altos como los colores de los bloques sean aleatorios (random)
* Utilizar media queries con variables


