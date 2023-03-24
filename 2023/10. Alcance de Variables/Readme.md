# Alcance de variables

Analizar el alcance de las variables según el siguiente *.scss y el css que genera

```
// Colores
$c-tit: #666;
$c-fon: lavender;
$c-tex: #333;

@mixin hero(){
	background-color:$c-fon;
	color:$c-tex;
	h1{
		color:$c-tit;
	}
}

.hero {
    @include hero();
}
.hero-dark {
    $c-tit: #fefefe !global;
    $c-fon: #333 !global;
    $c-tex: #FF0;
    @include hero();
}

h1{
    $c-tit-alt:#999;
    color:$c-tit-alt;
}

body{
    background:$c-fon;
    color:$c-tex;
    //border-color:$c-tit-alt;
}

```