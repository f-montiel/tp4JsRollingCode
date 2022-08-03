let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(cantidadAIngresas){
        this.saldo += cantidadAIngresas;
    },
    extraer(cantidadAExtraer){
        if(cantidadAExtraer<=this.saldo){
            this.saldo -= cantidadAExtraer
        } else {
            alert("Saldo Insuficiente");
        }
    },
    informar(){
        document.write(`<p>Cuenta del titular: ${this.titular}, tiene un saldo de $${this.saldo}`);
    }
}

do{
    let opcion = parseInt(prompt("Elija 1 para ingresar dinero, elija 2 para extraer dinero, elija 3 para ver su saldo"))
    if(!isNaN(opcion) && opcion > 0 && opcion < 4){
        switch(opcion){
            case 1:
                let cantidadIngresada = parseFloat(prompt("Cantidad a ingresar"));
                cuenta.ingresar(cantidadIngresada);
                cuenta.informar();
                break;
            case 2:
                let cantidadExtraida = parseFloat(prompt("Cantidad a ingresar"));
                if(this.saldo < cantidadExtraida){
                    alert("La Cantidad Ingresada es mayor al saldo disponible")
                    break;
                } else {
                    cuenta.extraer(cantidadExtraida);
                    cuenta.informar();
                    break;
                }
            case 3:
                cuenta.informar();
       }
    } else{
        alert("Ingrese una opcion valida");
    }
}while(confirm("¿Desea continuar operando?"))