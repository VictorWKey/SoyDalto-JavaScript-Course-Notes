let array1 = ["Juan", "Jorge", "Roberto"];
let array2 = ["Luis", "Carlitos" , array1, "Victor"];

forPilin:
for(let array in array2){
    if(array == 2){
        for(let array of array1){
            if(array == "Juan"){
                continue forPilin;
            }
            document.write(array + "<br>")

        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

