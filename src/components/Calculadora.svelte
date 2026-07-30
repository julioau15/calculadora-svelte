<script>
    import CalculadoraModel from '../model/calculadoraModel.js'
    import Botao from "./botao.svelte";
    import Linha from "./linha.svelte";
    import Tela from "./tela.svelte";

    let calc = new CalculadoraModel()

    let obj = {
        valor: '0',
        include(numero) {
            return {
                valor: this.valor = `${this.valor + numero}`,
                include: this.include
            }
        }
    }

    const numeroDigitado = (numero) => {
        obj = obj.include(numero)
    }

    const limparTela = () => {
        obj.valor = '0'
    }

</script>
<div class="calculadora">
    <Tela valor = {calc.valor}/>

    <Linha>
        <Botao texto="AC" destaque triplo onClick={limparTela}/>
        <Botao texto="/" operacao/>
    </Linha>
    <Linha>
        <Botao texto="7" onClick={numeroDigitado}/>
        <Botao texto="8" onClick={numeroDigitado}/>
        <Botao texto="9" onClick={numeroDigitado}/>
        <Botao texto="*" operacao onClick={numeroDigitado}/>
    </Linha>
    <Linha>
        <Botao texto="4" onClick={numeroDigitado}/>
        <Botao texto="5" onClick={numeroDigitado}/>
        <Botao texto="6" onClick={numeroDigitado}/>
        <Botao texto="+" operacao onClick={numeroDigitado}/>
    </Linha>
    <Linha>
        <Botao texto="1" onClick={numeroDigitado}/>
        <Botao texto="2" onClick={numeroDigitado}/>
        <Botao texto="3" onClick={numeroDigitado}/>
        <Botao texto="-" operacao onClick={numeroDigitado}/>
    </Linha>
    <Linha>
        <Botao texto="0" duplo onClick={numeroDigitado}/>
        <Botao texto="." onClick={numeroDigitado}/>
        <Botao texto="=" destaque/>
    </Linha>

   
</div>

<style>
    .calculadora {
        height: 220px;
        width: 150px;
        display: flex;
        padding: 10px;
        border-radius: 10px;
        flex-direction: column;
        background-color: var(--cor-fundo);
    }
</style>