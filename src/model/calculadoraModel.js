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
            false
        )
    }

}