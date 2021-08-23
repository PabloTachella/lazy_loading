# Lazy Loading

Bienvenid@! a continuación trabajaremos el Lazy loading o carga diferida. Lazy Loading es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el mismo momento de su utilización.

En esta [Landing Page](https://pablotachella.github.io/lazy_loading/) podrás, mediante un botón, 
añadir nodos al DOM. Dichos nodos se agregaran inmediatamente, pero su contenido solo se cargará cuando el nodo 
aparezca en el viewport al hacer scroll. [ver ->](https://pablotachella.github.io/lazy_loading/)

## Contenido

- [Screenshot](#screenshot)
- [Construcción del proyecto](#construcción-del-proyecto)
- [Que aprendí](#que-aprendí)
- [Autor](#autor)

## Screenshot


![](./screenshot-lazy.jpg)

## Construcción del proyecto

- Maquetado y estilizado con HTML y CSS, diseño responsive
- Imagenes consumidas de la API [https://randomfox.ca/](https://randomfox.ca/)
- Manipulación del DOM con JS, inserción y eliminación de nodos, observación del viewport con IntersectionObserver

## Que aprendí

Durante la creación del proyecto aprendí que el lazy loading es una técnica muy útil para la optimización en el renderizado, permitiento cargar solo lo necesario en cada momento. Esto en algunos casos podría ahorrar algunos milisegundos y recursos al navegador al momento de cargar nuestra página. Esta técnica es empleada por los frameworks de JavaScript, pero resulta interesante conocer como lograr los mismos resultados con solo JS.

## Autor

- Website - [Pablo Tachella](https://pablotachella.github.io/)
- Platzi Profile - [@PabloTachella](https://platzi.com/p/tachella/)
