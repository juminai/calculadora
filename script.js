const numeros = document.querySelectorAll('.numero')
const operacoes = document.querySelectorAll('.operacao')
const apagarTecla = document.querySelector('.apagar')
const calcularTecla = document.querySelector('.calcular')
const campoCalculo = document.querySelector('.campo__calculo')
const historico = document.querySelector('.historico')
const plusMinusBtn = document.querySelector('.plus-minus')
const percentBtn = document.querySelector('.percent')

numeros.forEach(tecla => {
    tecla.addEventListener('click', () => {
        campoCalculo.value += tecla.textContent
    })
})

operacoes.forEach(operacao => {
    operacao.addEventListener('click', () => {
        campoCalculo.value += operacao.textContent
    })
})

plusMinusBtn.addEventListener('click', () => {
    campoCalculo.value = -parseFloat(campoCalculo.value)
})

percentBtn.addEventListener('click', () => {
    let currentValue = campoCalculo.value;
    let lastNumberMatch = currentValue.match(/(\d+\.?\d*)$/);

    if (lastNumberMatch) {
        let lastNumber = lastNumberMatch[0];
        let percentageValue = parseFloat(lastNumber) / 100;
        campoCalculo.value = currentValue.slice(0, -lastNumber.length) + percentageValue;
    }
})

calcularTecla.addEventListener('click', () => {

    let resultado = eval(campoCalculo.value)

    const contaAnterior = document.createElement('p')
    contaAnterior.classList.add('anterior')

    contaAnterior.textContent = campoCalculo.value

    let old = document.querySelector('.anterior')

    if (old) {
        historico.replaceChild(contaAnterior, old)
    } else {
        historico.appendChild(contaAnterior)
    }

    campoCalculo.value = parseFloat(resultado.toFixed(4))
})

apagarTecla.addEventListener('click', () => {
    campoCalculo.value = ''
    historico.innerHTML = ''
})