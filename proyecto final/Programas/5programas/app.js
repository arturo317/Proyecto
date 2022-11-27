 
while( confirm('DESEAS SEGUIR PROBANDO LOS PROGRAMAS')){
let seleccion = parseInt(prompt("selecciona el programa del 1 al 6"))
if(seleccion==1){
    Programa1();
}if(seleccion==2){
    Programa2();
}if(seleccion==3){
    programa3();
}if(seleccion==4){
    programa4();
}if(seleccion==5){
    programa5();
}if(seleccion==6){
    programa6();
}if(seleccion>6){
    alert("eligue del 1 al 6 ")
}

}

        //  PROGRAMA 1
        function Programa1(){
        let nombre =prompt("ingrese su nombre")
        document.write("ESTE ES EL PROGRAMA 1 CONCATENACION"+ "<br/>")
        document.write("Tu nombre es: " + nombre + "<br/>" )
        }
        //  PROGRAMA 2
        function Programa2(){
        let num1 =parseInt(prompt("ingrese un valor"))
        let num2 =parseInt(prompt("ingrese un valor"))
        let suma = num1 + num2;
        document.write("ESTE ES EL PROGRAMA 2: SUMA DE DOS NUMEROS "+ "<br/>")
        document.write("La suma de los numeros es: " + suma + "<br/>")
        }

       
        //  PROGRAMA 3
        function programa3(){
        document.write("ESTE ES EL PROGRAMA 3: COMPUERTA AND"+ "<br/>");
        document.write("INGRESA UN 1 SI ES VERDAD Y UN 0 SI NO ES VERDAD"+ "<br/>");
        let num1 = parseInt(prompt("¿hoy comiste? ingresa 1 o 0 "))
        
        let num2 = parseInt(prompt("¿tienes hambre? ingresa 1 o 0 "))
        
        if(num1==1&&num2==1){
            document.write("No es necesario que comas" + "<br/>");
        }else
            document.writeln("Debes de comer algo" + "<br/>");
        }
        
        // PROGRAMA 4
        function programa4(){
        document.write("ESTE ES EL PROGRAMA 4: COMPUERTA OR"+ "<br/>");
        document.write("INGRESA UN 1 SI ES VERDAD Y UN 0 SI NO ES VERDAD"+ "<br/>");
        let num1 = parseInt(prompt("¿Hiciste tu tarea? ingresa 1 o 0 "))
        let num2 = parseInt(prompt("¿Paaaste el examen? ingresa 1 o 0 "))
        if(num1==1||num2==1){
            document.write("O HACES TUS TAREAS O REPITES EL EXAMEN PARA PASAR"+ "<br/>");
        }else
        document.write("YA REPROBASTE, NI LO INTENTES"+ "<br/>");
        }
       
        // PROGRAMA 5
        function programa5(){
        document.write("ESTE ES EL PROGRAMA 5: COMPUERTA NOT "+ "<br/>");
        document.write("INGRESA UN 1 SI ES VERDAD Y UN 0 SI NO ES VERDAD"+ "<br/>");
        let num1 = parseInt(prompt("¿Te bañaste hoy? ingresa 1 o 0 "))
        if (!num1==1) {
        document.write("ERES UN COCHINO, BAÑATE!"+ "<br/>");
        } else
        document.write("Esta bien, no eres un cochino "+ "<br/>");
        }
         
        // PROGRAMA 6
        function programa6(){
        document.write("ESTE ES EL PROGRAMA 6: INGRESAR NUMERO ENTRE 1 Y 10"+ "<br/>");
        let num1 = parseInt(prompt("Ingresa un numero entre el 1 y el 10"))
        if(num1>=1&&num1<=10){
        document.write("EXCELENTE, TU NUMERO ESTÁ ENTRE 1 Y 10 "+ "<br/>");
        } else
        document.write("DIJE ENTRE 1 Y 10, BABAS >:c"+ "<br/>");
        }
       