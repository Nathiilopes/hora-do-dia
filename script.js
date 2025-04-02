function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imgs')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    


    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora <12){
        //bom dia 
        img.src = 'imagens/pexels-pixabay-355872.jpg'
        document.body.style.background = '#fdc266'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/pexels-iriser-977304.jpg'
        document.body.style.background = '#cf7e5f'
    } else {
        //boa noite
        img.src = 'imagens/pexels-alex-montes-892479-1820563.jpg'
        document.body.style.background = '#202f37'
    }
}

