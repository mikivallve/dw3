# Nesting en Sass

Refactorear este [código](https://codepen.io/mvallve/pen/YzWqpYJ) para que admita anidación

Por ejemplo

```
	.info{
		border:$bordes;
		box-shadow:$sombras;
		h2,h3{
			color:$primary;
			strong{
				color:$dark
			}
		}
	}
```
### Pique: Mirar el HTML y escribir el *.scss en base a la anidación.

Si el HTML es
```
<ul id="menu">
   <li class="item-menu">
       <a href="/pagina.html"> Un link </a>
   </li>
   .
   .
   .
</ul>
```   
Nuestro *.scss podría ser
```
#menu{
	float:right;
	padding: 1em;
	display:flex;

	li{
		padding: 1em 1.5em;
		border-bottom: 1px solid $primary;

		a{
			color:$primary;

			&:hover{
				color:darken($primary, 50);
			}
		}
	}

}
