<script>
    export let valor = 0

    $: tamanhoFonte =  valor.length > 20 ? 'pequena' : `s-${valor.length}`
</script>

<div class={`tela ${tamanhoFonte}`}>
    <span>{valor}</span>
</div>

<style>
    .tela{
        background-color: black;
        color: white;
        font-size: 1.4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
        overflow-x: hidden;
    }

    .pequena{
        font-size: 0.60rem;
    }

    .s-10{font-size: 1.4rem;}
    .s-11{font-size: 1.3rem;}
    .s-12{font-size: 1.2rem;}
    .s-13{font-size: 1.1rem;}
    .s-14{font-size: 1rem;}
    .s-15{font-size: 0.95rem;}
    .s-16{font-size: 0.85rem;}
    .s-17{font-size: 0.80rem;}
    .s-18{font-size: 0.72rem;}
    .s-19{font-size: 0.70rem;}
    .s-20{font-size: 0.68rem;}

</style>