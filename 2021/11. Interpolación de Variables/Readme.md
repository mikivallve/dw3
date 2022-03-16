# Interpolación de Variables

Escribir 4 reglas en Sass que generen declaraciones en CSS utilizando los ejemplos de interpolación de variables debajo


```
$lados: ['right','left'];

@each $lado in $lados{
    .col-#{$lado} {
      border-#{$lado}: 1px solid #ccc;
      padding-#{$lado}: 1rem;
    }
}
```

```
$icons: (
  checkmark: "\e600",
  plus:      "\e601",
  minus:     "\e602"
);

@each $name, $value in $icons {
  .icon-#{$name} {
    &:before { content: $value; padding:5px }
  }
}

```
Si no tienen una "idea", generen una regla en sass para que se genere el siguiente código css. 

```

------------------- generado por regla 1

.no-margin-left{
  margin-left:0;
}

.no-margin-right{
  margin-right:0;
}

------------------- generado por regla 2

.col-1{
  display:grid;
  grid-template-columns:repeat(1, 1fr);
}
.col-2{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
}
.col-3{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
}

------------------- generado por regla 3

.btn-primary{
  color:rgba(255,200,0,1);
  background:transparent;
  border: 1px solid rgba(255,200,0,1);
  transition:background 0.2s;
}

.btn-primary:hover{
  color:white;
  background:rgba(255,200,0,1);
}

.btn-secondary{
  color:rgba(0,150,0,1);
  background:transparent;
  border: 1px solid rgba(0,150,0,1);
  transition:background 0.2s;
}

.btn-secondary:hover{
  color:white;
  background:rgba(0,150,0,1);
}

------------------- generado por regla 4
.m-top-0{
  margin-top:0;
}

.m-top-1{
  margin-top:1rem;
}

.m-top-2{
  margin-top:2rem;
}

.m-bottom-0{
  margin-bottom:0;
}

.m-bottom-1{
  margin-bottom:1rem;
}

.m-bottom-2{
  margin-bottom:2rem;
}

.m-left-0{
  margin-left:0;
}

.m-left-1{
  margin-left:1rem;
}

.m-left-2{
  margin-left:2rem;
}


.m-right-0{
  margin-left:0;
}

.m-right-1{
  margin-left:1rem;
}

.m-right-2{
  margin-right:2rem;
}


```