function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (anoNasc.value.length === 0 || Number(anoNasc.value) > anoAtual) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }
    else {
        var idade = anoAtual - Number(anoNasc.value)
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/boy.jpg')
            }
            else if (idade >= 12 && idade < 21) {
                img.setAttribute('src', 'imagens/male-teenager.jpg')
            }
            else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'imagens/male-adult.jpg')
            }
            else {
                img.setAttribute('src', 'imagens/oldman.jpg')
            }
        }
        else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/girl.jpg')
            }
            else if (idade >= 12 && idade < 21) {
                img.setAttribute('src', 'imagens/female-teenager.jpg')
            }
            else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'imagens/female-adult.jpg')
            }
            else {
                img.setAttribute('src', 'imagens/oldwoman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    }

}