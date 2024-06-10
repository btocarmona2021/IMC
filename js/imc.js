const peso = document.querySelector('#peso')
const pesomed = document.querySelector('#peso-med')
const altura = document.querySelector('#altura')
const alturamed = document.querySelector('#altura-med')
const contenedor = document.querySelector('.contenedor')
const detalles = document.querySelector('#resultado')
const estados = document.querySelectorAll('P')


document.addEventListener('DOMContentLoaded', () => {
    alturamed.innerText = altura.value
    pesomed.innerText = peso.value
    document.querySelector('#resultado').textContent = calculo(calcularimc())
})

contenedor.addEventListener('input', (ev) => {
    if (ev.target.closest('#altura')) {
        ev.target.addEventListener(`input`, () => {
            alturamed.innerText = altura.value
            const resultado = calcularimc()
            document.querySelector('#resultado').textContent = calculo(resultado)
        })
    }
    if (ev.target.closest('#peso')) {
        ev.target.addEventListener('input', () => {
            pesomed.innerText = peso.value
            const resultado = calcularimc()
            document.querySelector('#resultado').textContent = calculo(resultado)
        })
    }
    if (ev.target.closest('#calcular')) {

    }
})

function calcularimc() {
    const resultado = (parseInt(pesomed.innerText) / (Math.pow(parseInt(alturamed.innerText) / 100, 2))).toFixed(1)
    return resultado
}

function calculo(resultado) {
    if (resultado < 18) {
        cambiaClase('.bajopeso', 'darkblue')
        return `IMC :${resultado} Bajo Peso`
    } else if (resultado >= 18 && resultado <= 24) {
        cambiaClase('.pesonormal', 'darkgreen')
        return `IMC :${resultado} Peso normal`
    } else if (resultado > 24 && resultado <= 29) {
        cambiaClase('.sobrepeso', 'darkorange')
        return `IMC :${resultado} Padece sobrepeso `
    } else if (resultado > 29 && resultado <= 35) {
        cambiaClase('.obesidad', 'darkred')
        return `IMC :${resultado} Padece Obesidad `
    } else if (resultado > 35 && resultado <= 40) {
        cambiaClase('.severa', 'darkred')
        return `IMC :${resultado} Padece Obesidad Severa `
    } else if (resultado >= 40) {
        cambiaClase('.morbida', 'darkred')
        return `IMC :${resultado} Padece Obesidad morbida`
    }
}

const cambiaClase = (clase, color) => {
    estados.forEach(estado => {
        if (estado.classList.contains('active')) {
            estado.classList.remove('active')
        }
    })
    document.documentElement.style.setProperty('--color', color)
    detalles.style.backgroundColor = 'var(--color)'
    document.querySelector(clase).classList.add('active')
  
    
}