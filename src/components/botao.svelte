<script>
    export let texto = ''
    export let triplo = false
    export let duplo = false
    export let operacao = false
    export let destaque = false
    export let onClick = () => {

    }
</script>

<button class="botao"
    on:click={() => onClick(texto)}
    class:triplo={triplo} class:duplo={duplo} class:operacao={operacao} class:destaque={destaque}>
    {texto}

</button>

<style>
    .botao {
       flex-basis: 25%;
       margin: 0;
       border: 1px solid var(--cor-fundo);
    }

    .triplo{
        flex-basis: 75%;
    }

    .duplo{
        flex-basis: 50%;
    }

    .operacao{
        background-color: orange;
        color: white;
    }

    .destaque{
        background-color: red;
        color: white;
    }
</style>