"WINDOW OBJECT"

let youtubeUrl = "https://www.youtube.com/"
let ventanaYt = window.open(youtubeUrl);

ventanaYt.close()
ventanaYt.closed //Devuelve true si la ventana esta cerrada, sino false
window.stop() //Detiene la carga de una pagina
print() //Abre un cuadro de dialogo para imprimir el documento actual
confirm("¿Seguro que quieres cerrar esta pestaña?") //Si le das aceptar devuelve true, sino devuelve false
window.screen //Devuelve un objeto asociado con las caracteristicas de la ventana
window.screen.availHeight //altura del window si esta maximizada
window.screen.height //alto total de la pantalla 
window.screenLeft //Devuelve la distancia entre el borde izquierdo de la ventana y el borde izquierdo de tu pantalla (Es solo de lectura, no se puede modificar)
window.screenRight //Devuelve la distancia entre el borde derecho de la ventana y el borde derecho de tu pantalla (Es solo de lectura, no se puede modificar)
window.screenTop //Devuelve la distancia entre el borde superior de la ventana y el borde superior de tu pantalla (Es solo de lectura, no se puede modificar)
window.scrollX //Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente 
window.scrollY //Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente
//<RANCIO>
window.scroll(x, y) //Desplaza la ventana a un lugar particular en el documento (x y y son px pero no se pone tal cual px)
window.resizeBy(x, y) //Cambia el tamaño de la ventana actual en una cantidad especifica (relativo)
window.resizeTo(x, y) //Redimensiona dinamicamente la ventana (absoluta)
window.moveBy(x, y) //Mueve la ventana en una ubicacion relativa
window.moveTo(x, y) //Mueve la ventana en una ubicacion absoluta
//</RANCIO>



"LOCATION"

window.location.href //Devuelve el href de la pagina actual
window.location.hostname //Devuelve el nombre del dominio del servidor web
window.location.pathname //Devuelve todo lo que va despues del dominio (las rutas (/))
window.location.protocol //Devuelve el protocolo web utilizado (http: o https:)
window.location.assign("https://youtube.com") //carga un nuevo documento

"DEBUGGING"

//Para ejecutar un snippet en la pestaña source, tenemos que seleccionarlo y presionar ctrl + enter
//Para que el Network cargue lo que tenga que cargar, tenemos que tener ya abierto el debbuging en esa pestaña
//Buscar funcionalidades como "performance", lo que se hace es ir a elements y presionar ctrl + shift + p


"EVENTS"

"---------Event Handlers-------"

//Existen dos tipos de events: "On event handlers" y los "Event listeners"

button.onclick = ()=>{
    alert("Hola")
}

//Este es un ejemplo de event handlers, basicamente todos los que tienen un "on" son eventhandlers y estas no se usan mas por que hay elemento que no son compatibles con esto o cuando el usuario decide desactivar JavaScript, estos se desactivan

"----------Event listener---------"

//Al poner una funcion dentro del event, estis solo funcionan con funciones comunes, no con funciones flecha
//Pero si ponemos directamente el codigo de la funcion dentro del event, si funcionan las funciones flecha ()=>{}
//Tambien las funciones no deben tener parametros, sino se bugea

button.addEventListener("click", saludar);
button.removeEventListener("click", saludar); //Esto solo funciona cuando en el event se pone el nombre de una funcion y no cuando se pone una funcion flecha
button.addEventListener("click", (e)=>{ console.log(e) }) //Con esto nos mostrara las propiedades del evento
button.addEventListener("click", (e)=>{ console.log(e.target)}) //Lo que hara target (es una propiedad del evento) es mostrarnos la propiedad target de ese evento, la cual nos muestra el objeto que desencadeno es evento (el elemento)

"---------Event flow - Event Bubbling------------"

//Supongamos que tenemos un boton dentro de un contenedor y a los dos se le agrega un Event listener que al dar click muestre un alert. Lo que pasara si le damos click al boton, es que primero se ejecutara el evento del hijo y despues el evento del contenedor, debido que a los hijos tienes mas especifidad que los contenedores y a este orden se le conoce como event bubbling

"---------Event flow - Event Capturing------------"

button.addEventListener("click", ()={ alert("hola")}, true); //Al ponerle true indicamos que su evento se ejecutara primero y si le ponemos a varios objetos el true, se ejecutara primero el que sea padre del otro

e.stopPropagation() //Hace que el siguiente evento que se va ejecutar a causa del event flow, ya no se ejecute

"--------Preven Default-------------"

button.addEventListener("click", (e)={ e.preventDefault()); //Es una propiedad del evento que quita lo que el boton hace por defecto


"MOUSE EVENTS"

button.addEventListener("click", saludar); //Se ejecuta cuando apretamos y soltamos en ese mismo elemento
button.addEventListener("dbclick", saludar); //doble click
button.addEventListener("mouseover", saludar); //Ocurre cuando el cursor del mouse entra a ese elemento (Bubbling)
button.addEventListener("mouseout", saludar); //Ocurre cuando el cursor del mouse sale de ese elemento  se bugea un poco con el bubbling
button.addEventListener("contextmenu", saludar); //ocurre cuando se la click derecho y ademas habla las herramientas de chrome
button.addEventListener("mouseenter", saludar); //Ocurre cuando el cursor del mouse entra a ese elemento (Bubbling inverse) **Solo se usa para internet Explorer
button.addEventListener("mousemove", saludar); //Ocurre cuando el cursor del mouse hace un movimiento dentro de ese elemento (Bubbling)
button.addEventListener("mouseleave", saludar); //Se ejecuta cuando el cursor del mouse hace un minimo movimiento fuera de ese elemento (solo un movimiento), para volver hacerlo, tenemos que entrar y volver a salir
button.addEventListener("mousedown", saludar); //Se ejecuta cuando el boton del click es presionado sobre ese elemento
button.addEventListener("mouseup", saludar); //Se ejecuta cuando el boton del mouse es soltado sobre ese elemento



"KEYBOARD EVENTS"

input.addEventListener("keydown", saludar); //Ocurre cuando una tecla es presionada (sin ser necesariamente soltada)
input.addEventListener("keypress", saludar); //Ocurre cuando una tecla es presionada y soltada
input.addEventListener("keyup", saludar); //Ocurre cuando una tecla es soltada

//Si se ponen las tres cosas, se ejecutan en el orden anterior




"INTERFACE EVENTS"

img.addEventListener("error", ()=>{console.log("Ha ocurrido un error")}); //Ocurre cuando sucede un error deurante la carga de un archivo multimedia
element.addEventListener("load", ()=>{console.log("Ha cargado el elemento")}); //Ocurre cuando elemento se ha cargado
addEventListener("beforeunload", ()=>{console.log("Estas apunto de ir del sitio")}); //Ocurre antes de que un documento este apunto de descargarse
addEventListener("unload", ()=>{console.log("Ha cargado la pagina")}); //Ocurre una vez que se ha descargado una pagina
addEventListener("resize", ()=>{console.log("Se modifico el tamaño de la ventana")}); //Ocurre cuando se cambia el tamaño de la vista del documento
addEventListener("scroll", ()=>{console.log("Se ha hecho scroll en el elemento")}); //Ocurre cuando se desplaza la barra de desplazamiento de un elemento
addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let completeText = input.value;
    contenedor.innerHTML = completeText.substring(start, end);
}); //Ocurre despues de que el usuario selecciona algun texto del <input> o <textarea>




"TIMERS"

let saludar = setTimeout(saludar, 2000); //Ejecutara la funcion saludar despues de 2000ms
let saludarInterval = setInterval(saludar, 2000); //Ejecutara la funcion saludar cada 2000ms
clearTimeout(saludar);
clearInterval(saludarInterval);

//**DATO RANDOM: El "return" termina una funcion
//**DATO RANDOM: Generalmente los event listener se agregan al principio del codigo
//**DATO RANDOM: typeof nos ayuda a descubrir que tipo de dato es algo



"-----Sentencia de flujo Switch-----"

switch(fruta){
    case "Banana":
        alert("Es una banana");
        break;
    case "Manzana":
        alert("Es una manzana");
        break;
    default:
        alert("No es ninguna fruta");
}




"EXCEPTIONS"

"---------Try y Catch--------"

try{
    exampleofvariablenotdefined;

} catch(error){
    console.log("Ha ocurrido un error");
}

//Lo que hace try y catch, es que controla los errores y puedes hacer lo que quieras con ellos. En la parte de try es donde se intenta el codigo, y si el codigo falla, se hace lo que se pida en catch. El parametro error es lo que hace que podamos obtener el error y hacer cosas con el. Este metodo de try y catch no funciona con los syntaxerror o errores de sintaxis, sino con lo que se espera que un codigo bien escrito haga.

try{
    console.log("No hay error");

} catch(error){
    console.log("Ha ocurrido un error");
} finally{
    console.log("Me voy a ejecutar de todos modos");
} //Lo que hace finally es que aunque haya o no haya error, este se va ejecutar

const pruebaTry = ()=>{
    try{
        return 1;
    } catch (error){
        return 2;
    } finally{
        return 3;
    }
} //Por el hecho de que hay varios return y ademas es una funcion, la funcion solo puede retornar un solo valor de esos 3. Lo que va pasar es que primero va retornar 1 porque no hay errores pero como el finally siempre se ejecuta si o si, entonces la funcion va retornar 3 porque la funcion solo puede retornar 1 valor. Si se quitara el finally y se pone el "return 3" fuera del try y catch, la funcion retornaria 1 porque "try" no es un error y ahi termina la funcion. En conclusion el finally siempre se ejecutara

try{
    throw "pito";

} catch(error){
    console.log(error);
} finally{
    console.log("Me voy a ejecutar de todos modos");
} //Throw lo que hace es tirar un error con lo que tu quieras, en este ejemplo, la consola pondra: "pito".

try{
    throw ["XD", "OMG"];

} catch(error){
    console.log(error[0]);
} finally{
    console.log("Me voy a ejecutar de todos modos");
} //Tambien se puede tirar un error en forma de array u objeto y catch podra hacer lo que quiera con el

//Procura usar try y catch en casos muy especificos, por ejemplo cuando tengamos un programa muy grande y exista la menor posibilidad de que un error ocurra. Lo mas recomentable es hacer debugging y no usar try y catch




"METODOS OBSOLETOS"

//Las paginas para ver metodos obsoletos es developer.mozilla.org o w3schools

//En developer.mozilla.org, la manita hacia abajo quiere decir que esta obsoleta, el bote de basura quiere decir que no funciona, el signo de admiracion quiere decir que no es estandar, la posion quiere decir que sirve pero se esta experimentando con el para ver si lo agregan o no

//Para detectar navegadores obsoletos, tenemos que buscar en google "Deteccion del navegador y cobertura a multiples navegadores"




"CALLBACKS"

const obtenerPersona = (id, cb)=>{
    if(personas[id] == undefined){
        cb("No se ha encontrado a la persona")
    } else{
        cb(null, personas[id], id)
    }
}

const obtenerInstagram = (id, cb)=>{
    if(personas[id].instagram == undefined){
        cb("No se ha encontrado ningun instagram")
    } else{
        cb(null, personas[id].instagram, id)
    }
}

const obtenerFollowers = (id, cb)=>{
    if(personas[id].followers == undefined){
        cb("No se ha encontrado ningun follower")
    } else{
        cb(null, personas[id].followers)
    }
}

obtenerPersona(3, (error,persona, id)=>{
    if(error){
        console.log(error);
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id, (error, persona, id)=>{
            if(error){
                console.log(error);
            } else {
                console.log(persona);
                obtenerFollowers(id, (error, persona)=>{
                    if(error){
                        console.log(error);
                    } else {
                        console.log(persona);
                    }
                })
            }

        })
    } 
}
)


"PROMESAS"

let nombre = "Victor";

const promesaFuncion = (nombre)=>{
    return new Promise((resolve, reject) => {
        if(nombre !== "Victor") reject ("Lo siento, el nombre no es Victor")
        else resolve(nombre);
    })
}

console.log(promesaFuncion("Victosr").then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e);
}));

"AWAIT Y ASYC"

//await obtiene el valor de una promesa
//Para trabajar con await se necesita especificarle a una funcion, que esta es "async"
//Los valores que regresa el await, no se retornaran hasta que todos los demas await ya hayan obtenido el valor de su promesa

const obtener = (text)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(text)}, Math.random()*4000)
    })
}

const mostrarAwait = async ()=>{
    texto3 = await obtener("Hola 3");
    texto1 = await obtener("Hola 1");  
    texto2 = await obtener("Hola 2");


    console.log(texto1);
    console.log(texto2);
    console.log(texto3);
}
mostrarAwait(); 




"JSON"

//JSON son datos estructurados que se envian y se reciben de un servidor

const objeto = {"nombre": "Victor", "Tipo": "Humano"}; //Esto es un objeto JSON

//Para enviar datos JSON al servidor, el objeto se tiene que serializar de la siguiente manera:

const objetoDeserializado= {"nombre": "Victor", "Tipo": "Humano"}; 

const objetoSerializado = JSON.stringify(objetoDeserializado);

//Para recibir datos JSON que provienen del servidor, el objeto vendra serializado, por lo tanto, para trabajarlo, lo tenemos que deserializar de la siguiente manera:

const objetoSerializado = `{"nombre": "Victor", "Tipo": "Humano"}`;

const objetoDeserializado = JSON.parse(objetoSerializado);

//DATO EXTRA: Lo siguiente no es muy comun al menos de que tu pagina tenga muchos usuarios con navegadores antiguos que no soporten JSON.parse(), para esto tienes que utilizar y poner un bloque de codigo "JSON Polyfill" y para obtenerlo solo tienes que buscar en google JSON Parse developer mozilla y listo




"AJAX (ASYNCRONYMOUSS JAVASCRIPT AND XML"

"--------Peticion con GET--------"

// const request = new XMLHttpRequest; //Es un objeto con el que se puede hacer una peticion y forma parte de AJAX

//AJAX no es soportado por todos los navegadores, entonces tenemos que trabajar con un objeto que es igual al anterior pero para internet explorer: //new ActiveXObject("Microsoft.XMLHTTP")
//Para eso tenemos que validar cual vamos a utilizar de la siguiente manera

let request;

if(window.XMLHttpRequest) request = new XMLHttpRequest;
else request = new ActiveXObject("Microsoft.XMLHTTP");

//readyState 1 = se creo correctamente
//readyState 2 = La solicitud se envio correctamente
//readyState 3 = Se esta procesando 
//readyState 4 = Esta todo listo y la respuesta ya se puede utilizar

// request.addEventListener("readystatechange", ()=>{
//     if (request.readyState == 4 && request.status == 200){          //Que el readyState sea 3 o 4, no significa que se haya encontrado el recurso, solamente indica los pasos que si pudo conseguir la peticion, que esa respuesta sea por ejemplo "404 not found", eso ya es otra cosa 
//         console.log(request.response)
//             // console.log(request.readyState)
//     // console.log(request.status) //Lo que hace es ver en que numero de status sencuentra. Si el status es 200 significa que todo salio correctamente        
//     }
// })  

//El bloque de codigo anterior es una forma de hacerlo que ya no se usa 

request.addEventListener("load", ()=>{
    let response;
    if (request.status == 200){response = request.response}
    else response = "Lo siento, no se ha encontrado el response";
    console.log(JSON.parse(response).nombre);
})  

//En realidad esto deberia trabajarse de diferente manera porque hay mas tipos de errores ademas del 404
//Tampoco deberia hacerse asi para aplicaciones muy grandes, de hecho ya no se usa esto para hacer esto, sino que se usa Fetch

request.open("GET", "info.txt") //Si se pone mal el nombre de la ubicacion, dara un error 404 = No se encontro
request.send()

"--------Peticion con POST--------"

let request;

if(window.XMLHttpRequest) request = new XMLHttpRequest;
else request = new ActiveXObject("Microsoft.XMLHTTP");

request.addEventListener("load", ()=>{
    let response;
    if (request.status == 200 || request.status == 201){response = request.response}         //El request.status con POST, cuando es 201 significa que fue creado con exito
    else response = "Lo siento, no se ha encontrado el response";
    console.log(JSON.parse(response));
})  



request.open("POST", "https://reqres.in/api/users")

request.setRequestHeader("Content-type", "application/json;charset=UTF8") //Parametros: (Tipo de header, tipo del tipo de header(valor)) //Cabe aclarar que esto tiene mucho mas usos

request.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));

//Todos estos metodos deben ejecutarse en este mismo orden




"FETCH"

//Fetch es el remplazo de AJAX, mas especificamente de XMLHttpRequest y ActiveXObject

//+++++++++PROCESO DE AJAX+++++++++++++

// let request; //Linea que te ahora Fetch

// if(window.XMLHttpRequest) request = new XMLHttpRequest; //Linea que te ahora Fetch
// else request = new ActiveXObject("Microsoft.XMLHTTP"); //Linea que te ahora Fetch

// request.addEventListener("load", ()=>{
//     let response;
//     if (request.status == 200 || request.status == 201){response = request.response}          
//     else response = "Lo siento, no se ha encontrado el response";
//     console.log(JSON.parse(response));
// })  



// request.open("POST", "https://reqres.in/api/users") //Linea que te ahora Fetch

// request.setRequestHeader("Content-type", "application/json;charset=UTF8") 

// request.send(JSON.stringify({
//     "name": "morpheus",
//     "job": "leader"
// }));

//+++++++++CIERRA PROCESO DE AJAX+++++++++++++

//Ahora si vamos con fetch

"---------Peticion con GET--------"

let request = fetch("https://reqres.in/api/unknown/2"); //por defecto trae GET //Fetch nos devuelve una promesa. Las promesas son asincronas(Nos devuelven el resultado cuando ya lo tienen)
request
      .then(res=> res.text()) //En vez de res.text() tambien puede ser res.json() //Nos devuelve una respuesta en forma de promesa encapsulada y para acceder a la respuesta de esa respuesta pero ya sin que este encapsulada tenemos varios metodos, uno de ellos es .text(), esto hace que desencapsule esa respuesta y nos la devuelva la respuesta en forma de string y en el caso de .json() en forma de objeto JSON
      .then(res => console.log(res));


//En 4 lineas de codigo obtuvimos lo que se obtiene con GET en AJAX y ademas nos ahorramos el proceso de verificar que este cargado y de que tenga un status valido

//La forma de una promesa sin estar encapsulada es mas o menos la siguiente:

// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Valor del response"

"---------Peticion con POST--------"

let request = fetch("https://reqres.in/api/users", {
    method: "POST",
    body : JSON.stringify({
        "nombre" : "Lucas",
        "apellido" : "Dalto"
    }),
    headers: {
        "Content-type": "application/json"
    }                       
}); 

//El body es el contenido que queremos enviar o pasar y el header es lo mismo que se ponia con ajax pero de diferente forma
//Si en vez de enviar un JSON, vamos enviar otra cosa, el header va a ser diferente
request
      .then(res=> res.json()) 
      .then(res => console.log(res));


"---------Informacion extra para POST y GET--------"

//Ademas de .text() y .json() tambien esta .blob() que lo que hace es devolvernos un objeto blob con el peso y el tipo de archivo que es la respuesta y este se trabaja con por ejemplo imagenes

const imagen = document.querySelector(".imagen");

fetch(imagenDentroDeLaCarpeta.png)
     .then(res=>res.blob())
     .then(res=>imagen.src = URL.createObjectURL(res))




"AXIOS (LIBRERIA)"

//Axios es una libreria que se basa en promesas y esas promesas se basan en el mismisimo XMLHTTPRequest
//Solo es necesario utilizar axios unicamente si vamos a hacer muchas peticiones, de lo contrario puedes utilizar fetch sin ningun problema

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


"---------Peticion con GET--------"

axios.get("https://reqres.in/api/unknown/2")
     .then(res=>console.log(res.data));  

//Esta es una forma de peticion con "GET", igual que con fetch, si solo ponemos axios sin ningun metodo,este por defecto contiene "GET"
//La razon por la que se pone .data, es porque la respuesta de la promesa que regresa axios, es un objeto y en la propiedad "data", esta lo que buscamos obtener y ademas no lo devuelve en formato de objeto JSON

"---------Peticion con POST--------"

axios.post("https://reqres.in/api/unknown/2", {"nombre": "Dalto", "edad": "25"} )
     .then(res=>console.log(res.data));  

"--------Otras formas de trabajar con GET y POST (No recomendable)------"

axios("https://reqres.in/api/unknown/2", {
    "method": "POST",
    "data": {"nombre": "Dalto", "edad: 17"},
}).then(res=>console.log(res.data));




"ASYNC Y AWAIT CON FETCH O AXIOS"

const getName = async ()=>{
    let request = await fetch("info.txt");
    let result = await request.json();
    let div = document.createElement("DIV");
    div.innerHTML = `Name: ${result.name}`;
    document.body.appendChild(div);
}

const getAge = async ()=>{
    let request = await fetch("info.txt");
    let result = await request.json();
    let div = document.createElement("DIV");
    div.innerHTML = `Age: ${result.age}`;
    document.body.appendChild(div);
}

document.querySelector(".getName").addEventListener("click", getName);

document.querySelector(".getAge").addEventListener("click", getAge);

//Claramente en vez de usar fetch, tambien se puede utilizar axios pero hay que modificar y borrar una que otra variable analizando el resultado de axios con logica 
