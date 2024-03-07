idade = 18
cnh = true
autorizaçao = true

if (idade >= 18 && cnh == true && autorizaçao == true){
    console.log('pode dirigir e entrar em propriedade privada')
}
else if (idade < 18 && cnh == false && autorizaçao == true){
    console.log('nao pode dirigir e pode entrar em propriedade privada')
}
else if (idade >= 18 && cnh == true && autorizaçao == false){
    console.log('pode dirigir e nao pode entrar em propriedade privada')
}

else{
    console.log('nao pode dirigir e nem entrar em propriedade privada')
}