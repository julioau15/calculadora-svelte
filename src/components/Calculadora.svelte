<script>
    import CalculadoraModel from '../model/calculadoraModel.js'
    import Botao from "./botao.svelte";
    import Linha from "./linha.svelte";
    import Tela from "./tela.svelte";

    let calc = new CalculadoraModel()

    const numeroDigitado = num => calc = calc.numeroDigitado(num)
    const operacaoDigitada = (proximaOperacao) => calc = calc.operacaoDigitada(proximaOperacao)
    const pontoDigitado = () => calc = calc.pontoDigitado()
    const limpar = () => calc = calc.limpar()
    const calcular = () => calc = calc.calcular()

</script>
<div class="calculadora">
    <Tela valor = {calc.valor}/>

    <Linha>
        <Botao texto="AC" destaque triplo onClick={limpar}/>
        <Botao texto="/" operacao onClick={operacaoDigitada}   />
    </Linha>
    <Linha>
        <Botao texto="7" onClick={numeroDigitado}/>
        <Botao texto="8" onClick={numeroDigitado}/>
        <Botao texto="9" onClick={numeroDigitado}/>
        <Botao texto="*" operacao onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao texto="4" onClick={numeroDigitado}/>
        <Botao texto="5" onClick={numeroDigitado}/>
        <Botao texto="6" onClick={numeroDigitado}/>
        <Botao texto="+" operacao onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao texto="1" onClick={numeroDigitado}/>
        <Botao texto="2" onClick={numeroDigitado}/>
        <Botao texto="3" onClick={numeroDigitado}/>
        <Botao texto="-" operacao onClick={operacaoDigitada}/>
    </Linha>
    <Linha>
        <Botao texto="0" duplo onClick={numeroDigitado}/>
        <Botao texto="." onClick={pontoDigitado}/>
        <Botao texto="=" destaque onClick={calcular}/>
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