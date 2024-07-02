function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/morning.jpg'
        document.body.style.background = '#87CCFA'
    }
    else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/afternoon.jpg'
        document.body.style.background = '#FDAD5D'
    }
    else {
        img.src = 'imagens/night.jpg'
        document.body.style.background = '#214456'
    }
}
