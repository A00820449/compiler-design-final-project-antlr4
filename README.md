# Proyecto Final de Diseño de Compiladores (ANTRL4)

Miguel Angel Tornero Carrillo A00820449  

## Avance6: Generación de Código para tipos estructurados (Arreglos) y Ejecución de Expresiones y Estatutos Condcionales)

El proyecto ahora genera los cuadroplos en memoria (todavia no se escriben a disco) y compila expresiones.  

Tabiem hace analisis semantico usando el cubo semantico y soporta variables enteras, flotantes y buleanas.  

## Como usar

Tener instalado la ultima version de ANTLR (<https://www.antlr.org/>) e instalar las dependencias con `npm install`. Despues de eso, contruir el parser y el lexer con `npm run build-grammar`. Si se construyó correctamente, entonces finalmente escribir la entrada en el archivo `input.txt` y correr `node .` para ver los cuadruplos generados en la terminal.
