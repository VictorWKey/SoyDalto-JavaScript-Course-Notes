"ATAJOS"

//Comentar lineas: CTRL + K + C
//Descomentar lineas: CTRL + K + U
//Comillas simples: ALT + 39
//Backticks (``): ctrl + alt + } OR alt + 96




"CLASES/POO"

Method = Function //Se le llama metodo cuando esta dentro de unaclase

class Name {
    constructor(parameter1, parameter2){
        this.name = parameter1;
        this.name2 = parameter2;
    }
    method1(){
        Actions;
    }
    static method2(){
        Actions;
    }
    set setActionsModification(modification){
        this.parameter2 = modification;
    }
    get getName(){
        return this.name;
    }
}

//En el nombre de los set procura usar set y en los get procura usar get
//Se puede usar static cuando no se utiliza ningun this. para esa funcion
//A ese funcion se le sigue llamando de la misma manera: Name.method2()

const object = new Name(anything, anything2)

object.setActionsModification = "NewValue"

//Al usar set en un metodo para cambiar un valor, se utiliza como propiedad, es decir utilizando el = y no los ()

class Heritage extends Name {
    constructor(parameter1, parameter2, parameter3){
        super(parameter1, parameter2);
        this.name3 = parameter3;        
    }
}

//Con el "super" nos ahorramos volver a poner this. de la clase original
//Los metodos no hacen falta llamarlos con un "super", se heradan automaticamente




"METODOS DE STRINGS"  

let string = "Soy un string"

concat() //Junta dos cadenas o mas y retorna una nueva
startsWith() //Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino false
endsWith() //Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false
includes() //Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
indexOf() //Devuelve el indice del primer caracter de la cadena, si no existe devuelve -1
lastIndexOf() //devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1
padStart() //Rellenar cadena al principio con los caracteres deseados
padEnd() //Rellenar cadena al final con los caracteres deseados
repeat() //Devuelve la misma cadena pero repetida la cantidad que le indiquemos
split() //Divide la cadena como le pidamos
string.split(" ");
substring() //Nos retorna una de pedazo de la cadena que seleccionamos, la posicion final no la cuenta
string.substring(4, 12);
toLowerCase() //Convierte una cadena a minuscula
toUpperCase() //Convierte una cadena a mayuscula
toString() //Convierte el valor en un string
trim() //Elimina los espacios en blanco al principio y al final de una cadena
trimEnd() //Elimina los espacios en blanco al final de una cadena
trimStart() //Elimina los espacios en blanco al comienzo de una cadena
valueOf() //Retorna el valor primitivo de un objeto string




"METODOS DE ARRAYS"

let frutas = ["Mango", "Platano", "Uva", "Manzana", "Durazno"];

"-----Transformadores------" //Transforman al array

pop() //Elimina al ultimo elemento de un array y lo devuelve
shift() //Elimina el primer elemento de un array y lo devuelve
push() //Agrega un elemento al array al final de la lista
reverse() //Invierte el orden de los elementos de un array
unshift() //Agrega uno o mas elementos al inicio del array y devuelve la misma longitud del array
sort() //Ordena los elementos de un array localmente y devuelve el array ordenado
splice() //Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
frutas.splice(2, 4, "Guayaba", "Cereza") //(Posicion de inicio, Cantidad a eliminar, agregar objetos comenzando desde la posicion en que se corta)

"----------Accesores----------" //Crean un nuevo array

join() //Une todos los elementos de una matriz u objeto similar en un string y lo devuelve
let nuevoArray = frutas.join(" - ") //Ademas de convertirlo a string, puedes elegir con que separar cada elemento del array
slice() //Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (el fin no lo incluye)
let nuevoArray2 = frutas.slice(4, -1) //(Posicion de inicio, posicion final)
toString() //Convierte el array en un string
indexOf() //Devuelve el indice de un elemento que esta dentro del array
lastIndexOf() //Si hay elementos iguales devuelve el indice de el ultimo elemento que esta dentro del array
includes() //Si un elemento puede encontrarse dentro del array, devuelve true, sino devuelve false

"---------De repeticion---------"

filter() //Crea un nuevo array con todos los elementos que cumplan una condicion
frutas.filter(fruta => fruta.length < 4) //Recorre cada elemento y se pregunta si el elemento cumple con la condicion, y si es asi lo añade, forEach no toma condiciones
forEach() //Ejecuta la funcion indicada una vez por cada elemento del array
frutas.filter(fruta => document.write(fruta + "<br>")) //fruta recorre cada elemento del array como si fuera un bucle y ejecuta una funcion por cada elemento del array





"OBJETO MATH (BASIC)"

"-------------Metodos-------------"

Math.sqrt() //Raiz cuadrada
Math.cbrt() //Raiz cubica
Math.max() //Devuelve el mayor numero
Math.min() //Devuelve el menor numero
Math.random() //Devuelve un numero random entre 0 y 1 (0 y 1 no cuentan)
Math.round() //Devuelve el numero redondeado al entero mas cercano
Math.fround() //Devuvelve la representacion flotante de precicion simple mas cercana de un numero (4 bits, 15 numeros flotantes)
Math.floor() //Si el numero tiene decimales, devuelve el numero entero sin importar que tan cerca este del siguiente numero
Math.trunc() //Devuelve la parte entera de un numero, eliminando los numeros flotantes

//Formula numero random entre dos numeros:

n= Math.floor(Math.random()*(max-min+1)+min)


"-----------Propiedades------------"

Math.PI //Radio de una circufenrencia 
Math.SQRT1_2 //Raiz cuadrada de 1/2 (0.707)
Math.SQRT2 //Raiz cuadrada de 2 (1.414)
Math.E //Constante de Euler
Math.LN2 //Logaritmo natural de 2
Math.LN10 //Logartmo natural de 10
Math.LOG2E //Logaritmo de E con base 2
Math.LOG10E //Logaritmo de E con base 10



"CONSOLE"

"--------Funciones de registro--------"

console.assert() //Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera no aparacera nada
console.clear() //Limpia la consola
console.error() //Muestra un mensaje de error en la consola
console.info() //Emite un mensaje informativo a la consola
console.log() //Muestra un mensaje en la consola web
console.table() //Esta funcion toma una rgumento obligatorio: data, que puede ser un array o un objeto y un parametro adicional: columns y nos muestra una tabla en consola
console.warm() //Imprime un mensaje de advertencia en la consola
console.dir() // Despliega una lista interactiva de las propiedades del objeto JavaScript especificado

"----------Funciones de conteo----------"

console.count() //Registra el numero de veces que se llama a count(). Toma como argumento opcional una etiqueta.
console.countReset() //Resetea el contador console.count()

"----------Funciones de agrupacion----------"

console.group() //Crea un nuevo grupo en linea en el registro de la consola
console.groupEnd() //Finaliza un grupo registrado en consola
console.groupCollapsed() //Crea un grupo en linea pero contraido

"----------Funciones de temporizacion----------"

console.time() //Inicia un temporizador
console.timeEnd() //Finaliza un temporizador 
console.timeLog() //Registra el valor actual de un temporizador




"DOM (DOCUMENT OBJECT MODEL)"

//NODO: Un nodo es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista
//Tipos de nodos: Document(Nodo raiz), Element, Text, Attribute, Comentarios y otros




"DOCUMENT - METODOS DE SELECCION DE ELEMENTOS"

document.getElementByID() //Selecciona un elemento por ID
document.getElementsByTagName() //Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
document.querySelector() //Devuelve el primer elemento que coincida con el grupo especificado de selectores
document.querySelectorAll() //Devuelve todos los elementos que coincidan con el grupo especificado de de selectores




"METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS"

let input = document.querySelector(.input);

setAttribute() //Modifica el valor de un atributo
input.setAttribute("type", "text")
getAttribute() //Obtiene el valor de un atributo
input.gettAttribute("type")
removeAttribute() //Remueve el valor de un atributo
input.removeAttribute("type")




"ATRIBUTOS GLOBALES"

"class" //Lista de clases del elemento separas por espacios
contenteditable = "true or false" //Indica si el elemento puede ser modificado por el usuario (booleano)
dir //Indica la direccionalidad del texto
hidden //Indica si el elemento aun no es, o ya no es relevante
id //Define un identificador unico
style.propiedadAModificar //Contiene declaraciones de estilo CSS para ser aplicados al elemento y en "propiedadAModicar" se elige que propiedad vas a modificar, por ejemplo .style.color = "2ed"
tabindex = "numero" //Indica si el elemento puede obtener un focus de input, el numero indica el orden en que se hara cada focus con la tecla tab
title //Contiene un texto con informacion relacionada al elemento al que pertenece




"ATRIBUTOS DE INPUTS"

let input = document.querySelector(.input);

input.className
input.value
input.type
input.accept = "image/gif" //Si se seleccion type = "file", puedes poner que tipo de archivos va aceptar
input.form //Para poner a que formulario pertenece y en el valor se pone el id del formulario
input.minLength = "4" //El input no puede tener menos caracteres que la cantidad que se especifique
input.placeholder
input.required = "algo" //Indicara que es necesario llenar un campo y el valor puede ser cualquier cosa




"CLASES, CLASSLIST Y METODOS DE CLASSLIST"

let input = document.querySelector(.input);

input.classList.add("clase") //Añade una clase
input.classList.remove("clase") //remueve una clase
input.classList.item(2) //Devuelve la clase del indice especificado
input.classList.contains() //Verifica si ese elemento posee o no, la clase especificada
input.classList.replace() //Remplaza una clase por otra
input.classList.replace("claseAntigua", "ClaseNueva")
input.classList.toggle() //Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina
input.classList.toggle("clase", true or false) //El segundo paramatro no es necesario al menos que quieras forzar meter o no meter la clase




"OBTENCION Y MODIFICACION DE ELEMENTOS"
let titulo = document.querySelector(".titulo")

let variable = titulo.textContent //Devuelve el texto de cualquier nodo
let variable = titulo.innerHTML //Devuelve el contenido html de un elemento
let variable =titulo.outerHTML //devuelve el codigo HTML completo del elemento
.innerText //Devuelve el texto visible un node element !!!Es preferible utilizar .textContent




"CREACION DE ELEMENTOS"
const contenedor = document.querySelector(".contenedor")
let item = document.createElements("DIV")
item.innerHTML = "Hola mundo"

document.createElements("DIV")
document.createTextNode("Texto")
document.appendChild(item) //agregar un hijo a un padre
document.createDocumentFragment() //Ahorra recursos
let fragmento = document.createDocumentFragment() //Aqui se debe meter el HTML que se agregue desde JS y de ahi debemos mandarlo al contenedor
contenedor.appendChild(fragmento)




"OBTENCION Y MODIFICACION DE CHILDS"
const contenedor = document.querySelector(".contenedor")

let variable = contenedor.firstChild
let variable = contenedor.lastChild 
let variable = contenedor.firstElementChild //Solo devuelve los elementos
let variable = contenedor.lastElementChild //Solo devuelve los elementos
let variable = contenedor.childNodes //Devuelve una lista de nodos, incluso los textos, osea todo (puede ser en consola)
let variable = contenedor.children //Devuelve todos los hijos que son elementos nadamas




"METODOS DE CHILDS"

const childAntiguo = document.querySelector(".h2")

childAntiguo.replaceChild(childAntiguo, childNuevo)
childAntiguo.removeChild(child)
let variable = childAntiguo.hasChildNodes() //Devuel true o false si tiene un hijo o no, los textos tambien cuentan, todos los nodos




"PROPIEDADES DE PARENTS"

const item = document.querySelector(".item")

let variable = item.parentElement
let variable = item.parentNode




"PROPIEDADES DE SIBLINGS"

const item = document.querySelector(".item")

let variable = item.nextSibling //Devuelve el nodo hermano que le sigue, puede ser text o cualquier nodo
let variable = item.previousSibling //Devuelve el nodo hermano que anterior, puede ser text o cualquier nodo
let variable = item.nextElementSibling //Solo elementos
let variable = item.previousElementSibling //Solo elementos




"NODOS"
const item = document.querySelector(".item")

let variable = item.closest(".clase") //Devuelve el elemento padre mas cercano que lo contiene pero tiene ese elemento padre debe tener la clase que se indica (puede ser de cualquier otro selector)

