function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length === 0)
        res.innerHTML = 'Impossivel contar!'
    else
        if (passo.value == 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            passo = 1
        }

}