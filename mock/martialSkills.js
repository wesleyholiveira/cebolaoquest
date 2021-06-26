export default [
    {
        name: 'Zweihander',
        merits: 2,
        effect: `Um dos estilos de luta mais conhecidos e mais vistos em lendas e contos;
        o guerreiro irá segurar sua arma nas duas mãos para que ele possa colocar muito mais peso e inércia em seus movimentos, ampliando maior foco até em seus movimentos defensivos.<br />
        Naturalmente, adotar esse estilo de combate significa que você só poderá equipar um <strong>único</strong> armamento; ambas suas mãos irão firmemente segurar sua arma.<br />
        Suas <i>"Manobras Ofensivas"</i> tem os valores de <strong>rolagens dobradas</strong>, e suas <i>Manobras Evasivas: "Aparar'</i> também tem todos os valores das rolagens <strong>dobradas</strong>.<br /><br />

        <strong>Você pode usar a <i>Manobra Evasiva: "Aparar"</i> duas vezes na mesma rodada.</strong>
        `
    },
    {
        name: 'Ambidestria',
        merits: 2,
        effect: `Esse estilo de combate consiste em lutar usando uma arma em cada uma das mãos, criando um vendaval de golpes para acertar o adversário várias vezes em um único fôlego.<br />
        Você pode equipar <strong>dois</strong> Fantasmas Nobres do tipo: <strong>"Armamento Lendário"</strong> que sejam considerados armas, ou seja, excluindo <i>escudos</i>.<br /> 
        Cada um deles mantém todos os seus efeitos e habilidades de valor. Você pode executar um ataque normal com cada um deles durante o seu turno; <strong>mas atenção!<br />
        Apenas ataques normais podem ser usados em sequência, usar outros tipos de <i>"Manobras Ofensivas"</i> irão consumir sua ação por completo.</strong>`
    },
    {
        name: 'Artes Marciais',
        merits: 2,
        effect: `Seus punhos são seus Fantasmas Nobres. 
        Você treinou e aperfeiçoou sua técnica de luta ao ponto que sua lenda é exaltada pela 
        sua estrita técnica marcial, que é imbatível e dispensa qualquer arma.<br />
        Seus chutes e socos são tão poderosos quanto o disparo de uma arma ou o corte de uma lâmina.<br /><br /> 
        
        Como esse estilo implica, você não pode usar ele acompanhado de um "Armamento Lendário". 
        Você <strong>DEVE</strong> manter sempre as mãos <strong>desocupadas</strong>, 
        caso contrário, qualquer benefício que esse estilo lhe dê, é retirado.<br /><br />
        
        No lugar de atacar normalmente, você pode escolher entre usar 
        duas manobras grátis: <strong>"Combo"</strong> ou <strong>"Finalizador"</strong>.<br />   
        Quando escolher usar um combo, você pode atacar um adversário com um ataque normal, 
        somando os <strong>Valores Iniciais</strong> dos seus Parâmetros <strong>Força + Agilidade</strong>, 
        a rolagem também deve levar em consideração os Ranks desses dois Parâmetros. 
        Você pode atacar esse inimigo mais uma vez, mas deve <strong>reduzir</strong> o Valor Inicial em <strong>5 (cinco)</strong>; 
        você pode continuar a atacar esse inimigo até ele conseguir zerar o dano que ele receberia desse ataque.<br /><br />
        
        Se optar por <strong>"Finalizador"</strong>, o Valor Inicial é de <strong>Força + Resiliência</strong>, 
        e a rolagem também deve levar em consideração os Ranks desses dois Parâmetros. 
        <strong>Dobre</strong> o valor dos dados que rolar. 
        Se essa manobra é usada como o primeiro golpe contra um novo alvo, 
        ou quando é usada após você executar uma <i>Manobra de Movimento</i>, 
        o inimigo não pode rolar nenhuma <i>Manobra Evasiva</i>.<br /><br />
        
        <i>Você pode parar um Combo que esteja usando, com um Finalizador</i>.    
        `
    },
    {
        name: 'Duelista',
        merits: 2,
        effect: `Esse é um estilo de luta balanceado geralmente praticado por duelistas.<br />
        Ele se foca em utilizar apenas <strong>UMA</strong> arma, geralmente uma espada, 
        enquanto uma das mãos se mantém livre, para balancear a postura e garantir maior agilidade.<br />
        Como a descrição implica, usar essa <i>Habilidade Marcial</i> significa que você não pode equipar 
        <strong>nenhum</strong> Fantasma Nobre em uma das suas mãos, <strong>incluindo</strong> escudos.<br /><br />

        <i>Suas Manobras Evasivas: "Aparar" e "Esquivar"</i> ganham um <strong>bônus de +10</strong>.<br />
        Você pode usar ambas essas <strong>Manobras</strong> indefinidamente.<br />
        Se caso reduzir o dano de um ataque do inimigo a <strong>0 (zero)</strong> com uma Manobra Evasiva: "Esquivar"/"Aparar", 
        você pode contra-atacar esse inimigo com um ataque normal</i>.<br />
        `
    }
].sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }

    return -1;
})