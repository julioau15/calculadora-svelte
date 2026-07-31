const NAO_LIMPAR_TELA = false
const LIMPAR_TELA = true

export default class CalculadoraModel {
    #valor = String
    #acumulador = Number
    #limparTela = Boolean
    #operacao = String

    constructor(valor = null, acumulador = null, operacao = null, limparTela = false){
        this.#valor = valor
        this.#acumulador = acumulador
        this.#operacao = operacao
        this.#limparTela = limparTela

    }

    get valor() {
        return this.#valor?.replace('.', ',') || '0'
    }

    get acumulador() {
        return this.#acumulador
    }

    get operacao() {
        return this.#operacao
    }

    get limparTela() {
        return this.#limparTela
    }

    numeroDigitado(novoValor){
        return new CalculadoraModel(
            (this.#limparTela || !this.#valor) ? novoValor : this.#valor + novoValor,
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA
        )
    }

    pontoDigitado(){
        return new CalculadoraModel(
            this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
            this.#acumulador,
            this.#operacao,
            NAO_LIMPAR_TELA
        )
    }

    limpar () {
        return new CalculadoraModel()
    }

    operacaoDigitada (proximaOperacao) {
        return this.calcular(proximaOperacao)
    }

    calcular (proximaOperacao = null) {
        const acumulador = !this.#operacao
            ? parseFloat(this.#valor)
            : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)
        
        const valor = this.#operacao ?  `${acumulador}` : this.#valor

        return new CalculadoraModel (
            valor,
            acumulador,
            proximaOperacao,
            proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA
        )
    }

}