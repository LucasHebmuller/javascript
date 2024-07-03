function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        res.innerHTML = '<p>Impossivel contar! Faltam dados.</p>'
    else {
        res.innerHTML = '<p>Contando:</p>'

        if (Number(passo.value) <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            passo = 1
        }

        if (Number(inicio.value) < Number(fim.value)) {
            for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
                res.innerHTML += ` ${i}  \u{1F449}`
            }
        }
        else if (Number(inicio.value) > Number(fim.value)) {
            for(var i = Number(fim.value); i <= Number(inicio.value); i -= Number(passo.value)) {
                res.innerHTML += ` ${i}  \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}