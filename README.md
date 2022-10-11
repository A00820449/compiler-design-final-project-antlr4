# Compiler Design Final Project (ANTRL4)

Miguel Angel Tornero Carrillo A00820449  

## Avance 2: Semantica Basica de Variables y Cubo Semantico

El cubo semantico fue elaborado y se encuentra en el archivo `semantic_cube.js`. El cubo es practimente un diccionario anidado, guardado en formato similar a JSON. El cubo solo tiene declaradas las operaciones validas, lo que reduce su tamaño. Si se hiciera lookup de una operacion invalida, JavaScript regresara `undefined`, y con eso el programa podra determinar que la operacion no es valida.  

Este archivo se podra cargar directamente al compilador creado en JavaScript. Por el momento no he podido implementar la semantica en si, pero planeo empezar a trabajar en ella esta semana para estar al corriente con lo demas del projecto.  

Todavia tengo dudas sobre los requerimientos exactos que tiene que tener el lenguage (nunca he utilizado R), pero planeo aclarar estas dudas en la siguente oportunidad que tenga de tomar una asesoria.  