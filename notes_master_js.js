"PROTOTIPOS"

//Cualquier dato que es creado, ya sea string, booleando o algun otro, tiene un prototipo del tipo de dato que es y dentro de ese prototipo hay un prototipo de tipo objeto
//Cuando creamos un objeto utilizando una clase, lo que va dentro del constructor se ponen como propiedades del objeto y los metodos van dentro de un prototipo que sea crea automaticamente dentro de ese objeto
//Si tenemos una propiedad que lo que tiene es una funcion y tenemos al mismo tiempo un metodo con el mismo nombre que esa propiedad y mandamos a llamar el objeto junto con el nombre de ese metodo, lo que hara cumplir con la funcion que tiene la propiedad porque las funciones que estan en propiedades siempre tendran preferencia antes que los metodos dentro de los prototipos
//Si no hay una propiedad con el mismo nombre de un metodo, entonces ahi accedera a los metodos
//Para acceder al prototipo de algun dato se utiliza .__proto__ y si queremos acceder a un prototipo que nosotros creamos, se utiliza .prototype
//Podemos hacer lo que queramos con con los prototipos que nosotros creamos (.prototype) mientras que con los prototipos que sea crean solos, no podemos modificarlos

"USE STRICT"

//Para activar el use strict, hay que poner "use strict"; en la primera linea

const obj = {};

Object.defineProperty(obj, `nombre`, {value: "pedro", writeable: false}) //Esta es la manera de crear un objeto, writeable lo que hace es permitir que ese valor pueda ser modificado o no pueda ser modificado. Si intentas modificarlo con use strict, te tirara un error, de lo contrario, si no usas use strict, te dara el valor del objeto sin ser modificado pero no te avisara que la cagaste en redefinir un valor que tu dijiste que no deberia ser redefinido

Object.preventExtensions(obj); //Lo que hace es prohibir que se definan nuevas propiedades. Al usar use strict, pasa lo mismo que el ejemplo anterior

//No se puede agregar una propiedad a un string y eso, "use strict" no lo dice si es que lo hacemos por medio de un error, sino no lo hace

//Si se ponen dos parametros iguales con el mismo nombre en una funcion, la funcion tomara solo el ultimo parametro de ellos y esto logicamente es un error. "use strict" nos lo hace saber

const obj = {nombre: "victor"};

delete obj.nombre //El delete solo puede ser utilizado para eliminar propiedades de objetos 

console.log(obj.nombre) //Nos dara un valor undefined

//Si intentamos eliminar una variable o una funcion, "use strict" nos lo hara saber, sin "use strict" simplemente la variable o funcion no sera eliminada pero nada nos avisara eso mas que "use strict"

//Cuando un bloque de codigo no funciona, la diferencia al poner "use strict", es que en vez de no funcionar, nos lanza una excepcion

//Con "use strict" no podemos usar palabras reservadas para crear variables, por ejemplo "return". Con "use strict" nos lanza una excepin y sin el si nos deja utilizarla aunque no deberia ser asi

//Para usar un numero octal se pone una o asi: 0o94, sino con el "use strict" tira una excepcion

//Con "use strict" arguments y eval no pueden ser variables

//"use strict" solo funciona si esta al principio de todo el codigo o al principio de un bloque de codigo, como por ejemplo de una funcion y solo sera valido para ese bloque de codigo en el que fue puesto




"FUNCION FLECHA"

//Las sentencias van dentro de llaves, mientras que una expresion no
//Si a una funcion flecha se le pone dentro cualquier tipo de dato pero en forma de expresion (sin llaves), la funcion nos retornara ese dato, ejemplo:

const saludar = ()=> frutas = ["banana", "pito"]; //Esto solo es valido para cuando solo es una linea de codigo 

console.log(saludar()); //nos retornara el array

//En las funciones flechas los parentesis son opcionales ante un solo parametro, si son mas o ninguno, si requerira de parentesis

const objeto = {
    nombre: "lucas",
    saludar: function(){console.log(`Hola ${this.nombre}`)} //Nota: una propiedad en un objeto que tenga dentro de si una funcion, se convierte en metodo de ese objeto
}

const objeto2 = {
    nombre: "lucas",
    saludar: ()=>{console.log(`Hola ${this.nombre}`)}
}

window.nombre = "Dalto"

objeto.saludar();

objeto2.saludar();

//Funciones normales: Para que un objeto pueda tener un metodo dentro que utilize una propiedad de ese mismo objeto, se usara this.  como se puede observar en el primer objeto, en cambio, si se pone solamente "nombre" sin el .this, este accedera al valor de la propiedad "nombre" del objeto window
//Funciones flecha: En cambio para las funciones flecha el this. de plano no funciona y por defecto toma el valor de la propiedad "nombre" del objeto window y sin el this. hace exactamente lo mismo

//Un para que una functon funcione como un constructor de un objeto, se necesita poner de la misma manera en que se pone un constructor que va dentro de un class 
//Un constructor suele tener la siguiente forma: 

function constructorPersona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona = new constructorPersona("lucas", "dalto"); //

console.log(persona); //constructorPersona {nombre: "lucas", apellido: "dalto"}

//Si observas bien el resultado que nos arroja el anterior console log tiene el nombre del constructor que fue utilizado para crear es objeto y si, es simplemente eso, el nombre del constructor que se utilizo para crear ese objeto

//Las funciones flecha no funcionan como constructores:

const constructorPersona = (nombre, apellido)=>{
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona = new constructorPersona("lucas", "dalto");

console.log(persona); //Nos tirara un error porque las funciones flecha no funcionan como constructores

"THIS."

//this. es exactamente lo mismo que window.

//Lo siguiente es un shorthand de JS

function saludar(){
    console.log(`Hola ${this.nombre}`)
}

const obj = {
    nombre: "Lucas",
    saludar: saludar;
} 

//Es lo mismo que:

const obj = {
    nombre: "Lucas",
    saludar
} 

//--------------------------

this.nombre = "Dalto";

function saludar(){
    console.log(`Hola ${this.nombre}`)
}

const objeto = {
    nombre: "Lucas",
    saludar
}

function otroContext(){
    this.nombre = "Roberto";
    this.saludar = saludar;
}

const objeto2 = new otroContext();

objeto.saludar(); //Hola Lucas

objeto2.saludar(); //Hola Roberto

console.log(this.nombre) //Dalto

//Recuerda que cuando es un constructor, si un metodo utilizara una propiedad en las dos cosas se pone el .this
//Mientras que en el objeto solo se pone el this. en el metodo, simplemente por logica

//----------------------------

this.nombre = "Dalto"

const objeto = {
    nombre: "Lucas",
    saludar: ()=>{`Hola ${this.nombre}`}
}

function otroContext(){
    nombre = "roberto"   //Si le agregas var o let ya no lo tomara en cuenta porque estarias creando otra variable. Poner solo nombre = "roberto", es como redefinir this.nombre
    objeto.saludar();
}

otroContext(); //Se supone que por tener una funcion flecha, el valor de this.nombre deberia ser Dalto pero en vez de tomar ese valor de window, toma el valor que esta dentro de esa funcion con el metodo del objeto mismo




"FUNCIONES RECURSIVAS"

//La recursividad es llamar una funcion la misma funcion dentro de esa misma funcion. Hay que tener cuidado con como se usa porque de lo contrario podrias causar un ciclo infinito que crasheara tu computadora

const validarEdad = (msg)=>{
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para la edad";
        if (edad > 18) console.log("Sos mayor de edad");
        else console.log("sos menor de edad");
    } catch(e){
        validarEdad(e);
    }
}

validarEdad()




"CLOSURES"

const a = "Hey!";

function global(){
    const b = "¿Que";

    function local(){
        const c = "tal?";
        return a + b + c;
    }

    return local;
}

global();
global()();
const closure = global();
closure();

"PARAMETRO REST"

//El parametro rest es utilizar un parametro con el operador spread, pero cuando esta como parametro, se le conoce como parametro rest

const suma = (a, b)=>{
    console.log(a + b);
}

suma(10); //Nos devolvera NaN, porque falta pasarle un parametro y entonces ese parametro se convierte en undefined

//-------------------

const suma = (a, b)=>{
    b = b || 0;
    console.log(a + b);
}

suma(10); //Nos devolvera 10

//---------------------

const suma = (a = 0, b = 0)=>{
    console.log(a + b);
}

suma(10); //Nos devolvera 10

//-----------------------

const suma = (...num){   //Ha esto se le conoce como parametro rest "...num" equivale al contenido completo dentro de un array llamado num
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];        
    }
    console.log(resultado);
}

suma(12, 25, 62, 98); //Hara la suma de  cada uno de esos numero

const suma = (frase, ...num){   //Si se va añadir otro parametro ademas de rest, rest siempre debe ser el ultimo parametro pq el contenido de rest es ilimitado, simplemente logica
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];        
    }
    console.log(frase + resultado);
}

suma("Frase meca", 12, 25, 62, 98); //Frase y suma de numeros




"OPERADOR TERNARIO"

//Utilizar el operador ternario en vez de un "if", ahorra mucho mas recursos que el "if"

let edad = 25;

//Forma tradicional:

if (edad > 18) console.log("Es mayor de edad");
else console.log("Es menor de edad");

//Forma con operador ternario:

(edad > 18) ? console.log("Es mayor de edad")   //El signo de "?" quiere decir que lo que le sigue se cumplira si lo primero que esta en el parentesis es verdadero
            : console.log("Es menor de edad")   //El signo ":" quiere decir que lo que le sigue se cumplira si la afirmacion del parentesis es falsa (Es como un else)

//Forma tradicional:

if (edad > 18) {
    console.log("Es mayor de edad");
    console.log("Puedes pasar");
} else {
    console.log("Es menor de edad");
    console.log("No puedes pasar")
};    

//Forma con operador ternario:

(edad > 18)
         ?
         ( 
            console.log("Es mayor de edad"), //Cada linea diferente de codigo se separa con un ",", no como en la forma tradicional ";"
            console.log("No puede pasar")
         )
         : 
         (
            console.log("Es menor de edad"),
            console.log("Es menor de edad")
         ) //En vez de llaves se usan parentesis




"OPERADOR SPREAD"

//El operador spread funciona para cuando tenemos un array con muchos datos

let arr = ["Manza", "Durazno"];
let arr2 = ["Fresa", "Mango", "Pera", "Uvas"];

//Forma principiante

arr.push(arr2[0],arr2[1],arr2[2],arr2[3]);

//Forma utilizando el operador spread

arr.push(...arr2)

//--------------------------------------

//El operador spread tiene la  ventaja de poder crear un nuevo array que resulta de la concatenacion de otros arrays, esto sin modificarlos, basicamente crear otro con el contenido de estos

//Intento de concatenar un array sin modifcar los arrays usados SIN SPREAD:

let arr = ["Manza", "Durazno"];
let arrAntiguo = arr; //Esto tenia el objetivo de guardar los datos del "arr", pero al meterle un .push, el valor de las dos variables sera el mismo, es decir el array ya con el .push
let arr2 = ["Fresa", "Mango", "Pera", "Uvas"];

let resultado = arr.push(...arr2); //Esto devolvera la longitud de "arr" ya modificado

console.log(resultado); //Longitud del arr modificado
console.log(arrAntiguo); //Contenido del arr modificado
console.log(arr); //Contenido del arr modificado

//BASICAMENTE ESTO NO SE PUEDE PERO CON SPREAD SI:

let arr = ["Manza", "Durazno"];
let arr2 = ["Fresa", "Mango", "Pera", "Uvas"];

let arr3 = [...arr, ...arr2];

console.log(arr3); //Nuevo array con el contenido del arr y arr2

//---------------------------------

//DATO EXTRA QUE NADA QUE VER:

const saludar = (parametro)=>{
    alert(`Hola ${parametro}`)
}

saludar(argumento);

//Otros usos del operador rest, es su uso como argumento 

const sumar = (num1, num2)=>{
    console.log(num1, num2);
}

let arr = [3, 6];

sumar(arr); //En este caso no se sumaria porque en realidad lo que estamos pasando de parametro es sumar([3, 6], undefined)

//Y aqui es donde se utiliza el operador spread

sumar(...arr); //Aqui si nos retornaria 9 porque es lo mismo que poner sumar(arr[0], arr[1])




"API (APPLICATION PROGRAMMING INTERFACE)"

"-------Objeto Date-------"

//DATO EXTRA: Esto es una funcion constructora

function Prueba(name, age){
    this.name = name,
    this.age = age,
    this.saludar = function(){console.log(`Hola ${this.name}`)}
}

const variable = new Prueba("Victor", "18");

console.log(variable); //Devolvera un objeto con 2 propiedades y 1 metodo

//Una funcion constructora se puede utilizar como constructora o como simplemente una funcion normal que devuelve algo al ejecutarla como funcion. Basicamente al ejecutarlo asi "new Constructor()" devuelve un objeto con los valores del this. y al ejecutarlo asi "constructor()" devuelve algo que le hayamos pedido que retorne (Algo que no involucre al this.)
//Cabe mencionar que aunque Date() pueda construir un objeto con "new Date()", por alguna extraña razon no nos devuelve un objeto pero si contiene metodos como si fuera un objeto


//---------------------------------

const fecha = Date; //Nos devuelve una funcion y hay que ejecutarla:
const fecha = Date(); //Esta nos devuelve el dia, mes, hora, entre muchas cosas mas relacionado con la fecha

//Date() realmente es un constructor que devuelve una funcion que nos devuelve muchos datos de nuestra fecha, por la tanto, no se puede acceder a sus metodos hasta que creemos un objeto con ese constructor

const fecha = new Date();

fecha.getDate(); //Devuelve el dia del mes (number)
fecha.getDay(); //Regresa un numero que se refiera la dia de la semana (Domingo = 0)
fecha.getMonth(); //Devuelve el numero del mes (Enero = 0)
fecha.getYear(); //Devuelve una resta: año actual - 1900

fecha.getHours(); //Devuelve el numero de la hora actual
fecha.getMinutes(); //Devuelve el numero de los minutos actuales
fecha.getSeconds(); //Devuelve el numero de los segundos actuales

const fecha2 = new Date(Year, Month, Day);
const fecha2 = new Date(2022, 9, 24); //Con estos datos definira el valor que develven los metodos




"LOCALSTORAGE & SESSIONSTORAGE"

//Lo que se almacene en localstorage, siempre estara ahi por mas que abramos la pagina y la volvamos a abrir, e incluso si despues de llamar esa linea la eliminamos
//Lo que se almacene en sessionStorage, estara ahi mientras no se cierra y abra la pagina y ademas al mismo tiempo eliminar la linea de codigo que mete datos dentro de sessionStorage
//Se puede acceder a los valores del local storage o session storage apartir de la seccion "inspeccionar" y despues en "application", aunque tambien se puede ver sus datos haciendole un console.log

console.log(localStorage); //Devuelve un objeto con lo que contiene dentro localStorage
console.log(sessionStorage); //Devuelve un objeto con lo que contiene dentro sessionStorage

localStorage.setItem("Nombre", "Javier"); //Meteremos dentro de localStorage o sessionStorage una variable Nombre con el valor Javier
localStorage.getItem("Nombre") //Devuelve el valor de la variable nombre que tiene guardada el localStorage o sessionStorage
localStorage.removeItem("Nombre") //Eliminara la variable nombre y su valor del localStorage o sessionStorage
localStorage.clear(); //Eliminara todas las variables y valores del localStorage o sessionStorage



"DRAG & DROP"

//Eventos del objeto agarrado: dragstart, drag y dragend
//Eventos de la zona en que se suelta algo: dragenter, dragmove, drop y dragleave
//Propiedad dataTransfer: getData() y setData()

//-------------------------------
const circle = document.querySelector(".circle");
const rectangle = document.querySelector(".rectangle");


circle.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("class", e.target.className);
});
// circle.addEventListener("drag", ()=>console.log(2));
// circle.addEventListener("dragend", ()=>console.log(3));

rectangle.addEventListener("dragenter", ()=>console.log(1)); //Entro
rectangle.addEventListener("dragover", (e)=>{
    e.preventDefault();  //Con esto le decimos a la zona, que si puede soltarse algo encima de ella
    console.log(2)
});  //Se mueve encima. Tambien se pregunta: ¿Podemos soltar el objeto dentro de esta zona?
rectangle.addEventListener("drop", (e)=>{
    console.log(e.dataTransfer.getData("class")); //Con esto logramos recibir informacion entre el objeto al que se le aplico dragstart y el objeto que recibio el drop. El dragstart envio un setData y el getData del drop lo recibio porque dataTransfer es un objeto compartido entre el objeto agarrado y la zona que lo recibe. Por lo general el setData se pone en el dragStart y el getData en el drop
});      //Se solto encima y ahi cayo
rectangle.addEventListener("dragleave", ()=>console.log(4)); //Se salio en vez soltarse encima

//El objeto data transfer es el que tranfiere la informacion entre el objeto que se agarra y entre el objeto en el que se suelta
//-------------------------------



"GEOLOCALIZATION"

const geolocalizacion = navigator.geolocation

const position = pos=>console.log(pos)

const err = (e)=>{
    console.log(e)    
}

const options = {
    maximumAge: 0, 
    timeout: 3000, 
    enableHighAccuracy: true
}

geolocalizacion.getCurrentPosition(position, err, options);

//Investigar por tu cuenta el metodo watchPosition() y el metodo clearPosition() y como detectar la posicion en la API de google maps




"HISTORY API"

window.back() //Devuelve una pagina hacia atras
window.forward() //Va hacia adelante
window.go(-1) //Si se le pone 0 actualiza la pagina, si se le pone 1 va a la pagina original, si se le pone -1 va a la pagina anterior y si no se le pone nada, actualiza la pagina
window.pushState({name: "Victor"},"", "?jajaxd") //Lo primero qe hace es insertar un objeto que siempre consevara y al mismo tiempo modificar la url.Tambien cada cambio de url lo registrara en el historial. El objeto se obtendra por medio de un evento:
window.addEventListener("popstate", (e)=>console.log(e.state)); //Devolvera al objeto que se inserto dentro del estado de esa url nueva
window.replaceState({name: "Victor"},"", "?jajaxd") //Solo cambia la url, no deja nada en el historial y si se cierra y se vuelve a entrar ya no se podra volver a entrar hasta que llamemos otra vez el metodo

//Todo esto de una forma creativa se puede utilizar para cambiar el titulo de la ventana



"FILE READER API"

const fileInput = document.querySelector(".file-input"); //Para que un input nos pueda aceptar varios archivos, hay que ponerle el atributte "multiple" en el code html
fileInput.addEventListener("change", (e)=>{fileRead(e.target.files)}); //Es un evento que detecta los cambios en los inputs. Para acceder al archivo/s que se envia hay dos maneras, por medio del evento: e.target.files o directamente por el input: input.files

const fileRead = (files)=>{
    for(file of files){
        const reader = new FileReader(); //Devuelve un objeto con todo en null y sus metodos
        reader.readAsText(file);
        reader.addEventListener("load", (e)=>{console.log(e.currentTarget.result)}) //Se utiliza el evento load para asegurarnos de que el metodo readAsText() ya haya cargado y que nos devuelva la lectura del archivo en forma de texto
    }
}

//Se utiliza un ciclo para leer todos los archivos que se reciban en el input

//Ejemplo con readAsDataURL()

const fileRead = (files)=>{
    for(let file of files){
        const reader = new FileReader(); //Devuelve un objeto con todo en null y sus metodos
        reader.readAsDataURL(file);
        reader.addEventListener("load", (e)=>{
            let newImg = `<img src="${e.currentTarget.result}">`
            document.querySelector(".resultado").innerHTML += newImg //Recuerda que en vez de hacer esto directamente, lo ideal seria utilizar documentFragment
        }
        ) //Se utiliza el evento load para asegurarnos de que el metodo readAsText() ya haya cargado y que nos devuelva la lectura del archivo en forma de texto
    }
}

//--------------------------

//FileReader con los dos tipos de archivos

const fileInput = document.querySelector(".file-input"); //Para que un input nos pueda aceptar varios archivos, hay que ponerle el atributte "multiple" en el code html
fileInput.addEventListener("change", (e)=>{fileRead(e.target.files)}); //Es un evento que detecta los cambios en los inputs. Para acceder al archivo/s que se envia hay dos maneras, por medio del evento: e.target.files[0] o directamente por el input: input.files[0]

const fileRead = (files)=>{
       for(let file of files){
        const reader = new FileReader(); 
        if(file.type == "image/jpeg"){
            reader.readAsDataURL(file);
            reader.addEventListener("load", (e)=>{
            let newImg = `<img src="${e.currentTarget.result}">`
            document.querySelector(".resultado").innerHTML += newImg 
            })            
        } else if(file.type == "text/plain"){
            reader.readAsText(file);
            reader.addEventListener("load", (e)=>{console.log(e.currentTarget.result)})    
        }
    }
}




"FILE READER + DRAG & DROP"

const zone = document.querySelector(".zona-arrastre");

zone.addEventListener("dragover", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#444"); //e.srcElement devuelve el elemento al que se le aplica el addEventListener
})

zone.addEventListener("dragleave", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})

zone.addEventListener("drop", e=>{
    e.preventDefault(); //Evita que cuando el objeto dropee ahi, no se abra en otra pestaña
    changeStyle(e.srcElement, "#888");
    cargarArchivo(e.dataTransfer.files[0]) //Lo que hace e.dataTransfer.files es acudir a la propiedad dataTransfer del evento drop y luego acceder al archivo que se le dropeo encima

});

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`
};

//CARGAR ARCHIVO CON TEXT:

const cargarArchivo = file=>{
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener("load", e=>{
        document.querySelector(".resultado").textContent = e.currentTarget.result;
    })

}

//CARGAR IMAGEN:

const cargarArchivo = file=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", e=>{
        let img = document.createElement("IMG");
        img.setAttribute("src", `${e.currentTarget.result}`); //En vez de poner el valor de la url de esta manera, tambien puede crearse lo siguiente let url = URL.createObjectURL(file)
        document.querySelector(".resultado").appendChild(img);
    })
}

//Lo de abajo es otra manera de hacer esto mismo

const cargarArchivo = file=>{
        let img = document.createElement("IMG");
        let url = URL.createObjectURL(file);
        img.setAttribute("src", url); 
        document.querySelector(".resultado").appendChild(img);
}

//CARGAR VIDEO (SI FUNCIONA PERO ESTA MAS OPTIMIZADA LA OTRA FORMA):
//CON ESTA FORMA SE TE PUEDE TRABAR LA PAGINA 

const cargarArchivo = file=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", e=>{
        let video = document.createElement("VIDEO");
        video.setAttribute("controls", "")
        video.setAttribute("src", `${e.currentTarget.result}`); //En vez de poner el valor de la url de esta manera, tambien puede crearse lo siguiente let url = URL.createObjectURL(file)
        document.querySelector(".resultado").appendChild(video);
    })
}

//OTRA FORMA MAS RARA Y OPTIMA DE CARGAR UN VIDEO:
//Utiliza esta manera si se requiere subir un video pesado 

const cargarArchivo = file=>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(file); //Es otra forma rara de hacerlo
    reader.addEventListener("load", e=>{
        console.log(e);
        let blobVideo = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"}) //Esta es la forma de crear un blob: new Blob(array, options); y en ese caso para crear el array se utiliza el Uint8Array y se le pasa como parametro lo que recibe del arrayBuffer.Y de esta manera se crea un blob del video del archivo que recibio drop
        let url = URL.createObjectURL(blobVideo); //Puede recibir como parametro un blob o un file
        let video = document.createElement("VIDEO");
        video.setAttribute("controls", "")
        video.setAttribute("src", url); //En vez de poner el valor de la url de esta manera, tambien puede crearse lo siguiente let url = URL.createObjectURL(file)
        document.querySelector(".resultado").appendChild(video);
    })
}

//******VER EL PROYECTO HECHO EN CLASE




"INDEXED DB"

//indexedDB pertenece al objeto window y es una base de datos

const IDBRequest = indexedDB.open("victorbase", 1); //Crea y abre una database si es que no existe, el segundo parametro es el versionado de datos. Esto devuelve un objeto DBOpenDBRequest. Esto es solo una solicitud, no como tal la base de datos

//Si la base de datos no existe, se va ejecutar el upgradeneeded y el succes pero si la basa de datos ya existe y solo se esta mandando a llamar, solo se ejecutara success
//upgradeneeded se ejecuta cuando la base de datos no esta creada y aqui es donde se ponen las tablas (object stores)
//Los object stores (Almacen de objetos) solamente los podemos crear cuando creamos la base de datos, es decir en el evento upgradeneeded.

IDBRequest.addEventListener("upgradeneeded", ()=>{
    const db = IDBRequest.result; //Esta si es la base de datos. La base de datos es el resultado de la solicitud
    //Primero se crea el nombre del objectStore y en el segundo parametro va su configuracion
    //autoIncrement significa que el key ira aumentando a medida que agregamos datos. De tarea investigar KeyPath
    db.createObjectStore("nombres", { 
        autoIncrement: true
    })
    // console.log("La database se creo correctamente");
});

IDBRequest.addEventListener("success", ()=>{
    console.log("Todo salio correctamente");
});

IDBRequest.addEventListener("error", ()=>{
    console.log("Ocurrio un error al abrir la base de datos");
});

const transactionOperation = (mode, msg)=>{
    const db = IDBRequest.result;
    //Transaction lo que hara es decirte: "Che victor, vamos a dejarte que hagas algo, en donde lo quieres hacer? y en que modo lo quieres hacer? readonly o readwrite". Cuando tenemos que agregar un objeto, actualizarlo o eliminarlo, es readwrite. Cuando tenemos que leer un objeto es readonly. En general lo que hace esto es PERMITIR un transaccion
    //El nombre de una variable nunca debe ser el de un metodo
    const IDBtransaction = db.transaction("nombres", mode);
    //Aca lo que le estamos diciendo es que se va a ejecutar en el object store "nombres" y verifica que se haya hecho una transaccion antes con ese nombre
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", ()=>{
        console.log(msg);
    })
    return objectStore;
}

const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite", "Objeto agregado correctamente");
    IDBData.add(objeto);
}

const readObjeto = objeto => {
    const IDBData = getIDBData("readonly");
    //Lo que hace es leer los datos, el cursor lee los datos (No es el cursor del mouse)
    const cursor = IDBData[0].openCursor();
    cursor.addEventListener("success", ()=>{
        if(cursor.result){
            console.log(cursor.result.value); //Esto solo leera el primer dato y para decirle que siga leyendo se hace lo siguiente:
            cursor.result.continue(); //Lo que hara es leer los datos del object store, uno por uno. Al final, la ultima vuelta, va a dar null (y al mismo tiempo un error null), por lo que si ponemos un else, si se va a ejecutar y asi evitamos el error null.
        } else {
            console.log("Todos los datos fueron leidos");
        }
    })
}

const modificarObjeto = (key, objeto) => {
    const IDBData = getIDBData("readwrite", "Objeto modificado correctamente");
    IDBData.put(objeto, key); //Si no existe un objeto con ese key, funcion como un add()
}

const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite", "Objeto eliminado correctamente");
    IDBData.delete(key); 
}

//****Analizar proyecto hecho en clase


"MATCHMEDIA"

//Sirve para trabajar el resposive design pero solo es recomendado para cosas que no se pueden hacer con CSS

//Dato: ctrl + shift + R para cuando los estilos no se guarden (es para que se actualice la pagina sin el cache)

const mq = matchMedia("(max-width: 500px)");
const caja = document.querySelector(".caja");

mq.addEventListener("change", ()=>{ //El evento change actua cuando cambia de true a false o de false a true
    if(mq.matches) caja.classListReplace("cajaNormal", "cajaResponsive"); //.matches es una propiedad del objeto matchMedia, que cuando cumple con el mediaquery se pone true, y sino en false
    else if (caja.className == "cajaResponsive") caja.classList.replace("cajaResponsive", "cajaNormal");
});



"INTERSECTION OBSERVER"

const cajas = document.querySelectorAll(".caja");

//entries sera un array en el que se insertara un objeto intersectionObserverEntry por cada elemento que se este observando y este objeto tiene dentro de si, una propiedad: isIntersecting, la cual cambia true cuando se muestra en el viewport y sino cambia false en tiempo real

const callback = (entries)=>{
    for(let entry of entries){
        if (entry.isIntersecting) console.log(`Se esta viendo la caja: ${entry.target.textContent}`)
    }
};

const options = {
    rootMargin: "60px"; //Esto hara que el isIntersecting se ponga true 60px antes de que llegue a verlo y si se pone por ejemplo: -60px, lo que hara es que se pondra true 60px despues de verlo
    treshold: [0.8]; //Esto lo que hara es que el isIntersecting se pondra true cuando el 80% del elemento se vea
}

const observer = new IntersectionObserver(callback, options);

for(let caja of cajas){
    observer.observe(caja);
}

//**Ver proyecto de Instersection observer y lazy load (Servidor local)




"VISIBILITY CHANGE"

addEventListener("visibilitychange", e=>{
    if(e.target.visibilityState == "visible"){
        console.log("Has esto");
    } else if (e.target.visibilityState == "hidden"){
        console.log("Has esto otro");
    }
})

//Se puede utilizar para pausar videos o juegos cuando sales de esa pestaña por ejemplo




"NOTIFICATION"

if(!(`Notification` in window)){
    console.log("Las notificaciones no estan disponibles en tu navegador");
}

//El callback es opcional y lo que hace este metodo es preguntarle al usuario si quiere activar las notificaciones de ese sitio

Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
        console.log("Has algo");
    }
})

new Notification("Soy Dalto subio un nuevo video :)"); //De esta manera tiramos una notificacion




"DEDICATED WEB WORKER"

//El web worker sirve para ejecutar un proceso al mismo tiempo que se ejecuta un proceso dentro del script original

//CODIGO DEL SCRIPT ORIGINAL:

const worker = new Worker("worker.js"); //Asi se crea un worker y de parametro va el nombre del archivo que sera el worker
document.querySelector(".button").addEventListener("click", ()=>enviarMensaje());
//Para escuchar y recibir un mensaje se utiliza el evento message
worker.addEventListener("message", e=>{ 
    console.log(e.data); //Asi se obtiene el valor del mensaje que se envio desde el worker al script
    worker.terminate();  //Con esto el worker termina y ya no sigue utilizando mas
})

const enviarMensaje = ()=>{
    worker.postMessage("Que onda bro, todo bien?"); //Para enviar un mensaje se utiliza postMessage() y dentro del parametro va el mensaje
}

//CODIGO DEL WORKER:

addEventListener("message", (e)=>{
    console.log(e.data) //Asi se obtiene el valor del mensaje que envio el worker
    postMessage("Todo bien pa");  //Asi se envia un mensaje del worker al script original
});

//Los web workers tiene una limitacion en cuanto al tipo de datos que puede tener, por ejemplo no puede tener objetos, por eso es que esto se deben enviar desde el script original al worker en forma de mensaje




"SAME ORIGIN POLITIC (WEB WORKERS)"

//Para mandar a llamar a un worker, el worker debe tener el mismo protocolo, host y puerto que el que tiene el script original.
//Si ponemos solo el nombre de el archivo, con eso estamos queriendo decir que lo obtendremos desde el same origin, es decir, del mismo origen




"MEMOIZATION"

//No es "Memorization", es "Memoization"
//Wikepia: en Informática, el término memoización (del inglés memoization) es una técnica de optimización que se usa principalmente para acelerar los tiempos de cálculo, almacenando los resultados de la llamada a una subrutina en una memoria intermedia o búfer y devolviendo esos mismos valores cuando se llame de nuevo a la subrutina o función con los mismos parámetros de entrada.
//Hacer una funcion que memorize algun proceso que ya se realizo antes, hara que tu pagina este mas optimizada porque ya no tendra que volver a repetir el proceso que realizo antes para sacar determinado calculo
//Memoization:

const hacerAlgo = num => {
    const a = 20;
    const b = 12;
    let c = 0;
    for(let i = num - 1; i >= 0; i--){
        for (let j = i - 1; j >= 0; j--){
            c+= a*b
        }
    }
    return c;
}

let cache = [];


const memoizer = func =>{
    return e => {
        if(cache[e] == undefined){
            cache[e] = func(e);
        }
        return cache[e];
    }
}

//Nota personal para comprender: No olvides que el parametro "e" primero lo toma la funcion dentro del memorizer y despues ya lo utiliza en la funcion que hara el calculo y hara el calculo con el valor insertado dentro de "e" y lo guardara dentro del cache (Si no entendiste eso, simplemente analizalo logicamente y ya)

const date1 = new Date(); 
memoizer(hacerAlgo)(90000);
console.log(new Date() - date1); //Devolvera 4000ms, porque eso es lo que tarda en hacerse el calculo normalmente. Pero este valor se guardara en el cache (porque en el cache, esa posicion es undefined), exactamente en la posicion que se utilizo como parametro de la funcion "hacerAlgo"

const date2 = new Date();
memoizer(hacerAlgo)(90000); 
console.log(new Date() - date2); //Devolver 0ms, porque por medio del memoization, ya se encuentra guardado en el cache y por lo tanto no tiene que volver a hacer el calculo y simplemente muestra la posicion del cache donde este ya esta guardado

const date3 = new Date();
memoizer(hacerAlgo)(90000);
console.log(new Date() - date3); //Lo mismo que el anterior

const date4 = new Date();
memoizer(hacerAlgo)(90000);
console.log(new Date() - date4); //Lo mismo que el anterior
 



"CACHE"


//El request o solicitud es la url o archivo 
cache.add(request); //Toma una URL, la recupera y agrega el objeto de respuesta resultante a la cache dada. Esto es funcionalmente equivalente a llamar fetch() y luego usar un put() para agregar los resultados a la cache
cache.addAll(["archivo1", "archivo276"]); //Lo que hace es agregar varias url al cache al mismo tiempo
cache.match(request, options) //El parametro options es opcional pero tecnicamente lo que hace es: Devuelve un promise que se resuelve con la respuesta asociada con la primera solicitud coincidente en el objeto almacenado
cache.matchAll() //Devuelve un Promise que se resuelve en una matriz de todas las solicitudes coincidentes en el objeto almacenado
cache.put(request, response) //Toma tanto una solicitud como su respuesta y la agrega a la cache dada. Para ahorrarnos todo el proceso que se hace con put, simplemente hay que utilizar cache.add(); . El put si suele usarse pero mas que nada con node js
cache.delete(request, options) //Encuentra la entrada del objeto cuya clave es la solicitud, devolviendo un Promise que resuelve true si el objeto se encuentra y se elimina una entrada coincidente. Si no se encuentra ninguna entrada, la promesa resuelve false
cache.keys(request, options) //Devuelve un Promise que se resuelve en na matriz de keys de los objetos almacenados

caches.open("archivos-estaticos").then(cache =>{
    cache.add("index.html");
})

caches.open("archivos-estaticos2").then(cache =>{
    cache.addAll(["index.html", "style.css", "script.js"]);
})

//Recuerda que aunque borremos el codigo que agrega algo al cache, aun asi el cache no se borrara y siempre estara ahi al menos que lo borremos

//Lo siguiente devolvera en consola un "response" (objeto) con varios datos de esa url (archivo). Solo los devolvera si este se encuentra almacenado en cache. Si esa url (archivo) no se encuentra almacenado en cache, nos devolvera undefined
caches.open("archivos-estaticos").then(cache =>{
    cache.match("index.html").then(res => console.log(res));
})

//Lo siguiente devolvera en consola un array con varios "response" (objeto) dentro de si, que contienen los datos de cada uno de ellos. Este metodo sirve para almacenar varias response que tienen de base la misma url (archivo). Solo los devolvera si este se encuentra almacenado en cache. Si esa url (archivo) no se encuentra almacenado en cache, nos devolvera array con nada dentro. 
caches.open("archivos-estaticos").then(cache =>{
    cache.matchAll("index.html").then(res => console.log(res));
})

caches.open("archivos-estaticos-3").then(cache =>{
    fetch("index.html").then(res=>{
        cache.put("index.html", res);
    })
})

caches.open("archivos-estaticos-4").then(cache =>{
    cache.delete("index.html").then(res=>console.log(res)) //El .then() no es necesario para eliminar el archivo pero este nos sirve para obtener una respuesta. Devolvera true si el archivo se elimino correctamente, devolvera false si el archivo ya esta eliminado o no esta en el cache
})

caches.open("archivos-estaticos-5").then(cache =>{
    cache.addAll(["index.html", "style.css", "script.js"]).then(res => console.log(res));
    cache.keys().then(res=>{
        console.log(res);
    }) //Nos devuelve un array con cada uno de los archivos almacenados en cache. Nos devuelve un array con un objeto Request por cada archivo almacenado en el cache y este contiene toda la data de cada uno de esos archivos
})

