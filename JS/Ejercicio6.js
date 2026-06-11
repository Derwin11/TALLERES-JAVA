let saldo = 1000000;
let retiro =0; 


if (retiro > saldo)
{
    console.log("saldo insuficiente");

}else if(retiro <= 0){
    console.log("Monto invalido");

}else if(retiro < saldo){
    console.log("Retiro concretado")

}else if(retiro % 10000 == 0){
     console.log("si es multiplo");
}