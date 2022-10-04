# Compiler Design Final Project (ANTRL4)
Miguel Angel Tornero Carrillo A00820449  
## Avance 1: LexicoSintaxis
El archivo de gramatica ANTLR ubicado en grammar/Grammar.g4 contiene el analizis lexico (tokens) marcados con reglas con nombre en mayusculas (ej. C_INT: [0-9]+;). Las reglas con nombres en minusculas son las reglas de produccion de la gramatica (ej. block: LBRACE statement* RBRACE;).  
Por el momento la sintaxis general de un programa esta definida (variables globales, luego funciones con variables locales, luego un main con variables locales). Por el momento hay siete tipos de sentencias (statements) disponibles: Asignacion (assignment), impresion (printing), lectura (reading), regreso (returning), condicional (conditional), llamada a funcion (fun_call), y un loop con while (while-loop). La sintaxis acepta hasta dos dimensiones para una variable (arreglos y matrices)  
Cosas que faltan serian implementar una sintaxis de prefijo para negar expresiones booleanas (con '!'), ya que no estuve seguro de donde ponerlo con todos los niveles que tiene que tener para poder tener una jeraquia de operadores correcta. Tambien no estuve seguro si implementar la asignacion como un tipo de sentencia sola, o como un operador con asociacion a la derecha.  
Un ejemplo de un programa valido se encuentra en el archivo example.txt
