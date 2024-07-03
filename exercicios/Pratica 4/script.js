function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        res.innerHTML = '<p>Impossivel contar! Faltam dados.</p>'
    else {
        res.innerHTML = '<p>Contando:</p>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if (i < f) {
            for(var j = i; j <= f; j += p) {
                res.innerHTML += ` ${j}  \u{1F449}`
            }
        }
        else {
            for(var j = i; j >= f; j -= p) {
                res.innerHTML += ` ${j}  \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}